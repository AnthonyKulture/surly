"use client";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/layout/Navigation";
import { MAX_MESSAGE_LENGTH } from "@/lib/input-validator";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Footer } from "@/components/layout/Footer";
import { KeywordsCarouselGreen } from "@/components/ui/KeywordsCarousel";
import { useTranslations, useLocale } from 'next-intl';

type Message = {
    role: "user" | "assistant";
    content: string;
};

export default function SurlyAIPage() {
    const t = useTranslations('aiPage');
    const locale = useLocale();

    // Convert translation-based suggested prompts to array
    const SUGGESTED_PROMPTS = [
        t('suggestedPrompts.0'),
        t('suggestedPrompts.1'),
        t('suggestedPrompts.2'),
        t('suggestedPrompts.3'),
        t('suggestedPrompts.4'),
    ];

    const INITIAL_MESSAGE: Message = {
        role: "assistant",
        content: t('chat.initialMessage'),
    };

    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isSourcing, setIsSourcing] = useState(false);
    const [step, setStep] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [isRateLimited, setIsRateLimited] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Removed automatic scrolling to prevent forcing scroll to bottom
    // Users can manually scroll to see new messages if needed

    const handleSend = async () => {
        if (!input.trim()) return;
        if (input.length > MAX_MESSAGE_LENGTH) {
            setError(t('chat.errorMaxLength', { max: MAX_MESSAGE_LENGTH }));
            return;
        }

        setError(null);
        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: input,
                    history: messages, // Send full history for context
                    locale: locale // Pass current locale
                }),
            });

            if (!response.ok) {
                if (response.status === 429) {
                    setIsRateLimited(true);
                    throw new Error(t('chat.errorRateLimit'));
                }
                const data = await response.json();
                throw new Error(data.error || t('chat.errorGeneric'));
            }

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            // Check for Sourcing/Simulation trigger in response
            const sourcingTrigger = t('chat.triggers.sourcing');
            const confirmationTrigger = t('chat.triggers.confirmation');
            // Note: Triggers from backend might still be in French if backend prompt is French-only.
            // Ideally backend should handle language or return codes.
            // For now, these strings match the backend prompt.

            if (data.response.includes(sourcingTrigger) && data.response.includes(confirmationTrigger)) {
                // Split logic: Part 1 (Recap + Sourcing announcement) | Part 2 (Confirmation)
                const parts = data.response.split(confirmationTrigger);
                const part1 = parts[0].trim();
                const part2 = confirmationTrigger + (parts[1] || ""); // Re-add trigger to start of 2nd msg

                // 1. Add Part 1
                setMessages((prev) => [...prev, { role: "assistant", content: part1 }]);
                setIsTyping(false); // Stop standard typing indicator

                // 2. Start Sourcing Animation
                setIsSourcing(true);

                // 3. Wait and Add Part 2
                setTimeout(() => {
                    setIsSourcing(false);
                    setMessages((prev) => [...prev, { role: "assistant", content: part2 }]);
                }, 3000);

                return;
            }

            // Normal flow
            const aiMessage: Message = { role: "assistant", content: data.response };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (error: any) {
            console.error(error);
            setError(error.message || t('chat.errorGeneric'));
            const errorMessage: Message = {
                role: "assistant",
                content: error.message || t('chat.errorFallback')
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            if (!isSourcing) {
                setIsTyping(false);
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handlePromptClick = (prompt: string) => {
        setInput(prompt);
    };

    // Typing effect placeholder - only show before conversation starts
    const [placeholder, setPlaceholder] = useState("");
    const placeholderText = t('chat.placeholder');
    const hasStartedConversation = messages.length > 1;

    useEffect(() => {
        if (hasStartedConversation) {
            setPlaceholder(placeholderText);
            return;
        }

        let i = 0;
        const interval = setInterval(() => {
            setPlaceholder(placeholderText.slice(0, i));
            i++;
            if (i > placeholderText.length) {
                i = 0;
            }
        }, 100);
        return () => clearInterval(interval);
    }, [hasStartedConversation, placeholderText]);

    // Auto-scroll to bottom of chat container
    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isSourcing]);


    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
            <Navigation showAnnouncementBar={false} />

            {/* Hero + Chat Container (Max Width) */}
            <main className="flex-1 pt-24 sm:pt-32 pb-8 sm:pb-12 max-w-4xl mx-auto w-full px-3 sm:px-4">

                {/* Title & Subtitle - Hero Style */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight px-2">
                        {t('hero.title')}
                        <span className="text-primary block mt-1">{t('hero.titleHighlight')}</span>
                    </h1>
                    <h2 className="text-base sm:text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto font-normal leading-relaxed px-2">
                        {t.rich('hero.subtitle', {
                            strong: (chunks) => <strong className="text-foreground font-semibold">{chunks}</strong>
                        })}
                    </h2>
                </div>



                {/* Framed Chat Container */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-accent/20 overflow-hidden min-h-[300px] sm:min-h-[300px] flex flex-col mb-6 sm:mb-8 relative ring-1 ring-accent/10">

                    {/* Chat Area */}
                    <div
                        ref={chatContainerRef}
                        className="flex-1 p-3 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto max-h-[350px] sm:max-h-[400px]"
                    >
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "flex items-start gap-2 sm:gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300",
                                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                                )}
                            >
                                {/* Avatar */}
                                <div
                                    className={cn(
                                        "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 text-[10px] sm:text-xs font-bold",
                                        msg.role === "assistant"
                                            ? "bg-primary text-white"
                                            : "bg-gray-100 text-gray-600"
                                    )}
                                >
                                    {msg.role === "assistant" ? "AI" : "👤"}
                                </div>

                                {/* Message Bubble */}
                                <div
                                    className={cn(
                                        "p-3 sm:p-4 rounded-xl sm:rounded-2xl max-w-[85%] sm:max-w-[80%] text-sm sm:text-[15px] leading-relaxed",
                                        msg.role === "assistant"
                                            ? "bg-gray-50 text-gray-800 rounded-tl-none border border-gray-100"
                                            : "bg-primary text-white rounded-tr-none shadow-sm"
                                    )}
                                >
                                    {msg.role === "assistant" ? (
                                        <div className="prose prose-sm max-w-none text-gray-800 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>p]:mb-2 last:[&>p]:mb-0">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {msg.content}
                                            </ReactMarkdown>
                                        </div>
                                    ) : (
                                        msg.content
                                    )}
                                </div>
                            </div>
                        ))}

                        {isSourcing && (
                            <div className="flex items-start gap-2 sm:gap-3 animate-in fade-in slide-in-from-bottom-2">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-[10px] sm:text-xs font-bold">AI</div>
                                <div className="bg-gray-50 border border-gray-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-tl-none flex items-center gap-3 h-[48px] sm:h-[52px]">
                                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-sm text-gray-600 font-medium animate-pulse">{t('chat.sourcing')}</span>
                                </div>
                            </div>
                        )}

                        {isTyping && (
                            <div className="flex items-start gap-2 sm:gap-3 animate-in fade-in slide-in-from-bottom-2">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-[10px] sm:text-xs font-bold">AI</div>
                                <div className="bg-gray-50 border border-gray-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-tl-none flex items-center gap-1.5 h-[48px] sm:h-[52px]">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area inside the frame */}
                    <div className="p-3 sm:p-4 bg-white border-t border-gray-100">
                        <div className="relative">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={placeholder}
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl pl-3 sm:pl-4 pr-12 sm:pr-16 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none min-h-[56px] sm:min-h-[60px] text-sm sm:text-[15px]"
                                rows={1}
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim() || isTyping}
                                className={cn(
                                    "absolute right-2 sm:right-3 bottom-2 sm:bottom-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all flex items-center justify-center",
                                    input.trim() && !isTyping
                                        ? "bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg hover:scale-105"
                                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                )}
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 px-1 gap-1 sm:gap-0">
                            <div className="flex-1">
                                {error && (
                                    <p className="text-[11px] text-red-500 font-medium">{error}</p>
                                )}
                                {!error && (
                                    <p className="text-[10px] text-gray-400 italic hidden sm:block">
                                        {t('chat.disclaimer')} <a href="/charte-donnees" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors not-italic ml-1">{t('chat.learnMore')}</a>
                                    </p>
                                )}
                            </div>
                            <p className={cn(
                                "text-[10px] font-medium sm:ml-2",
                                input.length > MAX_MESSAGE_LENGTH * 0.9
                                    ? "text-red-500"
                                    : input.length > MAX_MESSAGE_LENGTH * 0.7
                                        ? "text-orange-500"
                                        : "text-gray-400"
                            )}>
                                {input.length}/{MAX_MESSAGE_LENGTH}
                            </p>
                        </div>
                    </div>
                </div>


                {/* Suggested Prompts List - Below Container */}
                {step === 0 && (
                    <div className="max-w-3xl mx-auto space-y-2 sm:space-y-3 px-1 sm:px-2">
                        <p className="text-xs sm:text-sm font-medium text-gray-500 mb-3 sm:mb-4 pl-2">{t('chat.suggestedTitle')}</p>
                        {SUGGESTED_PROMPTS.map((prompt, i) => (
                            <button
                                key={i}
                                onClick={() => handlePromptClick(prompt)}
                                className="w-full text-left p-3 sm:p-4 bg-accent/10 hover:bg-accent/15 border border-accent/30 hover:border-accent/50 rounded-lg sm:rounded-xl transition-all duration-200 group flex items-center justify-between shadow-sm hover:shadow-md"
                            >
                                <span className="text-sm sm:text-base text-gray-700 group-hover:text-primary transition-colors pr-2">{prompt}</span>
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary group-hover:bg-primary-dark flex items-center justify-center transition-colors shrink-0">
                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent group-hover:text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </main>

            {/* SEO SECTIONS BELOW - Full Width */}

            {/* Expertises Section - Green Variant */}
            <section className="relative py-16 sm:py-20 lg:py-28 bg-primary">
                <div className="container">
                    {/* Header with white text for green background */}
                    <div className="text-center mb-8 sm:mb-12">
                        <Reveal delay={0} duration={600}>
                            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5 sm:mb-6 shadow-lg">
                                <span className="text-xs sm:text-sm font-medium text-white">
                                    {t('expertises.tag')}
                                </span>
                            </div>
                        </Reveal>
                        <Reveal delay={100} duration={800}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center tracking-tight leading-tight">
                                {t.rich('expertises.title', {
                                    span: (chunks) => <span className="text-accent">{chunks}</span>,
                                    accent: (chunks) => <span className="text-accent">{chunks}</span>,
                                    br: () => <br />
                                })}
                            </h2>
                        </Reveal>
                    </div>

                    <Reveal delay={100} duration={1000}>
                        <p className="text-base sm:text-lg text-white/90 text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
                            {t('expertises.description')}
                        </p>
                    </Reveal>

                    {/* Keywords Carousel - Green Variant */}
                    <KeywordsCarouselGreen />

                    <Reveal delay={500} duration={800}>
                        <div className="text-center bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/20 shadow-lg">
                            <p className="text-xs sm:text-sm text-white leading-relaxed">
                                {t.rich('expertises.stats', {
                                    strong: (chunks) => <strong className="text-white font-bold">{chunks}</strong>
                                })}
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Benefits Section - Harmonized with Homepage */}
            <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container">
                    <SectionHeader
                        tag={t('benefits.tag')}
                        title={
                            <>
                                {t.rich('benefits.title', {
                                    span: (chunks) => <span className="text-primary">{chunks}</span>,
                                    accent: (chunks) => <span className="text-accent">{chunks}</span>,
                                    br: () => <br />
                                })}
                            </>
                        }
                        centered
                    />

                    <Reveal delay={100} duration={800}>
                        <p className="text-base sm:text-lg text-foreground-muted text-center max-w-2xl mx-auto mb-12 sm:mb-14 leading-relaxed">
                            {t.rich('benefits.subtitle', {
                                strong: (chunks) => <strong className="text-foreground">{chunks}</strong>
                            })}
                        </p>
                    </Reveal>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                        {[0, 1, 2, 3].map((i) => (
                            <Reveal key={i} delay={i * 80} duration={600}>
                                <div className="group relative p-6 rounded-xl bg-white border border-gray-100 h-full flex flex-col hover:border-primary/20 hover:shadow-md transition-all duration-300">

                                    {/* Number */}
                                    <span className="text-[10px] font-semibold text-primary/60 tracking-wider mb-4">
                                        {t(`benefits.items.${i}.number`)}
                                    </span>

                                    {/* Title */}
                                    <h3 className="font-semibold text-base text-foreground mb-2 leading-snug">
                                        {t(`benefits.items.${i}.title`)}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-foreground-muted leading-relaxed mb-5 flex-grow">
                                        {t(`benefits.items.${i}.desc`)}
                                    </p>

                                    {/* Stat */}
                                    <div className="pt-4 border-t border-gray-50">
                                        <span className="text-lg font-bold text-primary">
                                            {t(`benefits.items.${i}.stat`)}
                                        </span>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Types Section - Rich Content */}
            <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="container">
                    <SectionHeader
                        tag={t('missions.tag')}
                        title={
                            <>
                                {t.rich('missions.title', {
                                    span: (chunks) => <span className="text-primary">{chunks}</span>,
                                    accent: (chunks) => <span className="text-accent">{chunks}</span>,
                                    br: () => <br />
                                })}
                            </>
                        } centered
                    />

                    <Reveal delay={100} duration={1000}>
                        <p className="text-base sm:text-lg text-foreground-muted text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
                            {t('missions.subtitle')}
                        </p>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        {[0, 1, 2, 3].map((i) => (
                            <Reveal key={i} delay={200 + (i * 100)} duration={800}>
                                <div className="bg-white border-l-4 border-primary p-6 rounded-lg shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                                    <h3 className="font-bold text-lg text-foreground mb-3 leading-tight">{t(`missions.items.${i}.title`)}</h3>
                                    <p className="text-sm text-foreground-muted leading-relaxed mb-4 flex-grow">{t(`missions.items.${i}.desc`)}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {[0, 1, 2, 3].map((j) => (
                                            <span key={j} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                                {t(`missions.items.${i}.keywords.${j}`)}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        ))}

                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative py-20 bg-primary text-white">
                <div className="container text-center">
                    <Reveal delay={0} duration={800}>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                            {t('finalCTA.title')}
                        </h2>
                        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                            {t('finalCTA.description')}
                        </p>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L14.8 8.2L21 11L14.8 13.8L12 20L9.2 13.8L3 11L9.2 8.2L12 2Z" />
                            </svg>
                            {t('finalCTA.button')}
                        </button>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </div>
    );
}
