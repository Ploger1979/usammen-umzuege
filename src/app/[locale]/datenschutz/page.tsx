import { useTranslations } from 'next-intl';

export default function DatenschutzPage() {
    const t = useTranslations('Legal');

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300 py-16">
            <main className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">{t('privacyTitle')}</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8 italic text-sm">
                    {t('contentNotice')}
                </p>

                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-6">

                    <section>
                        <h2 className="text-xl font-bold mb-3 dark:text-white">1. Datenschutz auf einen Blick</h2>
                        <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Allgemeine Hinweise</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Datenerfassung auf dieser Website</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            <strong>Wie erfassen wir Ihre Daten?</strong><br />
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular oder Anfrageformular eingeben.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 dark:text-white">2. Hosting</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
                            [Name des Hosters, z.B. Vercel / Netlify]<br />
                            [Adresse des Hosters]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 dark:text-white">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                        <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Datenschutz</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Hinweis zur verantwortlichen Stelle</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                            Zusammen Umzüge<br />
                            Zehnthofstraße 55<br />
                            55252 Mainz-Kastel<br /><br />
                            E-Mail: info@zusammenumzuege.de
                        </p>
                    </section>

                </div>
            </main>
        </div>
    );
}
