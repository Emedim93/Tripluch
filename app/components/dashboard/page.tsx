import Link from 'next/link';


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Dashboard de compostage</h1>
      <div className="space-y-4">
        <Link href="/modifier-informations">
          <a className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            Modifier les informations
          </a>
        </Link>
        <Link href="/configurer-bacs">
          <a className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            Configurer les bacs
          </a>
        </Link>
        <Link href="/registre-suivi">
          <a className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            Accéder au Registre de suivi
          </a>
        </Link>
        <Link href="/ajouter-registre">
          <a className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            Ajouter un registre
          </a>
        </Link>
        <Link href="/qrcode">
          <a className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
            Télécharger QR Code (PDF)
          </a>
        </Link>
      </div>
    </div>
  );
}





  