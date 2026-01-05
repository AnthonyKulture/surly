"use client";

export const LogoCarousel = () => {
    // Using shorter abbreviations that fit better
    const clients = [
        { name: "BNP Paribas", shortName: "BNP" },
        { name: "AXA", shortName: "AXA" },
        { name: "MNH", shortName: "MNH" },
        { name: "LCL", shortName: "LCL" },
        { name: "Natixis", shortName: "NATIXIS" },
    ];

    // Double the array for seamless infinite scroll
    const duplicatedClients = [...clients, ...clients];

    return (
        <section className="relative py-16 bg-white overflow-hidden">
            <div className="container">
                <p className="text-center text-xs sm:text-sm font-semibold text-foreground-muted/70 mb-10 uppercase tracking-[0.2em]">
                    Ils nous font confiance
                </p>

                {/* Carousel Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Gradient Overlays for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

                    {/* Scrolling Container */}
                    <div className="flex overflow-hidden">
                        <div className="flex animate-scroll-infinite gap-6 sm:gap-8">
                            {duplicatedClients.map((client, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-center flex-shrink-0"
                                    style={{ minWidth: "180px", width: "180px" }}
                                >
                                    <div className="w-full h-20 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200/60 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 group px-4">
                                        <span
                                            className="font-bold text-gray-400 group-hover:text-primary transition-colors duration-300 tracking-tight select-none"
                                            style={{
                                                fontSize: client.shortName.length > 6 ? '1.25rem' : '1.5rem',
                                                letterSpacing: client.shortName.length > 6 ? '-0.02em' : '0'
                                            }}
                                        >
                                            {client.shortName}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-center text-[11px] sm:text-xs text-foreground-muted/50 mt-8 font-medium">
                    Et plus de 50 autres entreprises du secteur bancassurance
                </p>
            </div>
        </section>
    );
};
