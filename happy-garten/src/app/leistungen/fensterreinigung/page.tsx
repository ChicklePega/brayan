import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Sparkles, Sun, Droplets, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Fensterreinigung Hamburg | Streifenfreier Glanz | Happy Garten',
  description: 'Professionelle Fensterreinigung in Hamburg für Privat & Gewerbe. Glasreinigung, Rahmenpflege & Wintergärten. Jetzt Angebot anfordern!',
};

export default function FensterreinigungPage() {
  const benefits = [
    'Streifenfreie Reinigung von Glasflächen aller Art',
    'Inklusive Rahmen- und Falzreinigung',
    'Reinigung von Wintergärten und Glasdächern',
    'Einsatz von umweltschonenden Reinigungsmitteln',
    'Sicherheitsgeprüftes Personal für Arbeiten in der Höhe',
    'Flexible Termine für Gewerbe und Privat',
  ];

  return (
    <ServicePageTemplate
      title="Professionelle Fensterreinigung in Hamburg"
      subtitle="Glasreinigung • Rahmenpflege • Wintergärten"
      description="Für den perfekten Durchblick: Wir reinigen Ihre Fenster, Glasfassaden und Wintergärten professionell, zuverlässig und streifenfrei. Egal ob Bürogebäude, Schaufenster oder Privathaushalt."
      heroImage="/images/services/fensterreinigung-hero.jpg"
      features={benefits}
      content={
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Klarer Durchblick für Ihre Immobilie</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Saubere Fenster sind die Visitenkarte jeder Immobilie. Sie sorgen nicht nur für einen gepflegten Eindruck, sondern lassen auch mehr Tageslicht in Ihre Räume, was das Wohlbefinden und die Produktivität steigert. Happy Garten bietet Ihnen eine professionelle Glasreinigung in Hamburg und Umgebung – gründlich, schnell und zu fairen Preisen.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Unser geschultes Team verfügt über das nötige Know-how und die professionelle Ausrüstung, um auch schwer zugängliche Glasflächen sicher und effizient zu reinigen. Dabei legen wir großen Wert auf Umweltschutz und verwenden biologisch abbaubare Reinigungsmittel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Unsere Leistungen im Detail</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Klassische Fensterreinigung</h3>
                <p className="text-gray-600 text-sm">
                  Reinigung der Glasflächen innen und außen. Wir entfernen Verschmutzungen durch Witterung, Abgase und Staub rückstandslos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Rahmen- & Falzreinigung</h3>
                <p className="text-gray-600 text-sm">
                  Zu einer kompletten Reinigung gehört auch der Rahmen. Wir reinigen Rahmen und Falze gründlich, um die Lebensdauer Ihrer Fenster zu verlängern.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Wintergärten & Glasdächer</h3>
                <p className="text-gray-600 text-sm">
                  Besondere Herausforderungen meistern wir gerne. Wir reinigen Ihre Wintergärten, Überdachungen und Lichtkuppeln professionell.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Schaufensterreinigung</h3>
                <p className="text-gray-600 text-sm">
                  Für den Einzelhandel bieten wir regelmäßige Intervalle an, damit Ihre Auslage immer perfekt zur Geltung kommt.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Empfohlene Reinigungsintervalle</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Objektart</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Empfohlenes Intervall</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Bemerkung</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Schaufenster</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Wöchentlich / 14-tägig</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Für optimale Warenpräsentation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Bürogebäude</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Alle 2-3 Monate</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Abhängig von Standort & Etage</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Privathaushalte</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2-4 Mal jährlich</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Oft im Frühjahr & Herbst</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Wintergärten</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2 Mal jährlich</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Inkl. Dachflächen & Beschattung</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Unser Ablauf für glasklare Ergebnisse</h2>
            <ol className="relative border-l border-gray-200 ml-3 space-y-10">
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">1</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Besichtigung & Angebot</h3>
                <p className="text-gray-600">Wir schauen uns Ihr Objekt an (vor Ort oder per Foto) und erstellen ein transparentes Festpreis-Angebot.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">2</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Terminabstimmung</h3>
                <p className="text-gray-600">Wir finden einen passenden Termin, der Ihren Betriebsablauf oder Alltag so wenig wie möglich stört.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">3</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Professionelle Reinigung</h3>
                <p className="text-gray-600">Unser Team erscheint pünktlich mit professionellem Equipment und reinigt Glas, Rahmen und Falze.</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white text-white font-bold">4</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Abnahme & Zufriedenheit</h3>
                <p className="text-gray-600">Nach getaner Arbeit prüfen Sie das Ergebnis. Wir sind erst zufrieden, wenn Sie es sind.</p>
              </li>
            </ol>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Impressionen unserer Arbeit</h2>
            <div className="space-y-24">
              {/* Item 1: Image Left, Text Right */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/images/services/fensterreinigung-1.jpg"
                      alt="Streifenfreier Glanz"
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">Streifenfreier Glanz</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Erleben Sie den Unterschied einer professionellen Glasreinigung. Wir sorgen für kristallklare Sicht und entfernen selbst hartnäckige Verschmutzungen rückstandslos von Ihren Fenstern.
                  </p>
                </div>
              </div>

              {/* Item 2: Text Left, Image Right */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/images/services/fensterreinigung-2.jpg"
                      alt="Rahmenpflege inklusive"
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">Rahmenpflege inklusive</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Für uns gehört der Rahmen zum Fenster dazu. Wir reinigen nicht nur das Glas, sondern pflegen auch Rahmen und Falze gründlich, um den Werterhalt Ihrer Fenster langfristig zu sichern.
                  </p>
                </div>
              </div>

              {/* Item 3: Image Left, Text Right */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/images/services/fensterreinigung-3.jpg"
                      alt="Wintergärten & Glasdächer"
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">Wintergärten & Glasdächer</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Auch schwer zugängliche Glasflächen wie Wintergärten oder Glasdächer sind für uns kein Problem. Mit professionellem Equipment sorgen wir auch hier für perfekten Durchblick.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Warum professionelle Fensterreinigung?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Werterhalt</h4>
                  <p className="text-gray-600 text-sm">Regelmäßige Reinigung schützt das Glas vor Korrosion und die Rahmen vor Verwitterung.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Sicherheit</h4>
                  <p className="text-gray-600 text-sm">Vermeiden Sie Unfälle. Unsere Profis sind für Arbeiten in der Höhe geschult und gesichert.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Zeitersparnis</h4>
                  <p className="text-gray-600 text-sm">Wir arbeiten schnell und effizient, damit Sie sich auf Ihr Kerngeschäft oder Ihre Freizeit konzentrieren können.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufig gestellte Fragen</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Wie oft sollten Fenster gereinigt werden?</h3>
                <p className="text-gray-600">Das hängt von der Lage und Nutzung ab. Für Büros empfehlen wir alle 4-8 Wochen, für Privathaushalte 2-4 Mal im Jahr. Schaufenster sollten wöchentlich oder 14-tägig gereinigt werden.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Reinigen Sie auch Jalousien oder Rollläden?</h3>
                <p className="text-gray-600">Ja, auf Wunsch reinigen wir auch den Sonnenschutz, Jalousien und Rollläden gleich mit. Sprechen Sie uns einfach darauf an.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Was kostet eine Fensterreinigung?</h3>
                <p className="text-gray-600">Die Kosten richten sich nach Fläche, Zugänglichkeit und Verschmutzungsgrad. Gerne erstellen wir Ihnen nach einer kurzen Besichtigung oder anhand von Fotos ein unverbindliches Festpreis-Angebot.</p>
              </div>
            </div>
          </section>
        </div>
      }
    />
  );
}
