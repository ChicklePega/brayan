import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { Wind, ShieldCheck, Fan, Filter } from 'lucide-react';

export const metadata = {
  title: 'Lüftungsreinigung Hamburg | VDI 6022 | Happy Garten',
  description: 'Professionelle Lüftungsreinigung in Hamburg nach VDI 6022. Hygieneinspektionen, Küchenabluft & Filterwechsel. Jetzt Angebot anfordern!',
};

export default function LueftungsreinigungPage() {
  const benefits = [
    'VDI 6022 konforme Reinigung aller Lüftungsanlagen',
    'Hygieneinspektionen mit vollständiger Dokumentation',
    'Küchenabluft-Reinigung für Gastronomie & Kantinen',
    'Filterwechsel nach Herstellervorgaben',
    'Zertifizierte Techniker mit jahrelanger Erfahrung',
    'Compliance-Sicherheit für Behörden und Versicherungen',
  ];

  return (
    <ServicePageTemplate
      title="Professionelle Lüftungsreinigung in Hamburg – VDI 6022 zertifiziert"
      subtitle="Hygieneinspektionen • Küchenabluft • Filterwechsel • Dokumentation"
      description="Lüftungsanlagen sammeln über die Zeit Staub, Pollen, Bakterien und Schimmelsporen. Ohne regelmäßige Reinigung verschlechtert sich die Luftqualität, Energiekosten steigen und gesundheitliche Risiken für Mitarbeiter nehmen zu."
      heroImage="/images/services/lueftungsreinigung-hero.jpg"
      features={benefits}
      content={
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Leistungen im Bereich Lüftungshygiene</h2>
            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Wind className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reinigung von Lüftungsanlagen</h3>
                  <p className="text-gray-600 mb-2">
                    Professionelle Reinigung aller Komponenten: Luftkanäle, Filter, Ventilatoren, Luftauslässe. Mit speziellen Bürsten, Hochdruckreinigung und HEPA-Filtersaugern entfernen wir alle Verunreinigungen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Fan className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Küchenabluft-Reinigung</h3>
                  <p className="text-gray-600 mb-2">
                    Spezialisierte Reinigung für Gastronomiebetriebe: Entfernung von Fettablagerungen, Geruchsbeseitigung, Brandschutz. Erfüllt alle Anforderungen der Berufsgenossenschaft.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hygieneinspektionen VDI 6022</h3>
                  <p className="text-gray-600 mb-2">
                    Gesetzlich vorgeschriebene Inspektionen nach VDI 6022: Visuelle Kontrolle, Probenahmen, mikrobiologische Analysen, Zertifizierung. Alle Protokolle digital für Behörden verfügbar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Filter className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Filterwechsel & Wartung</h3>
                  <p className="text-gray-600 mb-2">
                    Regelmäßiger Austausch von Luftfiltern nach Herstellervorgaben. Verlängert die Lebensdauer Ihrer Anlage und senkt Energiekosten.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Was ist VDI 6022?</h2>
            <p className="mb-4 text-gray-600">
              Die VDI 6022 ist eine deutsche Richtlinie für Hygieneanforderungen an Raumlufttechnische Anlagen (RLT). Sie definiert:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li><strong>Inspektionsintervalle:</strong> Mindestens alle 2 Jahre</li>
              <li><strong>Hygienestandards:</strong> Grenzwerte für Bakterien, Schimmel, Staub</li>
              <li><strong>Dokumentationspflicht:</strong> Alle Inspektionen müssen protokolliert werden</li>
              <li><strong>Verantwortlichkeit:</strong> Betreiber sind für Einhaltung haftbar</li>
            </ul>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h4 className="font-bold text-red-700 mb-2">Rechtliche Konsequenzen bei Nichteinhaltung:</h4>
              <ul className="list-none space-y-1 text-red-600 text-sm">
                <li>⚠️ Bußgelder durch Gesundheitsamt</li>
                <li>⚠️ Haftungsrisiken bei Gesundheitsschäden</li>
                <li>⚠️ Versicherungsschutz kann erlöschen</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Prüfintervalle nach VDI 6022</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Anlagentyp / Komponente</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Hygieneinspektion</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Hygienecheck</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">RLT-Anlagen mit Befeuchtung</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Alle 2 Jahre</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Alle 2 Jahre</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">RLT-Anlagen ohne Befeuchtung</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Alle 3 Jahre</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Alle 2 Jahre</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Luftbefeuchter</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Alle 2 Jahre</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Halbjährlich</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Rückkühlwerke</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Alle 2 Jahre</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Vierteljährlich</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Ablauf einer Hygieneinspektion</h2>
            <ol className="relative border-l border-gray-200 ml-3 space-y-10">
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">1</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Visuelle Kontrolle</h3>
                <p className="text-gray-600">Überprüfung aller zugänglichen Anlagenkomponenten auf Verschmutzung, Korrosion und Beschädigung.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">2</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Mikrobiologische Probenahme</h3>
                <p className="text-gray-600">Entnahme von Abklatschproben an relevanten Stellen sowie Wasserproben bei Befeuchteranlagen.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">3</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Laboranalyse</h3>
                <p className="text-gray-600">Auswertung der Proben in einem akkreditierten Fachlabor auf Bakterien, Pilze und Hefen.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">4</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Prüfbericht & Zertifikat</h3>
                <p className="text-gray-600">Erstellung eines rechtssicheren Prüfberichts mit Handlungsempfehlungen und Zertifikat bei Bestehen.</p>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Einblick in unsere Arbeit</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/images/services/lueftungsreinigung-1.jpg" 
                  alt="Inspektion von Lüftungskanälen" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/images/services/lueftungsreinigung-2.jpg" 
                  alt="Reinigung von RLT-Anlagen" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/images/services/lueftungsreinigung-3.jpg" 
                  alt="Filterwechsel und Wartung" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufig gestellte Fragen</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Muss ich meine Lüftungsanlage reinigen lassen?</h3>
                <p className="text-gray-600">Ja, als Betreiber einer RLT-Anlage sind Sie gesetzlich verpflichtet, die Hygieneanforderungen der VDI 6022 einzuhalten, um die Gesundheit der Nutzer nicht zu gefährden.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Wie lange dauert eine Inspektion?</h3>
                <p className="text-gray-600">Je nach Größe der Anlage dauert die Inspektion vor Ort meist zwischen 2 und 6 Stunden. Die Laborergebnisse liegen in der Regel nach 7-10 Tagen vor.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Können Sie auch Mängel beheben?</h3>
                <p className="text-gray-600">Ja, wir führen nicht nur Inspektionen durch, sondern bieten auch die fachgerechte Reinigung und Desinfektion sowie den Austausch von Filtern an.</p>
              </div>
            </div>
          </section>
        </div>
      }
    />
  );
}
