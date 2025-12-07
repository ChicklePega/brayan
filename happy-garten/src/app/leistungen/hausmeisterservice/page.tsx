import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { Wrench, Snowflake, Hammer, UserCheck, Clock } from 'lucide-react';

export const metadata = {
  title: 'Hausmeisterservice Hamburg | Happy Garten',
  description: 'Zuverlässiger Hausmeisterservice in Hamburg: Treppenhausreinigung, Winterdienst, Kleinreparaturen & 24h-Notdienst. Jetzt Angebot anfordern!',
};

export default function HausmeisterservicePage() {
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
      title="Zuverlässiger Hausmeisterservice in Hamburg"
      subtitle="Ihr Partner vor Ort"
      description="Treppenhausreinigung • Winterdienst • Kleinreparaturen • 24h-Notdienst"
      heroImage="/images/services/hausmeister-hero.jpg"
      features={benefits}
      content={
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Hausmeister-Leistungen im Überblick</h2>
            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Treppenhausreinigung</h3>
                  <p className="text-gray-600 mb-2">
                    Regelmäßige Reinigung von Treppenhäusern, Fluren, Eingangsbereichen und Aufzügen. Wöchentlich, 14-tägig oder nach Bedarf. Für gepflegte Eingangsbereiche, die Ihre Mieter schätzen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Snowflake className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Winterdienst – Schnee & Streu</h3>
                  <p className="text-gray-600 mb-2">
                    Professioneller Winterdienst für Unternehmen, Wohnanlagen und öffentliche Gebäude. Wir räumen und streuen ab 6:00 Uhr morgens – zuverlässig bei jedem Wetter.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Kleinreparaturen</h3>
                  <p className="text-gray-600 mb-2">
                    Schnelle und unkomplizierte Reparaturen im Haus: Defekte Türschlösser, tropfende Wasserhähne, kaputte Lampen, lose Fliesen. Unser Hausmeister-Team hilft sofort.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <UserCheck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Objektbetreuung</h3>
                  <p className="text-gray-600 mb-2">
                    Ihr persönlicher Objektbetreuer kümmert sich regelmäßig um Ihre Immobilie. Kontrollgänge, Mängelmeldungen, Koordination von Handwerkern – alles aus einer Hand.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">24h-Notdienst</h3>
                  <p className="text-gray-600 mb-2">
                    Heizungsausfall, Wasserschaden, defekte Haustür? Unser 24h-Notdienst ist immer erreichbar – auch am Wochenende und an Feiertagen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kennen Sie das?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">❌</span>
                <span>Mieter beschweren sich über schmutzige Treppenhäuser</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">❌</span>
                <span>Bei Schneefall ist niemand zum Räumen verfügbar</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">❌</span>
                <span>Kleine Reparaturen dauern Wochen</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">❌</span>
                <span>Sie müssen viele Dienstleister koordinieren</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">❌</span>
                <span>Notfälle am Wochenende bleiben ungelöst</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Preise & Pakete</h2>
            <div className="overflow-x-auto mb-12">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Leistung</th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Basis</th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-primary uppercase tracking-wider">Komfort (Beliebt)</th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Treppenhausreinigung</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">4x Monat</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 font-bold">8x Monat</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">12x Monat</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Winterdienst</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">Nach Aufwand</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 font-bold">Flatrate</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">Flatrate + Streugut</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kontrollgänge</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">Monatlich</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 font-bold">Wöchentlich</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">Täglich</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kleinreparaturen</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">-</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 font-bold">5 Std. inkl.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">10 Std. inkl.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">24h-Notdienst</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">✓</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 font-bold">✓ (Prio)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">✓ (VIP)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">So starten wir die Betreuung</h2>
            <ol className="relative border-l border-gray-200 ml-3 space-y-10">
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">1</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Objektbegehung</h3>
                <p className="text-gray-600">Wir besichtigen Ihre Immobilie gemeinsam, um den genauen Bedarf zu ermitteln und Besonderheiten aufzunehmen.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">2</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Individuelles Angebot</h3>
                <p className="text-gray-600">Sie erhalten ein maßgeschneidertes Angebot mit transparenten Preisen und klarem Leistungsverzeichnis.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">3</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Schlüsselübergabe & Start</h3>
                <p className="text-gray-600">Nach Vertragsabschluss erfolgt die Schlüsselübergabe und Einweisung unseres Hausmeisters vor Ort.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">4</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Laufende Betreuung</h3>
                <p className="text-gray-600">Wir kümmern uns proaktiv um Ihr Objekt und berichten regelmäßig über durchgeführte Arbeiten.</p>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Impressionen unserer Objekte</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/images/services/hausmeister-1.jpg" 
                  alt="Gepflegte Außenanlagen" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/images/services/hausmeister-2.jpg" 
                  alt="Technische Kontrolle" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/images/services/hausmeister-3.jpg" 
                  alt="Winterdienst im Einsatz" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufig gestellte Fragen</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Was beinhaltet der 24h-Notdienst?</h3>
                <p className="text-gray-600">Unser Notdienst ist für dringende Fälle wie Rohrbruch, Heizungsausfall, Stromausfall oder Sturmschäden gedacht. Wir kommen sofort, um den Schaden zu begrenzen und Erstmaßnahmen einzuleiten.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Wie werden Kleinreparaturen abgerechnet?</h3>
                <p className="text-gray-600">Kleinreparaturen werden entweder nach tatsächlichem Zeitaufwand oder im Rahmen eines Pauschalvertrags (z.B. Komfort-Paket) abgerechnet. Materialkosten werden separat ausgewiesen.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Kann ich Leistungen flexibel anpassen?</h3>
                <p className="text-gray-600">Ja, unsere Verträge sind modular aufgebaut. Sie können beispielsweise den Winterdienst saisonal hinzubuchen oder die Reinigungsintervalle bei Bedarf erhöhen.</p>
              </div>
            </div>
          </section>
        </div>
      }
    />
  );
}
