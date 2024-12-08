import Link from 'next/link';
import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Dashboard de Compostage</h1>
      <div className="space-y-4">
        {/* Lien vers la page messagerie */}
        <Link href="/messagerie" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
          Messagerie
        </Link>
      </div>
    </div>
  );
}
