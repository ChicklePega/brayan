import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { ChefHat, Wind, Flower2, Clock, FileCheck } from 'lucide-react';

export const metadata = {
  title: 'Facility Services für Hotels & Gastronomie Hamburg | Happy Garten',
  description: 'Spezialisierte Facility-Services für Hotels & Restaurants: Küchenabluft, Lüftungsreinigung, Gartenpflege & 24h-Notdienst. Jetzt anfragen!',
};

export default function HotelsGastronomiePage() {
  const benefits = [
    'Küchenabluft-Reinigung nach DGUV Vorschrift',
    'VDI 6022 Zertifikate für Lüftungsanlagen',
    '24h-Notdienst – Auch am Wochenende',
    'Gepflegte Außenanlagen für den ersten Eindruck',
    'Digitale Dokumentation für Behörden',
    'Geruchsneutralisation und Hygiene',
  ];

  return (
    <ServicePageTemplate
      title="Spezialisierte Facility-Services für Hotels, Restaurants & Kantinen"
      subtitle="Küchenabluft • Lüftungsreinigung • Gartenpflege • 24h-Notdienst"
      description="In der Gastronomie und Hotellerie zählen Hygiene, Sicherheit und ein makelloses Erscheinungsbild. Ihre Gäste erwarten höchste Standards – und das Gesundheitsamt auch."
      heroImage="/images/branchen/hotels-hero.jpg"
      features={benefits}
      content={
        <div className="space-y-12">
          <section className="bg-red-50 p-8 rounded-xl border border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Typische Herausforderungen in der Branche</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">❌</span>
                <span>Fettablagerungen in Küchenabluft → Brandgefahr</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">❌</span>
                <span>Hygieneinspektionen durch Gesundheitsamt → Bußgelder</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">❌</span>
                <span>Geruchsbildung → Unangenehm für Gäste</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">❌</span>
                <span>Ungepflegte Außenanlagen → Schlechter erster Eindruck</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">❌</span>
                <span>Notfälle außerhalb der Öffnungszeiten → Keine Ansprechpartner</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Lösungen für Hotels & Restaurants</h2>
            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <ChefHat className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Küchenabluft-Reinigung – Pflicht für Gastronomen</h3>
                  <p className="text-gray-600 mb-2">
                    Die Reinigung der Küchenabluft ist gesetzlich vorgeschrieben und dient dem Brandschutz. Fettablagerungen in Abzugshauben und Lüftungskanälen sind hochentzündlich. Wir reinigen Ihre Küchenabluft professionell und dokumentiert.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Wind className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Lüftungsreinigung & VDI 6022 für Hotels</h3>
                  <p className="text-gray-600 mb-2">
                    Lüftungsanlagen in Hotels und Konferenzräumen müssen nach VDI 6022 regelmäßig inspiziert werden. Wir übernehmen die komplette Reinigung, Inspektion und Zertifizierung.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Flower2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Gartenpflege & Außenbereiche</h3>
                  <p className="text-gray-600 mb-2">
                    Der Außenbereich ist die Visitenkarte Ihres Hotels. Wir sorgen für gepflegte Grünflächen, saisonale Bepflanzung und attraktive Eingangsbereiche.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">24h-Notdienst für Gastronomie</h3>
                  <p className="text-gray-600 mb-2">
                    Heizungsausfall, Wasserschaden oder defekte Kühlanlage? Unser 24h-Notdienst ist auch am Wochenende für Sie da.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-start gap-4">
              <FileCheck className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hygiene-Compliance & Dokumentation</h2>
                <p className="mb-4 text-gray-600">
                  Das Gesundheitsamt und die Berufsgenossenschaft fordern lückenlose Dokumentation aller Reinigungs- und Wartungsarbeiten. Mit Happy Garten sind Sie auf der sicheren Seite:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Alle Reinigungen werden protokolliert</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> VDI 6022 Zertifikate</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Küchenabluft-Reinigung nach DGUV</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Digitale Dokumentation</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      }
    />
  );
}
