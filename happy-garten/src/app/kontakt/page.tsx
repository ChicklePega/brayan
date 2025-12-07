import React from 'react';
import { ContactForm } from '@/components/organisms/ContactForm';
import { Hero } from '@/components/organisms/Hero';

export const metadata = {
  title: 'Kontakt | Happy Garten Hamburg',
  description: 'Kontaktieren Sie uns für ein kostenloses Angebot. Lüftungsreinigung, Hausmeisterservice & Gartenpflege in Hamburg.',
};

export default function KontaktPage() {
  return (
    <main>
      <Hero
        title="Kontaktieren Sie uns"
        subtitle="Wir freuen uns auf Ihre Anfrage"
        description="Telefon, E-Mail oder Kontaktformular – Wir sind für Sie da"
        backgroundImage="/images/contact-hero.jpg"
        imageAlt="Happy Garten Kundenservice Kontakt"
      />
      
      <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">So erreichen Sie uns</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Adresse</h3>
                <p className="text-gray-600">
                  Happy Garten GmbH<br />
                  Musterstraße 123<br />
                  20095 Hamburg
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Kontakt</h3>
                <p className="text-gray-600">
                  <strong>Telefon:</strong> +49 (0)40 - XXX XXXX<br />
                  <strong>E-Mail:</strong> kontakt@happygarten.de
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Öffnungszeiten</h3>
                <p className="text-gray-600">
                  Montag – Freitag: 08:00 – 18:00 Uhr<br />
                  Samstag: Nach Vereinbarung
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <h3 className="text-xl font-bold mb-2 text-red-700">24h-Notdienst</h3>
                <p className="text-red-600 mb-2">
                  Für Notfälle sind wir rund um die Uhr erreichbar.
                </p>
                <p className="text-2xl font-bold text-red-700">
                  +49 (0)40 - XXX XXXX
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Kontaktformular</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
