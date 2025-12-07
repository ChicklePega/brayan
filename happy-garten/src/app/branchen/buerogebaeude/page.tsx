import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { Building2, Wind, Coffee, Sparkles, Users } from 'lucide-react';

export const metadata = {
  title: 'Facility Services für Bürogebäude Hamburg | Happy Garten',
  description: 'Rundum-Service für Büros: Tägliche Unterhaltsreinigung, VDI 6022 Lüftung, Pflanzenpflege & Hausmeisterdienste für ein produktives Arbeitsumfeld.',
};

export default function BueroGebaeudePage() {
  const benefits = [
    'Tägliche Unterhaltsreinigung für saubere Arbeitsplätze',
    'VDI 6022 Lüftungsreinigung für konzentriertes Arbeiten',
    'Innenraumbegrünung & Pflanzenpflege',
    'Hausmeisterdienste für schnelle Reparaturen',
    'Fensterreinigung für klaren Durchblick',
    'Repräsentativer Empfangsbereich',
  ];

  return (
    <ServicePageTemplate
      title="Facility Services für Bürogebäude & Office-Center"
      subtitle="Unterhaltsreinigung • VDI 6022 Lüftung • Hausmeister • Pflanzenpflege"
      description="Ein sauberes und funktionierendes Büro ist die Basis für produktives Arbeiten. Wir kümmern uns um alles, was im Hintergrund laufen muss – damit Sie sich auf Ihr Business konzentrieren können."
      heroImage="/images/branchen/buero-hero.jpg"
      features={benefits}
      content={
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Lösungen für moderne Bürowelten</h2>
            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Unterhaltsreinigung – Täglich frisch</h3>
                  <p className="text-gray-600 mb-2">
                    Vom Schreibtisch über die Teeküche bis zu den Sanitäranlagen: Wir sorgen täglich für Sauberkeit und Hygiene. Ein gepflegtes Büro motiviert Mitarbeiter und beeindruckt Kunden.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Wind className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">VDI 6022 Lüftungsreinigung – Frische Luft</h3>
                  <p className="text-gray-600 mb-2">
                    Schlechte Luft macht müde und krank (Sick-Building-Syndrom). Wir reinigen Ihre RLT-Anlagen nach VDI 6022 und sorgen für ein gesundes Raumklima, das die Konzentration fördert.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hausmeister & Technik</h3>
                  <p className="text-gray-600 mb-2">
                    Glühbirne defekt? Tür klemmt? Unser Hausmeister-Service erledigt Kleinreparaturen sofort, bevor sie zum Ärgernis werden. Wir überwachen auch die Haustechnik.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-start gap-4">
              <Users className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Wohlfühlfaktor für Mitarbeiter</h2>
                <p className="mb-4 text-gray-600">
                  Im "War for Talents" ist das Arbeitsumfeld entscheidend. Wir tragen dazu bei:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Gepflegte Grünpflanzen (Hydrokultur-Service)</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Hygienisch reine Kaffeeküchen</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Saubere Fenster für Tageslicht</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Schnelle Reaktion bei Problemen</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-orange-50 p-8 rounded-xl border border-orange-100">
            <div className="flex items-center gap-4 mb-4">
              <Coffee className="w-8 h-8 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">Diskretion & Sicherheit</h2>
            </div>
            <p className="text-gray-600 mb-4">
              In Büros liegen oft sensible Daten. Unser Personal ist polizeilich geprüft, zur Verschwiegenheit verpflichtet und fest angestellt. Wir arbeiten diskret im Hintergrund, oft außerhalb Ihrer Kernarbeitszeiten.
            </p>
          </section>
        </div>
      }
    />
  );
}
