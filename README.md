# Wikipedia Summary 📚  

A simple Node.js wrapper to fetch Wikipedia summaries in multiple languages.  

![NPM Version](https://img.shields.io/npm/v/wikipedia-summary?color=blue&style=flat-square)  
![Downloads](https://img.shields.io/npm/dt/wikipedia-summary?color=green&style=flat-square)  
![License](https://img.shields.io/npm/l/wikipedia-summary?style=flat-square)  

---

## 📦 Installation  

```sh
npm install wikipedia-summary
```

---

## 🚀 Features  
✅ Fetches Wikipedia summaries easily.  
✅ Supports multiple languages (`en`, `tr`, `fr`, `de`, etc.).  
✅ Returns title, description, extract, page URL, and image.  
✅ Lightweight and easy to use.  

---

## 🔥 Quick Start  

```js
const { getSummary } = require("wikipedia-summary");

async function main() {
  const summary = await getSummary("Albert Einstein", "en");
  console.log(summary);
}

main();
```

---

## 📌 API Method  

### `getSummary(topic, language)`  
Fetches a short summary from Wikipedia.  

**Parameters:**  
- `topic` _(string)_: The topic to search for.  
- `language` _(string, optional)_: Wikipedia language code (default: `"en"`).  

**Returns:**  
A JSON object with:  
- `title`: The page title.  
- `description`: A short description.  
- `extract`: A brief summary.  
- `pageUrl`: The Wikipedia page link.  
- `imageUrl`: The main image of the page (if available).  

---

## 📜 License  

This project is licensed under the **MIT License**.  

---

## 🌟 Support & Contact  

- **GitHub Issues:** [Report Bugs or Request Features](https://github.com/utkuberkaykoc/wikipedia-summary/issues)  
- **Give a Star:** ⭐ If you love this package, show some support!  

🚀 **Now go explore the world of knowledge!** 🌍  
