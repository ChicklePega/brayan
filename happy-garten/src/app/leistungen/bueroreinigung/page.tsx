import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { Sparkles, Eraser, SprayCan, Droplets, Trash2 } from 'lucide-react';

export const metadata = {
  title: 'Büroreinigung Hamburg | Happy Garten',
  description: 'Professionelle Büroreinigung in Hamburg: Unterhaltsreinigung, Glasreinigung, Grundreinigung & Desinfektion. Jetzt Angebot anfordern!',
};

export default function BueroreinigungPage() {
  const benefits = [
    'Regelmäßige Unterhaltsreinigung – Täglich, wöchentlich oder nach Bedarf',
    'Glasreinigung – Streifenfreie Fenster und Glasflächen',
    'Grundreinigung – Tiefenreinigung für Ihr Büro',
    'Desinfektion – Hygienische Arbeitsplätze und Sanitärräume',
    'Flexible Reinigungszeiten – Vor, während oder nach Geschäftszeiten',
    'Umweltfreundliche Reinigungsmittel – Für gesunde Raumluft',
  ];

  return (
    <ServicePageTemplate
      title="Professionelle Büroreinigung in Hamburg"
      subtitle="Saubere Arbeitsplätze für produktive Teams"
      description="Unterhaltsreinigung • Glasreinigung • Grundreinigung • Desinfektion"
      heroImage="/images/services/buero-hero.jpg"
      features={benefits}
      content={
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Reinigungsleistungen für Büros & Gewerbe</h2>
            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Unterhaltsreinigung</h3>
                  <p className="text-gray-600 mb-2">
                    Regelmäßige Reinigung Ihrer Büroräume: Staubsaugen, Wischen, Müllentsorgung, Oberflächen-Reinigung. Täglich, wöchentlich oder individuell nach Ihren Bedürfnissen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Eraser className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Glasreinigung</h3>
                  <p className="text-gray-600 mb-2">
                    Professionelle Reinigung von Fenstern, Glasfassaden und Glastrennwänden. Innen und außen, streifenfrei und gründlich.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <SprayCan className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Grundreinigung</h3>
                  <p className="text-gray-600 mb-2">
                    Intensive Tiefenreinigung für Ihr Büro: Teppichshampoonierung, Polsterreinigung, Fußbodenaufbereitung. Ideal 1-2x pro Jahr oder bei Umzug.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Droplets className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Desinfektion</h3>
                  <p className="text-gray-600 mb-2">
                    Professionelle Desinfektion von Oberflächen, Türgriffen, Tastaturen, Sanitäranlagen. Besonders wichtig in Grippe- und Erkältungszeiten.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Trash2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sanitärreinigung</h3>
                  <p className="text-gray-600 mb-2">
                    Hygienische Reinigung und Desinfektion von Toiletten, Waschbecken, Urinalen. Mit professionellen Reinigungsmitteln für langanhaltende Sauberkeit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Reinigungsintervalle & Leistungen</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Bereich</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Täglich / 2-tägig</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Wöchentlich</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Arbeitsplätze</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Mülleimer leeren, Tische feucht wischen, Griffspuren entfernen</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Monitore & Tastaturen reinigen, Stuhlbeine wischen</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Böden</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Saugen (Teppich) oder Feuchtwischen (Hartböden)</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Gründliche Nassreinigung, Fußleisten abwischen</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sanitär</td>
                    <td className="px-6 py-4 text-sm text-gray-600">WC/Urinale reinigen, Waschbecken, Spiegel, Verbrauchsmaterial auffüllen</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Fliesen abwaschen, Türen & Klinken desinfizieren</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Küche</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Spülmaschine ein/ausräumen, Arbeitsflächen wischen, Spüle reinigen</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Kühlschrank auswischen, Mikrowelle reinigen, Schrankfronten</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Unser Qualitätsversprechen</h2>
            <ol className="relative border-l border-gray-200 ml-3 space-y-10">
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">1</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Feste Reinigungskräfte</h3>
                <p className="text-gray-600">Kein ständiger Wechsel. Sie bekommen ein festes Team, das Ihre Räumlichkeiten und Wünsche genau kennt.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">2</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Vier-Augen-Prinzip</h3>
                <p className="text-gray-600">Unsere Objektleiter kontrollieren regelmäßig die Reinigungsleistung und sind Ihr direkter Ansprechpartner.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">3</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Umweltfreundliche Mittel</h3>
                <p className="text-gray-600">Wir setzen auf biologisch abbaubare Reinigungsmittel und moderne Dosiersysteme zum Schutz der Umwelt.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">4</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Transparente Dokumentation</h3>
                <p className="text-gray-600">Auf Wunsch führen wir Leistungsnachweise, damit Sie immer sehen, wann was gereinigt wurde.</p>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Einblick in unsere Büroreinigung</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/images/services/buero-1.jpg" 
                  alt="Saubere Arbeitsplätze" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/images/services/buero-2.jpg" 
                  alt="Konferenzraum Reinigung" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/images/services/buero-3.jpg" 
                  alt="Sanitärhygiene" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufig gestellte Fragen</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Wann findet die Reinigung statt?</h3>
                <p className="text-gray-600">Ganz wie Sie wünschen. Meistens reinigen wir früh morgens (ab 5:00 Uhr) oder abends (ab 17:00 Uhr), um Ihren Betrieb nicht zu stören.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Bringen Sie Reinigungsmittel mit?</h3>
                <p className="text-gray-600">Ja, wir bringen alle benötigten Reinigungsmittel, Tücher und Geräte (Staubsauger etc.) mit. Das ist im Preis inklusive.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Wie wird abgerechnet?</h3>
                <p className="text-gray-600">Wir vereinbaren in der Regel eine monatliche Pauschale, die auf den Quadratmetern, der Häufigkeit und dem Leistungsverzeichnis basiert.</p>
              </div>
            </div>
          </section>
        </div>
      }
    />
  );
}
