import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { Building, Wrench, Snowflake, FileText, Users } from 'lucide-react';

export const metadata = {
  title: 'Facility Services für Immobilienverwaltung Hamburg | Happy Garten',
  description: 'Rundum-Service für Immobilienverwalter: Treppenhausreinigung, Gartenpflege, Winterdienst & Hausmeisterservice aus einer Hand.',
};

export default function ImmobilienverwaltungPage() {
  const benefits = [
    'Feste Preise über 2-3 Jahre – Planungssicherheit',
    'Ein Ansprechpartner für alle Dienstleistungen',
    'Digitale Dokumentation für Eigentümerversammlungen',
    'Priorität bei Notfällen und Schäden',
    'Kostenrechner für Nebenkosten-Umlagen',
    'Zuverlässige Entlastung im Tagesgeschäft',
  ];

  return (
    <ServicePageTemplate
      title="Professionelle Facility-Services für Immobilienverwaltungen"
      subtitle="Treppenhausreinigung • Gartenpflege • Winterdienst • Hausmeisterservice"
      description="Als Immobilienverwalter haben Sie täglich mit vielen Herausforderungen zu kämpfen. Mit Happy Garten erhalten Sie alle Facility-Services aus einer Hand – für zufriedene Mieter und weniger Stress."
      heroImage="/images/branchen/immobilien-hero.jpg"
      features={benefits}
      content={
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Lösungen für Wohn- & Gewerbeimmobilien</h2>
            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Treppenhausreinigung</h3>
                  <p className="text-gray-600 mb-2">
                    Der erste Eindruck zählt. Mit unserer regelmäßigen Treppenhausreinigung sorgen wir für gepflegte Eingangsbereiche und zufriedene Bewohner. Wöchentlich oder 14-tägig.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Snowflake className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Winterdienst – Haftungssicherheit</h3>
                  <p className="text-gray-600 mb-2">
                    Als Eigentümer oder Verwalter sind Sie für die Verkehrssicherheit verantwortlich. Unser Winterdienst sorgt dafür, dass Gehwege und Zufahrten ab 6 Uhr morgens frei sind.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hausmeisterservice</h3>
                  <p className="text-gray-600 mb-2">
                    Ein fester Hausmeister kennt Ihre Immobilie und kann schnell reagieren. Kleinreparaturen, Kontrollgänge, Koordination von Handwerkern – alles aus einer Hand.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-start gap-4">
              <FileText className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dokumentation für Eigentümerversammlungen</h2>
                <p className="mb-4 text-gray-600">
                  Für Eigentümerversammlungen benötigen Sie transparente Nachweise über alle durchgeführten Arbeiten. Wir liefern Ihnen:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Fotodokumentationen (Vorher/Nachher)</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Protokolle aller Reinigungen</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Kostenaufstellungen nach Objekt</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Jahresberichte mit allen Leistungen</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-8 rounded-xl border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rahmenverträge & Langzeitpartnerschaften</h2>
            <p className="text-gray-600 mb-4">
              Profitieren Sie von langfristigen Rahmenverträgen mit festen Preisen über 2-3 Jahre. Keine jährliche Neuausschreibung, planbare Kosten für Nebenkostenabrechnungen und ein fester Ansprechpartner für alle Objekte.
            </p>
          </section>
        </div>
      }
    />
  );
}
