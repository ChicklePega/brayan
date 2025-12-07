import React from 'react';
import { Hero } from '@/components/Hero';

export const metadata = {
  title: 'Datenschutz | Happy Garten Hamburg',
  description: 'Informationen zum Datenschutz und zur Verarbeitung Ihrer personenbezogenen Daten.',
};

export default function DatenschutzPage() {
  return (
    <main>
      <Hero
        title="Datenschutzerklärung"
        subtitle="Ihre Daten sind uns wichtig"
        description="Informationen über die Verarbeitung Ihrer personenbezogenen Daten."
        backgroundImage="/images/about-hero.jpg"
      />
      
      <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center">
        <div className="prose max-w-3xl mx-auto w-full bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h1>Datenschutzerklärung</h1>
          <p className="text-sm text-gray-500">Stand: 01.01.2024</p>
          
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
          
          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>
          
          {/* Placeholder for full policy */}
          <p>
            (Hier folgt der vollständige Text der Datenschutzerklärung...)
          </p>
        </div>
      </div>
    </main>
  );
}
