import { Home, Building2, Trash2, Warehouse, Truck, Package } from 'lucide-react';

const services = [
    { icon: Home, title: 'Privatumzug', desc: 'Komplettservice für Ihren Wohnungswechsel. Von der Planung bis zur Montage.' },
    { icon: Building2, title: 'Firmenumzug', desc: 'Effiziente Büroumzüge mit minimaler Ausfallzeit für Ihr Geschäft.' },
    { icon: Trash2, title: 'Entrümpelung', desc: 'Wir entrümpeln Wohnungen, Dachböden und mehr – schnell und besenrein.' },
    { icon: Warehouse, title: 'Keller & Garage', desc: 'Fachgerechte Räumung und Entsorgung von Sperrmüll aus Kellern und Garagen.' },
    { icon: Truck, title: 'Möbeltransport', desc: 'Sicherer Transport einzelner Möbelstücke oder ganzer Einrichtungen.' },
    { icon: Package, title: 'Packservice', desc: 'Professionelles Ein- und Auspacken sowie Bereitstellung von Umzugskartons.' },
];

export default function ServiceCards() {
    return (
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">Unsere Services</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">Wir packen das an</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Egal ob Single-Appartement oder Großbüro – wir bieten maßgeschneiderte Lösungen für jeden Bedarf.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                                <service.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
