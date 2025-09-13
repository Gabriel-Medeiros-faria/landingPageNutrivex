import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import popup from "./assets/Popup (1).png";
export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return; // se já mostrou, não cria timers

    const initialPopup = setTimeout(() => {
      setShowPopup(true);
      setHasShown(true);
    }, 15000);

    const recurringPopup = setInterval(() => {
      setShowPopup(true);
    }, 15000);

    return () => {
      clearTimeout(initialPopup);
      clearInterval(recurringPopup);
    };
  }, [hasShown]);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true); // garante que só mostra uma vez
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);
  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-1 right-0 text-gray-500 hover:text-gray-700 transition p-2"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <div className="mb-6">
                <a
                  href="https://mvx-group.mycartpanda.com/checkout/193835339:1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={popup}
                    alt="Popup Nutrivex"
                    className="mx-auto mb-4 rounded-lg shadow-md cursor-pointer 
             hover:scale-[1.02] hover:shadow-xl 
             active:scale-[0.98] active:shadow-lg 
             transition-transform duration-500"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
