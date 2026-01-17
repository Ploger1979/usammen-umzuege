'use client';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function QuoteFormShort() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const data = {
            customer: {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                phone: formData.get('phone'),
                email: formData.get('email'),
            },
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setSuccess(true);
            } else {
                alert('Fehler beim Senden. Bitte versuchen Sie es erneut.');
            }
        } catch (err) {
            console.error(err);
            alert('Fehler beim Senden.');
        } finally {
            setLoading(false);
        }
    }

    if (success) {
        return (
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl text-center py-12 border-t-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-600 mb-2">Vielen Dank!</h3>
                <p className="text-gray-600 dark:text-gray-300">Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen.</p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl border-t-4 border-secondary">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Schnelles Angebot</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Unverbindlich & kostenlos anfragen</p>
            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <input required name="firstName" placeholder="Vorname" className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" />
                    <input required name="lastName" placeholder="Nachname" className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" />
                </div>
                <input required name="email" type="email" placeholder="E-Mail" className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" />
                <input required name="phone" type="tel" placeholder="Telefon" className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" />
                <textarea name="message" placeholder="Ihre Nachricht (optional)" className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 h-24 resize-none"></textarea>

                <button disabled={loading} type="submit" className="w-full bg-secondary hover:bg-secondary-hover text-white font-bold py-3 rounded-lg transition flex justify-center items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    {loading ? <Loader2 className="animate-spin" /> : 'Jetzt Angebot anfordern'}
                </button>
            </form>
        </div>
    );
}
