import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { Factory, Wind, Truck, Clock, ShieldAlert } from 'lucide-react';

export const metadata = {
  title: 'Industriereinigung & Facility Services Hamburg | Happy Garten',
  description: 'Spezialisierte Services für Produktion & Industrie: VDI 6022 Lüftung, Hallenreinigung, Außenanlagenpflege & Winterdienst für 24/7 Betriebe.',
};

export default function ProduktionIndustriePage() {
  const benefits = [
    'VDI 6022 Lüftungsreinigung für Produktionssicherheit',
    'Reinigung ohne Produktionsunterbrechung (24/7)',
    'Spezialreinigung von Industriehallen & Böden',
    'Winterdienst für LKW-Zufahrten & Ladezonen',
    'Pflege von Grünflächen & Außenanlagen',
    'Einhaltung von Arbeitsschutzrichtlinien',
  ];

  return (
    <ServicePageTemplate
      title="Facility Services für Produktion & Industrie"
      subtitle="VDI 6022 Lüftung • Hallenreinigung • Außenanlagen • Winterdienst"
      description="In der Industrie zählt Effizienz und Sicherheit. Wir sorgen dafür, dass Ihre Produktion nicht stillsteht – mit sauberen Lüftungsanlagen, gepflegten Außenbereichen und sicheren Verkehrswegen."
      heroImage="/images/branchen/industrie-hero.jpg"
      features={benefits}
      content={
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Lösungen für Industriebetriebe</h2>
            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Wind className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">VDI 6022 Lüftungsreinigung – Prozesssicherheit</h3>
                  <p className="text-gray-600 mb-2">
                    Verunreinigte Lüftungsanlagen können die Produktqualität gefährden und Brandrisiken erhöhen. Wir reinigen nach VDI 6022 und dokumentieren alles für Ihre Audits.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Winterdienst für Logistikflächen</h3>
                  <p className="text-gray-600 mb-2">
                    Just-in-Time Lieferungen dulden keinen Schnee. Wir räumen LKW-Zufahrten, Ladezonen und Mitarbeiterparkplätze zuverlässig – auch bei starkem Schneefall.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Factory className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hallenreinigung & Außenpflege</h3>
                  <p className="text-gray-600 mb-2">
                    Saubere Produktionshallen erhöhen die Arbeitssicherheit. Gepflegte Außenanlagen sind die Visitenkarte Ihres Unternehmens für Kunden und Investoren.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-start gap-4">
              <ShieldAlert className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Arbeitssicherheit & Brandschutz</h2>
                <p className="mb-4 text-gray-600">
                  Unsere Dienstleistungen unterstützen direkt Ihre Sicherheitskonzepte:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Brandschutzreinigung von Lüftungskanälen</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Rutschsichere Böden durch Spezialreinigung</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Freie Fluchtwege im Winter</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Dokumentation für Berufsgenossenschaften</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-8 rounded-xl border border-blue-100">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Keine Betriebsunterbrechungen</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Wir wissen, dass Ihre Produktion laufen muss. Deshalb arbeiten wir flexibel: Nachts, am Wochenende oder in betriebsarmen Zeiten. Unsere Teams sind geschult, sich sicher in Industrieumgebungen zu bewegen.
            </p>
          </section>
        </div>
      }
    />
  );
}
