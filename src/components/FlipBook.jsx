"use client";
import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import pdf from "./check.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Pages = React.forwardRef(({ number, children }, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <div>{children}</div>
      <p>Page number: {number}</p>
    </div>
  );
});

Pages.displayName = "Pages";

function FlipBook() {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const flipBook = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    console.log("PDF loaded successfully! Number of pages:", numPages);
    setNumPages(numPages);
    setCurrentPage(0);
  }

  function onDocumentLoadError(error) {
    console.error("Failed to load PDF:", error);
  }

  useEffect(() => {
    if (flipBook.current) {
      const pageFlipInstance = flipBook.current.pageFlip();
      pageFlipInstance.on("flip", (event) => {
        setCurrentPage(event.data);
      });
    }
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col gap-5 justify-center items-center bg-gray-200 overflow-hidden relative">
      <h1 className="text-3xl text-gray-800 text-center font-bold">FlipBook</h1>
      <p>Total Page: {numPages}</p>
      {numPages ? (
        <>
          <HTMLFlipBook width={400} height={570} ref={flipBook}>
            {[...Array(numPages).keys()].map((pNum) => (
              <Pages key={pNum} number={pNum + 1}>
                <Document
                  file={pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                >
                  <Page
                    pageNumber={pNum + 1}
                    width={400}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                </Document>
              </Pages>
            ))}
          </HTMLFlipBook>
        </>
      ) : (
        <p className="text-gray-700 text-lg">Loading PDF...</p>
      )}
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        className="hidden"
      />

      {/* Floating Balls Animation */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-blue-300 rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-50 left-20 w-20 h-20 bg-purple-600 rotate-45"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-24 h-24 bg-purple-300 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-12 h-12 bg-green-300 rounded-full"
        animate={{ x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      {/* Additional Floating Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 bg-red-300 rotate-45"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 left-24 w-16 h-16 bg-yellow-300 rounded-lg"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
    </div>
  );
}

export default FlipBook;
