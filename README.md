# Osobní Portfolio Web

Moderní osobní portfolio vytvořené pomocí Next.js a Tailwind CSS.

## Funkce

- Responzivní design pro všechna zařízení
- Animovaná hvězdná obloha na pozadí
- Sekce: Úvod, O mně, Zkušenosti, Projekty, Kontakt
- Optimalizováno pro výkon a SEO
- Tmavý režim pro příjemné prohlížení

## Technologie

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Jazyk**: [TypeScript](https://www.typescriptlang.org/)
- **Fonty**: [Google Fonts](https://fonts.google.com/) (Inter, Roboto Mono)
- **Deployment**: [Vercel](https://vercel.com/)

## Spuštění lokálně

```bash
# Klonování repozitáře
git clone https://github.com/yourusername/web-portfolio.git
cd web-portfolio

# Instalace závislostí
npm install

# Spuštění vývojového serveru
npm run dev
```

Otevřete [http://localhost:3000](http://localhost:3000) ve vašem prohlížeči.

## Struktura projektu

```
web-portfolio/
├── public/            # Statické soubory (obrázky, ikony)
├── src/
│   ├── app/           # App Router (Next.js 13+)
│   ├── components/    # React komponenty
│   │   ├── layout/    # Layout komponenty (Header, Footer)
│   │   └── sections/  # Sekce stránky (Hero, About, atd.)
│   └── styles/        # Globální styly
├── tailwind.config.js # Konfigurace Tailwind CSS
└── package.json       # Závislosti projektu
```

## Řešení problémů s hydratací

Projekt používá speciální řešení pro animovanou hvězdnou oblohu, která je vykreslována pomocí HTML Canvas. Aby se předešlo problémům s hydratací v Next.js, je použita kombinace:

1. Komponenta `NoSSR` pro zabránění vykreslování na serveru
2. Atribut `suppressHydrationWarning` na canvas elementu

## Licence

MIT 