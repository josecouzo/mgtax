# MG Tax Maker LLC — sitio web (demo)

Nueva web bilingüe (ES/EN) para MG Tax Maker LLC, Louisville, KY. Versión de demostración publicada en GitHub Pages.

## Stack

- [Astro](https://astro.build) con salida estática (HTML puro, casi sin JavaScript).
- CSS propio con tokens en `src/styles/global.css`. Sistema visual documentado en [`DESIGN.md`](DESIGN.md); el contexto de producto, en [`PRODUCT.md`](PRODUCT.md).
- Tipografías self-hosted (Archivo + Inter, vía @fontsource) e iconos Lucide / Simple Icons incrustados en build.

## Desarrollo

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
```

Requiere Node 22.12 o superior.

## Contenido

| Qué | Dónde |
|---|---|
| Textos de la home (ES/EN) | `src/i18n/ui.ts` |
| Servicios, documentos por servicio, links de Google Calendar | `src/data/services.ts` |
| Teléfono, email, WhatsApp, redes, crédito de la foto | `src/data/site.ts` |
| Logos y favicons | `public/brand/`, `public/` |
| Foto del hero y retrato del fundador | `src/assets/` |

## Rutas

- `/` y `/en/` — home
- `/servicios/{impuestos,contabilidad,credito,empresas}/` y `/en/services/{taxes,bookkeeping,credit-repair,business-formation}/`
- `/portal/`, `/en/portal/` — portal de clientes y pagos
- `/privacidad/`, `/en/privacy/`

## Publicar en GitHub Pages

1. Sube esta carpeta (`web/`) como raíz de un repo de GitHub, en la rama `main`.
2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que compila con la URL y la ruta base correctas (`https://<usuario>.github.io/<repo>/`).

## Créditos

Foto de Louisville: Charles Delano / USACE Louisville District, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), vía Wikimedia Commons.
