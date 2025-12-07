import { Hero } from "@/components/Hero";
import { ShieldCheck, Clock, MapPin, ArrowRight, Star, CheckCircle2, Building2, Leaf, Wind, Wrench, History, Target, Award, HeartHandshake, Sparkles, Stethoscope } from "lucide-react";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Hero
          title="Professionelle Facility-Services in Hamburg"
          subtitle="VDI 6022 zertifiziert • 24h-Notdienst • Meisterbetrieb"
          description="Happy Garten ist Ihr verlässlicher Partner für ganzheitliches Gebäudemanagement. Wir sorgen für Werterhalt, Hygiene und Sicherheit in Ihrer Immobilie – von der Lüftungsreinigung bis zur Grünpflege."
          primaryCta={{ text: "Kostenloses Angebot anfordern", href: "/kontakt" }}
          secondaryCta={{ text: "Unsere Leistungen", href: "/leistungen/lueftungsreinigung" }}
          backgroundImage="/images/hero-home.jpg"
          imageAlt="Happy Garten Facility Services Hamburg Team bei der Arbeit"
          isFullHeight={false}
          className="flex-grow"
        />

        {/* USP Bar */}
        <section className="bg-primary text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <ShieldCheck className="w-8 h-8 text-primary-light" />
                <div className="text-left">
                  <h3 className="font-bold text-lg">VDI 6022 Zertifiziert</h3>
                  <p className="text-sm text-white/80">Rechtssichere Hygiene</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-8 h-8 text-primary-light" />
                <div className="text-left">
                  <h3 className="font-bold text-lg">24/7 Notdienst</h3>
                  <p className="text-sm text-white/80">Immer für Sie erreichbar</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-8 h-8 text-primary-light" />
                <div className="text-left">
                  <h3 className="font-bold text-lg">100% Hamburg</h3>
                  <p className="text-sm text-white/80">Schnell vor Ort</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Main Services Section */}
      <section id="leistungen" className="py-20 bg-gray-50 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Kernkompetenzen</h2>
            <p className="text-lg text-gray-600">
              Wir bieten Ihnen ein umfassendes Leistungsspektrum für den optimalen Betrieb Ihrer Immobilie. 
              Alles aus einer Hand, koordiniert von Ihrem persönlichen Ansprechpartner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Wind className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Lüftungsreinigung</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                VDI 6022 konforme Reinigung und Hygieneinspektion von RLT-Anlagen. Für gesunde Luft und Brandschutz in Küchenabluftanlagen.
              </p>
              <Link href="/leistungen/lueftungsreinigung" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark text-sm">
                Mehr erfahren <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 group">
              <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                <Wrench className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Hausmeisterservice</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Technische Betreuung, Kleinreparaturen, Winterdienst und 24h-Notfallservice. Wir halten Ihre Immobilie am Laufen.
              </p>
              <Link href="/leistungen/hausmeisterservice" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark text-sm">
                Mehr erfahren <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 group">
              <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Gartenpflege</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Professionelle Grünflächenpflege, Baumschnitt und Neuanlagen. Für einen gepflegten ersten Eindruck Ihrer Außenanlagen.
              </p>
              <Link href="/leistungen/gartenpflege" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark text-sm">
                Mehr erfahren <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 group">
              <div className="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Büroreinigung</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Zuverlässige Unterhaltsreinigung, Glasreinigung und Sonderreinigung. Sauberkeit für produktives Arbeiten.
              </p>
              <Link href="/leistungen/bueroreinigung" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark text-sm">
                Mehr erfahren <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 5 - Fensterreinigung */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Fensterreinigung</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Streifenfreier Glanz für Fenster, Rahmen und Wintergärten. Professionelle Glasreinigung für Privat und Gewerbe.
              </p>
              <Link href="/leistungen/fensterreinigung" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark text-sm">
                Mehr erfahren <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 6 - Praxisreinigung */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 group">
              <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                <Stethoscope className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Praxisreinigung</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Hygienische Reinigung nach RKI-Richtlinien. Desinfektion und Sauberkeit für Arztpraxen und medizinische Einrichtungen.
              </p>
              <Link href="/leistungen/praxisreinigung" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark text-sm">
                Mehr erfahren <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us / Trust Section */}
      <section className="py-20 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Warum Unternehmen in Hamburg auf Happy Garten setzen
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Als inhabergeführtes Unternehmen verbinden wir hanseatische Zuverlässigkeit mit modernem Facility Management. 
                Wir verstehen, dass Ihre Immobilie nicht nur ein Gebäude ist, sondern ein Kapitalwert, den es zu schützen gilt.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Transparente Festpreise</h4>
                    <p className="text-gray-600 text-sm">Keine versteckten Kosten. Sie wissen genau, wofür Sie bezahlen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Qualifiziertes Fachpersonal</h4>
                    <p className="text-gray-600 text-sm">Regelmäßige Schulungen und fest angestellte Mitarbeiter statt Subunternehmer-Ketten.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Digitale Dokumentation</h4>
                    <p className="text-gray-600 text-sm">Echtzeit-Nachweise über erbrachte Leistungen und Hygiene-Checks.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">
                        User
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-bold text-gray-900">500+</span> zufriedene Kunden
                  </div>
                </div>
                
                <blockquote className="text-gray-700 italic mb-6">
                  &quot;Seit wir Happy Garten mit der Lüftungsreinigung und dem Hausmeisterservice beauftragt haben, 
                  laufen unsere technischen Anlagen störungsfrei und das Feedback unserer Mieter ist durchweg positiv. 
                  Ein Partner, der mitdenkt!&quot;
                </blockquote>
                
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm font-bold text-gray-900">Immobilienverwaltung Nord GmbH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History / Story Section */}
      <section className="py-20 bg-white min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <History className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Unsere Geschichte</h2>
            <p className="text-gray-600">
              Was als kleiner Gartenbaubetrieb begann, hat sich zu einem der vielseitigsten Facility-Dienstleister Hamburgs entwickelt.
            </p>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary group-[.is-active]:bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="text-xs font-bold">2010</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-200 shadow-sm bg-white">
                <div className="font-bold text-gray-900 mb-1">Gründung</div>
                <div className="text-gray-600 text-sm">Start als &quot;Happy Garten&quot; mit Fokus auf Gartenpflege in Hamburg-Nord.</div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="text-xs font-bold">2015</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-200 shadow-sm bg-white">
                <div className="font-bold text-gray-900 mb-1">Erweiterung Hausmeisterservice</div>
                <div className="text-gray-600 text-sm">Aufnahme von technischen Dienstleistungen und Winterdienst ins Portfolio.</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="text-xs font-bold">2019</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-200 shadow-sm bg-white">
                <div className="font-bold text-gray-900 mb-1">VDI 6022 Zertifizierung</div>
                <div className="text-gray-600 text-sm">Spezialisierung auf Lüftungshygiene und Aufbau eines Expertenteams.</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="text-xs font-bold">Heute</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-200 shadow-sm bg-white">
                <div className="font-bold text-gray-900 mb-1">Full-Service Partner</div>
                <div className="text-gray-600 text-sm">Über 50 Mitarbeiter betreuen Kunden in der gesamten Metropolregion Hamburg.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="werte" className="py-20 bg-gray-50 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Unsere Werte</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Zuverlässigkeit</h3>
              <p className="text-gray-600">
                Unsere Kunden können sich auf uns verlassen – 365 Tage im Jahr. Vereinbarte Termine werden eingehalten, Notfälle sofort bearbeitet.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Qualität</h3>
              <p className="text-gray-600">
                Wir arbeiten nur mit geschultem und zertifiziertem Personal. Moderne Technik und professionelle Reinigungsmittel garantieren beste Ergebnisse.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Nachhaltigkeit</h3>
              <p className="text-gray-600">
                Wir setzen auf umweltfreundliche Reinigungsmittel und nachhaltige Gartenpflege-Methoden. Für eine bessere Zukunft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Sustainability Detail */}
      <section id="verantwortung" className="py-20 bg-white min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
              <div className="flex items-center gap-4 mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Verantwortung für die Umwelt</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Als modernes Dienstleistungsunternehmen sind wir uns unserer ökologischen Verantwortung bewusst. Wir setzen konsequent auf:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Biologisch abbaubare Reinigungsmittel</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Akkubetriebene Gartengeräte (Lärm- & Emissionsschutz)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Digitales Büro zur Papiervermeidung</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Tourenoptimierung zur CO2-Reduktion</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <HeartHandshake className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Soziale Verantwortung</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Unsere Mitarbeiter sind unser wichtigstes Kapital. Wir stehen für faire Arbeitsbedingungen:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Tarifliche und übertarifliche Bezahlung</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Unbefristete Arbeitsverträge</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Regelmäßige Fort- und Weiterbildungen</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Gesundheitsmanagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="zertifizierung" className="py-20 bg-gray-50 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Zertifizierungen & Qualifikationen</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Vertrauen Sie auf unsere Qualifikationen. Wir investieren kontinuierlich in die Weiterbildung unserer Mitarbeiter und die Zertifizierung unserer Prozesse.
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for Logos */}
            <div className="h-16 w-32 bg-white border border-gray-200 rounded flex items-center justify-center font-bold text-gray-500 shadow-sm">VDI 6022</div>
            <div className="h-16 w-32 bg-white border border-gray-200 rounded flex items-center justify-center font-bold text-gray-500 shadow-sm">ISO 9001</div>
            <div className="h-16 w-32 bg-white border border-gray-200 rounded flex items-center justify-center font-bold text-gray-500 shadow-sm">DGUV</div>
            <div className="h-16 w-32 bg-white border border-gray-200 rounded flex items-center justify-center font-bold text-gray-500 shadow-sm">Meisterbetrieb</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Häufig gestellte Fragen</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Wie schnell können Sie im Notfall reagieren?</h3>
              <p className="text-gray-600">Unser 24h-Notdienst ist für Vertragskunden rund um die Uhr erreichbar. In der Regel sind wir innerhalb von 60-90 Minuten am Objekt in Hamburg.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Sind Ihre Reinigungsverfahren zertifiziert?</h3>
              <p className="text-gray-600">Ja, insbesondere im Bereich der Lüftungsreinigung arbeiten wir streng nach VDI 6022. Unsere Mitarbeiter sind entsprechend geschult und zertifiziert.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Bieten Sie auch Einzelleistungen an?</h3>
              <p className="text-gray-600">Selbstverständlich. Sie können uns für einmalige Grundreinigungen, Gartenprojekte oder Wartungen buchen, ohne einen langfristigen Vertrag abzuschließen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactSection />
    </>
  );
}
