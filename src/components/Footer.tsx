import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 pt-16 pb-8 transition-colors duration-300">
            <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                {/* Brand */}
                <div>
                    <Link href="/" className="text-2xl font-bold text-white mb-6 block">
                        Zusammen<span className="text-secondary">Umzüge</span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Wir bringen Sie sicher in Ihr neues Zuhause. Vertrauen verbindet – seit Jahren Ihr zuverlässiger Partner für Umzüge und Transporte.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Unsere Leistungen</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/services" className="hover:text-secondary transition-colors">Privatumzug</Link></li>
                        <li><Link href="/services" className="hover:text-secondary transition-colors">Firmenumzug</Link></li>
                        <li><Link href="/services" className="hover:text-secondary transition-colors">Entrümpelung & Räumung</Link></li>
                        <li><Link href="/services" className="hover:text-secondary transition-colors">Möbeltransport</Link></li>
                        <li><Link href="/services" className="hover:text-secondary transition-colors">Packservice</Link></li>
                    </ul>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Rechtliches</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/impressum" className="hover:text-secondary transition-colors">Impressum</Link></li>
                        <li><Link href="/datenschutz" className="hover:text-secondary transition-colors">Datenschutz</Link></li>
                        <li><Link href="/agb" className="hover:text-secondary transition-colors">AGB</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Kontakt</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-2 text-gray-400">
                            <span className="text-white font-medium">Adresse:</span>
                            <span>Musterstraße 123<br />12345 Musterstadt</span>
                        </li>
                        <li className="flex gap-2 text-gray-400">
                            <span className="text-white font-medium">Telefon:</span>
                            <a href="tel:+49123456789" className="hover:text-white">0123 456 789</a>
                        </li>
                        <li className="flex gap-2 text-gray-400">
                            <span className="text-white font-medium">E-Mail:</span>
                            <a href="mailto:info@zusammen-umzuege.de" className="hover:text-white">info@zusammen-umzuege.de</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Zusammen Umzüge. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    );
}
