import { CheckCircle2, HelpCircle } from 'lucide-react';

export default function FeaturesAndFAQ() {
    const features = [
        { title: 'Festpreis-Garantie', desc: 'Keine versteckten Kosten. Der vereinbarte Preis ist verbindlich.' },
        { title: 'Transparenz', desc: 'Klare Kommunikation und offene Beratung von Anfang an.' },
        { title: 'Versicherung', desc: 'Rundum-Schutz für Ihre Möbel und Wertsachen während des Transports.' },
        { title: 'Erfahrenes Team', desc: 'Geschulte Profis, die sorgfältig und effizient arbeiten.' },
    ];

    const faqs = [
        { q: 'Wie lange im Voraus sollte ich anfragen?', a: 'Idealerweise 2-4 Wochen vor dem geplanten Termin. Für kurzfristige Anfragen rufen Sie uns am besten direkt an.' },
        { q: 'Bieten Sie auch Kartons an?', a: 'Ja, wir liefern hochwertiges Verpackungsmaterial und nehmen es nach dem Umzug auf Wunsch wieder mit.' },
        { q: 'Was kostet eine Besichtigung?', a: 'Die Besichtigung vor Ort ist in der Regel kostenlos und unverbindlich, um den Aufwand genau einschätzen zu können.' },
        { q: 'Können Sie Möbel demontieren?', a: 'Selbstverständlich. Unser Team übernimmt fachgerecht De- und Montage Ihrer Möbel sowie Küchen.' },
    ];

    return (
        <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
            {/* Features */}
            <div className="container mx-auto px-4 mb-24">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold text-sm uppercase tracking-wide">Ihre Vorteile</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-2">Warum wir der richtige Partner sind</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors duration-300">
                            <div className="mx-auto w-14 h-14 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-gray-700">
                                <CheckCircle2 size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{f.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ */}
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Häufig gestellte Fragen</h2>
                    <p className="text-gray-600 dark:text-gray-400">Alles, was Sie wissen müssen.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-start gap-3">
                                <HelpCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                                {faq.q}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 pl-8">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
