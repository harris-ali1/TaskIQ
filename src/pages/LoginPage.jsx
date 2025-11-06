// pages/LoginPage.jsx
// Handles login UI, adds animated loading screen, and redirects to dashboard after success

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ for animations
import LoadingScreenBoot from "./LoadingScreenBoot";
// ====== Animated loading screen component ======
function LoadingScreen() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-gray-100">
            {/* Rotating ring around logo */}
            <motion.div
                className="relative w-24 h-24 flex items-center justify-center mb-6"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
                <div className="absolute w-24 h-24 border-4 border-blue-600 border-t-transparent rounded-full"></div>
                <motion.span
                    className="text-3xl font-bold absolute"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    T
                </motion.span>
            </motion.div>

            {/* Pulsing text */}
            <motion.h1
                className="text-4xl font-bold mb-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                TaskIQ
            </motion.h1>
            <p className="text-gray-400 text-sm tracking-wide">
                Calibrating your dashboard...
            </p>
        </div>
    );
}

// ====== Main login component ======
export default function LoginPage({ goBack }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // tracks login loading state

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here (e.g., form validation, API call)
        // Show loading animation before navigating
        setLoading(true);

        // Simulate a 5-second delay before redirecting
        setTimeout(() => {
            navigate("/dashboard");
        }, 5000);
    };

    // ====== LOADING SCREEN STATE ======
    if (loading) {
        return <LoadingScreenBoot />; // ✅ just render this when loading
    }

    // ====== LOGIN FORM ======
    return (
        <div className="bg-[#0F0F0F] p-6 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Log In</h2>
            {/* form handles login submission */}
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="bg-[#1a1a1a] p-2 rounded-md focus:outline-none"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="bg-[#1a1a1a] p-2 rounded-md focus:outline-none"
                />
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 py-2 rounded-md"
                >
                    Continue
                </button>
            </form>
            {/* return to splash screen */}
            <button onClick={goBack} className="text-sm text-gray-400 mt-4">
                ← Back
            </button>
        </div>
    );
}
