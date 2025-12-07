# 🚀 HAPPY GARTEN – WEBSITE PROJECT

Dieses Repository enthält den Quellcode für die neue B2B-Website von **Happy Garten** (Facility Services Hamburg).

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [CSS Modules](https://github.com/css-modules/css-modules) (oder Tailwind CSS optional)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email:** [Resend](https://resend.com/)
- **SEO:** [Next-SEO](https://github.com/garmeeh/next-seo)
- **UI Components:** Atomic Design Pattern

---

## 🏁 Getting Started

### Voraussetzungen

- Node.js 18+
- npm oder yarn

### Installation

1. **Repository klonen:**
   ```bash
   git clone https://github.com/your-org/happy-garten.git
   cd happy-garten
   ```

2. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

3. **Environment Variables konfigurieren:**
   Erstelle eine `.env.local` Datei im Root-Verzeichnis basierend auf `.env.example`.

4. **Development Server starten:**
   ```bash
   npm run dev
   ```
   Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

---

## 📂 Projektstruktur (Atomic Design)

```
src/
├── app/                  # Next.js App Router Pages
├── components/           # UI Components
│   ├── atoms/            # Buttons, Inputs, Icons
│   ├── molecules/        # Cards, FormFields
│   ├── organisms/        # Header, Footer, Hero, Forms
│   └── templates/        # Page Layouts
├── lib/                  # Utilities & Helpers
├── hooks/                # Custom React Hooks
├── styles/               # Global Styles & Variables
└── types/                # TypeScript Interfaces
```

---

## 🌿 Git Workflow

Wir verwenden einen **Feature-Branch-Workflow**.

### 1. Neuen Branch erstellen
Für jedes neue Feature oder jeden Bugfix einen eigenen Branch erstellen:

```bash
# Namenskonvention: type/description
git checkout -b feature/lueftungsreinigung-page
# oder
git checkout -b fix/contact-form-validation
```

### 2. Commits
Verwende **Atomic Commits** mit klaren Nachrichten (Conventional Commits empfohlen):

- `feat: add service card component`
- `fix: correct typo in footer`
- `style: update button hover state`
- `docs: update readme`

### 3. Push & Pull Request
```bash
git push origin feature/lueftungsreinigung-page
```
Erstelle dann einen **Pull Request (PR)** auf GitHub/GitLab zum `main` Branch.

### 4. Merge
Nach Code Review wird der Branch in `main` gemerged und anschließend gelöscht.

---

## 📝 Checkliste für neue Seiten

Wenn du eine neue Service-Seite erstellst (z.B. `/leistungen/neuer-service`), achte auf:

1. **SEO Meta Tags:** Title, Description, Canonical URL.
2. **Struktur:** H1, H2, H3 Hierarchie einhalten.
3. **Bilder:** Alt-Texte nicht vergessen (`alt="Beschreibung mit Keyword"`).
4. **Interne Links:** Verlinke zu verwandten Services und Branchen.
5. **CTA:** Jede Seite muss einen klaren Call-to-Action haben.
6. **Mobile:** Prüfe die Darstellung auf mobilen Geräten.

---

## 🎨 Design System

### Farben
- **Primary:** `#2D9B5C` (Verde)
- **Secondary:** `#1E5A7D` (Azul)
- **Accent:** `#F5B85C` (Amarillo)

### Typografie
- **Headings:** Montserrat (Bold 700, Semi-Bold 600)
- **Body:** Inter (Regular 400, Medium 500)

---

## 🚀 Deployment

Das Projekt ist für Deployment auf **Vercel** optimiert.

1. Verbinde das Repository mit Vercel.
2. Konfiguriere die Environment Variables im Vercel Dashboard.
3. Jeder Push auf `main` löst ein automatisches Deployment aus.

---

## 📄 Lizenz

Proprietär. © 2024 Happy Garten GmbH.
