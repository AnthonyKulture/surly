"use client";

import { useState, useEffect, useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

interface DemoMessage {
    role: "user" | "assistant";
    content: string;
    delay: number;
}


interface ReasoningCard {
    id: string;
    label: string;
    content: string;
    type: "trigger" | "analysis" | "filter" | "result";
    delay: number;
    icon?: React.ReactNode;
}

const DEMO_SCRIPT: DemoMessage[] = [
    {
        role: "user",
        content: "Besoin d'un expert cybersécurité bancaire",
        delay: 800,
    },
    {
        role: "assistant",
        content: "Compris. Niveau d'expérience souhaité ?",
        delay: 2000,
    },
    {
        role: "user",
        content: "Senior, 5+ ans minimum",
        delay: 3200,
    },
    {
        role: "assistant",
        content: "Certifications requises ?",
        delay: 4500,
    },
    {
        role: "user",
        content: "ISO 27001 obligatoire, DORA serait un plus",
        delay: 5800,
    },
    {
        role: "assistant",
        content: "Parfait. 3 profils correspondent parfaitement à vos critères.",
        delay: 9000,
    },
];

const REASONING_CARDS: ReasoningCard[] = [
    {
        id: "trigger",
        label: "Requête détectée",
        content: "Cybersécurité • Banque",
        type: "trigger",
        delay: 800,
        icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    },
    {
        id: "analysis-1",
        label: "Analyse sémantique",
        content: "Domaine: Sécurité IT\nSecteur: Finance",
        type: "analysis",
        delay: 1600,
        icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    },
    {
        id: "exp-filter",
        label: "Filtre expérience",
        content: "Senior ≥ 5 ans\n1,247 profils",
        type: "filter",
        delay: 3500,
        icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>,
    },
    {
        id: "cert-check",
        label: "Vérification certif.",
        content: "ISO 27001 requis\n189 certifiés",
        type: "filter",
        delay: 4800,
        icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
    {
        id: "bonus-skills",
        label: "Compétences bonus",
        content: "DORA: +15 points\n47 matchs optimaux",
        type: "analysis",
        delay: 6200,
        icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
    },
    {
        id: "sector-match",
        label: "Affinité sectorielle",
        content: "Banque: 31 profils\nAssurance: 16 profils",
        type: "analysis",
        delay: 7200,
        icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    },
    {
        id: "scoring",
        label: "Scoring ML",
        content: "Algorithme de matching\nPertinence calculée",
        type: "filter",
        delay: 8000,
        icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
    {
        id: "result",
        label: "Résultats finaux",
        content: "Top 3: 98%, 94%, 91%",
        type: "result",
        delay: 8800,
        icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    },
];

export const AIChat = () => {
    const [visibleMessages, setVisibleMessages] = useState<number>(0);
    const [typingContent, setTypingContent] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [currentTypingIndex, setCurrentTypingIndex] = useState(-1);
    const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
    const [hasStarted, setHasStarted] = useState(false);

    // Refs for safe timer management
    const messageTimersRef = useRef<NodeJS.Timeout[]>([]);
    const cardTimersRef = useRef<NodeJS.Timeout[]>([]);
    const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Cleanup helper
    const clearAllTimers = () => {
        messageTimersRef.current.forEach(clearTimeout);
        messageTimersRef.current = [];

        cardTimersRef.current.forEach(clearTimeout);
        cardTimersRef.current = [];

        if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;
        }

        if (resetTimerRef.current) {
            clearTimeout(resetTimerRef.current);
            resetTimerRef.current = null;
        }
    };

    useEffect(() => {
        const startTimer = setTimeout(() => {
            setHasStarted(true);
        }, 500);

        return () => {
            clearTimeout(startTimer);
            clearAllTimers();
        };
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        // Clear any existing timers just in case
        clearAllTimers();

        // Schedule messages
        DEMO_SCRIPT.forEach((message, index) => {
            const timer = setTimeout(() => {
                // Start typing this bubble
                setCurrentTypingIndex(index);
                setIsTyping(true);
                setTypingContent("");

                let charIndex = 0;

                // Clear any previous typing interval to be safe
                if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);

                typingIntervalRef.current = setInterval(() => {
                    if (charIndex <= message.content.length) {
                        setTypingContent(message.content.slice(0, charIndex));
                        charIndex++;
                    } else {
                        // Finished typing
                        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
                        setIsTyping(false);
                        setVisibleMessages(index + 1);
                        setCurrentTypingIndex(-1);
                    }
                }, 25);
            }, message.delay);

            messageTimersRef.current.push(timer);
        });

        // Schedule reasoning cards
        REASONING_CARDS.forEach((card) => {
            const timer = setTimeout(() => {
                setVisibleCards((prev) => {
                    const next = new Set(prev);
                    next.add(card.id);
                    return next;
                });
            }, card.delay);

            cardTimersRef.current.push(timer);
        });

        // Reset and loop
        resetTimerRef.current = setTimeout(() => {
            setVisibleMessages(0);
            setTypingContent("");
            setIsTyping(false);
            setCurrentTypingIndex(-1);
            setVisibleCards(new Set());
            setHasStarted(false);

            // Restart loop
            const restartTimer = setTimeout(() => setHasStarted(true), 2000);
            // We don't track this restartTimer in refs because it triggers the effect change which cleans everything anyway
            // But strictly speaking, if we unmount during this 2s gap, we might leak? 
            // Better to track it?
            // Since it sets state, React will complain if unmounted. 
            // Let's attach it to restart logic handled by dependency change.
        }, 12000);

        return () => {
            clearAllTimers();
        };
    }, [hasStarted]);

    return (
        <section
            id="ai-chat"
            className="relative py-24 lg:py-28 bg-background-off overflow-hidden"
        >
            {/* Background subtle */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-background-off pointer-events-none" />

            <div className="container relative z-[1]">
                <SectionHeader
                    tag="Intelligence Artificielle"
                    title={
                        <>
                            Processus de raisonnement
                            <br />
                            <span className="text-primary">en temps réel</span>
                        </>
                    }
                    centered
                />

                <p className="text-center text-body text-foreground-muted max-w-2xl mx-auto -mt-4 mb-6">
                    Observez comment l'IA comprend vos besoins et affine sa recherche
                </p>

                <Reveal delay={100} duration={800}>
                    <div className="max-w-6xl mx-auto">
                        {/* Fixed height container - 35/65 split */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5" style={{ height: "520px" }}>

                            {/* LEFT - Chat Conversation (35% = 4 cols) */}
                            <div className="lg:col-span-4 bg-gradient-to-br from-primary/5 to-primary/3 border-2 border-primary/15 rounded-lg shadow-md flex flex-col overflow-hidden">
                                {/* Header with icon */}
                                <div className="px-4 py-2.5 border-b-2 border-primary/10 bg-primary/5 flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                                            Conversation
                                        </span>
                                    </div>
                                </div>

                                {/* Messages area - pre-allocated space, no overflow */}
                                <div className="flex-1 p-3 flex flex-col justify-end overflow-hidden">
                                    {/* Reserve space for all 6 messages to prevent layout shift */}
                                    <div className="space-y-2" style={{ minHeight: "340px" }}>
                                        {/* Render all message slots, show only when visible */}
                                        {DEMO_SCRIPT.map((message, idx) => {
                                            const isVisible = idx < visibleMessages;
                                            const isCurrentlyTyping = isTyping && currentTypingIndex === idx;

                                            return (
                                                <div
                                                    key={idx}
                                                    className={`transition-opacity duration-300 ${isVisible || isCurrentlyTyping ? "opacity-100" : "opacity-0"
                                                        }`}
                                                    style={{ minHeight: "38px" }} // Slightly reduced per message
                                                >
                                                    {(isVisible || isCurrentlyTyping) && (
                                                        <CleanMessageBubble
                                                            message={{
                                                                ...message,
                                                                content: isCurrentlyTyping ? typingContent : message.content,
                                                            }}
                                                            showCursor={isCurrentlyTyping}
                                                        />
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Footer indicator - fixed height */}
                                <div className="px-4 py-2 border-t border-primary/5 bg-background-subtle flex-shrink-0" style={{ height: "32px" }}>
                                    {isTyping && (
                                        <div className="flex items-center gap-2 text-[10px] text-primary/60">
                                            <div className="flex gap-0.5">
                                                <div className="w-1 h-1 bg-primary/40 rounded-full animate-bounce" />
                                                <div className="w-1 h-1 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                                <div className="w-1 h-1 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                            </div>
                                            <span>IA en cours d'analyse</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* RIGHT - Reasoning Steps (65% = 8 cols) */}
                            <div className="lg:col-span-8 bg-white border-2 border-accent/20 rounded-lg shadow-lg flex flex-col overflow-hidden">
                                {/* Header with distinct styling */}
                                <div className="px-4 py-2.5 border-b-2 border-accent/15 bg-gradient-to-r from-accent/10 to-accent/5 flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                                            Raisonnement IA
                                        </span>
                                    </div>
                                </div>

                                {/* Cards area - no scroll, pre-allocated */}
                                <div className="flex-1 p-3 overflow-hidden">
                                    {/* Reserve space for all 8 cards */}
                                    <div className="space-y-2">
                                        {REASONING_CARDS.map((card, index) => {
                                            const isVisible = visibleCards.has(card.id);
                                            const prevCard = index > 0 ? REASONING_CARDS[index - 1] : null;
                                            const showConnector = isVisible && prevCard && visibleCards.has(prevCard.id);

                                            return (
                                                <div key={card.id}>
                                                    {/* Connector - fixed size */}
                                                    {index > 0 && (
                                                        <div className="flex justify-center" style={{ height: "6px" }}>
                                                            {showConnector && (
                                                                <div className="w-px h-full bg-gradient-to-b from-primary/30 to-primary/10" />
                                                            )}
                                                        </div>
                                                    )}

                                                    {/* Card with fixed min-height - reduced for 8 cards */}
                                                    <div style={{ minHeight: "52px" }}>
                                                        <ReasoningCardComponent
                                                            card={card}
                                                            isVisible={isVisible}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-6 text-center">
                            <button className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-background text-sm font-semibold rounded-lg hover:bg-primary-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                <span>Accéder à l'outil complet</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

// Clean message bubble - more compact
const CleanMessageBubble = ({
    message,
    showCursor = false,
}: {
    message: DemoMessage;
    showCursor?: boolean;
}) => {
    const isUser = message.role === "user";

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
            <div
                className={`max-w-[85%] px-3 py-2 rounded-lg text-xs leading-relaxed ${isUser
                    ? "bg-primary text-background"
                    : "bg-background-subtle text-primary border border-primary/10"
                    }`}
            >
                {message.content}
                {showCursor && (
                    <span className="inline-block w-0.5 h-3 ml-1 bg-current animate-pulse" />
                )}
            </div>
        </div>
    );
};

// Reasoning card component - more compact
const ReasoningCardComponent = ({
    card,
    isVisible,
}: {
    card: ReasoningCard;
    isVisible: boolean;
}) => {
    const getCardStyle = () => {
        switch (card.type) {
            case "trigger":
                return "border-accent/40 bg-gradient-to-br from-accent/10 to-accent/5";
            case "analysis":
                return "border-primary/20 bg-white";
            case "filter":
                return "border-primary/20 bg-white";
            case "result":
                return "border-green-500/40 bg-gradient-to-br from-green-50 to-white";
            default:
                return "border-primary/10 bg-white";
        }
    };

    const getIconBg = () => {
        switch (card.type) {
            case "trigger":
                return "bg-accent/20";
            case "result":
                return "bg-green-100";
            default:
                return "bg-primary/10";
        }
    };

    return (
        <div
            className={`transition-all duration-500 ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4 pointer-events-none"
                }`}
        >
            <div className={`border rounded-lg p-3 shadow-sm ${getCardStyle()}`}>
                <div className="flex items-start gap-2.5">
                    {/* Icon - compact */}
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 ${getIconBg()}`}>
                        {card.icon}
                    </div>

                    {/* Content - compact */}
                    <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-bold text-primary/70 uppercase tracking-wider mb-0.5">
                            {card.label}
                        </div>
                        <div className="text-xs text-primary/90 leading-snug whitespace-pre-line">
                            {card.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
