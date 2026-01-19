# Portfolio - Paweł Nowecki

Nowoczesna, responsywna strona portfolio stworzona w oparciu o najnowsze technologie webowe. Projekt służy jako wizytówka zawodowa, prezentująca moje doświadczenie, zrealizowane projekty oraz szczegółową ofertę usług programistycznych. Aplikacja została zaprojektowana z myślą o wysokiej wydajności, SEO oraz dostępności.

## 🚀 Technologie

Projekt wykorzystuje nowoczesny stack technologiczny zapewniający szybkość działania, skalowalność i łatwość utrzymania kodu:

### Core
- **Next.js 15** (App Router) - Framework React do budowania aplikacji webowych.
- **TypeScript** - Statycznie typowany nadzbiór JavaScript.
- **React** - Biblioteka do budowania interfejsów użytkownika.

### Stylizacja i UI
- **Tailwind CSS** - Framework CSS utility-first.
- **Framer Motion** - Biblioteka do tworzenia zaawansowanych animacji.
- **Lucide React** - Zestaw ikon.
- **Radix UI** - Dostępne komponenty UI (wykorzystywane m.in. w powiadomieniach Toast).
- **Tailwind Merge & CLSX** - Narzędzia do warunkowego łączenia klas CSS.

### Funkcjonalności
- **next-intl** - Pełna obsługa wielojęzyczności (i18n) z routingiem opartym na ścieżkach.
- **Zod** - Walidacja schematów danych (formularze).
- **Nodemailer** - Obsługa wysyłki wiadomości e-mail (formularz kontaktowy).
- **Server Actions** - Obsługa logiki po stronie serwera bezpośrednio w komponentach React.

### Jakość Kodu (DX)
- **ESLint** & **Prettier** - Linter i formatter kodu.
- **Husky** & **lint-staged** - Automatyzacja sprawdzania kodu przed commitem (Git Hooks).

## 🌍 Wielojęzyczność (i18n)

Aplikacja wspiera wiele wersji językowych (obecnie PL i EN) dzięki bibliotece `next-intl`.
- Routing obsługuje prefiksy językowe (np. `/pl`, `/en`).
- Treści statyczne pobierane są z plików tłumaczeń JSON.
- Middleware automatycznie wykrywa i przekierowuje użytkownika na odpowiednią wersję językową.

## 🗂 Struktura Stron

Projekt oparty jest na `App Router` z dynamicznym routingiem:

- **Strona Główna (`/`)** - Sekcja Hero, O mnie, Doświadczenie, Wybrane projekty, Kontakt.
- **Portfolio (`/portfolio`)** - Pełna lista zrealizowanych projektów.
    - **Szczegóły Projektu (`/portfolio/[slug]`)** - Dynamicznie generowane strony dla każdego projektu.
- **Oferta (`/oferta`)** - Sekcje dedykowane konkretnym usługom:
    - **Strony Internetowe** (`/oferta/strony-internetowe`)
    - **Systemy Dedykowane / CRM** (`/oferta/systemy-dedykowane-crm`)
    - **Wdrożenia AI** (`/oferta/wdrozenia-ai`)
    - **Automatyzacje** (`/oferta/automatyzacje`)

## ⚙️ Instrukcja i Instalacja

Aby uruchomić projekt lokalnie, wykonaj następujące kroki:

1. **Sklonuj repozytorium:**
   ```bash
   git clone <adres-repozytorium>
   cd PortfolioNextJS
   ```

2. **Zainstaluj zależności:**
   Użyj wybranego menedżera pakietów (npm, yarn lub pnpm).
   ```bash
   npm install
   # lub
   yarn install
   ```

3. **Konfiguracja zmiennych środowiskowych:**
   Upewnij się, że posiadasz plik `.env` skonfigurowany zgodnie z wymaganiami projektu (głównie dla obsługi SMTP formularza kontaktowego).

4. **Uruchom serwer deweloperski:**
   ```bash
   npm run dev
   # lub
   yarn dev
   ```

5. **Otwórz aplikację:**
   Przejdź pod adres [http://localhost:3000](http://localhost:3000) w swojej przeglądarce.

## 🏗️ Budowanie wersji produkcyjnej

Aby zbudować aplikację pod środowisko produkcyjne:

```bash
npm run build
npm start
```
