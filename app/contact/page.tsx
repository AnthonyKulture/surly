import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
    return (
        <>
            <Navigation />
            <main>
                {/* Contact Section */}
                <Contact />
            </main>
            <Footer />
        </>
    );
}
