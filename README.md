
````markdown
# 💻 Prabha Chandran Portfolio

Welcome to my personal portfolio website!  
This site showcases my work, skills, and background as a Full Stack Developer with a passion for coding, UI/UX, and scalable web apps.

🌐 **Live Demo**: _[Coming Soon]_  
📫 **Contact**: [LinkedIn](https://www.linkedin.com) | [Email](mailto:your-email@example.com)

---

## 🛠️ Tech Stack

- **React.js** with [Vite](https://vitejs.dev/)
- **Tailwind CSS** for styling
- **React Icons**
- **Deployed on GitHub Pages** (guide below)

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/prabha-portfolio.git
cd prabha-portfolio
````

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

This will start your local server at:

```
http://localhost:5173
```

---

## 🌈 Features

* Beautiful responsive UI
* Clean layout with Tailwind CSS
* Animated social icons
* Resume link section
* Custom gradient background and profile image display

---

## 📦 Deployment

### GitHub Pages

To deploy using GitHub Pages:

1. Install the deployment plugin:

```bash
npm install --save-dev gh-pages
```

2. Add the following to your `package.json`:

```json
"homepage": "https://yourusername.github.io/prabha-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Build and deploy:

```bash
npm run deploy
```

---

## 📁 Folder Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---

### 🙋‍♀️ Created by [Prabha Chandran](https://www.linkedin.com)

Feel free to fork, star, and contribute! 💜

```

```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
