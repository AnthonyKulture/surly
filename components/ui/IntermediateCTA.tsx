"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface IntermediateCTAProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    variant?: "primary" | "secondary" | "urgent";
    className?: string;
}

export const IntermediateCTA = ({
    title,
    description,
    buttonText,
    buttonHref,
    variant = "primary",
    className = "",
}: IntermediateCTAProps) => {
    const styles = {
        primary: {
            bg: "bg-accent/10",
            title: "text-foreground",
            description: "text-foreground-muted",
        },
        secondary: {
            bg: "bg-primary/5",
            title: "text-foreground",
            description: "text-foreground-muted",
        },
        urgent: {
            bg: "bg-gradient-to-br from-primary to-primary-dark",
            title: "text-white",
            description: "text-white/90",
        },
    };

    const currentStyle = styles[variant];

    return (
        <section className={`py-16 ${currentStyle.bg} ${className}`}>
            <div className="container max-w-4xl">
                <Reveal delay={0} duration={600}>
                    <div className="text-center">
                        <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${currentStyle.title}`}>
                            {title}
                        </h3>
                        <p className={`text-base md:text-lg mb-6 max-w-2xl mx-auto ${currentStyle.description}`}>
                            {description}
                        </p>
                        <Button
                            as="a"
                            href={buttonHref}
                            variant={variant === "urgent" ? "white" : "primary"}
                            size="large"
                            className="px-8"
                        >
                            {buttonText}
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
