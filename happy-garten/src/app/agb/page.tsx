import React from 'react';
import { Hero } from '@/components/organisms/Hero';

export const metadata = {
  title: 'AGB | Happy Garten Hamburg',
  description: 'Allgemeine Geschäftsbedingungen der Happy Garten GmbH.',
};

export default function AGBPage() {
  return (
    <main>
      <Hero
        title="Allgemeine Geschäftsbedingungen"
        subtitle="Rechtliche Rahmenbedingungen"
        description="Unsere AGB für eine transparente Zusammenarbeit."
        backgroundImage="/images/about-hero.jpg"
      />
      
      <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center">
        <div className="prose max-w-3xl mx-auto w-full bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p className="text-sm text-gray-500">Stand: 01.01.2024</p>
          
          <h2>1. Geltungsbereich</h2>
          <p>
            Für die Geschäftsbeziehung zwischen der Happy Garten GmbH (nachfolgend „Anbieter“) und dem Kunden (nachfolgend „Kunde“) gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.
          </p>
          
          <h2>2. Vertragsgegenstand</h2>
          <p>
            Gegenstand des Vertrages ist die Erbringung von Dienstleistungen im Bereich Facility Management, Gartenpflege und Reinigung durch den Anbieter.
          </p>
          
          {/* Placeholder for full AGB */}
          <p>
            (Hier folgt der vollständige Text der AGB...)
          </p>
        </div>
      </div>
    </main>
  );
}
