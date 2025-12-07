# 🚀 ESTRUCTURA DEL PROYECTO NEXT.JS – HAPPY GARTEN

## 📁 ESTRUCTURA DE DIRECTORIOS (Atomic Design)

```
happy-garten/
│
├── .next/                          # Build output (auto-generado)
├── node_modules/                   # Dependencias (auto-generado)
├── public/                         # Archivos estáticos
│   ├── images/
│   │   ├── logo/
│   │   │   ├── logo-main.svg
│   │   │   ├── logo-white.svg
│   │   │   └── favicon.ico
│   │   ├── services/
│   │   │   ├── lueftungsreinigung.jpg
│   │   │   ├── hausmeisterservice.jpg
│   │   │   ├── gartenpflege.jpg
│   │   │   └── bueroreinigung.jpg
│   │   ├── branchen/
│   │   │   ├── hotels.jpg
│   │   │   ├── immobilien.jpg
│   │   │   └── schulen.jpg
│   │   ├── team/
│   │   │   └── team-happy-garten.jpg
│   │   └── icons/
│   │       ├── service-icons.svg
│   │       └── trust-badges.svg
│   ├── fonts/                      # Tipografías locales (opcional)
│   └── robots.txt
│
├── src/
│   ├── app/                        # Next.js 13+ App Router
│   │   ├── layout.tsx              # Layout principal
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Estilos globales
│   │   ├── leistungen/
│   │   │   ├── page.tsx            # /leistungen
│   │   │   ├── lueftungsreinigung/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── reinigung-von-lueftungsanlagen/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── kuechenabluft/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── hygieneinspektionen-vdi-6022/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── filterwechsel/
│   │   │   │       └── page.tsx
│   │   │   ├── hausmeisterservice/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── treppenhausreinigung/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── winterdienst/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── kleinreparaturen/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── objektbetreuung/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── 24h-notdienst/
│   │   │   │       └── page.tsx
│   │   │   ├── gartenpflege/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── gruenflaechenpflege/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── unkrautentfernung/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── laubentsorgung/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── heckenschnitt/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── baumschnitt/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── rasenpflege/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── saisonale-bepflanzung/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── bewaesserung/
│   │   │   │       └── page.tsx
│   │   │   └── bueroreinigung/
│   │   │       ├── page.tsx
│   │   │       ├── unterhaltsreinigung/
│   │   │       │   └── page.tsx
│   │   │       ├── glasreinigung/
│   │   │       │   └── page.tsx
│   │   │       ├── grundreinigung/
│   │   │       │   └── page.tsx
│   │   │       ├── desinfektion/
│   │   │       │   └── page.tsx
│   │   │       └── sanitaerreinigung/
│   │   │           └── page.tsx
│   │   ├── branchen/
│   │   │   ├── page.tsx
│   │   │   ├── hotels-restaurants-kantinen/
│   │   │   │   └── page.tsx
│   │   │   ├── immobilienverwaltung/
│   │   │   │   └── page.tsx
│   │   │   ├── schulen-bildung/
│   │   │   │   └── page.tsx
│   │   │   ├── produktion-industrie/
│   │   │   │   └── page.tsx
│   │   │   ├── buerogebaeude/
│   │   │   │   └── page.tsx
│   │   │   └── gesundheitswesen/
│   │   │       └── page.tsx
│   │   ├── unternehmen/
│   │   │   └── page.tsx
│   │   ├── kontakt/
│   │   │   └── page.tsx
│   │   ├── impressum/
│   │   │   └── page.tsx
│   │   ├── agb/
│   │   │   └── page.tsx
│   │   ├── datenschutz/
│   │   │   └── page.tsx
│   │   └── api/
│   │       ├── contact/
│   │       │   └── route.ts       # API endpoint para formularios
│   │       └── send-email/
│   │           └── route.ts       # API endpoint para enviar emails
│   │
│   ├── components/                 # Atomic Design
│   │   ├── atoms/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Input.module.css
│   │   │   │   └── index.ts
│   │   │   ├── Logo/
│   │   │   │   ├── Logo.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Icon/
│   │   │   │   ├── Icon.tsx
│   │   │   │   └── index.ts
│   │   │   └── Badge/
│   │   │       ├── Badge.tsx
│   │   │       ├── Badge.module.css
│   │   │       └── index.ts
│   │   ├── molecules/
│   │   │   ├── ServiceCard/
│   │   │   │   ├── ServiceCard.tsx
│   │   │   │   ├── ServiceCard.module.css
│   │   │   │   └── index.ts
│   │   │   ├── TestimonialCard/
│   │   │   │   ├── TestimonialCard.tsx
│   │   │   │   ├── TestimonialCard.module.css
│   │   │   │   └── index.ts
│   │   │   ├── BranchenCard/
│   │   │   │   ├── BranchenCard.tsx
│   │   │   │   ├── BranchenCard.module.css
│   │   │   │   └── index.ts
│   │   │   ├── FormField/
│   │   │   │   ├── FormField.tsx
│   │   │   │   ├── FormField.module.css
│   │   │   │   └── index.ts
│   │   │   └── Breadcrumb/
│   │   │       ├── Breadcrumb.tsx
│   │   │       ├── Breadcrumb.module.css
│   │   │       └── index.ts
│   │   ├── organisms/
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.module.css
│   │   │   │   └── index.ts
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── Hero.module.css
│   │   │   │   └── index.ts
│   │   │   ├── ServiceGrid/
│   │   │   │   ├── ServiceGrid.tsx
│   │   │   │   ├── ServiceGrid.module.css
│   │   │   │   └── index.ts
│   │   │   ├── ContactForm/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── ContactForm.module.css
│   │   │   │   └── index.ts
│   │   │   ├── TestimonialCarousel/
│   │   │   │   ├── TestimonialCarousel.tsx
│   │   │   │   ├── TestimonialCarousel.module.css
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Footer.module.css
│   │   │   │   └── index.ts
│   │   │   ├── FloatingContactButtons/
│   │   │   │   ├── FloatingContactButtons.tsx
│   │   │   │   ├── FloatingContactButtons.module.css
│   │   │   │   └── index.ts
│   │   │   └── CTASection/
│   │   │       ├── CTASection.tsx
│   │   │       ├── CTASection.module.css
│   │   │       └── index.ts
│   │   └── templates/
│   │       ├── ServicePageTemplate/
│   │       │   ├── ServicePageTemplate.tsx
│   │       │   └── index.ts
│   │       └── BranchenPageTemplate/
│   │           ├── BranchenPageTemplate.tsx
│   │           └── index.ts
│   │
│   ├── lib/                        # Utilidades y helpers
│   │   ├── email.ts                # Lógica de envío de emails
│   │   ├── validation.ts           # Validaciones de formularios
│   │   ├── constants.ts            # Constantes del proyecto
│   │   └── seo.ts                  # Helpers de SEO
│   │
│   ├── hooks/                      # Custom React Hooks
│   │   ├── useContactForm.ts
│   │   ├── useScrollPosition.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── styles/                     # Estilos globales y variables
│   │   ├── variables.css           # CSS Variables (colores, fonts)
│   │   └── breakpoints.css         # Media queries
│   │
│   └── types/                      # TypeScript types
│       ├── index.ts
│       ├── forms.ts
│       └── api.ts
│
├── .env.local                      # Variables de entorno (no subir a Git)
├── .env.example                    # Ejemplo de variables de entorno
├── .gitignore
├── next.config.js                  # Configuración de Next.js
├── tsconfig.json                   # Configuración de TypeScript
├── package.json
├── package-lock.json
├── README.md
└── tailwind.config.js              # Configuración de Tailwind (opcional)
```

---

## 📦 DEPENDENCIAS (package.json)

```json
{
  "name": "happy-garten",
  "version": "1.0.0",
  "description": "Happy Garten - Facility Services Hamburg",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next-seo": "^6.4.0",
    "react-hook-form": "^7.48.2",
    "resend": "^3.0.0",
    "zod": "^3.22.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "framer-motion": "^10.16.16",
    "sharp": "^0.33.1"
  },
  "devDependencies": {
    "@types/node": "^20.10.5",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "typescript": "^5.3.3",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.0.4"
  }
}
```

---

## ⚙️ CONFIGURACIÓN NEXT.JS (next.config.js)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Optimización de imágenes
  experimental: {
    optimizeCss: true,
  },
  // Rutas específicas para SEO
  async redirects() {
    return [
      {
        source: '/services/:path*',
        destination: '/leistungen/:path*',
        permanent: true,
      },
    ];
  },
  // Headers para SEO y seguridad
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

---

## 🎨 CSS VARIABLES (src/styles/variables.css)

```css
:root {
  /* Colores Principales */
  --color-primary: #2D9B5C;
  --color-primary-light: #7FD99B;
  --color-primary-dark: #1E7A47;
  
  --color-secondary: #1E5A7D;
  --color-secondary-light: #3A7CA5;
  --color-secondary-dark: #14425A;
  
  --color-accent: #F5B85C;
  
  /* Neutrales */
  --color-gray-dark: #4A5568;
  --color-gray: #718096;
  --color-gray-light: #E2E8F0;
  --color-gray-lighter: #F7FAFC;
  
  --color-black: #1A202C;
  --color-white: #FFFFFF;
  
  /* Estados */
  --color-success: #38A169;
  --color-error: #E53E3E;
  --color-warning: #F5B85C;
  --color-info: #3182CE;
  
  /* Tipografías */
  --font-heading: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  --font-body: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  
  /* Tamaños de Fuente */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  
  /* Espaciado */
  --spacing-xs: 0.25rem;      /* 4px */
  --spacing-sm: 0.5rem;       /* 8px */
  --spacing-md: 1rem;         /* 16px */
  --spacing-lg: 1.5rem;       /* 24px */
  --spacing-xl: 2rem;         /* 32px */
  --spacing-2xl: 3rem;        /* 48px */
  --spacing-3xl: 4rem;        /* 64px */
  
  /* Border Radius */
  --radius-sm: 0.25rem;       /* 4px */
  --radius-md: 0.5rem;        /* 8px */
  --radius-lg: 1rem;          /* 16px */
  --radius-full: 9999px;
  
  /* Sombras */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* Transiciones */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;
  
  /* Z-index */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
}
```

---

## 📱 BREAKPOINTS (src/styles/breakpoints.css)

```css
/* Mobile First Approach */

/* Extra Small (default - mobile) */
/* < 640px */

/* Small (sm) - tablets pequeños */
@media (min-width: 640px) {
  /* Estilos tablet pequeño */
}

/* Medium (md) - tablets y landscape phones */
@media (min-width: 768px) {
  /* Estilos tablet */
}

/* Large (lg) - desktop */
@media (min-width: 1024px) {
  /* Estilos desktop */
}

/* Extra Large (xl) - desktop grande */
@media (min-width: 1280px) {
  /* Estilos desktop grande */
}

/* 2XL - screens muy grandes */
@media (min-width: 1536px) {
  /* Estilos pantallas extra grandes */
}
```

---

## 🔧 VARIABLES DE ENTORNO (.env.example)

```bash
# Site Info
NEXT_PUBLIC_SITE_URL=https://www.happygarten.de
NEXT_PUBLIC_SITE_NAME="Happy Garten"

# Contact Info
NEXT_PUBLIC_PHONE="+49 (0)40 - XXX XXXX"
NEXT_PUBLIC_EMAIL="kontakt@happygarten.de"
NEXT_PUBLIC_ADDRESS="Musterstraße 123, 20095 Hamburg"

# Resend (Email Service)
RESEND_API_KEY=re_your_api_key_here
EMAIL_FROM=kontakt@happygarten.de
EMAIL_TO=info@happygarten.de

# Analytics (opcional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Maps (opcional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

---

## 📄 CONFIGURACIÓN TYPESCRIPT (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/types/*": ["./src/types/*"],
      "@/styles/*": ["./src/styles/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 🗂️ TIPOS TYPESCRIPT (src/types/index.ts)

```typescript
// src/types/index.ts

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface Branchen {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string[];
}
```

---

## 🛠️ LIBRERÍAS CORE

### 1. **next-seo** (SEO Optimization)

Usado para gestionar todos los meta tags, Open Graph, Twitter Cards, etc.

### 2. **react-hook-form** (Formularios)

Mejor rendimiento y validación que alternativas. Se integra perfecto con Zod.

### 3. **zod** (Validación)

Schema validation para formularios y API endpoints.

### 4. **resend** (Email Service)

Servicio moderno de email con excelente DX. Alternativa: SendGrid, Mailgun.

### 5. **framer-motion** (Animaciones)

Para animaciones suaves y profesionales (hover effects, scroll animations).

### 6. **@radix-ui** (UI Primitives)

Componentes accesibles sin estilos (para modales, dropdowns, etc.).

---

## 🔥 OPCIONAL (pero recomendado)

### Tailwind CSS

Si prefieres utility-first CSS en lugar de CSS Modules:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Configuración tailwind.config.js:**

```javascript
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D9B5C',
          light: '#7FD99B',
          dark: '#1E7A47',
        },
        secondary: {
          DEFAULT: '#1E5A7D',
          light: '#3A7CA5',
          dark: '#14425A',
        },
        accent: '#F5B85C',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

---

## 📋 COMANDOS INICIALES

```bash
# Crear proyecto Next.js
npx create-next-app@latest happy-garten --typescript --tailwind --app --src-dir

# Entrar al directorio
cd happy-garten

# Instalar dependencias adicionales
npm install next-seo react-hook-form resend zod @radix-ui/react-dialog @radix-ui/react-dropdown-menu framer-motion

# Instalar dev dependencies
npm install -D @types/node @types/react @types/react-dom

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

---

## 🚀 WORKFLOW RECOMENDADO

1. **Crear estructura de carpetas** según el esquema arriba
2. **Configurar variables de entorno** (.env.local)
3. **Crear componentes atómicos** (Button, Input, Logo, etc.)
4. **Crear componentes moleculares** (ServiceCard, FormField, etc.)
5. **Crear componentes organism** (Header, Footer, Hero, ContactForm)
6. **Crear páginas** usando los componentes
7. **Implementar API endpoints** para formularios
8. **Optimizar imágenes** (usar Next.js Image component)
9. **Implementar SEO** con next-seo
10. **Testing responsivo** en todos los dispositivos

---

**Resultado:** Estructura profesional, escalable y optimizada para SEO, siguiendo las mejores prácticas de Next.js 14 con TypeScript y Atomic Design.
