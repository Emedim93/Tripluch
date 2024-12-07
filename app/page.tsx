import { redirect } from 'next/navigation';
import React from 'react';


export async function Home() {
redirect('/dashboard');
  
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/compost-site.jpg")' }}
    >
      <div className="min-h-screen bg-black/50 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Dashboard de Compostage</h1>
        <p className="mt-4">Bienvenue sur le site de compostage</p>
      </div>
    </div>
  );
 
}
const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Site de Compostage</h1>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Télécharger QR Code
          </button>
        </div>

        {/* Informations principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Nom du site</h2>
            <p className="text-gray-700">Site de Compostage des Lilas</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Date d'installation</h2>
            <p className="text-gray-700">15 mars 2022</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Dernière intervention</h2>
            <p className="text-gray-700">5 décembre 2024</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Nombre de bacs</h2>
            <p className="text-gray-700">3 bacs (600L)</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Capacités des compostes</h2>
            <p className="text-gray-700">1200 kg</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Température du compost</h2>
            <p className="text-gray-700">35°C</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Horaires d'ouvertures</h2>
            <ul className="list-disc ml-4 text-gray-700">
              <li>Accès : 8h à 18h</li>
              <li>Déchets interdits : viande, produits laitiers</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Photo du site</h2>
            <img
              src="/triplush.jpg"
              alt="Site de Compostage"
              className="w-full width={100} h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Modifier les informations
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
            Configurer les bacs
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            Accéder au Registre de suivi
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
            Ajouter au Registre
          </button>
          <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
            Messagerie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;