import { useTranslations } from 'next-intl';

export default function ImpressumPage() {
    const t = useTranslations('Legal');

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300 py-16">
            <main className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">{t('imprintTitle')}</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8 italic text-sm">
                    {t('contentNotice')}
                </p>

                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-6">

                    <section>
                        <h2 className="text-xl font-bold mb-3 dark:text-white">Angaben gemäß § 5 TMG</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            <strong>Zusammen Umzüge</strong><br />
                            Zehnthofstraße 55<br />
                            55252 Mainz-Kastel
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 dark:text-white">Kontakt</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Telefon: 01782722300<br />
                            E-Mail: info@zusammen-umzuege.de
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 dark:text-white">Umsatzsteuer-ID</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            DE123456789
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 dark:text-white">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Zusammen Umzüge<br />
                            Zehnthofstraße 55<br />
                            55252 Mainz-Kastel
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 dark:text-white">Streitschlichtung</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline"> https://ec.europa.eu/consumers/odr</a>.<br />
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>

                </div>
            </main>
        </div>
    );
}
