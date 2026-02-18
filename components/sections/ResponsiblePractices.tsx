"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export const ResponsiblePractices = () => {
    const t = useTranslations('responsiblePractices');

    return (
        <>
            {/* Responsible Purchasing Section */}
            <section
                id="responsible-purchasing"
                className="relative py-24 lg:py-28 bg-white border-b border-primary/10 overflow-hidden"
            >
                <div className="container relative z-[1]">
                    <SectionHeader
                        tag={t('purchasing.tag')}
                        title={
                            <>
                                {t.rich('purchasing.title', {
                                    br: () => <br />,
                                    span: (chunks) => <span className="text-primary">{chunks}</span>
                                })}
                            </>
                        }
                        centered
                    />

                    <div className="max-w-4xl mx-auto">
                        <Reveal delay={100} duration={800}>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10 mb-8">
                                {/* Logo centered at top - larger */}
                                <div className="flex flex-col items-center text-center mb-8">
                                    <div className="w-32 h-32 mb-6 flex items-center justify-center">
                                        <Image
                                            src="/logo-achats-responsables.webp"
                                            alt="Charte Relations fournisseurs & Achats responsables"
                                            width={128}
                                            height={128}
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3">
                                        {t('purchasing.charterTitle')}
                                    </h3>
                                    <p className="text-base text-foreground-muted max-w-2xl">
                                        {t('purchasing.charterDescription')}
                                    </p>
                                </div>

                                <ul className="space-y-3 text-center">
                                    <li className="text-sm text-foreground-muted">
                                        <span dangerouslySetInnerHTML={{ __html: t.raw('purchasing.items.0') }} />
                                    </li>
                                    <li className="text-sm text-foreground-muted">
                                        <span dangerouslySetInnerHTML={{ __html: t.raw('purchasing.items.1') }} />
                                    </li>
                                    <li className="text-sm text-foreground-muted">
                                        <span dangerouslySetInnerHTML={{ __html: t.raw('purchasing.items.2') }} />
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* French Tech Section */}
            <section
                id="french-tech"
                className="relative py-24 lg:py-28 bg-white border-b border-primary/10 overflow-hidden"
            >
                <div className="container relative z-[1]">
                    <SectionHeader
                        tag={t('frenchTech.tag')}
                        title={
                            <>
                                {t.rich('frenchTech.title', {
                                    br: () => <br />,
                                    span: (chunks) => <span className="text-primary">{chunks}</span>
                                })}
                            </>
                        }
                        centered
                    />

                    <div className="max-w-4xl mx-auto">
                        <Reveal delay={100} duration={800}>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10">
                                {/* Logo centered at top */}
                                <div className="flex flex-col items-center text-center mb-8">
                                    <div className="w-32 h-32 mb-6 flex items-center justify-center">
                                        <Image
                                            src="/french-tech-logo.jpg"
                                            alt="Je choisis la French Tech"
                                            width={128}
                                            height={128}
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-6">
                                        {t('frenchTech.partnerTitle')}
                                    </h3>
                                </div>

                                <div className="space-y-6 text-base text-foreground-muted">
                                    <p dangerouslySetInnerHTML={{ __html: t.raw('frenchTech.p1') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t.raw('frenchTech.p2') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t.raw('frenchTech.p3') }} />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Responsible Digital Section */}
            <section
                id="responsible-digital"
                className="relative py-24 lg:py-28 bg-white border-b border-primary/10 overflow-hidden"
            >
                <div className="container relative z-[1]">
                    <SectionHeader
                        tag={t('digital.tag')}
                        title={
                            <>
                                {t.rich('digital.title', {
                                    br: () => <br />,
                                    span: (chunks) => <span className="text-primary">{chunks}</span>
                                })}
                            </>
                        }
                        centered
                    />

                    <div className="max-w-4xl mx-auto grid grid-cols-1 laptop:grid-cols-2 gap-8">
                        <Reveal delay={100} duration={800}>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10 h-full flex flex-col">
                                {/* Larger logo */}
                                <div className="w-32 h-32 mb-6 flex items-center justify-center mx-auto">
                                    <Image
                                        src="/logo_INR.svg"
                                        alt="Charte Numérique Responsable"
                                        width={128}
                                        height={128}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                                    {t('digital.charterTitle')}
                                </h3>
                                <p className="text-sm text-foreground-muted mb-6 flex-grow text-center">
                                    {t('digital.charterDescription')}
                                </p>

                                <ul className="space-y-2 text-sm text-foreground-muted text-center">
                                    <li>• {t('digital.charterItems.0')}</li>
                                    <li>• {t('digital.charterItems.1')}</li>
                                    <li>• {t('digital.charterItems.2')}</li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={200} duration={800}>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10 h-full flex flex-col">
                                {/* Neon Logo */}
                                <div className="w-32 h-32 mb-6 flex items-center justify-center mx-auto">
                                    <Image
                                        src="/logo-neon.svg"
                                        alt="Neon Database"
                                        width={128}
                                        height={128}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                                    {t('digital.securityTitle')}
                                </h3>
                                <p className="text-sm font-medium text-primary mb-2 text-center">
                                    {t('digital.securitySubtitle')}
                                </p>
                                <p className="text-sm text-foreground-muted mb-6 flex-grow text-center">
                                    {t('digital.securityDescription')}
                                </p>

                                <ul className="space-y-2 text-sm text-foreground-muted text-center">
                                    <li>• {t('digital.securityItems.0')}</li>
                                    <li>• {t('digital.securityItems.1')}</li>
                                    <li>• {t('digital.securityItems.2')}</li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Ethics and Employee Well-being Section */}
            <section
                id="ethics-wellbeing"
                className="relative py-24 lg:py-28 bg-white border-b border-primary/10 overflow-hidden"
            >
                <div className="container relative z-[1]">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 laptop:grid-cols-2 gap-8">
                        <Reveal delay={100} duration={800}>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10">


                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {t('ethics.title')}
                                </h3>
                                <h4 className="text-base font-semibold text-primary mb-3">
                                    {t('ethics.subtitle')}
                                </h4>
                                <p className="text-sm text-foreground-muted mb-6">
                                    {t('ethics.description')}
                                </p>

                                <ul className="space-y-3 text-sm text-foreground-muted">
                                    <li>
                                        <span className="font-semibold text-foreground">{t('ethics.items.0.title')}</span><br />
                                        {t('ethics.items.0.desc')}
                                    </li>
                                    <li>
                                        <span className="font-semibold text-foreground">{t('ethics.items.1.title')}</span><br />
                                        {t('ethics.items.1.desc')}
                                    </li>
                                    <li>
                                        <span className="font-semibold text-foreground">{t('ethics.items.2.title')}</span><br />
                                        {t('ethics.items.2.desc')}
                                    </li>
                                </ul>
                            </div>
                        </Reveal>


                    </div>
                </div>
            </section>
        </>
    );
};
