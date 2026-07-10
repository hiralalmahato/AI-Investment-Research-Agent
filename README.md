# 🚀 AI Investment Research Agent


## Project Overview
AI Investment Research Agent is a full-stack AI application that automates equity research for publicly listed companies. The user enters a company name, the backend fetches real-time financial information from Finnhub, and a LangGraph-based multi-agent workflow powered by Gemini AI performs company research, financial analysis, news analysis, risk assessment, and investment recommendation. The application helps users make informed investment decisions through a structured AI-generated report.

---

## 📸 Deployment Links 

Live Demo: https://ai-investment-research-agent-livid.vercel.app/

Backend API: https://ai-investment-research-agent-0jvi.onrender.com

---

## How It Works

1. User enters a company name.
2. React sends a POST request to the Express backend.
3. Express validates the request using Zod.
4. LangGraph starts the AI workflow.
5. Research Agent fetches company profile from Finnhub.
6. Financial Agent analyzes financial metrics.
7. News Agent summarizes recent news and sentiment.
8. Risk Agent evaluates business, financial, and market risks.
9. Decision Agent combines all outputs to generate BUY, HOLD, or PASS.
10. Backend returns structured JSON to React.
11. React renders the investment dashboard.

    

## Key Decisions & Trade-offs

### Why LangGraph?

I used LangGraph to build a modular multi-agent workflow instead of writing one large AI prompt. Each agent performs one specialized task, making the system easier to maintain and extend.

### Why Finnhub?

Initially I used Alpha Vantage, but due to strict API rate limits and incomplete responses, I migrated to Finnhub, which provides richer company profile and financial metrics.

### Why Gemini?

Gemini provides high-quality structured JSON generation through LangChain's structured output support.

### Trade-offs

- The application currently depends on external APIs.
- Real-time stock prices are not displayed.
- Historical chart analysis is not yet implemented.




## Example Runs

### Apple

Recommendation: BUY

Confidence: 92%

Reason:
Strong financial performance, dominant market position, healthy cash flow, and moderate overall risk.

---

### Tesla

Recommendation: HOLD

Confidence: 78%

Reason:
Strong growth potential but higher valuation and increased market risk.

---

### Amazon

Recommendation: BUY

Confidence: 88%

Reason:
Diversified revenue streams, strong cloud business, and healthy long-term fundamentals.



## AI Development Process

During development I used ChatGPT as a programming assistant for:

- LangGraph architecture
- Prompt engineering
- Debugging Alpha Vantage issues
- Migrating to Finnhub
- Improving structured JSON outputs
- Deployment troubleshooting on Render and Vercel

All implementation decisions, testing, debugging, and integration were performed and verified manually.




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
git clone https://github.com/hiralalmahato/AI-Investment-Research-Agent.git
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
Backend

GEMINI_API_KEY=

FINNHUB_API_KEY=

PORT=5000


Frontend

VITE_API_URL=http://localhost:5000/api/v1

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
