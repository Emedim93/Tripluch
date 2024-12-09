'use client'
import { useState } from 'react';

export default function MessageriePage() {
  // Exemple de données initiales
  const [messages, setMessages] = useState([
    { id: 1, content: 'Ajouter votre commentaire', editable: false },
    { id: 2, content: 'Ajouter votre commentaire', editable: false },
    { id: 3, content: 'Ajouter votre commentaire', editable: false },
  ]);

  // Fonction pour activer l'édition
  const handleEdit = (id: number) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, editable: true } : msg
      )
    );
  };

  // Fonction pour sauvegarder les modifications
  const handleSave = (id: number, newContent: string) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, content: newContent, editable: false } : msg
      )
    );
  };

  // Fonction pour annuler les modifications
  const handleCancel = (id: number) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, editable: false } : msg
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Messagerie</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="flex items-center justify-between border-b pb-2 mb-2"
          >
            {msg.editable ? (
              <input
                type="text"
                className="border rounded-md p-2 flex-1"
                defaultValue={msg.content}
                onChange={(e) =>
                  setMessages((prevMessages) =>
                    prevMessages.map((m) =>
                      m.id === msg.id ? { ...m, content: e.target.value } : m
                    )
                  )
                }
              />
            ) : (
              <span>{msg.content}</span>
            )}

            <div className="space-x-2">
              {msg.editable ? (
                <>
                  <button
                    onClick={() => handleSave(msg.id, msg.content)}
                    className="px-4 py-1 text-white bg-green-500 rounded-md"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => handleCancel(msg.id)}
                    className="px-4 py-1 text-white bg-gray-500 rounded-md"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleEdit(msg.id)}
                  className="px-4 py-1 text-white bg-blue-500 rounded-md"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
