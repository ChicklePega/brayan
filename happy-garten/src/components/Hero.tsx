import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  imageAlt?: string;
  isFullHeight?: boolean;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  imageAlt = "Hero background image",
  isFullHeight = true,
  className = "",
}) => {
  return (
    <section className={`relative flex items-center justify-center bg-gray-900 text-white py-20 overflow-hidden ${isFullHeight ? 'min-h-screen' : ''} ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={backgroundImage}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          {subtitle && (
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-light text-sm font-semibold mb-6 border border-primary/30">
              {subtitle}
            </span>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCta && (
              <Button href={primaryCta.href} size="lg">
                {primaryCta.text}
              </Button>
            )}
            
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
