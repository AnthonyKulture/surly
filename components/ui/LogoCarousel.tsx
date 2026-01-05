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
        <section className="relative py-8 sm:py-12 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden border-y border-gray-100">
            <div className="container">
                {/* Title with enhanced styling */}
                <div className="text-center mb-8 sm:mb-10">
                    <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-foreground/60 uppercase tracking-[0.25em] px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 shadow-sm">
                        <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Ils nous font confiance
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Gradient Overlays for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white via-gray-50/30 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white via-gray-50/30 to-transparent z-10 pointer-events-none" />

                    {/* Scrolling Container */}
                    <div className="flex overflow-hidden">
                        <div className="flex animate-scroll-infinite gap-6 sm:gap-8">
                            {duplicatedClients.map((client, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-center flex-shrink-0"
                                    style={{ minWidth: "180px", width: "180px" }}
                                >
                                    <div className="w-full h-20 flex items-center justify-center bg-white rounded-xl border border-primary/10 hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300 group px-4 relative overflow-hidden">
                                        {/* Subtle gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span
                                            className="relative font-bold text-foreground/40 group-hover:text-primary transition-colors duration-300 tracking-tight select-none"
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

                <p className="text-center text-[11px] sm:text-xs text-foreground-muted/50 mt-6 sm:mt-8 font-medium">
                    Et plus de 50 autres entreprises du secteur bancassurance
                </p>
            </div>
        </section>
    );
};
