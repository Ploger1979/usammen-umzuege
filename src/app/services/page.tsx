import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCards from '@/components/ServiceCards';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Unsere Services | Zusammen Umzüge',
    description: 'Entdecken Sie unsere Dienstleistungen für Umzüge, Transporte und Entrümpelungen.',
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <main className="pt-8">
                <div className="container mx-auto px-4 mb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 dark:text-white">Unsere Leistungen</h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                        Wir bieten Ihnen ein Rundum-Sorglos-Paket für Ihr Vorhaben. <br />
                        Wählen Sie den passenden Service für Ihre Bedürfnisse.
                    </p>
                </div>

                {/* We reuse the component but could expand it here if needed */}
                <ServiceCards />

                {/* Additional Content specific to Services page could go here */}
                <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-6 dark:text-white">Haben Sie spezielle Anforderungen?</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            Jeder Umzug ist einzigartig. Wenn Sie eine Leistung nicht finden, sprechen Sie uns einfach an.
                            Wir finden sicher eine Lösung.
                        </p>
                        <a href="/kontakt" className="inline-block bg-primary hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
                            Kontakt aufnehmen
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
