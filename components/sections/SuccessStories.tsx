"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

export const SuccessStories = () => {
    const t = useTranslations('successStories');

    return (
        <section className="relative py-24 lg:py-28 bg-primary text-background border-b border-primary/10 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-[1]">
                <SectionHeader
                    tag={t('tag')}
                    title={
                        <>
                            {t.rich('title', {
                                br: () => <br />,
                                span: (chunks) => <span className="text-white">{chunks}</span>
                            })}
                        </>
                    }
                    subtitle={t('subtitle')}
                    centered
                    light
                />

                <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 tablet:gap-5 laptop:gap-6 mt-12 tablet:mt-16">
                    {[0, 1, 2].map((index) => {
                        const techStack = t.raw(`stories.${index}.results`) as Array<{ label: string; value: string; sub: string }>;
                        // For techStack, we need original data since it's not translated
                        const techStacks = [
                            ["SAS", "Python", "R"],
                            ["Prophet", "ResQ", "Excel VBA"],
                            ["Jira", "Salesforce", "InsurTech"]
                        ];

                        return (
                            <StoryCard
                                key={index}
                                index={index}
                                sector={t(`stories.${index}.sector`)}
                                context={t(`stories.${index}.context`)}
                                challenge={t(`stories.${index}.challenge`)}
                                solution={t(`stories.${index}.solution`)}
                                results={t.raw(`stories.${index}.results`) as Array<{ label: string; value: string; sub: string }>}
                                techStack={techStacks[index]}
                                challengeLabel={t('challengeLabel')}
                                solutionLabel={t('solutionLabel')}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

interface StoryCardProps {
    index: number;
    sector: string;
    context: string;
    challenge: string;
    solution: string;
    results: Array<{ label: string; value: string; sub: string }>;
    techStack: string[];
    challengeLabel: string;
    solutionLabel: string;
}

const StoryCard = ({ index, sector, context, challenge, solution, results, techStack, challengeLabel, solutionLabel }: StoryCardProps) => {
    return (
        <Reveal
            delay={index * 150}
            duration={800}
            className="h-full"
        >
            <div className="group relative bg-[#0D2B22] border border-[#1A4D3D] p-6 rounded-2xl h-full flex flex-col hover:border-accent/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5">

                {/* Header Sector */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        {sector}
                    </span>
                    <div className="flex gap-1.5">
                        {techStack.map((tech) => (
                            <span key={tech} className="text-[9px] font-medium px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {context}
                </h3>

                {/* Challenge Section */}
                <div className="mb-4">
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1">{challengeLabel}</div>
                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                        {challenge}
                    </p>
                </div>

                {/* Solution Section */}
                <div className="mb-6 pb-6 border-b border-white/10 flex-grow">
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1">{solutionLabel}</div>
                    <p className="text-sm text-white font-medium leading-relaxed">
                        {solution}
                    </p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-2 mt-auto">
                    {results.map((result, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                            <div className="text-lg font-bold text-accent mb-0.5">{result.value}</div>
                            <div className="text-[9px] font-medium text-gray-400 uppercase leading-tight mb-1">{result.label}</div>
                            <div className="text-[8px] text-gray-500 leading-tight">{result.sub}</div>
                        </div>
                    ))}
                </div>

            </div>
        </Reveal>
    );
};
