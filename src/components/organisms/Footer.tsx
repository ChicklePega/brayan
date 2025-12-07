import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white font-heading">Happy Garten</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ihr zuverlässiger Partner für professionelle Facility-Services in Hamburg. 
              Von der VDI 6022 Lüftungsreinigung bis zur Gartenpflege – alles aus einer Hand.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Unsere Leistungen</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/leistungen/lueftungsreinigung" className="text-gray-400 hover:text-primary transition-colors">
                  Lüftungsreinigung (VDI 6022)
                </Link>
              </li>
              <li>
                <Link href="/leistungen/hausmeisterservice" className="text-gray-400 hover:text-primary transition-colors">
                  Hausmeisterservice
                </Link>
              </li>
              <li>
                <Link href="/leistungen/gartenpflege" className="text-gray-400 hover:text-primary transition-colors">
                  Garten- & Landschaftspflege
                </Link>
              </li>
              <li>
                <Link href="/leistungen/bueroreinigung" className="text-gray-400 hover:text-primary transition-colors">
                  Büro- & Unterhaltsreinigung
                </Link>
              </li>
              <li>
                <Link href="/leistungen/fensterreinigung" className="text-gray-400 hover:text-primary transition-colors">
                  Fensterreinigung
                </Link>
              </li>
              <li>
                <Link href="/leistungen/praxisreinigung" className="text-gray-400 hover:text-primary transition-colors">
                  Praxisreinigung
                </Link>
              </li>
            </ul>
          </div>

          {/* Branchen */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Branchen</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/branchen/hotels-restaurants-kantinen" className="text-gray-400 hover:text-primary transition-colors">
                  Hotels & Gastronomie
                </Link>
              </li>
              <li>
                <Link href="/branchen/immobilienverwaltung" className="text-gray-400 hover:text-primary transition-colors">
                  Immobilienverwaltung
                </Link>
              </li>
              <li>
                <Link href="/branchen/schulen-bildung" className="text-gray-400 hover:text-primary transition-colors">
                  Schulen & Bildung
                </Link>
              </li>
              <li>
                <Link href="/branchen/produktion-industrie" className="text-gray-400 hover:text-primary transition-colors">
                  Produktion & Industrie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Musterstraße 123<br />
                  20095 Hamburg
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a href="tel:+4940123456789" className="text-gray-400 hover:text-primary transition-colors">
                  +49 40 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:info@happy-garten.de" className="text-gray-400 hover:text-primary transition-colors">
                  info@happy-garten.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Happy Garten. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/impressum" className="text-gray-500 hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-gray-500 hover:text-primary transition-colors">
              Datenschutz
            </Link>
            <Link href="/agb" className="text-gray-500 hover:text-primary transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
