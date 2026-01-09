"use client";

import { SampleMission } from "@/lib/sample-missions-data";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

interface MissionCardProps {
    mission: SampleMission;
    index: number;
}

export const MissionCard = ({ mission, index }: MissionCardProps) => {
    return (
        <Reveal delay={index * 50} duration={500}>
            <div className="bg-white rounded-xl border-2 border-primary/5 hover:border-primary/15 shadow-sm hover:shadow-md transition-all duration-300 p-6 h-full flex flex-col">
                {/* Header */}
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                        {mission.title}
                    </h3>
                    <p className="text-sm text-foreground-muted">
                        {mission.company}
                    </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {/* Employment Type Badge */}
                    <span
                        className={cn(
                            "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
                            mission.employmentType === "Freelance"
                                ? "bg-primary/10 text-primary border border-primary/20"
                                : mission.employmentType === "CDI"
                                    ? "bg-green-50 text-green-700 border border-green-200"
                                    : "bg-blue-50 text-blue-700 border border-blue-200"
                        )}
                    >
                        {mission.employmentType}
                    </span>

                    {/* Remote Type Badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200">
                        {mission.remoteType}
                    </span>

                    {/* Location Badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200">
                        <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {mission.location}
                    </span>
                </div>

                {/* Compensation */}
                <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                        {mission.tjm && (
                            <span className="text-2xl font-bold text-primary">
                                {mission.tjm}€
                                <span className="text-sm font-normal text-foreground-muted">/jour</span>
                            </span>
                        )}
                        {mission.salary && (
                            <span className="text-2xl font-bold text-primary">
                                {mission.salary.toLocaleString('fr-FR')}€
                                <span className="text-sm font-normal text-foreground-muted">/an</span>
                            </span>
                        )}
                    </div>
                    {mission.duration && (
                        <p className="text-xs text-foreground-muted mt-1">
                            Durée : {mission.duration}
                        </p>
                    )}
                </div>

                {/* Description */}
                <p className="text-sm text-foreground-muted leading-relaxed mb-4 flex-grow line-clamp-3">
                    {mission.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {mission.skills.slice(0, 4).map((skill, idx) => (
                        <span
                            key={idx}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/5 text-primary"
                        >
                            {skill}
                        </span>
                    ))}
                    {mission.skills.length > 4 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium text-foreground-muted">
                            +{mission.skills.length - 4}
                        </span>
                    )}
                </div>

                {/* Category */}
                <div className="pt-4 border-t border-gray-100">
                    <span className="text-xs font-medium text-foreground-muted">
                        {mission.category}
                    </span>
                </div>
            </div>
        </Reveal>
    );
};
