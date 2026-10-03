# Cloudflare Full-Stack Demo App

A simple full-stack application deployed on **Cloudflare Pages + Workers**.

## 📁 Project Structure

```
DevOps/
├── public/              # Frontend (Cloudflare Pages)
│   ├── index.html       # Landing page
│   ├── style.css        # Styles (dark theme)
│   └── app.js           # API call logic
├── functions/           # Backend (Cloudflare Workers)
│   └── api/
│       └── hello.js     # GET /api/hello endpoint
├── wrangler.toml        # Cloudflare config
├── package.json         # Dependencies & scripts
└── README.md
```

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
This starts a local dev server at `http://localhost:8788`

### 3. Deploy to Cloudflare
```bash
npx wrangler login       # Login to your Cloudflare account (one-time)
npm run deploy            # Deploy to production
```

## ⚙️ How It Works

- **Frontend** → Static HTML/CSS/JS served via Cloudflare Pages CDN (global edge)
- **Backend** → `functions/api/hello.js` auto-maps to `GET /api/hello` (Cloudflare Workers)
- **Deploy** → `wrangler pages deploy` pushes everything in one command

## 📡 API Endpoint

**GET** `/api/hello`

Response:
```json
{
  "message": "Hello from Cloudflare Workers! 🚀",
  "timestamp": "2026-10-03T04:30:00.000Z",
  "region": "BOM",
  "country": "IN",
  "deployed": true
}
```
