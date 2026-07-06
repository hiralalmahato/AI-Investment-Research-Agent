# User Flow

## Objective

The AI Investment Research Agent helps users analyze a company and provides an AI-powered investment recommendation with supporting reasoning.

---

## User Journey

### Step 1: Open the Application

The user visits the application homepage.

---

### Step 2: Enter Company Name

The user enters a company name (for example, Apple, Tesla, Microsoft, or Reliance).

---

### Step 3: Submit Request

The user clicks the "Analyze" button.

The frontend sends a POST request to the backend API.

Example:

POST /api/v1/analyze

Request Body:

{
  "company": "Apple"
}

---

### Step 4: Backend Processing

The backend validates the company name.

If valid, it starts the AI research workflow.

---

### Step 5: AI Research Workflow

The AI performs the following tasks:

1. Company Research
   - Business overview
   - Industry
   - Products
   - Market position

2. Financial Analysis
   - Revenue growth
   - Profitability
   - Financial health

3. News Analysis
   - Recent news
   - Positive and negative events

4. Risk Analysis
   - Business risks
   - Market risks

5. Investment Decision
   - BUY / HOLD / PASS
   - Confidence score
   - Supporting reasoning

---

### Step 6: Return Response

The backend returns a structured JSON response.

Example:

{
  "company": "Apple",
  "recommendation": "BUY",
  "confidence": 92,
  "summary": "Apple has strong financial performance and positive long-term growth potential."
}

---

### Step 7: Display Results

The frontend displays:

- Company Name
- Recommendation
- Confidence Score
- Financial Summary
- News Summary
- Risk Analysis
- AI Reasoning

---

## Error Handling

The application should handle:

- Empty company name
- Invalid company
- API failure
- AI response failure
- Network timeout

Appropriate error messages should be displayed to the user.

---

## Future Enhancements

- Compare multiple companies
- Export report as PDF
- Save previous analyses
- User authentication
- Portfolio tracking
- Historical analysis