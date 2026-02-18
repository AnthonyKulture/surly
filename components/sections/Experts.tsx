"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useTranslations } from 'next-intl';

// Utility function to censor last names
const censorLastName = (fullName: string): string => {
  const nameParts = fullName.trim().split(" ");
  if (nameParts.length < 2) return fullName;

  const firstName = nameParts[0];
  const lastNameInitial = nameParts[nameParts.length - 1][0];

  return `${firstName} ${lastNameInitial}***`;
};

const expertImages = [
  "/avatars/profile_expert_1_1765802590256.png",
  "/avatars/profile_expert_2_1765802613092.png",
  "/avatars/profile_expert_3_1765802652999.png",
];

export const Experts = () => {
  const t = useTranslations('experts');

  return (
    <section
      id="experts"
      className="relative py-24 lg:py-28 bg-white text-foreground overflow-hidden"
    >
      <div className="container relative z-[1]">
        <SectionHeader
          tag={t('tag')}
          title={
            <>
              {t('titleLine1')}
              <br />
              <span className="text-primary">{t('titleLine2')}</span>
            </>
          }
        />

        {/* Experts Grid - 3 columns on tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-3 gap-6 mb-12">
          {[0, 1, 2].map((index) => {
            const name = t(`profiles.${index}.name`);
            const skills = t.raw(`profiles.${index}.skills`) as string[];

            return (
              <Reveal key={name} delay={index * 100} duration={800}>
                <div className="group p-5 border border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-md hover:border-primary/20 transition-all h-full">
                  {/* Avatar */}
                  <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-primary/20 transition-all">
                    <Image
                      src={expertImages[index]}
                      alt={name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Name & Role */}
                  <div className="text-center mb-3">
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {censorLastName(name)}
                    </h3>
                    <p className="text-xs font-medium text-primary">
                      {t(`profiles.${index}.role`)}
                    </p>
                  </div>

                  {/* Experience */}
                  <p className="text-xs text-foreground-muted text-center mb-3">
                    {t(`profiles.${index}.experience`)}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 justify-center mb-3">
                    {skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-primary/5 border border-primary/10 text-[10px] font-medium text-primary rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-[10px] font-medium text-foreground-muted">
                        {t(`profiles.${index}.status`)}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal delay={400} duration={800}>
          <div className="text-center relative z-10">
            <Button
              as="a"
              href="/ai"
              variant="primary"
              className="pointer-events-auto w-full sm:w-auto"
            >
              <span className="hidden sm:inline">{t('ctaDesktop')}</span>
              <span className="sm:hidden">{t('ctaMobile')}</span>
              <ArrowIcon />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
