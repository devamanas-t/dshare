import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetPin = () => {
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleSetPin = (e) => {
    e.preventDefault();
    if (pin.length === 4) {
      // In a real app, you would save this PIN to the backend. 
      // For now, we just proceed to dashboard.
      navigate('/dashboard');
    } else {
      alert("PIN must be 4 digits");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Security Check</h2>
        <p className="mb-6 text-gray-400">Set a 4-digit PIN for this session.</p>
        <form onSubmit={handleSetPin}>
          <input 
            type="password" 
            maxLength="4"
            className="text-center text-3xl tracking-widest bg-gray-800 border border-gray-600 rounded-lg p-3 w-40 mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <br />
          <button type="submit" className="bg-blue-600 px-8 py-2 rounded-lg font-bold">
            Enter Vault
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetPin;