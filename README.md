# Intrepid Marine LLC — marketing site

Prototype website for **Intrepid Marine LLC** and domain **intrepidmarine.net**.

Products featured:

- **Intrepid Mariner**
- **CRS**
- **Marine Service**
- **Service Tech** (Service Valet brand)

## Local preview

Open `index.html` in a browser, or:

```bash
cd /Users/greg/Developer/intrepidmarine-web
python3 -m http.server 8080
# → http://localhost:8080
```

## GitHub Pages

1. Repo should be public (or private with Pages if your plan allows).
2. Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)`.
3. Site URL will look like: `https://gregopad39.github.io/intrepidmarine-web/`

Custom domain later:

1. In Pages settings, set custom domain `intrepidmarine.net` (and `www` if desired).
2. At GoDaddy, point DNS:
   - **A records** for apex `@` to GitHub Pages IPs (GitHub docs list current IPs), **or**
   - **CNAME** for `www` → `gregopad39.github.io`
3. Wait for DNS + TLS certificate (can take minutes to hours).

## Screenshots

Put images in `assets/screenshots/` and wire them into the product cards when ready.

## Contact placeholder

`hello@intrepidmarine.net` — create the mailbox at GoDaddy / email host when DNS is stable.
