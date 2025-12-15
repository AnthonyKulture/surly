"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/layout/Navigation";
import { MAX_MESSAGE_LENGTH } from "@/lib/input-validator";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Footer } from "@/components/layout/Footer";

type Message = {
    role: "user" | "assistant";
    content: string;
};

const SUGGESTED_PROMPTS = [
    "Je recherche un expert IFRS 17 pour une mission de 6 mois",
    "Besoin d'un Business Analyst pour une migration de Core Banking",
    "Recherche un Responsable Souscription IARD expérimenté",
    "Expert conformité LCB-FT pour un renfort d'équipe",
    "Un PMO pour un projet de transformation digitale",
];

const INITIAL_MESSAGE: Message = {
    role: "assistant",
    content: "Bonjour ! Je suis l'IA de Surly. Comment puis-je vous aider à trouver l'expert idéal en Banque ou Assurance aujourd'hui ?",
};

export default function SurlyAIPage() {
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [step, setStep] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [isRateLimited, setIsRateLimited] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Removed automatic scrolling to prevent forcing scroll to bottom
    // Users can manually scroll to see new messages if needed

    const handleSend = async () => {
        if (!input.trim()) return;
        if (input.length > MAX_MESSAGE_LENGTH) {
            setError(`Le message ne peut pas dépasser ${MAX_MESSAGE_LENGTH} caractères.`);
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
                }),
            });

            if (!response.ok) {
                if (response.status === 429) {
                    setIsRateLimited(true);
                    throw new Error("Trop de requêtes. Veuillez patienter quelques minutes.");
                }
                const data = await response.json();
                throw new Error(data.error || "Erreur API");
            }

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            const aiMessage: Message = { role: "assistant", content: data.response };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (error: any) {
            console.error(error);
            setError(error.message || "Une erreur est survenue.");
            const errorMessage: Message = {
                role: "assistant",
                content: error.message || "Désolé, je rencontre une difficulté technique. Contactez-nous directement sur contact@surly.fr ou par téléphone."
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
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
    const placeholderText = "Décrivez votre besoin en quelques mots...";
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
    }, [hasStartedConversation]);


    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
            <Navigation showAnnouncementBar={false} />

            {/* Hero + Chat Container (Max Width) */}
            <main className="flex-1 pt-24 sm:pt-32 pb-8 sm:pb-12 max-w-4xl mx-auto w-full px-3 sm:px-4">

                {/* Title & Subtitle - Hero Style */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight px-2">
                        Trouvez votre expert idéal
                        <span className="text-primary block mt-1">en quelques secondes.</span>
                    </h1>
                    <h2 className="text-base sm:text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto font-normal leading-relaxed px-2">
                        Notre IA spécialisée <strong className="text-foreground font-semibold">Banque & Assurance</strong> qualifie votre besoin et vous met en relation avec les meilleurs profils.
                    </h2>
                </div>

                {/* Framed Chat Container */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden min-h-[400px] sm:min-h-[500px] flex flex-col mb-6 sm:mb-8 relative">

                    {/* Chat Area */}
                    <div className="flex-1 p-3 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto max-h-[500px] sm:max-h-[600px]">
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
                                    {msg.content}
                                </div>
                            </div>
                        ))}

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
                                        Surly AI peut faire des erreurs. Vérifiez les informations importantes.
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
                        <p className="text-xs sm:text-sm font-medium text-gray-500 mb-3 sm:mb-4 pl-2">Exemples de recherches :</p>
                        {SUGGESTED_PROMPTS.map((prompt, i) => (
                            <button
                                key={i}
                                onClick={() => handlePromptClick(prompt)}
                                className="w-full text-left p-3 sm:p-4 bg-white hover:bg-gray-50 border border-gray-100 hover:border-primary/20 rounded-lg sm:rounded-xl transition-all duration-200 group flex items-center justify-between shadow-sm hover:shadow-md"
                            >
                                <span className="text-sm sm:text-base text-gray-600 group-hover:text-primary transition-colors pr-2">{prompt}</span>
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-50 group-hover:bg-primary/10 flex items-center justify-center transition-colors shrink-0">
                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </main>

            {/* SEO SECTIONS BELOW - Full Width */}

            {/* Expertises Section - Similar to Market Analysis */}
            <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="container">
                    <SectionHeader
                        tag="Expertise Sectorielle"
                        title={
                            <>
                                Tous les métiers experts de la
                                <br />
                                <span className="text-primary">Banque & Assurance</span>
                            </>
                        }
                        centered
                    />

                    <Reveal delay={100} duration={1000}>
                        <p className="text-base sm:text-lg text-foreground-muted text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
                            De la conformité réglementaire (Bâle III, IFRS 17, LCB-FT) aux transformations digitales,
                            notre plateforme vous connecte aux <strong className="text-foreground">meilleurs profils</strong> spécialisés
                            du secteur bancassurance. Chaque expert possède une expérience significative validée dans son domaine.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
                        {[
                            { skill: "IFRS 17", desc: "Actuaires & Comptables" },
                            { skill: "Bâle III", desc: "Risk Managers" },
                            { skill: "Solvabilité II", desc: "Experts Prudentiels" },
                            { skill: "Business Analyst", desc: "Core Banking & SI" },
                            { skill: "Actuaire", desc: "Pricing & Tarification" },
                            { skill: "Risk Manager", desc: "Crédit, Marché, Opérationnel" },
                            { skill: "Conformité LCB-FT", desc: "KYC & AML" },
                            { skill: "Data Engineering", desc: "Big Data & Analytics" },
                            { skill: "DevOps", desc: "Cloud & Infrastructure" },
                            { skill: "Architecture SI", desc: "Modernisation & API" },
                            { skill: "Product Owner", desc: "Agile & Produit" },
                            { skill: "Pillar 3", desc: "Reporting Réglementaire" }
                        ].map((item, i) => (
                            <Reveal key={i} delay={200 + (i * 30)} duration={600}>
                                <div className="bg-white border border-gray-100 rounded-lg p-2.5 sm:p-3 hover:border-primary/20 hover:shadow-sm transition-all shadow-sm">
                                    <p className="font-bold text-xs sm:text-sm text-foreground mb-0.5 sm:mb-1">{item.skill}</p>
                                    <p className="text-[10px] sm:text-xs text-foreground-muted leading-relaxed">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={500} duration={800}>
                        <div className="text-center bg-white p-4 sm:p-6 rounded-lg border border-gray-100 shadow-sm">
                            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                                <strong className="text-foreground font-semibold">Plus de 3 000 experts</strong> référencés •
                                <strong className="text-foreground font-semibold"> 100% vérifiés</strong> •
                                Disponibles <strong className="text-foreground font-semibold">sous 48h</strong>
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Benefits Section - Similar to Piliers */}
            <section className="relative py-16 sm:py-20 lg:py-28 bg-white">
                <div className="container">
                    <SectionHeader
                        tag="Avantages Plateforme"
                        title={
                            <>
                                Pourquoi Surly est le choix
                                <br />
                                <span className="text-primary">des meilleurs décideurs</span>
                            </>
                        }
                        centered
                    />

                    <Reveal delay={100} duration={1000}>
                        <p className="text-base sm:text-lg text-foreground-muted text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
                            Fini les jobboards généralistes et les CVs hors-sujet. Surly est la seule marketplace
                            <strong className="text-foreground"> ultra-spécialisée Banque & Assurance</strong>,
                            conçue par des experts du secteur pour des besoins pointus.
                        </p>
                    </Reveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            {
                                number: "01",
                                title: "Profils pré-qualifiés",
                                desc: "Tous nos experts justifient d'au moins une expérience significative en Banque ou Assurance. Terminé les profils généralistes qui ne comprennent pas vos enjeux réglementaires.",
                                stat: "100% secteur"
                            },
                            {
                                number: "02",
                                title: "Matching instantané",
                                desc: "Notre intelligence artificielle qualifie votre besoin 24/7 et vous propose les profils pertinents en quelques secondes. Plus besoin d'attendre des jours pour trier des centaines de CVs.",
                                stat: "-80% temps"
                            },
                            {
                                number: "03",
                                title: "Spécialisation exclusive",
                                desc: "Contrairement aux cabinets généralistes, Surly se concentre à 100% sur la Banque et l'Assurance. Nos Talent Managers parlent le même langage technique que vous.",
                                stat: "3000+ experts"
                            },
                            {
                                number: "04",
                                title: "Gain de productivité",
                                desc: "Réduisez drastiquement vos délais de recrutement et concentrez-vous sur l'essentiel : la validation du fit humain. Nos équipes gèrent l'administratif et la qualification technique.",
                                stat: "48h max"
                            }
                        ].map((benefit, i) => (
                            <Reveal key={i} delay={i * 150} duration={800}>
                                <div className="relative p-8 rounded-xl bg-white border-2 border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col">
                                    <div className="absolute top-6 right-6 py-1 px-3 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
                                        {benefit.number}
                                    </div>

                                    <h3 className="font-bold text-lg text-foreground mb-3 mt-6">{benefit.title}</h3>
                                    <p className="text-sm text-foreground-muted leading-relaxed mb-6 flex-grow">{benefit.desc}</p>

                                    <div className="mt-auto p-3 bg-primary/5 rounded-lg text-center">
                                        <span className="text-lg font-bold text-primary">{benefit.stat}</span>
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
                        tag="Types de Missions"
                        title={
                            <>
                                Tous vos projets stratégiques
                                <br />
                                <span className="text-primary">couverts par nos experts</span>
                            </>
                        }
                        centered
                    />

                    <Reveal delay={100} duration={1000}>
                        <p className="text-base sm:text-lg text-foreground-muted text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
                            Que vous soyez une banque de réseau, une compagnie d'assurance, une mutuelle ou un leader de la fintech,
                            Surly couvre l'ensemble de vos besoins en expertise pointue pour vos projets de transformation et de conformité.
                        </p>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        {[
                            {
                                title: "Transformation Digitale & Modernisation SI",
                                desc: "Accompagnez vos projets de migration vers le Cloud, vos refontes de Core Banking System, ou vos développements d'API Banking. Nos Business Analysts, Architectes SI, et Product Owners maîtrisent les enjeux techniques et métiers de votre transformation.",
                                keywords: ["Cloud Migration", "Core Banking", "API First", "Microservices"]
                            },
                            {
                                title: "Conformité Réglementaire & Risk Management",
                                desc: "Répondez aux exigences BCE, ACPR, et AMF avec des experts rompus aux réglementations Bâle III, IFRS 17, Solvabilité II, et LCB-FT. Risk Managers, Compliance Officers, et Auditeurs spécialisés à votre disposition.",
                                keywords: ["Bâle III", "IFRS 17", "LCB-FT", "RGPD"]
                            },
                            {
                                title: "Actuariat, Pricing & Data Science",
                                desc: "Optimisez vos modèles de tarification, vos analyses de rentabilité, et vos prévisions actuarielles. Actuaires certifiés, Data Scientists, et spécialistes ALM pour vos enjeux de pricing et de gestion actif-passif.",
                                keywords: ["Prophet", "SAS", "Python", "Tarification"]
                            },
                            {
                                title: "Projets IT & Data Engineering",
                                desc: "Structurez vos données, automatisez vos process, et sécurisez vos infrastructures. Data Engineers, DevOps, et Architectes Cloud pour accompagner votre stack technologique moderne (Databricks, AWS, Azure, GCP).",
                                keywords: ["Big Data", "DevOps", "Cybersécurité", "Infrastructure"]
                            }
                        ].map((mission, i) => (
                            <Reveal key={i} delay={200 + (i * 100)} duration={800}>
                                <div className="bg-white border-l-4 border-primary p-6 rounded-lg shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                                    <h3 className="font-bold text-lg text-foreground mb-3 leading-tight">{mission.title}</h3>
                                    <p className="text-sm text-foreground-muted leading-relaxed mb-4 flex-grow">{mission.desc}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {mission.keywords.map((kw, j) => (
                                            <span key={j} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                                {kw}
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
                            Prêt à trouver l'expert qu'il vous faut ?
                        </h2>
                        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                            Utilisez notre assistant IA pour décrire votre besoin.
                            Nous vous proposons les meilleurs profils sous 48h maximum,
                            avec validation technique par nos Talent Managers spécialisés.
                        </p>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L14.8 8.2L21 11L14.8 13.8L12 20L9.2 13.8L3 11L9.2 8.2L12 2Z" />
                            </svg>
                            Démarrer ma recherche
                        </button>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </div>
    );
}
