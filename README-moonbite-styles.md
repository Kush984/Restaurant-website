# MoonBite stylesheets

CSS package based on the provided dark restaurant design. The repository screenshot lists `index.html`, `menu.html`, `gallery.html`, `about.html`, and `contact.html`. Styles are separated for individual commits.

Copy these files into your repository's `css/` folder. Add the shared styles first and the matching page stylesheet last. Example for `index.html`:

```html
<link rel="stylesheet" href="css/moonbite-base.css">
<link rel="stylesheet" href="css/moonbite-flexbox.css">
<link rel="stylesheet" href="css/moonbite-home.css">
```

Use `moonbite-menu.css` in `menu.html`, `moonbite-gallery.css` in `gallery.html`, `moonbite-about.css` in `about.html`, and `moonbite-contact.css` in `contact.html`.

Page styles target common section classes such as `.hero`, `.menu-grid`, `.story-layout`, `.gallery-grid`, and `.contact-layout`. Add matching classes to the corresponding HTML elements if they do not already exist. Update image paths to your assets; the home hero currently uses `images/hero-pasta.jpg`.

Files: `moonbite-base.css` (shared colors/type/header), `moonbite-flexbox.css` (layout helpers), and one page file for home, menu, about, gallery, and contact. The repository source was provided as a screenshot, so the CSS is designed to be attached to existing markup without changing its content or structure.
