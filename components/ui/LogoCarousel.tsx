"use client";

export const LogoCarousel = () => {
    // Clients avec leurs noms complets et abrégés
    const clients = [
        { name: "BNP Paribas", shortName: "BNP" },
        { name: "AXA", shortName: "AXA" },
        { name: "MNH", shortName: "MNH" },
        { name: "LCL", shortName: "LCL" },
        { name: "Natixis", shortName: "NATIXIS" },
        { name: "Société Générale", shortName: "SG" },
        { name: "Crédit Agricole", shortName: "CA" },
        { name: "Allianz", shortName: "ALLIANZ" },
    ];

    // Double the array for seamless infinite scroll
    const duplicatedClients = [...clients, ...clients];

    return (
        <section className="relative pt-6 pb-8 sm:pt-6 sm:pb-10 bg-white overflow-hidden">
            <div className="container">
                {/* Minimal Title */}
                <div className="text-center mb-4 sm:mb-5">
                    <p className="text-[10px] sm:text-xs font-medium text-foreground/40 uppercase tracking-[0.2em]">
                        Ils nous font confiance
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Gradient Overlays for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* Scrolling Container */}
                    <div className="flex overflow-hidden">
                        <div className="flex animate-scroll-infinite gap-8 sm:gap-12 lg:gap-16">
                            {duplicatedClients.map((client, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-center flex-shrink-0 group cursor-default"
                                    style={{ minWidth: "100px" }}
                                >
                                    <span
                                        className="font-semibold text-foreground/25 group-hover:text-primary/60 transition-colors duration-300 tracking-tight select-none whitespace-nowrap"
                                        style={{
                                            fontSize: client.shortName.length > 6 ? '0.9rem' : '1.1rem',
                                        }}
                                    >
                                        {client.shortName}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-center text-[10px] sm:text-[11px] text-foreground/30 mt-3 sm:mt-4">
                    Et plus de 50 autres entreprises du secteur bancassurance
                </p>
            </div>
        </section>
    );
};
