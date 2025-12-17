"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export const HeroCards = () => {
    return (
        <div className="relative w-full">
            {/* Simplified, Clean Card Layout */}
            <div className="space-y-4">
                {/* Card 1: Thomas */}
                <ExpertCard
                    image="/avatars/profile_expert_1_1765802590256.png"
                    name="Thomas B."
                    title="Expert IFRS 17 & Consolidation"
                    tags={["Finance", "Comptabilité"]}
                    tjm="950"
                    availability="Immédiate"
                    online={true}
                />

                {/* Card 2: Sarah */}
                <ExpertCard
                    image="/avatars/profile_expert_2_1765802613092.png"
                    name="Sarah M."
                    title="Juriste Droit des Assurances"
                    tags={["Juridique", "Conformité"]}
                    tjm="650"
                    availability="< 2 semaines"
                />

                {/* Card 3: Claire */}
                <ExpertCard
                    image="/avatars/profile_expert_claire_new.png"
                    name="Claire D."
                    title="Actuaire Senior Vie"
                    tags={["Actuariat", "Risques"]}
                    tjm="1100"
                    availability="< 1 mois"
                />
            </div>
        </div>
    );
};

const ExpertCard = ({
    image,
    name,
    title,
    tags,
    tjm,
    availability,
    online = false
}: {
    image: string;
    name: string;
    title: string;
    tags: string[];
    tjm: string;
    availability: string;
    online?: boolean;
}) => {
    return (
        <div className="group relative bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm">
                        <Image
                            src={image}
                            alt={name}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    {online && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                            <h3 className="font-bold text-foreground text-base leading-tight mb-1">{name}</h3>
                            <p className="text-xs text-primary font-semibold leading-tight">{title}</p>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wide bg-primary/5 text-primary border border-primary/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Details */}
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-semibold text-foreground">{tjm}€</span>
                            <span className="text-gray-400">/jour</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-emerald-700 font-medium">{availability}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
    );
};
