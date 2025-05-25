// pages/ForgotPassword.jsx
import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-black">
      <div className="w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-2">¿Olvidaste Tu contraseña?</h1>
        <p className="text-center text-sm text-gray-600 mb-6">No te preocupes, te enviaremos instrucciones de restablecimiento</p>
      </div>
      <div className="bg-gradient-to-t from-teal-500 to-blue-800 w-full p-6 rounded-t-3xl">
        <div className="w-80 mx-auto space-y-4">
          <input type="email" placeholder="Ingresa tu Correo Electrónico" className="w-full px-4 py-2 rounded-full text-black" />
          <button className="w-full bg-white text-blue-800 font-bold py-2 rounded-full">Restablecer contraseña</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;