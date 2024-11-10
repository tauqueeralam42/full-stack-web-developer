document.getElementById('upload-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const textFileInput = document.getElementById('text-file');
  const imageFileInput = document.getElementById('image-file');
  const textFile = textFileInput.files[0];
  const imageFile = imageFileInput.files[0];

  if (textFile || imageFile) {
    const doc = new window.jspdf.jsPDF();

    if (textFile) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const text = event.target.result;
        addTextToPDF(doc, text, () => {
          if (imageFile) {
            addImageToPDF(doc, imageFile);
          } else {
            finalizePDF(doc);
          }
        });
      };
      reader.readAsText(textFile);
    } else if (imageFile) {
      addImageToPDF(doc, imageFile);
    }
  }
});

function addTextToPDF(doc, text, callback) {
  doc.text(text, 10, 10);
  callback();
}

function addImageToPDF(doc, imageFile) {
  const reader = new FileReader();
  reader.onload = function(event) {
    const imageData = event.target.result;
    doc.addImage(imageData, 'JPEG', 10, 10, 180, 160);
    finalizePDF(doc);
  };
  reader.readAsDataURL(imageFile);
}

function finalizePDF(doc) {
  const pdfData = doc.output('blob');
  const downloadLink = document.getElementById('download-link');
  downloadLink.href = URL.createObjectURL(pdfData);
  downloadLink.download = 'combined.pdf';
  downloadLink.style.display = 'block';
}
