const clients = [
  "BNP Paribas",
  "AXA France",
  "Société Générale",
  "Crédit Agricole",
  "Allianz",
  "Natixis",
  "Groupama",
  "BPCE",
  "Generali",
  "CNP Assurances",
];

export const ClientsMarquee = () => {
  return (
    <section className="py-lg border-t border-b border-primary/[0.12] bg-background-off overflow-hidden">
      <div className="marquee-wrapper relative w-full overflow-hidden">
        <div className="flex gap-2xl animate-marquee w-max">
          {/* First set */}
          {clients.map((client) => (
            <span
              key={`first-${client}`}
              className="text-body font-semibold text-foreground/30 whitespace-nowrap hover:text-primary hover:opacity-80 transition-all cursor-default"
            >
              {client}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {clients.map((client) => (
            <span
              key={`second-${client}`}
              className="text-body font-semibold text-foreground/30 whitespace-nowrap hover:text-primary hover:opacity-80 transition-all cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

