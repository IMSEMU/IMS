import React, { useEffect, useState } from "react";
import axios from "axios";
import { Document, Page } from "react-pdf";

const PdfViewer = ({ docSrc }) => {
  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await axios.get(docSrc, {
          responseType: "arraybuffer",
        });

        const pdfBlob = new Blob([response.data], { type: "application/pdf" });
        const pdfDataUrl = URL.createObjectURL(pdfBlob);

        setPdfData(pdfDataUrl);

        // Use the following to get the total number of pages in the PDF
        const { numPages } = await getPageInfo(pdfDataUrl);
        setNumPages(numPages);
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };

    fetchPdf();
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
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PdfViewer;
