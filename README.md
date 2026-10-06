# Kushal Links

A minimal personal link hub built with vanilla HTML, CSS, and JavaScript.

**[Live Demo](https://kushal-links.netlify.app/)**

<!-- Preview screenshot placeholder: Add a repository preview image here if desired -->

---

## About

Kushal Links is a personal landing page used to organize and showcase projects, profiles, and important links in one centralized place. It intentionally uses vanilla web technologies rather than a frontend framework to keep the page lightweight and simple to maintain.

---

## Features

- **Mobile-First Layout**: Fully responsive interface tailored for mobile and in-app browser viewports.
- **Glassmorphism Profile Card**: Frosted-glass container with clean typography and spacing.
- **Optimized Avatar**: High-DPI WebP profile image with explicit dimensions to avoid layout shift.
- **Interactive Link Cards**: Visual feedback with CSS transitions and a lightweight click-scale micro-interaction.
- **Social Links**: Scalable SVG vector icons linking to external profiles.
- **Non-Blocking Typography**: Google Fonts loaded asynchronously with immediate system font fallbacks.
- **Web App Manifest**: Integrated favicon suite and web manifest support for home screen shortcuts.
- **Zero Build Step**: Static architecture ready to run on any web server or static hosting provider.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Markup** | HTML5 |
| **Styling** | CSS3 |
| **Interactions** | Vanilla JavaScript |
| **Assets** | WebP (profile image), SVG (social icons), PNG / ICO (favicons) |
| **Deployment** | Netlify |

---

## Project Structure

```text
.
├── assets/
│   ├── apple-touch-icon.png
│   ├── favicon-96x96.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── site.webmanifest
│   ├── Sunset Profile Overlook.webp
│   ├── web-app-manifest-192x192.png
│   └── web-app-manifest-512x512.png
├── index.html
├── README.md
├── script.js
└── style.css
```

---

## Customization

### Adding or Modifying Links

Links are structured inside the `.links` container in `index.html`:

```html
<a href="https://example.com" target="_blank" class="link-card">
  <span class="title">Project Title</span>
  <span class="subtitle">Short description</span>
</a>
```

### Editing Profile Details

- **Profile Picture**: Replace the image file in `assets/` and update the `src` attribute on the profile `<img>` tag in `index.html`.
- **Name and Bio**: Edit the text directly inside `<h1 class="name">` and `<p class="bio">` in `index.html`.
- **Social Icons**: Update the `href` attributes and SVG paths within `<div class="socials">` in `index.html`.

---

## Running Locally

Because the project requires no compilation or package installation, you can serve it locally using any static web server:

1. Clone the repository:
   ```bash
   git clone https://github.com/kushllll/linktree.git
   cd linktree
   ```

2. Start a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000

   # Or using Node.js (optional)
   npx serve .
   ```

3. Open `http://localhost:8000` in your browser.

---

## Deployment

The project is deployed as a static site on Netlify.

---

## License

No license has been specified for this repository.
