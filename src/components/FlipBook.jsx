"use client";
import React, { useState, useRef, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import pdf from "./check.pdf";
import { GrFormNext, GrPrevious } from "react-icons/gr";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Pages = React.forwardRef(({ number, children }, ref) => {
  return (
    <div className="demoPage shadow-lg rounded-lg overflow-hidden" ref={ref}>
      <div className="p-4 bg-white">{children}</div>
      <p className="text-center text-gray-600 mt-2">Page {number}</p>
    </div>
  );
});

Pages.displayName = "Pages";

function FlipBook() {
  const [numPages, setNumPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const flipBook = useRef(null);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    console.log("PDF loaded successfully! Number of pages:", numPages);
    setNumPages(numPages);
    setCurrentPage(0); // Start from the first page
  }, []);

  const onDocumentLoadError = useCallback((error) => {
    console.error("Failed to load PDF:", error);
  }, []);

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data); // Update current page on flip
  }, []);

  const handleNextPage = () => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flipNext();
    }
  };

  const handlePrevPage = () => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flipPrev();
    }
  };

  return (
    <div className=" w-screen flex flex-col gap-5 justify-center items-center bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden relative">
      <h1 className="text-4xl text-gray-800 text-center font-bold mb-8">
        FlipBook
      </h1>

      {/* Pagination Controls */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="w-24 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <GrPrevious color="white" fontSize="1.0em" />
          <span>Prev</span>
        </button>
        <span className="text-gray-700">
          Page {currentPage + 1} of {numPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage + 1 >= numPages}
          className="w-24 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <span>Next</span>
          <GrFormNext color="white" fontSize="1.5em" />
        </button>
      </div>

      {/* FlipBook */}
      {numPages ? (
        <HTMLFlipBook width={400} height={570} onFlip={onFlip} ref={flipBook}>
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
      ) : (
        <p className="text-gray-700 text-lg">Loading PDF...</p>
      )}

      {/* Floating Animations */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-blue-300 rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-purple-600 rotate-45"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-purple-300 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-12 h-12 bg-green-300 rounded-full"
        animate={{ x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
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
