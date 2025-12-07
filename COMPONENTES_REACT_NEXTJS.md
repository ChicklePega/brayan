# 🧩 COMPONENTES REACT/NEXT.JS – HAPPY GARTEN

---

## 🎨 ATOMS (Componentes Atómicos)

### 1. Button Component

```typescript
// src/components/atoms/Button/Button.tsx

import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
```

```css
/* src/components/atoms/Button/Button.module.css */

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  font-family: var(--font-heading);
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  cursor: pointer;
  border: 2px solid transparent;
  text-decoration: none;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Variants */
.primary {
  background-color: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

.primary:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.secondary {
  background-color: var(--color-secondary);
  color: var(--color-white);
  border-color: var(--color-secondary);
}

.secondary:hover:not(:disabled) {
  background-color: var(--color-secondary-dark);
  border-color: var(--color-secondary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.outline {
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.outline:hover:not(:disabled) {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.ghost {
  background-color: transparent;
  color: var(--color-gray-dark);
  border-color: transparent;
}

.ghost:hover:not(:disabled) {
  background-color: var(--color-gray-lighter);
}

/* Sizes */
.sm {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
}

.md {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-base);
}

.lg {
  padding: var(--spacing-lg) var(--spacing-xl);
  font-size: var(--font-size-lg);
}

.fullWidth {
  width: 100%;
}
```

---

### 2. Input Component

```typescript
// src/components/atoms/Input/Input.tsx

import React from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, className = '', ...props }, ref) => {
    const inputClasses = [styles.input, error ? styles.error : '', className]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={props.id} className={styles.label}>
            {label}
            {props.required && <span className={styles.required}>*</span>}
          </label>
        )}
        <input ref={ref} className={inputClasses} {...props} />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
```

```css
/* src/components/atoms/Input/Input.module.css */

.wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  width: 100%;
}

.label {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-gray-dark);
}

.required {
  color: var(--color-error);
  margin-left: 2px;
}

.input {
  padding: var(--spacing-md);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  border: 2px solid var(--color-gray-light);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  background-color: var(--color-white);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(45, 155, 92, 0.1);
}

.input.error {
  border-color: var(--color-error);
}

.input.error:focus {
  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
}

.errorMessage {
  font-size: var(--font-size-sm);
  color: var(--color-error);
}
```

---

## 🧬 MOLECULES (Componentes Moleculares)

### 3. ServiceCard Component

```typescript
// src/components/molecules/ServiceCard/ServiceCard.tsx

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import styles from './ServiceCard.module.css';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  href,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link href={href} className={styles.link}>
        <Button variant="outline" size="sm" fullWidth>
          Mehr erfahren →
        </Button>
      </Link>
    </div>
  );
};
```

```css
/* src/components/molecules/ServiceCard/ServiceCard.module.css */

.card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-xl);
  background-color: var(--color-white);
  border: 2px solid var(--color-gray-light);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
  height: 100%;
}

.card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.iconWrapper {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  border-radius: var(--radius-md);
  color: var(--color-white);
  font-size: 32px;
}

.card:hover .iconWrapper {
  background-color: var(--color-secondary);
}

.title {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-black);
  margin: 0;
}

.description {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-gray-dark);
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
}

.link {
  text-decoration: none;
  margin-top: auto;
}
```

---

### 4. TestimonialCard Component

```typescript
// src/components/molecules/TestimonialCard/TestimonialCard.tsx

import React from 'react';
import styles from './TestimonialCard.module.css';

export interface TestimonialCardProps {
  text: string;
  name: string;
  position: string;
  company: string;
  rating: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  name,
  position,
  company,
  rating,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.rating}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
            ★
          </span>
        ))}
      </div>
      <blockquote className={styles.quote}>"{text}"</blockquote>
      <div className={styles.author}>
        <div className={styles.authorInfo}>
          <p className={styles.name}>{name}</p>
          <p className={styles.meta}>
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};
```

```css
/* src/components/molecules/TestimonialCard/TestimonialCard.module.css */

.card {
  padding: var(--spacing-xl);
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.rating {
  display: flex;
  gap: 4px;
  margin-bottom: var(--spacing-md);
}

.starFilled {
  color: var(--color-accent);
  font-size: var(--font-size-lg);
}

.starEmpty {
  color: var(--color-gray-light);
  font-size: var(--font-size-lg);
}

.quote {
  font-family: var(--font-body);
  font-size: var(--font-size-lg);
  line-height: 1.6;
  color: var(--color-gray-dark);
  font-style: italic;
  margin: 0 0 var(--spacing-lg) 0;
}

.author {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.authorInfo {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.name {
  font-family: var(--font-heading);
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-black);
  margin: 0;
}

.meta {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  margin: 0;
}
```

---

## 🏗️ ORGANISMS (Componentes Complejos)

### 5. Hero Component

```typescript
// src/components/organisms/Hero/Hero.tsx

import React from 'react';
import { Button } from '@/components/atoms/Button';
import styles from './Hero.module.css';

export interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  trustBadges?: string[];
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  trustBadges,
}) => {
  return (
    <section
      className={styles.hero}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
            }
          : undefined
      }
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          {description && <p className={styles.description}>{description}</p>}

          <div className={styles.ctas}>
            <a href={primaryCta.href}>
              <Button variant="primary" size="lg">
                {primaryCta.text}
              </Button>
            </a>
            {secondaryCta && (
              <a href={secondaryCta.href}>
                <Button variant="outline" size="lg">
                  {secondaryCta.text}
                </Button>
              </a>
            )}
          </div>

          {trustBadges && trustBadges.length > 0 && (
            <div className={styles.trustBadges}>
              {trustBadges.map((badge, index) => (
                <span key={index} className={styles.badge}>
                  ✓ {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
```

```css
/* src/components/organisms/Hero/Hero.module.css */

.hero {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  color: var(--color-white);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--spacing-2xl) var(--spacing-lg);
  width: 100%;
}

.content {
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
}

.title {
  font-family: var(--font-heading);
  font-size: var(--font-size-5xl);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 var(--spacing-lg) 0;
}

.subtitle {
  font-family: var(--font-body);
  font-size: var(--font-size-xl);
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 var(--spacing-md) 0;
}

.description {
  font-family: var(--font-body);
  font-size: var(--font-size-lg);
  line-height: 1.6;
  margin: 0 0 var(--spacing-xl) 0;
}

.ctas {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--spacing-xl);
}

.trustBadges {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
}

.badge {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-full);
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    min-height: 50vh;
  }

  .title {
    font-size: var(--font-size-3xl);
  }

  .subtitle {
    font-size: var(--font-size-lg);
  }

  .ctas {
    flex-direction: column;
  }
}
```

---

### 6. ContactForm Component

```typescript
// src/components/organisms/ContactForm/ContactForm.tsx

'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import styles from './ContactForm.module.css';

const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  company: z.string().optional(),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().min(5, 'Telefonnummer ist erforderlich'),
  subject: z.string().min(1, 'Bitte wählen Sie einen Betreff'),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
  privacy: z.boolean().refine((val) => val === true, {
    message: 'Sie müssen die Datenschutzerklärung akzeptieren',
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht');
      }

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className={styles.successMessage}>
        <h3>Vielen Dank für Ihre Anfrage!</h3>
        <p>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
        <Button onClick={() => setSubmitSuccess(false)}>Neue Anfrage senden</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.row}>
        <Input
          {...register('name')}
          label="Name"
          placeholder="Max Mustermann"
          error={errors.name?.message}
          required
        />
        <Input
          {...register('company')}
          label="Unternehmen"
          placeholder="Firma GmbH"
          error={errors.company?.message}
        />
      </div>

      <div className={styles.row}>
        <Input
          {...register('email')}
          type="email"
          label="E-Mail"
          placeholder="max@firma.de"
          error={errors.email?.message}
          required
        />
        <Input
          {...register('phone')}
          type="tel"
          label="Telefon"
          placeholder="+49 40 123456"
          error={errors.phone?.message}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="subject" className={styles.label}>
          Betreff <span className={styles.required}>*</span>
        </label>
        <select
          {...register('subject')}
          id="subject"
          className={styles.select}
        >
          <option value="">Bitte wählen...</option>
          <option value="lueftungsreinigung">Lüftungsreinigung</option>
          <option value="hausmeisterservice">Hausmeisterservice</option>
          <option value="gartenpflege">Gartenpflege</option>
          <option value="bueroreinigung">Büroreinigung</option>
          <option value="allgemein">Allgemeine Anfrage</option>
          <option value="notdienst">24h-Notdienst</option>
        </select>
        {errors.subject && <span className={styles.error}>{errors.subject.message}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Nachricht <span className={styles.required}>*</span>
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          placeholder="Beschreiben Sie Ihr Anliegen..."
          className={styles.textarea}
        />
        {errors.message && <span className={styles.error}>{errors.message.message}</span>}
      </div>

      <div className={styles.checkbox}>
        <input {...register('privacy')} type="checkbox" id="privacy" />
        <label htmlFor="privacy">
          Ich habe die{' '}
          <a href="/datenschutz" target="_blank" rel="noopener noreferrer">
            Datenschutzerklärung
          </a>{' '}
          gelesen und akzeptiere diese. <span className={styles.required}>*</span>
        </label>
      </div>
      {errors.privacy && <span className={styles.error}>{errors.privacy.message}</span>}

      {submitError && <div className={styles.errorMessage}>{submitError}</div>}

      <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : 'Anfrage absenden'}
      </Button>
    </form>
  );
};
```

```css
/* src/components/organisms/ContactForm/ContactForm.module.css */

.form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  max-width: 600px;
  margin: 0 auto;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.label {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-gray-dark);
}

.required {
  color: var(--color-error);
}

.select,
.textarea {
  padding: var(--spacing-md);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  border: 2px solid var(--color-gray-light);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.select:focus,
.textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(45, 155, 92, 0.1);
}

.error {
  font-size: var(--font-size-sm);
  color: var(--color-error);
}

.checkbox {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
}

.checkbox input[type='checkbox'] {
  margin-top: 4px;
}

.checkbox label {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-gray-dark);
}

.checkbox a {
  color: var(--color-primary);
  text-decoration: underline;
}

.errorMessage {
  padding: var(--spacing-md);
  background-color: rgba(229, 62, 62, 0.1);
  border: 2px solid var(--color-error);
  border-radius: var(--radius-md);
  color: var(--color-error);
  font-size: var(--font-size-sm);
}

.successMessage {
  text-align: center;
  padding: var(--spacing-2xl);
  background-color: rgba(56, 161, 105, 0.1);
  border: 2px solid var(--color-success);
  border-radius: var(--radius-lg);
}

.successMessage h3 {
  color: var(--color-success);
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  margin: 0 0 var(--spacing-md) 0;
}

.successMessage p {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-gray-dark);
  margin: 0 0 var(--spacing-lg) 0;
}

@media (max-width: 768px) {
  .row {
    grid-template-columns: 1fr;
  }
}
```

---

### 7. Footer Component

```typescript
// src/components/organisms/Footer/Footer.tsx

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const services = [
  { name: 'Lüftungsreinigung', href: '/leistungen/lueftungsreinigung' },
  { name: 'Hausmeisterservice', href: '/leistungen/hausmeisterservice' },
  { name: 'Gartenpflege', href: '/leistungen/gartenpflege' },
  { name: 'Büroreinigung', href: '/leistungen/bueroreinigung' },
  { name: '24h-Notdienst', href: '/leistungen/hausmeisterservice/24h-notdienst' },
  { name: 'Winterdienst', href: '/leistungen/hausmeisterservice/winterdienst' },
];

const branchen = [
  { name: 'Hotels & Restaurants', href: '/branchen/hotels-restaurants-kantinen' },
  { name: 'Immobilienverwaltung', href: '/branchen/immobilienverwaltung' },
  { name: 'Schulen & Bildung', href: '/branchen/schulen-bildung' },
  { name: 'Produktion & Industrie', href: '/branchen/produktion-industrie' },
  { name: 'Bürogebäude', href: '/branchen/buerogebaeude' },
  { name: 'Gesundheitswesen', href: '/branchen/gesundheitswesen' },
];

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: About */}
          <div className={styles.column}>
            <div className={styles.logo}>Happy Garten</div>
            <p className={styles.description}>
              Happy Garten ist Ihr zuverlässiger Partner für alle Facility-Services in Hamburg.
              VDI 6022 zertifiziert, 24h-Notdienst, über 200 zufriedene Kunden.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Unsere Leistungen</h4>
            <ul className={styles.list}>
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Branchen */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Branchen</h4>
            <ul className={styles.list}>
              {branchen.map((branche) => (
                <li key={branche.href}>
                  <Link href={branche.href}>{branche.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Kontakt</h4>
            <address className={styles.contact}>
              <p>
                <strong>Adresse:</strong>
                <br />
                Musterstraße 123
                <br />
                20095 Hamburg
              </p>
              <p>
                <strong>Telefon:</strong>
                <br />
                +49 (0)40 - XXX XXXX
              </p>
              <p>
                <strong>E-Mail:</strong>
                <br />
                kontakt@happygarten.de
              </p>
              <p>
                <strong>Öffnungszeiten:</strong>
                <br />
                Mo-Fr: 08:00 – 18:00 Uhr
              </p>
            </address>
            <Link href="/kontakt">
              <Button variant="primary" size="sm">
                Jetzt anfragen
              </Button>
            </Link>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className={styles.subFooter}>
          <div className={styles.legal}>
            <Link href="/impressum">Impressum</Link>
            <Link href="/agb">AGB</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
          <p className={styles.copyright}>© 2024 Happy Garten GmbH. Alle Rechte vorbehalten.</p>
          <div className={styles.trustBadges}>
            <span>VDI 6022 zertifiziert</span>
            <span>ISO 9001</span>
            <span>Versichert</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
```

```css
/* src/components/organisms/Footer/Footer.module.css */

.footer {
  background-color: var(--color-secondary);
  color: var(--color-white);
  padding: var(--spacing-3xl) 0 var(--spacing-lg) 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-3xl);
}

.column {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.logo {
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: var(--spacing-sm);
}

.description {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.social {
  display: flex;
  gap: var(--spacing-md);
}

.social a {
  color: var(--color-white);
  text-decoration: none;
  transition: color var(--transition-base);
}

.social a:hover {
  color: var(--color-primary-light);
}

.columnTitle {
  font-family: var(--font-heading);
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin: 0 0 var(--spacing-sm) 0;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.list a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  transition: color var(--transition-base);
}

.list a:hover {
  color: var(--color-primary-light);
}

.contact {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-style: normal;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.contact p {
  margin: 0 0 var(--spacing-md) 0;
}

.subFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.legal {
  display: flex;
  gap: var(--spacing-lg);
}

.legal a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  transition: color var(--transition-base);
}

.legal a:hover {
  color: var(--color-primary-light);
}

.copyright {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.trustBadges {
  display: flex;
  gap: var(--spacing-md);
}

.trustBadges span {
  font-family: var(--font-body);
  font-size: var(--font-size-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .subFooter {
    flex-direction: column;
    text-align: center;
  }
}
```

---

**Resultado:** Componentes profesionales, reutilizables y completamente tipados con TypeScript, siguiendo las mejores prácticas de React y Next.js. Todos los estilos están modularizados con CSS Modules para evitar conflictos.

*(Continúa en siguiente archivo...)*
