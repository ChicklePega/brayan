import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { HeartPulse, Wind, Stethoscope, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Facility Services für Gesundheitswesen Hamburg | Happy Garten',
  description: 'Höchste Hygiene-Standards für Arztpraxen & Kliniken: VDI 6022 Lüftungsreinigung, Desinfektionsreinigung & Außenpflege für medizinische Einrichtungen.',
};

export default function GesundheitswesenPage() {
  const benefits = [
    'VDI 6022 Lüftungsreinigung für sterile Bereiche',
    'Desinfizierende Unterhaltsreinigung nach Hygieneplan',
    'Reinigung von Wartezimmern & Behandlungsräumen',
    'Sicherer Winterdienst für Patientenwege',
    'Gepflegte Außenanlagen für den ersten Eindruck',
    'Dokumentierte Hygiene-Nachweise',
  ];

  return (
    <ServicePageTemplate
      title="Facility Services für Gesundheitswesen & Arztpraxen"
      subtitle="VDI 6022 Hygiene • Desinfektion • Praxisreinigung • Außenpflege"
      description="Im Gesundheitswesen ist Hygiene nicht verhandelbar. Wir bieten spezialisierte Reinigungs- und Facility-Services, die den strengen Anforderungen von Arztpraxen, Kliniken und Pflegeeinrichtungen gerecht werden."
      heroImage="/images/branchen/gesundheit-hero.jpg"
      features={benefits}
      content={
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Lösungen für medizinische Einrichtungen</h2>
            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Wind className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">VDI 6022 Lüftungsreinigung – Keimfreie Luft</h3>
                  <p className="text-gray-600 mb-2">
                    In Behandlungsräumen und OPs ist Luftqualität kritisch. Wir reinigen und desinfizieren RLT-Anlagen streng nach VDI 6022, um die Verbreitung von Keimen über die Luft zu verhindern.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Praxisreinigung & Desinfektion</h3>
                  <p className="text-gray-600 mb-2">
                    Wir arbeiten nach Ihrem Hygieneplan. Flächendesinfektion, Reinigung von Sanitärbereichen und Wartezimmern erfolgen mit zugelassenen Mitteln (VAH/RKI-gelistet).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <HeartPulse className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Patientensicherheit Außenbereich</h3>
                  <p className="text-gray-600 mb-2">
                    Gerade für gehbehinderte Patienten müssen Wege sicher sein. Unser Winterdienst und die Gehwegreinigung sorgen für barrierefreien und sicheren Zugang zu Ihrer Praxis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Rechtssicherheit & Dokumentation</h2>
                <p className="mb-4 text-gray-600">
                  Für Begehungen durch das Gesundheitsamt benötigen Sie lückenlose Nachweise. Wir liefern:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> VDI 6022 Prüfprotokolle</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Desinfektionsnachweise</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Sicherheitsdatenblätter der Reinigungsmittel</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Nachweis über Mitarbeiterschulungen</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-teal-50 p-8 rounded-xl border border-teal-100">
            <div className="flex items-center gap-4 mb-4">
              <Stethoscope className="w-8 h-8 text-teal-600" />
              <h2 className="text-2xl font-bold text-gray-900">Vertrauen ist alles</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Patienten schließen von der Sauberkeit der Räume auf die Qualität der Behandlung. Ein makelloses Erscheinungsbild Ihrer Praxis schafft Vertrauen. Wir sorgen dafür, dass dieser erste Eindruck stimmt.
            </p>
          </section>
        </div>
      }
    />
  );
}
