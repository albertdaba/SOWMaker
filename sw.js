# DABA · Statement of Work Builder

A Progressive Web App for generating Statements of Work at Daba Law Office.

## Deploy to Netlify (from GitHub)

### First time

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. In [Netlify](https://app.netlify.com), click **Add new site → Import an existing project**.
3. Connect GitHub and select your repo.
4. Build settings — leave everything blank (no build command, publish directory is `.`).
5. Click **Deploy site**.

### Updates

```bash
git add .
git commit -m "Your message"
git push
```
Netlify redeploys automatically.

---

## Project structure

```
/
├── index.html        ← The whole app (single HTML file)
├── manifest.json     ← PWA manifest
├── sw.js             ← Service worker (offline support)
├── favicon.ico
├── icons/
│   ├── icon-192x192.png
│   ├── icon-512x512.png
│   ├── apple-touch-icon.png
│   └── …
├── netlify.toml      ← Netlify config (headers, redirects)
└── .gitignore
```

## PWA install

After the site is live, visit it in Chrome/Edge on desktop or Safari/Chrome on iOS/Android.  
You'll see an "Add to Home Screen" or install prompt. Once installed it works **fully offline**.
