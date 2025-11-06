// pages/LoadingScreenBoot.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreenBoot() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState([]);
  const [fadeOut, setFadeOut] = useState(false);

  // boot log lines
  const messages = [
    "[✓] Authenticating credentials...",
    "[✓] Syncing workspace settings...",
    "[✓] Loading AI estimation modules...",
    "[✓] Preparing personalized dashboard...",
    "[✓] Welcome back to TaskIQ."
  ];

  // sequentially reveal messages
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisible((prev) => [...prev, messages[i]]);
      i++;
      if (i === messages.length) clearInterval(interval);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  // trigger fade after ~5 seconds total
  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 5000);
    const navTimer = setTimeout(() => navigate("/dashboard"), 5800);
    return () => {
      clearTimeout(timer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          className="flex flex-col justify-center items-center h-screen bg-black text-blue-400 font-mono"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* title */}
          <h1 className="text-3xl font-bold mb-6 text-blue-300 tracking-widest">
            TaskIQ Boot Sequence
          </h1>

          {/* sequential log lines */}
          <div className="text-left space-y-1 w-[320px]">
            {visible.map((msg, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {msg}
              </motion.p>
            ))}
          </div>

          {/* rotating loader */}
          <motion.div
            className="mt-8 w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
