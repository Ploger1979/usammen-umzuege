import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormFull from '@/components/QuoteFormFull';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Angebot anfordern | Zusammen Umzüge',
    description: 'Fordern Sie jetzt Ihr unverbindliches Umzugsangebot an. Kostenlos und schnell.',
};

export default function AngebotPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Angebot anfordern</h1>
                        <p className="text-lg text-gray-600">
                            Erzählen Sie uns von Ihrem Vorhaben. Wir erstellen Ihnen ein individuelles Festpreis-Angebot.
                        </p>
                    </div>
                    <QuoteFormFull />
                </div>
            </main>
            <Footer />
        </div>
    );
}
