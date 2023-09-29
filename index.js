import { jsPDF } from "jspdf";

// Create a new instance of jsPDF
var doc = new jsPDF();

// Set the font to the custom font you included
doc.setFont('your-font-name'); 

// Add some Arabic text
doc.text('مرحبا بكم في jsPDF!', 10, 10);

// Save the PDF
doc.save('test.pdf');