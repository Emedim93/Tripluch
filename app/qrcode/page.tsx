import QRCode from 'qrcode';
import { useEffect, useRef } from 'react';
import { jsPDF } from 'jspdf';

export default function QRCodePage() {
  const qrRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    QRCode.toCanvas(
      qrRef.current,
      'https://example.com/registre-suivi',
      { width: 256 },
      (error: any) => {
        if (error) console.error(error);
      }
    );
  }, []);

  const downloadPDF = () => {
    if (qrRef.current) {
      const qrImage = qrRef.current.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.text('QR Code - Registre de suivi', 10, 10);
      pdf.addImage(qrImage, 'PNG', 10, 20, 100, 100);
      pdf.save('qrcode-registre.pdf');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">QR Code pour le Registre</h1>
      <canvas ref={qrRef} className="mb-8" />
      <button
        onClick={downloadPDF}
        className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
      >
        <link 
          href="/qrcode"
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
          >
          Télécharger le QR Code en (PDF)
          </link>
      </button>
    </div>
  );
}