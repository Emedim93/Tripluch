import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Dashboard de compostage</h1>
      <div className="space-y-4">
        <Link
          href="/modifier-informations"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Modifier les informations
        </Link>
        <Link
          href="/configurer-bacs"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Configurer les bacs
        </Link>
        <Link
          href="/registre-suivi"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Accéder au Registre de suivi
        </Link>
        <Link
          href="/ajouter-registre"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Ajouter un registre
        </Link>
        <Link
          href="/qrcode"
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
        >
          Télécharger QR Code (PDF)
        </Link>
      </div>
    </div>
  );
}







  
  