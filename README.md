# Crowsnest Website

This website is powered by **[Docusaurus](https://docusaurus.io/)** — a modern, feature-rich static site generator that makes it easy to build, publish, and maintain a great developer experience.

---

## 🛠️ Local Development

1. Clone this repository:

   ```bash
   git clone https://github.com/crowsnest-security/crowsnest-security.github.io

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server with live-reload:

   ```bash
   npm run start
   ```

   Then open your browser to `http://localhost:3000` — any changes you make will reload automatically.

---

## 🧱 Build 🔨

To generate a production-ready static site, run:

```bash
npm run build
```

This outputs optimized files into the `build/` folder, ready to be deployed on any static file server or CDN.

---

## 🌍 Deploy to GitHub Pages

We support both SSH and HTTPS deployments to GitHub Pages via the `gh-pages` branch.

- **If using SSH** (recommended):

  ```bash
  USE_SSH=true npm run deploy
  ```

- **If using HTTPS and a custom GitHub username**:

  ```bash
  GIT_USER=<Your-GitHub-Username> npm run deploy
  ```

This command automatically builds the site and pushes the result to the `gh-pages` branch for hosting it via GitHub Pages.

---

## 📘 In a Nutshell

- **🧪 Develop** locally with `npm run start`
- **📦 Build** production-ready HTML/CSS/JS via `npm run build`
- **🚀 Deploy** automatically with `npm run deploy`

---

### 💡 Pro Tips

- Customize site settings in `docusaurus.config.js` (e.g., colors, metadata, plugin options).
- Organize your documentation pages within the `docs/` and navigation in `sidebars.js`.
- Extend site functionality using [Docusaurus plugins](https://docusaurus.io/docs/plugins).
