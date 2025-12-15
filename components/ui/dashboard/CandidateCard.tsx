import { cn } from "@/lib/utils";
import React, { memo } from "react";

export interface CandidateCardProps {
    initials?: string;
    color?: string;
    name: string;
    title: string;
    location: string;
    tags: string[];
    exp: string;
    status: string;
    rate: string;
    isNew?: boolean;
    online?: boolean;
    image: string;
    skills?: string[];
    certifications?: string[];
    matchScore?: number;
}

export const CandidateCard = memo(({
    initials,
    color = "bg-gray-700",
    name,
    title,
    location,
    tags,
    exp,
    status,
    rate,
    isNew,
    online,
    image,
    skills,
    certifications,
    matchScore
}: CandidateCardProps) => {
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col items-center hover:shadow-md transition-shadow relative group">
            {/* Top indicators */}
            <div className="absolute top-4 left-4 flex gap-2">
                {isNew && (
                    <span className="text-[9px] font-bold px-2 py-1 rounded-full bg-emerald-500 text-white uppercase">
                        Nouveau
                    </span>
                )}
                {matchScore && (
                    <span className="text-[9px] font-bold px-2 py-1 rounded-full bg-primary/10 text-primary">
                        Match {matchScore}%
                    </span>
                )}
            </div>

            <div className="absolute top-4 right-4 text-emerald-500 opacity-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>

            <div className="relative mb-3 mt-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm ring-2 ring-gray-100">
                    <img src={image} alt={name} className="object-cover w-full h-full" />
                </div>
                {online && <div className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>}
            </div>

            <div className="text-center w-full mb-3">
                <h3 className="font-bold text-gray-900 text-base mb-0.5">{name}</h3>
                <p className="text-[10px] font-bold text-emerald-800 mb-1 flex items-center justify-center leading-tight px-1">{title}</p>
                <div className="flex items-center justify-center gap-1 text-[10px] text-gray-400">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {location}
                </div>
            </div>

            <div className="flex gap-1 mb-2">
                {tags.map((tag: string) => (
                    <span key={tag} className={cn(
                        "px-2 py-0.5 rounded-full text-[9px] font-bold uppercase",
                        tag === "Assurance" ? "bg-emerald-100/80 text-emerald-700" : "bg-blue-100/80 text-blue-700"
                    )}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* Skills/Keywords */}
            {skills && (
                <div className="w-full mb-2">
                    <div className="flex flex-wrap gap-1 justify-center">
                        {skills.map((skill: string, idx: number) => (
                            <span key={idx} className="text-[9px] px-1.5 py-0.5 rounded-md bg-gray-100 text-gray-600 font-medium">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
                <div className="w-full mb-2 flex items-center justify-center gap-1">
                    <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-[9px] text-gray-500 font-semibold">{certifications.join(', ')}</span>
                </div>
            )}

            <div className="w-full space-y-1.5 text-[10px] border-t border-gray-50 pt-2">
                <div className="flex justify-between">
                    <span className="text-gray-500">Expérience :</span>
                    <span className="font-semibold text-emerald-700">{exp}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Contrat :</span>
                    <span className="font-semibold text-gray-700">{status}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">TJM <span className="text-[9px] bg-gray-100 rounded-full w-3 h-3 inline-flex items-center justify-center">?</span> :</span>
                    <span className="font-bold text-emerald-700">{rate}</span>
                </div>
            </div>

        </div>
    );
});

CandidateCard.displayName = "CandidateCard";
