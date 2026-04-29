import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import certificates from "../data/certificates";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const PdfPreview = ({ file }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const renderPdf = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(file).promise;
        const page = await pdf.getPage(1);

        const viewport = page.getViewport({ scale: 1 });
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        if (!cancelled) {
          await page.render({
            canvasContext: context,
            viewport,
          }).promise;
        }
      } catch (err) {
        console.error(err);
      }
    };

    renderPdf();

    return () => {
      cancelled = true;
    };
  }, [file]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-auto"
    />
  );
};

const CertificateGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
      {certificates.map((item, index) => (
        <a
          key={index}
          href={item.file}
          target="_blank"
          rel="noreferrer"
          className="group"
        >
          <div className="rounded-xl border border-[#e2ecdc] bg-white p-3 shadow-sm transition hover:shadow-md">
            <PdfPreview file={item.file} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default CertificateGrid;