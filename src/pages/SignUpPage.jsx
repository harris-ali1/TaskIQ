// pages/SignUpPage.jsx
// Handles user registration, shows confirmation, then redirects to login page

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SignUpPage({ goBack, goToLogin }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // handle sign-up submit
  const handleSignUp = (e) => {
    e.preventDefault();
    // (Optional) add real signup logic here (API call)
    setLoading(true);

    // simulate backend signup delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // redirect to login page after short delay
      setTimeout(() => goToLogin(), 3500);
    }, 1500);
  };

  // ========== SUCCESS ANIMATION STATE ==========
  if (success) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-blue-400 font-mono">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold mb-4 text-blue-300 tracking-wide">
            ✓ Account Created
          </h1>
          <p className="text-sm text-gray-300 mb-8">
            Redirecting you to login...
          </p>
          <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </motion.div>
      </div>
    );
  }

  // ========== LOADING STATE ==========
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-gray-100">
        <motion.h1
          className="text-4xl font-bold mb-6"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          Creating Account...
        </motion.h1>
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // ========== SIGN-UP FORM ==========
  return (
    <div className="bg-[#0F0F0F] p-6 rounded-lg border border-gray-800">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      {/* form handles signup submission */}
      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="bg-[#1a1a1a] p-2 rounded-md focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-[#1a1a1a] p-2 rounded-md focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-[#1a1a1a] p-2 rounded-md focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 py-2 rounded-md"
        >
          Create Account
        </button>
      </form>
      {/* return to splash screen */}
      <button onClick={goBack} className="text-sm text-gray-400 mt-4">
        ← Back
      </button>
    </div>
  );
}
