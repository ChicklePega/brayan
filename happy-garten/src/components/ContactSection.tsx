import React from 'react';
import { ContactForm } from '@/components/ContactForm';

export const ContactSection: React.FC = () => {
  return (
    <section id="kontakt" className="py-20 bg-primary min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit für besseren Service?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam besprechen, wie wir Ihre Immobilie optimal betreuen können. 
              Füllen Sie einfach das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
            
            <div className="space-y-6 mt-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <p className="text-sm text-white/70">Rufen Sie uns an</p>
                  <p className="text-xl font-bold">+49 (0)40 - XXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <p className="text-sm text-white/70">Schreiben Sie uns</p>
                  <p className="text-xl font-bold">kontakt@happygarten.de</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6">Kostenloses Angebot anfordern</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
