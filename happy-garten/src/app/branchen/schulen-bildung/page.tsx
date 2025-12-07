import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { GraduationCap, Wind, Snowflake, Calendar, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Facility Services für Schulen & Bildung Hamburg | Happy Garten',
  description: 'Sichere & saubere Lernumgebungen: VDI 6022 Lüftungsreinigung, Winterdienst, Ferienreinigung & Gartenpflege für Schulen in Hamburg.',
};

export default function SchulenBildungPage() {
  const benefits = [
    'VDI 6022 konforme Lüftungsreinigung für gesunde Luft',
    'Zuverlässiger Winterdienst vor Schulbeginn (ab 6:00 Uhr)',
    'Gründliche Ferienreinigung in allen Schulferien',
    'VOB-konforme Angebote und Verträge',
    'Dokumentation für Gesundheitsamt und Behörden',
    'Sichere Schulwege und gepflegte Pausenhöfe',
  ];

  return (
    <ServicePageTemplate
      title="Professionelle Facility-Services für Schulen & Bildungseinrichtungen"
      subtitle="VDI 6022 Lüftungsreinigung • Winterdienst • Ferienreinigung • Gartenpflege"
      description="Schulen, Hochschulen und Bildungseinrichtungen haben besondere Anforderungen an Hygiene, Sicherheit und Gesundheitsschutz. Wir kennen die gesetzlichen Vorgaben und setzen sie professionell um."
      heroImage="/images/branchen/schulen-hero.jpg"
      features={benefits}
      content={
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Lösungen für Bildungseinrichtungen</h2>
            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Wind className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">VDI 6022 Lüftungsreinigung – Gesunde Luftqualität</h3>
                  <p className="text-gray-600 mb-2">
                    In Klassenzimmern ist gute Luftqualität essentiell. Die VDI 6022 schreibt regelmäßige Hygieneinspektionen vor. Wir sorgen für saubere Luft und Compliance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Snowflake className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Winterdienst – Sichere Schulwege</h3>
                  <p className="text-gray-600 mb-2">
                    Die Verkehrssicherungspflicht liegt bei der Schule. Unser Winterdienst sorgt dafür, dass Schulwege, Pausenhöfe und Parkplätze ab 6 Uhr morgens frei sind – vor Schulbeginn.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ferienreinigung – Grundreinigung</h3>
                  <p className="text-gray-600 mb-2">
                    Nutzen Sie die Ferienzeiten für eine gründliche Grundreinigung: Klassenzimmer, Flure, Sanitäranlagen, Turnhallen. Wir reinigen, während die Schüler nicht da sind.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Dokumentation für Gesundheitsamt</h2>
                <p className="mb-4 text-gray-600">
                  Das Gesundheitsamt kontrolliert regelmäßig Hygiene-Standards. Mit Happy Garten sind Sie auf der sicheren Seite:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> VDI 6022 Zertifikate</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Reinigungsprotokolle mit Datum</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Dokumentation von Desinfektion</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Digitale Ablage aller Unterlagen</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-green-50 p-8 rounded-xl border border-green-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rahmenverträge für öffentliche Auftraggeber</h2>
            <p className="text-gray-600 mb-4">
              Wir kennen die Anforderungen öffentlicher Ausschreibungen und bieten VOB-konforme Verträge, transparente Preisgestaltung und Referenzen von anderen Schulen in Hamburg.
            </p>
          </section>
        </div>
      }
    />
  );
}
