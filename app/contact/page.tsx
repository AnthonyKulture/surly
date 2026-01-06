import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
    return (
        <>
            <Navigation />
            <main className="pt-32">
                {/* Contact Section */}
                <Contact />
            </main>
            <Footer />
        </>
    );
}
