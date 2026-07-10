# 🚀 AI Investment Research Agent

An AI-powered investment research platform built using **React.js, Node.js, Express.js, LangChain, LangGraph, Gemini AI, and Finnhub API**.

The application implements a **Multi-Agent AI workflow** to automate equity research by collecting real-time financial data, analyzing company fundamentals, evaluating market sentiment, assessing investment risks, and generating structured investment recommendations through specialized AI agents.

---

## 📸 Project Preview

Live Demo: https://ai-investment-research-agent-livid.vercel.app/

Backend API: https://ai-investment-research-agent-0jvi.onrender.com

---

## ✨ Features

- 🤖 Multi-Agent AI Workflow
- 📊 Company Research
- 💰 Financial Analysis
- 📰 News Analysis
- ⚠️ Risk Assessment
- ✅ AI Investment Recommendation
- 📈 Interactive Dashboard
- 📉 Financial Score Chart
- 💡 AI Key Insights
- 📄 PDF Report Download
- 🔍 Search History
- 🎨 Modern Responsive UI
- ⚡ Smooth Animations

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Recharts
- React Hot Toast
- Lucide React
- React Icons

### Backend

- Node.js
- Express.js
- LangGraph
- LangChain
- Gemini AI
- Finnhub API
- Zod

---

## 🏗 Architecture

```
React Frontend
       │
       ▼
Express Backend
       │
       ▼
LangGraph Workflow
       │
 ┌───────────────┐
 │ Research Agent│
 ├───────────────┤
 │ Financial     │
 ├───────────────┤
 │ News Agent    │
 ├───────────────┤
 │ Risk Agent    │
 ├───────────────┤
 │ Decision Agent│
 └───────────────┘
       │
       ▼
Gemini AI
       |
Final InvestMent Report
---

## 📂 Folder Structure

```
AI-Investment-Research-Agent/

├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── utils
│
├── backend
│   ├── agents
│   ├── graph
│   ├── services
│   ├── routes
│   └── controllers
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Investment-Research-Agent.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the backend directory.

```env
GEMINI_API_KEY=your_key
FINNHUB_API_KEY=your_key

```

---
## Postman API Testing 
API Endpoints

Base URL
https://your-render-link.onrender.com/api/v1


Method: POST

Headers
Content-Type: application/json
Body → Raw → JSON
{
  "company": "Tesla"
}

Click Send.

## 📄 Future Improvements

- Company Comparison
- Portfolio Analysis
- Watchlist
- AI Chat Assistant
- Stock Price Prediction

---

## 👨‍💻 Author

**Hiralal Mahato**

GitHub: https://github.com/hiralalmahato

LinkedIn: https://linkedin.com/in/hiralal-mahato
