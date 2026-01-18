import { useTranslations } from 'next-intl';

export default function AgbPage() {
    const t = useTranslations('Legal');

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300 py-16">
            <main className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">{t('termsTitle')}</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8 italic text-sm">
                    {t('contentNotice')}
                </p>

                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-6">

                    <section>
                        <h2 className="text-xl font-bold mb-3 dark:text-white">§ 1 Geltungsbereich</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            (1) Die nachstehenden Geschäftsbedingungen gelten für alle Verträge über Umzugsdienstleistungen und Transporte zwischen Zusammen Umzüge (nachfolgend „Auftragnehmer“) und dem Kunden (nachfolgend „Auftraggeber“).
                            <br />
                            (2) Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 dark:text-white">§ 2 Vertragsabschluss</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Der Vertrag kommt durch die Annahme des Angebots des Auftragnehmers durch den Auftraggeber zustande. Die Annahme kann schriftlich, per E-Mail oder durch schlüssiges Verhalten erfolgen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 dark:text-white">§ 3 Leistungen</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Der Umfang der vertraglichen Leistungen ergibt sich aus dem schriftlichen Angebot bzw. der Auftragsbestätigung. Zusätzliche Leistungen, die nicht im Angebot enthalten sind, werden gesondert berechnet.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 dark:text-white">§ 4 Preise und Zahlungsbedingungen</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            (1) Alle Preise verstehen sich in Euro inkl. der gesetzlichen Mehrwertsteuer, sofern nicht anders ausgewiesen.<br />
                            (2) Die Vergütung ist, sofern nichts anderes vereinbart ist, unmittelbar nach Erbringung der Dienstleistung fällig und in bar oder per Überweisung zu zahlen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 dark:text-white">§ 5 Haftung</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Der Auftragnehmer haftet nach den gesetzlichen Bestimmungen (HGB) für Schäden, die durch Verlust oder Beschädigung des Umzugsgutes in der Zeit von der Übernahme zur Beförderung bis zur Ablieferung entstehen. Die Haftung ist auf den gesetzlichen Höchstbetrag von 620 Euro pro Kubikmeter Laderaum beschränkt.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 dark:text-white">§ 6 Gerichtsstand</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist der Sitz des Auftragnehmers, soweit der Auftraggeber Kaufmann ist.
                        </p>
                    </section>

                </div>
            </main>
        </div>
    );
}
