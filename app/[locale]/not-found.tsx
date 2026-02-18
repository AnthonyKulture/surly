
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { useTranslations } from 'next-intl';

export default function NotFound() {
    const t = useTranslations('notFound');

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="container relative z-10 flex flex-col items-center text-center">

                    {/* 404 Large Text with Gradient */}
                    <h1 className="text-[8rem] tablet:text-[12rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary/20 to-transparent select-none">
                        404
                    </h1>

                    {/* Content Overlay */}
                    <div className="-mt-12 tablet:-mt-20 space-y-6 max-w-2xl mx-auto">
                        <h2 className="text-3xl tablet:text-5xl font-bold text-primary">
                            {t('title')}
                        </h2>

                        <p className="text-lg text-foreground/70 leading-relaxed">
                            {t('description')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button as="a" href="/" variant="primary" size="large">
                                {t('backHome')}
                            </Button>
                            <Button as="a" href="/contact" variant="outline" size="large">
                                {t('contact')}
                            </Button>
                        </div>
                    </div>

                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
            </main>
            <Footer />
        </>
    );
}
