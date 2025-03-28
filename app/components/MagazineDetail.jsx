"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GrFormNext, GrPrevious } from "react-icons/gr";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Pages = React.forwardRef(({ number, children }, ref) => {
  return (
    <div className="demoPage bg-white shadow-md rounded-lg" ref={ref}>
      <div className="p-2">{children}</div>
      <p className="text-center text-sm text-gray-600 mt-2">Page {number}</p>
    </div>
  );
});
Pages.displayName = "Pages";

const MagazineDetail = () => {
  const { id } = useParams();
  const flipBook = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 400, height: 575 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      const isDesktopView = window.innerWidth >= 1024; // lg breakpoint
      setIsDesktop(isDesktopView);
      if (isDesktopView) {
        setDimensions({ width: 400, height: 575 });
      } else if (window.innerWidth < 640) {
        setDimensions({ width: 300, height: 450 });
      } else {
        setDimensions({ width: 400, height: 575 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setCurrentPage(0);
  };

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  const handleNextPage = () => flipBook.current?.pageFlip().flipNext();
  const handlePrevPage = () => flipBook.current?.pageFlip().flipPrev();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center min-h-screen bg-gray-100">
      <Link
        href="/magazines"
        className="self-start inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <FaArrowLeft className="mr-2" />
        Back to Magazines
      </Link>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Modern Architecture 2024</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Exploring the latest trends in modern architecture.
        </p>
      </div>

      <div className="relative w-full flex justify-center items-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="absolute left-3 lg:left-10 z-10 p-2 bg-white text-gray-700 rounded-full shadow hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <GrPrevious size={12} />
        </button>

        <div className="flex flex-col items-center">
          <span className="text-gray-700 mb-4">
            Page {currentPage + 1} of {numPages || "--"}
          </span>

          <Document
            file="/check.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading="Loading PDF..."
          >
            {numPages ? (
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <HTMLFlipBook
                  width={dimensions.width}
                  height={dimensions.height}
                  onFlip={onFlip}
                  ref={flipBook}
                  className="shadow-lg rounded-lg"
                  showCover={true}
                  maxShadowOpacity={0.5}
                  flippingTime={1000}
                  usePortrait={!isDesktop}
                  startPage={0}
                  size="stretch"
                  minWidth={dimensions.width}
                  maxWidth={dimensions.width * 2}
                  drawShadow={true}
                >
                  {[...Array(numPages)].map((_, i) => (
                    <Pages key={i} number={i + 1}>
                      <Page
                        pageNumber={i + 1}
                        width={dimensions.width}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        loading={
                          <div className="flex justify-center items-center h-full">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                          </div>
                        }
                      />
                    </Pages>
                  ))}
                </HTMLFlipBook>
              </div>
            ) : (
              <div className="flex justify-center items-center h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
              </div>
            )}
          </Document>
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === numPages - 1}
          className="absolute right-3 lg:right-10 z-10 p-2 bg-white text-gray-700 rounded-full shadow hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <GrFormNext size={20} />
        </button>
      </div>
    </div>
  );
};

export default MagazineDetail;
