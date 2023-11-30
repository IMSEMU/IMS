import React, { useEffect, useState } from "react";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ docSrc }) => {
  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  console.log(docSrc, "src");
  useEffect(() => {
    if (docSrc) {
      const fetchPdf = async () => {
        try {
          const response = await axios.get(docSrc, {
            responseType: "arraybuffer",
          });

          const pdfBlob = new Blob([response.data], {
            type: "application/pdf",
          });
          console.log(pdfBlob, "url");
          const pdfDataUrl = new File([pdfBlob], "fileName", {
            type: pdfBlob?.type,
          });

          // const pdfDataUrl = URL.createObjectURL(pdfBlob);
          console.log(pdfDataUrl, "data");

          setPdfData(pdfDataUrl);

          // Use the following to get the total number of pages in the PDF
          const { numPages } = await getPageInfo(pdfDataUrl);
          setNumPages(numPages);
        } catch (error) {
          console.error("Error fetching PDF:", error);
        }
      };

      fetchPdf();
    }
  }, [docSrc]);

  const getPageInfo = async (pdfDataUrl) => {
    return new Promise((resolve, reject) => {
      const loadingTask = window.pdfjsLib.getDocument(pdfDataUrl);
      loadingTask.promise
        .then((pdf) => {
          resolve(pdf);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      {pdfData && (
        <Document file={pdfData} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      )}
    </div>
  );
};

export default PdfViewer;
