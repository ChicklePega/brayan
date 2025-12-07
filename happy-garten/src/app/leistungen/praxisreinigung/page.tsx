import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Stethoscope, Activity, ShieldCheck, Microscope, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Praxisreinigung Hamburg | Hygiene nach RKI & VDI 6022 | Happy Garten',
  description: 'Zertifizierte Praxisreinigung in Hamburg. Höchste Hygienestandards für Arztpraxen, Kliniken & Labore. RKI-konform & zuverlässig. Jetzt anfragen!',
};

export default function PraxisreinigungPage() {
  const benefits = [
    'Reinigung nach RKI-Richtlinien und Hygieneplänen',
    'Desinfizierende Oberflächenreinigung',
    'VDI 6022 konforme Lüftungshygiene',
    'Geschultes Personal für medizinische Bereiche',
    'Lückenlose Dokumentation der Reinigungsleistung',
    'Verwendung gelisteter Desinfektionsmittel (VAH/RKI)',
  ];

  return (
    <ServicePageTemplate
      title="Praxisreinigung & Hygiene in Hamburg"
      subtitle="RKI-Konform • Desinfektion • VDI 6022"
      description="Hygiene ist in medizinischen Einrichtungen das oberste Gebot. Wir sorgen für mikrobiologisch einwandfreie Sauberkeit in Ihrer Praxis, Klinik oder Pflegeeinrichtung – zuverlässig, diskret und zertifiziert."
      heroImage="/images/services/praxisreinigung-hero.jpg"
      features={benefits}
      content={
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Höchste Hygienestandards für Ihre Patienten</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              In Arztpraxen, Therapiezentren und Kliniken reicht "sauber" nicht aus – es muss hygienisch rein sein. Keime, Bakterien und Viren stellen ein Risiko für Patienten und Personal dar. Happy Garten ist Ihr spezialisierter Partner für die Praxisreinigung in Hamburg. Wir arbeiten streng nach den Richtlinien des Robert-Koch-Instituts (RKI) und Ihren individuellen Hygieneplänen.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Unser Team ist speziell für die Anforderungen im Gesundheitswesen geschult. Wir wissen, worauf es im Behandlungszimmer, im Wartebereich und im Labor ankommt. Mit validierten Verfahren und gelisteten Desinfektionsmitteln sorgen wir für maximale Sicherheit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Unser Leistungsspektrum im Gesundheitswesen</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Arztpraxen & MVZ</h3>
                <p className="text-gray-600 text-sm">
                  Tägliche Unterhaltsreinigung und Desinfektion von Behandlungsräumen, Empfang und Sanitärbereichen außerhalb Ihrer Sprechzeiten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Physiotherapie & Reha</h3>
                <p className="text-gray-600 text-sm">
                  Reinigung von Trainingsgeräten, Liegen und Therapieräumen. Wir sorgen für eine Wohlfühlatmosphäre für Ihre Patienten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Labore & Reinräume</h3>
                <p className="text-gray-600 text-sm">
                  Spezialreinigung für sensible Bereiche. Wir halten uns strikt an Ihre Protokolle und Sicherheitsvorschriften.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Lüftungshygiene (VDI 6022)</h3>
                <p className="text-gray-600 text-sm">
                  Besonders wichtig in Praxen: Saubere Luft. Wir inspizieren und reinigen Ihre RLT-Anlagen gemäß VDI 6022.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Reinigungsbereiche & Frequenzen</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Bereich</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Häufigkeit</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Maßnahme</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Empfang & Wartezimmer</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Täglich</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Reinigung & Sichtdesinfektion</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Behandlungsräume</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Täglich</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Scheuerwischdesinfektion</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sanitäranlagen</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Täglich (ggf. mehrmals)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Desinfizierende Grundreinigung</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Oberflächen (High-Touch)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Täglich</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Gezielte Desinfektion (Türgriffe etc.)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Unser Hygiene-Konzept in 4 Schritten</h2>
            <ol className="relative border-l border-gray-200 ml-3 space-y-10">
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-4 ring-white text-white font-bold">1</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Analyse & Hygieneplan</h3>
                <p className="text-gray-600">Wir analysieren Ihre Praxisräume und erstellen einen individuellen Hygieneplan gemäß RKI-Richtlinien.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-4 ring-white text-white font-bold">2</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Einweisung des Personals</h3>
                <p className="text-gray-600">Unser festes Reinigungsteam wird spezifisch auf Ihr Objekt und Ihre Desinfektionsmittel eingewiesen.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-4 ring-white text-white font-bold">3</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Laufende Reinigung & Dokumentation</h3>
                <p className="text-gray-600">Tägliche Durchführung der Maßnahmen mit lückenloser Dokumentation in den Nachweislisten.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-4 ring-white text-white font-bold">4</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Qualitätskontrolle</h3>
                <p className="text-gray-600">Regelmäßige Checks durch unsere Objektleiter und bei Bedarf mikrobiologische Abklatschproben.</p>
              </li>
            </ol>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Einblick in unsere Praxisreinigung</h2>
            <div className="space-y-24">
              {/* Item 1: Image Left, Text Right */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/images/services/praxisreinigung-1.jpg" 
                      alt="Hygienische Sauberkeit" 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">Hygienische Sauberkeit</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    In medizinischen Einrichtungen ist Hygiene oberstes Gebot. Wir garantieren durch validierte Verfahren und geschultes Personal höchste Sauberkeitsstandards für Ihre Praxis.
                  </p>
                </div>
              </div>

              {/* Item 2: Text Left, Image Right */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/images/services/praxisreinigung-2.jpg" 
                      alt="Desinfektion von Oberflächen" 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">Desinfektion von Oberflächen</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Kritische Kontaktflächen wie Türgriffe, Empfangstresen und Wartebereiche werden von uns gezielt und regelmäßig desinfiziert, um Infektionsketten wirksam zu unterbrechen.
                  </p>
                </div>
              </div>

              {/* Item 3: Image Left, Text Right */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/images/services/praxisreinigung-3.jpg" 
                      alt="Saubere Behandlungsräume" 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">Saubere Behandlungsräume</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Ihre Behandlungsräume sind das Herzstück Ihrer Praxis. Wir sorgen dafür, dass sich Patienten und Personal in einer makellos sauberen Umgebung sicher fühlen können.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Qualitätssicherung & Dokumentation</h2>
            <p className="text-gray-700 mb-6">
              Vertrauen ist gut, Kontrolle ist besser. Gerade im Hygienebereich ist Transparenz entscheidend.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Reinigungspläne</h4>
                  <p className="text-gray-600 text-sm">Detaillierte Leistungsverzeichnisse, abgestimmt auf Ihre Praxisabläufe.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Nachweislisten</h4>
                  <p className="text-gray-600 text-sm">Tägliche Dokumentation der durchgeführten Reinigungs- und Desinfektionsmaßnahmen.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Farbcodierung</h4>
                  <p className="text-gray-600 text-sm">Vier-Farben-System zur Vermeidung von Keimverschleppung (z.B. Rot für WC, Blau für Oberflächen).</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufig gestellte Fragen</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Wann findet die Reinigung statt?</h3>
                <p className="text-gray-600">Wir richten uns ganz nach Ihren Sprechzeiten. Die Reinigung erfolgt in der Regel morgens vor Praxisöffnung oder abends nach Schließung, um Ihren Betrieb nicht zu stören.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Welche Reinigungsmittel verwenden Sie?</h3>
                <p className="text-gray-600">Wir nutzen ausschließlich professionelle, VAH-gelistete Desinfektions- und Reinigungsmittel, die materialschonend und wirksam gegen Bakterien, Viren und Pilze sind.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Haben wir feste Reinigungskräfte?</h3>
                <p className="text-gray-600">Ja, Kontinuität ist uns wichtig. Sie erhalten fest zugewiesenes Personal, das mit den Gegebenheiten und Hygieneanforderungen Ihrer Praxis vertraut ist.</p>
              </div>
            </div>
          </section>
        </div>
      }
    />
  );
}
