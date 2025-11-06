// components/AuthContainer.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

export default function AuthContainer() {
  const [view, setView] = useState("splash"); // 'splash' | 'login' | 'signup'

  // shared slide variant for animation
  const slideVariant = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { y: 50, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gray-100 overflow-hidden relative">
      <AnimatePresence mode="wait">
        {view === "splash" && (
          <motion.div
            key="splash"
            variants={slideVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-8">Welcome to TaskIQ</h1>
            <p className="text-gray-400 mb-10">
              Smart AI-powered task estimation and management
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={() => setView("login")}
                className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-md"
              >
                Log In
              </button>
              <button
                onClick={() => setView("signup")}
                className="border border-blue-600 px-6 py-2 rounded-md hover:bg-blue-600/10"
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        )}

        {view === "login" && (
          <motion.div
            key="login"
            variants={slideVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-sm"
          >
            <LoginPage goBack={() => setView("splash")} />
          </motion.div>
        )}

        {view === "signup" && (
        <motion.div
            key="signup"
            variants={slideVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-sm"
        >
            <SignUpPage
            goBack={() => setView("splash")}
            goToLogin={() => setView("login")}   // ✅ add this line
            />
        </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
