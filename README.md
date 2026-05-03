# Landing · Evento de retail Córdoba 16/05/2026

Landing page del evento del **sábado 16 de mayo de 2026, centro de Córdoba**.
Tres founders argentinos del nuevo retail (Deenex, Puni y Pimentón) en escenario:
cómo vender, mover y hacer crecer una cadena gastronómica en 2026. Solo 30 marcas en la sala.

## Stack

- **Vue 3** (Composition API, `<script setup>`)
- **Vite 7**
- **Tailwind CSS 3** + **PostCSS** + **Autoprefixer**
- **Vue Router 4** (hash mode, para que ande sin server-side routing en GitHub Pages)
- Cero JS extra: countdown, scarcity meter, contadores animados, FAQ accordion y reveal-on-scroll van con vanilla JS adentro de los SFC.

El sistema de diseño (paleta `#695EDE`, fuentes **Inter** + **DM Sans**, patrones de eyebrow / heading con acento itálico, cards con hover, noise texture) está basado en el sitio público de Deenex (`deenexproduct/deenex-website-v2`). Crédito al equipo de Deenex por el sistema base.

---

## Correr localmente

Requiere Node `>=20.19` o `>=22.12`.

```bash
npm install
npm run dev          # arranca Vite en http://localhost:5173
npm run build        # genera dist/
npm run preview      # sirve dist/ localmente
```

---

## Deploy

### GitHub Pages (recomendado, ya configurado)

Hay un workflow en `.github/workflows/deploy.yml` que buildea y publica automáticamente cada push a `main`.

**Setup inicial (una sola vez):**

1. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Hacé push a `main`.
3. La URL final va a ser `https://<usuario>.github.io/mesa-chica-landing/`.

El `vite.config.js` setea `base: "/mesa-chica-landing/"` cuando `GITHUB_PAGES=true` (lo hace el workflow). Si vas a un dominio raíz custom, cambiá esa línea a `base: "/"`.

### Vercel

```bash
npm i -g vercel
vercel
```

Vercel detecta Vite automáticamente. Acordate de quitar la config condicional de `base` en `vite.config.js` o setear la env var `GITHUB_PAGES=false`.

### Netlify

Build command: `npm run build`
Publish directory: `dist`

---

## Estructura

```
mesa-chica-landing/
├── index.html                  ← SEO, OG, Twitter Card y JSON-LD del evento
├── public/
│   ├── favicon.svg             ← favicon "M" violeta
│   └── og-image.svg            ← OG image 1200x630 (placeholder editable)
├── src/
│   ├── main.js
│   ├── styles/main.css         ← variables CSS, fuentes, noise overlay, reveals
│   ├── router/
│   │   ├── App.vue
│   │   └── index.js            ← hash router (compatible con GitHub Pages)
│   ├── views/
│   │   └── HomeView.vue        ← compone todas las secciones + IntersectionObserver para reveals
│   └── components/
│       ├── layout/
│       │   ├── Navbar.vue      ← top bar con countdown en vivo y CTA "Pedir mi lugar"
│       │   └── Footer.vue      ← 3 organizadores + hashtag
│       └── sections/
│           ├── HeroSection.vue
│           ├── ManifestoSection.vue
│           ├── SpeakersSection.vue
│           ├── AgendaSection.vue
│           ├── ValuePropSection.vue
│           ├── BrandsSection.vue
│           ├── LocationSection.vue
│           ├── FAQSection.vue
│           ├── SponsorCTASection.vue
│           └── FinalCTASection.vue
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── .github/workflows/deploy.yml ← deploy automático a Pages
└── package.json
```

---

## Placeholders pendientes de reemplazar

Antes de difundir, hay que reemplazar lo siguiente:

| Qué | Dónde | Comentario |
|---|---|---|
| **Link de Luma** | `src/components/sections/FinalCTASection.vue` → `lumaLink` | Reemplazar `"#"` por la URL real cuando se cree el evento. También hay un anchor `#luma` que sigue funcionando para scroll interno. |
| **Número de WhatsApp** | `src/components/sections/SponsorCTASection.vue` → `phoneNumber` | Hoy `5491154592266` (placeholder de los contextos). Validar dígitos. |
| **Fotos de speakers** | `src/components/sections/SpeakersSection.vue` → array `speakers`, campo `photo` | Hoy `null` (muestra inicial sobre fondo violeta). Cargar URLs locales (en `src/assets/images/speakers/...`) y referenciarlas. |
| **Sede exacta** | `src/components/sections/LocationSection.vue` | Mantener oculta hasta el día (estrategia FOMO) o reemplazar `"Centro de Córdoba"` cuando se decida publicar. |
| **Cupos ocupados** | `src/components/sections/HeroSection.vue` → `occupied = ref(18)` | Actualizar manualmente este número cuando llegue el momento. La barra animada está hardcoded a 60% (18/30) en el CSS — si querés que la barra refleje la cifra real automáticamente, ver sección "Cómo actualizar el contador de cupos" abajo. |
| **OG image** | `public/og-image.svg` | Placeholder con texto. Si querés algo más cuidado, exportar a PNG con un editor de imágenes y reemplazar (mantener mismo path). |
| **Dominio canonical** | `index.html` → `<link rel="canonical">` y meta `og:url` | Hoy apunta a `tudominio.com.ar` (placeholder). Cambiar al dominio final. |
| **Logos del footer** | `src/components/layout/Footer.vue` | Hoy son texto estilizado. Si tenés SVGs/PNGs, reemplazar el `<span>` del nombre por `<img>` con el logo. |

Buscar `PLACEHOLDER` en el código para encontrarlos rápido.

---

## Cómo actualizar el contador de cupos

Editar `src/components/sections/HeroSection.vue`:

```js
const occupied = ref(18);  // ← cambiar por el número actual (X de 30)
```

Y en el `<style scoped>` del mismo archivo, ajustar el porcentaje de la barra:

```css
@keyframes fillBar {
  to { width: 60%; }   /* 18 de 30 = 60%. Calcular: (occupied / 30) * 100 */
}
```

Después hacer commit y push — el workflow se encarga del resto. (Si te animás, podés computarlo desde JS y aplicarlo con `style.setProperty` para que dependa solo de la variable `occupied`.)

---

## Crédito

Sistema de diseño base inspirado y reutilizado del sitio de [Deenex](https://github.com/deenexproduct/deenex-website-v2) (paleta, tipografías, patrones de sección, animaciones, noise texture, reveals). El evento es co-organizado por Deenex, así que la reutilización está autorizada.

---

## Licencia

MIT.
