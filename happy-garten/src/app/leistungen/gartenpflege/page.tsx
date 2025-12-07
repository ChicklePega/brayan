import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { Flower2, Scissors, Trees, Trash2, Sprout, Droplets } from 'lucide-react';

export const metadata = {
  title: 'Gartenpflege Hamburg | Happy Garten',
  description: 'Professionelle Gartenpflege in Hamburg: Rasenpflege, Heckenschnitt, Laubentsorgung & saisonale Bepflanzung. Jetzt Angebot anfordern!',
};

export default function GartenpflegePage() {
  const benefits = [
    'Regelmäßige Grünflächenpflege – Perfekte Außenbereiche das ganze Jahr',
    'Rasenpflege – Mähen, Düngen, Vertikutieren',
    'Heckenschnitt & Formschnitt – Professionell und präzise',
    'Laubentsorgung – Schnell und zuverlässig im Herbst',
    'Saisonale Bepflanzung – Immer ein schöner Anblick',
    'Individuelle Jahresverträge – Planbare Kosten, feste Termine',
  ];

  return (
    <ServicePageTemplate
      title="Professionelle Gartenpflege in Hamburg"
      subtitle="Grüne Außenanlagen das ganze Jahr"
      description="Rasenpflege • Heckenschnitt • Laubentsorgung • Saisonale Bepflanzung"
      heroImage="/images/services/garten-hero.jpg"
      features={benefits}
      content={
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Gartenpflege-Leistungen im Überblick</h2>
            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Sprout className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Grünflächenpflege</h3>
                  <p className="text-gray-600 mb-2">
                    Regelmäßige Pflege aller Grünflächen: Rasenmähen, Unkrautentfernung, Bewässerung, Düngung. Wir sorgen für gesunde und attraktive Außenbereiche.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Flower2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Rasenpflege</h3>
                  <p className="text-gray-600 mb-2">
                    Professionelle Rasenpflege für einen gesunden, grünen Rasen: Mähen, Vertikutieren, Aerifizieren, Düngen, Nachsäen. Auch im Sommer saftig grün.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Scissors className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Heckenschnitt & Formschnitt</h3>
                  <p className="text-gray-600 mb-2">
                    Präziser Schnitt von Hecken, Sträuchern und Formgehölzen. Für klare Linien und gepflegtes Erscheinungsbild.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Trees className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Baumschnitt & Baumpflege</h3>
                  <p className="text-gray-600 mb-2">
                    Fachgerechter Rückschnitt von Bäumen, Totholzentfernung, Kronenpflege. Sicherheit und Gesundheit Ihrer Bäume.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Trash2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Laubentsorgung</h3>
                  <p className="text-gray-600 mb-2">
                    Schnelle und gründliche Laubentsorgung im Herbst. Wir entfernen Laub von Rasenflächen, Wegen und Parkplätzen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Droplets className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Bewässerung</h3>
                  <p className="text-gray-600 mb-2">
                    Installation und Wartung von Bewässerungssystemen. Automatische Bewässerung spart Zeit und Wasser.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Gartenpflege-Kalender</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Jahreszeit</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Monate</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Hauptaufgaben</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Frühling</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">März - Mai</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Rückschnitt, Vertikutieren, Düngen, Neupflanzung</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sommer</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Juni - August</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Regelmäßiges Mähen, Bewässerung, Unkrautentfernung, Heckenschnitt</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Herbst</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Sept - Nov</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Laubentsorgung, Herbstschnitt, Wintervorbereitung, Blumenzwiebeln setzen</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Winter</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Dez - Feb</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Gehölzschnitt, Baumpflege, Schneeräumung, Planung</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Ihr Weg zum Traumgarten</h2>
            <ol className="relative border-l border-gray-200 ml-3 space-y-10">
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">1</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Beratung vor Ort</h3>
                <p className="text-gray-600">Wir schauen uns Ihren Garten an, besprechen Ihre Wünsche und prüfen die Gegebenheiten (Boden, Licht, Bestand).</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">2</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Pflegeplan & Angebot</h3>
                <p className="text-gray-600">Wir erstellen einen individuellen Pflegeplan (z.B. 14-tägig) oder ein Angebot für einmalige Arbeiten.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">3</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Fachgerechte Ausführung</h3>
                <p className="text-gray-600">Unsere Gärtner rücken mit professionellem Gerät an und erledigen die Arbeiten sauber und effizient.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">4</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Entsorgung & Abschluss</h3>
                <p className="text-gray-600">Wir nehmen alle Grünabfälle mit und hinterlassen Ihren Garten in perfektem Zustand.</p>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Gartenimpressionen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/images/services/garten-1.jpg" 
                  alt="Gepflegter Rasen" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/images/services/garten-2.jpg" 
                  alt="Heckenschnitt" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/images/services/garten-3.jpg" 
                  alt="Beetpflege" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufig gestellte Fragen</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Entsorgen Sie den Grünschnitt?</h3>
                <p className="text-gray-600">Ja, selbstverständlich. Wir nehmen Laub, Astwerk und Rasenschnitt mit und entsorgen ihn fachgerecht bei zertifizierten Kompostieranlagen.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Bringen Sie eigene Geräte mit?</h3>
                <p className="text-gray-600">Ja, wir arbeiten ausschließlich mit unseren eigenen, professionellen Akku- und Motorgeräten. Sie müssen nichts bereitstellen.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Kann ich ein Abo für das Rasenmähen buchen?</h3>
                <p className="text-gray-600">Ja, das ist unser beliebtestes Modell. Wir kommen in der Saison (April bis Oktober) automatisch alle 14 Tage zum Mähen.</p>
              </div>
            </div>
          </section>
        </div>
      }
    />
  );
}
