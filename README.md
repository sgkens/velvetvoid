# Velvet Viod
Velvet Void UI Application Elements are powered by Eleventy with Nunjucks, Apexcharts, Tailwind CSS, Alpine.js, Tablar, and Vivus for a polished and engaging user experience.

### 🪅 Built with:
 - [Eleventy](https://www.11ty.dev) with:
    - [Nunjucks](https://mozilla.github.io/nunjucks)
 - [Apexcharts](https://apexcharts.com/)
 - [Tailwind CSS](https://tailwindcss.com/docs/installation)
 - [Alpine.js](https://alpinejs.dev)
 - [Tablericons](https://tablericons.com/)
 - [Vivus](https://maxwellito.github.io/vivus/)

#### 🔷 Build using `npm`

Build static files
```bash
npm run build # Static files are outputed to ./dist
```

Start Local Server

```bash
npm run serve
```
Navigation to [http:\\localhost:8080](http:\\localhost:8080)

#### 🔷 Build using `npx`

Build Tailwind
```bash
npx tailwindcss -i ./src/css/input.css -o ./src/css/main.css
# Watch and generate css
# npx tailwindcss -i ./src/css/input.css -o ./src/css/main.css --watch
```

Build Eleventy

```bash
npx @11ty/eleventy # Static files are outputed to ./dist
npx @11ty/eleventy --serve # Start local server
```
Navigation to [http:\\localhost:8080](http:\\localhost:8080)

### 📑License
Velvetviod is released under the [MIT LICENSE](https://choosealicense.com/licenses/mit/), copyright © Garvey K. Snow.
