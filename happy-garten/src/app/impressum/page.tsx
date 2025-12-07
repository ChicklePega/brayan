import React from 'react';
import { Hero } from '@/components/Hero';

export const metadata = {
  title: 'Impressum | Happy Garten Hamburg',
  description: 'Impressum und rechtliche Angaben der Happy Garten GmbH.',
};

export default function ImpressumPage() {
  return (
    <main>
      <Hero
        title="Impressum"
        subtitle="Rechtliche Informationen"
        description="Transparenz und Offenheit sind uns wichtig."
        backgroundImage="/images/about-hero.jpg"
      />
      
      <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center">
        <div className="prose max-w-3xl mx-auto w-full bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 TMG</p>
          
          <h3>Kontakt</h3>
          <p>
            <strong>Happy Garten GmbH</strong><br />
            Musterstraße 123<br />
            20095 Hamburg
          </p>
          
          <p>
            <strong>Vertreten durch:</strong><br />
            Max Mustermann
          </p>
          
          <p>
            <strong>Kontakt:</strong><br />
            Telefon: +49 (0)40 - XXX XXXX<br />
            E-Mail: kontakt@happygarten.de
          </p>
          
          <h3>Registereintrag</h3>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Hamburg<br />
            Registernummer: HRB XXXXX
          </p>
          
          <h3>Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE XXXXXXXX
          </p>
        </div>
      </div>
    </main>
  );
}
