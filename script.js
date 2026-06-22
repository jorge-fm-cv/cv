const pdfFileName = "Mi curriculum - Jorge Francisco Miguel.pdf";

document.getElementById("downloadPdf").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = pdfFileName;
  link.download = pdfFileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
});
