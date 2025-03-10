"use client";
import React from "react";
import HTMLFlipBook from "react-pageflip";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "./check.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Pages = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <div>{props.children}</div> {/* Replace <p> with <div> */}
      <p>Page number: {props.number}</p>
    </div>
  );
});

Pages.displayName = "Pages";

function FlipBook() {
  const [numPages, setNumPages] = useState();

  function onDocumentLoadSuccess({ numPages }) {
    console.log("PDF loaded successfully! Number of pages:", numPages);
    setNumPages(numPages);
  }

  function onDocumentLoadError(error) {
    console.error("Failed to load PDF:", error);
  }

  return (
    <>
      <div className="h-screen w-screen flex flex-col gap-5 justify-center items-center bg-gray-900 overflow-hidden">
        <h1 className="text-3xl text-white text-center font-bold">FlipBook</h1>
        <HTMLFlipBook width={400} height={570}>
          {[...Array(numPages).keys()].map((pNum) => (
            <Pages key={pNum} number={pNum + 1}>
              <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
              >
                <Page
                  pageNumber={pNum + 1} // Use 1-based indexing
                  width={400}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </Document>
              <p>
                Page {pNum + 1} of {numPages}
              </p>
            </Pages>
          ))}
        </HTMLFlipBook>
      </div>
    </>
  );
}

export default FlipBook;
