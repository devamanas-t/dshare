import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const [docs, setDocs] = useState([]);
  const [username, setUsername] = useState('User');
  const navigate = useNavigate();
  const userId = localStorage.getItem('user_id');

  useEffect(() => {
    if (!userId) navigate('/');
    fetchDocs();
  }, []);

  const fetchDocs = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/my-documents/${userId}`);
      const data = await res.json();
      setDocs(data);
    } catch (err) {
      console.error("Failed to load docs");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">My Vault</h1>
          <p className="text-gray-500">ID: {userId}</p>
        </div>
        <Link to="/upload" className="bg-blue-600 px-4 py-2 rounded-lg text-white font-bold hover:bg-blue-700">
          + Upload New
        </Link>
      </div>

      {/* Grid of Documents */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {docs.length === 0 ? (
          <p className="text-gray-400">No documents found. Upload one!</p>
        ) : (
          docs.map((doc) => (
            <div key={doc.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg">{doc.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{doc.content_type}</p>
              {doc.note_text && (
                <p className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-sm text-gray-700 dark:text-gray-300">
                  {doc.note_text}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;