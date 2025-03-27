import { motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GrFormNext, GrPrevious } from "react-icons/gr";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import { Link, useParams } from "react-router-dom";
import pdf from "./check.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Pages = React.forwardRef(({ number, children }, ref) => {
  return (
    <div className="demoPage shadow-lg rounded-lg overflow-hidden" ref={ref}>
      <div className="p-1 bg-white">{children}</div>
      <p className="text-center text-gray-600 mt-2">Page {number}</p>
    </div>
  );
});

Pages.displayName = "Pages";

const MagazineDetail = () => {
  const { id } = useParams();
  const [numPages, setNumPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 400, height: 575 });
  const flipBook = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 640) {
        setDimensions({ width: 300, height: 450 });
      } else {
        setDimensions({ width: 400, height: 575 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setCurrentPage(0);
  }, []);

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
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
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center">
      <Link
        to="/magazines"
        className="inline-flex items-center text-gray-600 hover:text-black mb-8 group"
      >
        <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
        Back to Magazines
      </Link>

      <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <GrPrevious color="white" fontSize="20px" />
        </button>

        <div className="flex flex-col items-center">
          <span className="text-gray-700 mb-2">
            Page {currentPage + 1} of {numPages}
          </span>
          {numPages ? (
            <HTMLFlipBook
              width={dimensions.width}
              height={dimensions.height}
              onFlip={onFlip}
              ref={flipBook}
              className="shadow-lg rounded-lg"
            >
              {[...Array(numPages).keys()].map((pNum) => (
                <Pages key={pNum} number={pNum + 1}>
                  <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page
                      pageNumber={pNum + 1}
                      width={dimensions.width}
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
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage + 1 >= numPages}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <GrFormNext color="white" fontSize="20px" />
        </button>
      </div>
    </div>
  );
};

export default MagazineDetail;
