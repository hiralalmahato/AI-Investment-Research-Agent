import jsPDF from "jspdf";

export default function generatePDF(analysis) {
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();

doc.setFillColor(15, 23, 42);
doc.rect(0, 0, pageWidth, 35, "F");

doc.setTextColor(255, 255, 255);
doc.setFont("helvetica", "bold");
doc.setFontSize(22);

doc.text("AI Investment Research Report", pageWidth / 2, 20, {
  align: "center",
});

doc.setFontSize(10);

doc.text(
  `Generated on ${new Date().toLocaleString()}`,
  pageWidth / 2,
  28,
  {
    align: "center",
  }
);

let y = 50;



  // ---------- Helpers ----------

  const addTitle = (title) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(20, 20, 20);
    doc.text(title, 20, y);
    y += 12;
  };

  const addHeading = (heading) => {
    if (y > 260) {
      doc.addPage();
      y = 20;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.setTextColor(0, 102, 204);

    doc.text(heading, 20, y);

    y += 8;
  };

  const addParagraph = (text) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(40);

    const lines = doc.splitTextToSize(text, 170);

    doc.text(lines, 20, y);

    y += lines.length * 6 + 8;
  };

  // ---------- Header ----------

  addTitle("AI Investment Research Report");

  doc.setFontSize(11);

  doc.text(`Company: ${analysis.company}`, 20, y);
  y += 8;

  doc.text(
    `Generated: ${new Date().toLocaleString()}`,
    20,
    y
  );

  y += 15;

  // ---------- Company ----------

  addHeading("Company Overview");

  addParagraph(analysis.research.business);

  addParagraph(
    `Industry: ${analysis.research.industry}`
  );

  addParagraph(
    `Products: ${analysis.research.products.join(", ")}`
  );

  addParagraph(
    analysis.research.marketPosition
  );

  // ---------- Financial ----------

  addHeading("Financial Analysis");

  addParagraph(analysis.financial.revenueGrowth);

  addParagraph(analysis.financial.profitability);

  addParagraph(analysis.financial.financialHealth);

  addParagraph(analysis.financial.cashFlow);

  // ---------- News ----------

  addHeading("News Analysis");

  analysis.news.positiveNews.forEach((item) => {
    addParagraph("• " + item);
  });

  analysis.news.negativeNews.forEach((item) => {
    addParagraph("• " + item);
  });

  // ---------- Risk ----------

  addHeading("Risk Analysis");

  addParagraph(analysis.risk.businessRisk);

  addParagraph(analysis.risk.financialRisk);

  addParagraph(analysis.risk.marketRisk);

  addParagraph(analysis.risk.overallRisk);

  // ---------- Recommendation ----------

  addHeading("Recommendation");

  addParagraph(
    `Recommendation: ${analysis.recommendation.recommendation}`
  );

  addParagraph(
    `Confidence: ${analysis.recommendation.confidence}%`
  );

  addParagraph(
    analysis.recommendation.reasoning
  );

  addParagraph(
    analysis.recommendation.summary
  );

  doc.save(
    `${analysis.company}-Investment-Report.pdf`
  );
}