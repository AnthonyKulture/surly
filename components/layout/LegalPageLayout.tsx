import { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface LegalPageLayoutProps {
    title: string;
    lastUpdated?: string;
    children: ReactNode;
}

export const LegalPageLayout = ({ title, lastUpdated, children }: LegalPageLayoutProps) => {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24">
            <div className="container max-w-4xl mx-auto px-4">
                {/* Header */}
                <Reveal>
                    <div className="mb-12 border-b border-gray-100 pb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {title}
                        </h1>
                        {lastUpdated && (
                            <p className="text-sm text-foreground-muted">
                                Dernière mise à jour : {lastUpdated}
                            </p>
                        )}
                    </div>
                </Reveal>

                {/* Content */}
                <div className="prose prose-slate max-w-none 
          prose-headings:font-bold prose-headings:text-foreground 
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-foreground-muted prose-p:leading-relaxed prose-p:mb-4
          prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
          prose-li:text-foreground-muted prose-li:mb-2
          prose-strong:text-foreground prose-strong:font-semibold
          prose-a:text-primary prose-a:font-medium prose-a:underline hover:prose-a:text-primary-dark
          prose-blockquote:border-l-4 prose-blockquote:border-primary/30 prose-blockquote:pl-4 prose-blockquote:italic
        ">
                    {children}
                </div>
            </div>
        </div>
    );
};
