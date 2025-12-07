import React from 'react';
import { Hero } from '@/components/Hero';
import { Button } from '@/components/Button';
import { ContactSection } from '@/components/ContactSection';

export interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  content: React.ReactNode;
  heroImage?: string;
  ctaText?: string;
  ctaLink?: string;
  benefits?: string[]; // Added for compatibility if I used it
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  subtitle,
  description,
  features,
  content,
  heroImage,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero
        title={title}
        subtitle={subtitle}
        description={description}
        primaryCta={{ text: 'Jetzt Angebot anfordern', href: '/kontakt' }}
        backgroundImage={heroImage}
        imageAlt={`${title} - Happy Garten Hamburg`}
      />
      
      <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose max-w-none mb-12">
              {content}
            </div>
            
            {features && features.length > 0 && (
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Ihre Vorteile</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Haben Sie Fragen?</h3>
              <p className="text-gray-600 mb-6">Wir beraten Sie gerne persönlich zu unseren Leistungen.</p>
              <Button fullWidth href="/kontakt">Kontakt aufnehmen</Button>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Schnellkontakt</h4>
                <p className="text-gray-600 mb-1">📞 +49 (0)40 - XXX XXXX</p>
                <p className="text-gray-600">📧 kontakt@happygarten.de</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};
