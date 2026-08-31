# Intrepid Marine LLC — intrepidmarine.net

Marketing site for **Intrepid Marine LLC**: a small software company in the commercial marine space, plus consulting.

**Showcase product:** Intrepid Mariner  
**Also listed:** Marine Service Tech, Service Valet

## Local preview

```bash
cd /Users/greg/Developer/intrepidmarine-web
python3 -m http.server 8080
# → http://localhost:8080
```

## Publish to cPanel

Upload these into the domain document root (usually `public_html`):

- `.well-known/apple-app-site-association` (no `.json` suffix; required for the MST App Clip)
- `.well-known/.htaccess` (serves that file as `application/json`)
- `mst/index.html` (App Clip invocation URL: `https://intrepidmarine.net/mst`)
- `index.html` (and the other HTML pages, `css/`, `js/`, `assets/`)
- `assets/screenshots/` — drop PNG/JPEGs using the names in `assets/screenshots/README.md`
- optional `assets/hero/hero-loop.mp4` for the homepage radar/job loop
- `intrepid-mariner.html`
- `marine-service-tech.html`
- `service-valet.html`
- `consulting.html`
- `products.html`
- `support.html`
- `privacy.html`
- `css/` `js/` `assets/`

Keep folder structure. Do not wrap the files in an extra `intrepidmarine-web/` directory on the server.

## Pages

| File | Role |
|------|------|
| `index.html` | Company + Intrepid Mariner showcase |
| `intrepid-mariner.html` | Showcase product |
| `marine-service-tech.html` | Yard / tech app |
| `service-valet.html` | Land trades app |
| `consulting.html` | Advisory and branded editions |
| `products.html` | Three-product hub |
| `support.html` / `privacy.html` | Support and site privacy |

Brand art lives in `assets/brand/` (Mariner icon drives color: navy `#0a1628`, gold `#c9a227`, cream `#f3ead2`).
