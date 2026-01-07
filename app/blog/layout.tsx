import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navigation />
            <main className="pt-[120px] min-h-screen bg-background">
                {children}
            </main>
            <Footer />
        </>
    );
}
