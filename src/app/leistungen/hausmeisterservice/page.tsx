import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { Wrench, Snowflake, Hammer, UserCheck, Clock, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Hausmeisterservice Hamburg | Happy Garten',
  description: 'Zuverlässiger Hausmeisterservice in Hamburg: Treppenhausreinigung, Winterdienst, Kleinreparaturen & 24h-Notdienst. Jetzt Angebot anfordern!',
};

export default function HausmeisterservicePage() {
  const features = [
    {
      title: 'Treppenhausreinigung',
      description: 'Regelmäßige Reinigung von Treppenhäusern, Fluren, Eingangsbereichen und Aufzügen. Wöchentlich, 14-tägig oder nach Bedarf. Für gepflegte Eingangsbereiche, die Ihre Mieter schätzen.',
      icon: <Wrench className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Winterdienst – Schnee & Streu',
      description: 'Professioneller Winterdienst für Unternehmen, Wohnanlagen und öffentliche Gebäude. Wir räumen und streuen ab 6:00 Uhr morgens – zuverlässig bei jedem Wetter.',
      icon: <Snowflake className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Kleinreparaturen',
      description: 'Schnelle und unkomplizierte Reparaturen im Haus: Defekte Türschlösser, tropfende Wasserhähne, kaputte Lampen, lose Fliesen. Unser Hausmeister-Team hilft sofort.',
      icon: <Hammer className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Objektbetreuung',
      description: 'Ihr persönlicher Objektbetreuer kümmert sich regelmäßig um Ihre Immobilie. Kontrollgänge, Mängelmeldungen, Koordination von Handwerkern – alles aus einer Hand.',
      icon: <UserCheck className="w-6 h-6 text-primary" />,
    },
    {
      title: '24h-Notdienst',
      description: 'Heizungsausfall, Wasserschaden, defekte Haustür? Unser 24h-Notdienst ist immer erreichbar – auch am Wochenende und an Feiertagen.',
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
  ];

  const benefits = [
    'Regelmäßige Treppenhausreinigung – Immer saubere Eingangsbereiche',
    'Zuverlässiger Winterdienst – Ab 6 Uhr morgens, auch am Wochenende',
    'Schnelle Kleinreparaturen – Reaktionszeit unter 24 Stunden',
    'Feste Objektbetreuer – Ein Ansprechpartner kennt Ihre Immobilie',
    '24h-Notdienst – Bei Heizungsausfall, Wasserschaden etc.',
    'Transparent & planbar – Feste Preise oder Pauschalverträge',
  ];

  return (
    <ServicePageTemplate
      title="Zuverlässiger Hausmeisterservice in Hamburg – Ihr Partner vor Ort"
      description="Treppenhausreinigung • Winterdienst • Kleinreparaturen • 24h-Notdienst"
      heroImage="/images/services/hausmeister-hero.jpg"
      features={features}
      benefits={benefits}
      ctaText="Kostenlose Beratung vereinbaren"
      ctaLink="/kontakt"
    >
      <div className="prose max-w-none text-gray-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Kennen Sie das?</h2>
        <ul className="list-none space-y-2 mb-8">
          <li className="flex items-start">
            <span className="text-red-500 mr-2">❌</span>
            Mieter beschweren sich über schmutzige Treppenhäuser
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">❌</span>
            Bei Schneefall ist niemand zum Räumen verfügbar
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">❌</span>
            Kleine Reparaturen dauern Wochen
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">❌</span>
            Sie müssen viele Dienstleister koordinieren
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">❌</span>
            Notfälle am Wochenende bleiben ungelöst
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Für wen ist unser Hausmeisterservice?</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Immobilienverwalter</h3>
            <p>Sie verwalten Wohn- oder Gewerbeimmobilien? Wir übernehmen die komplette Gebäudebetreuung und entlasten Sie im Tagesgeschäft.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Facility Manager</h3>
            <p>Sie sind verantwortlich für mehrere Standorte? Unser Hausmeisterservice sorgt für reibungslose Abläufe in allen Objekten.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Gewerbetreibende</h3>
            <p>Sie betreiben ein Geschäft, Restaurant oder Büro? Wir kümmern uns um alle Hausmeister-Aufgaben, damit Sie sich auf Ihr Business konzentrieren können.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preise & Pakete</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-2 text-primary">Basis-Paket</h3>
            <ul className="space-y-2 mb-4 text-sm">
              <li>• 4x pro Monat Treppenhausreinigung</li>
              <li>• Winterdienst nach Bedarf</li>
              <li>• Kleinreparaturen auf Abruf</li>
            </ul>
            <p className="font-bold text-lg mb-4">Ab 249 € / Monat</p>
            <a href="/kontakt" className="text-primary font-medium hover:underline">Angebot anfragen →</a>
          </div>
          <div className="border-2 border-primary rounded-lg p-6 shadow-md relative">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-bl-lg">Beliebt</div>
            <h3 className="font-bold text-xl mb-2 text-primary">Komfort-Paket</h3>
            <ul className="space-y-2 mb-4 text-sm">
              <li>• 8x pro Monat Treppenhausreinigung</li>
              <li>• Winterdienst-Flatrate</li>
              <li>• Wöchentliche Kontrollgänge</li>
              <li>• 5 Stunden Kleinreparaturen inklusive</li>
            </ul>
            <p className="font-bold text-lg mb-4">Ab 499 € / Monat</p>
            <a href="/kontakt" className="text-primary font-medium hover:underline">Angebot anfragen →</a>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-2 text-primary">Premium-Paket</h3>
            <ul className="space-y-2 mb-4 text-sm">
              <li>• Tägliche Objektbetreuung</li>
              <li>• Winterdienst-Flatrate</li>
              <li>• 24h-Notdienst inklusive</li>
              <li>• Unbegrenzte Kleinreparaturen</li>
            </ul>
            <p className="font-bold text-lg mb-4">Auf Anfrage</p>
            <a href="/kontakt" className="text-primary font-medium hover:underline">Individuelle Beratung →</a>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
