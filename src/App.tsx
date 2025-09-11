import React, { useState, useEffect } from "react";
import Product from "./product";
import Freight from "./Freight";
import Faq from "./Faq";
import Bonus from "./Bonus";
import {
  CheckCircle,
  Star,
  Shield,
  Gift,
  Leaf,
  Heart,
  Zap,
  Clock,
  Award,
} from "lucide-react";

import selo2 from "./assets/Selos.png";
import Guarantee from "./Guarantee";
import Footer from "./Footer";
import Famous from "./Famous";
import Testimonies from "./Testimonies";
import BeforeAfter from "./BeforeAfter";
import Ingredients from "./Ingredients";
import Popup from "./Popup";
function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const [videoTime, setVideoTime] = useState(0);
  const [flacons, setFlacons] = useState(48);
  const [animate, setAnimate] = useState(false);
  const [flipped, setFlipped] = useState(false); // controla posição da ampulheta
  // Configuração: tempo em segundos para desbloquear (5 minutos = 300 segundos)
  const UNLOCK_TIME = 10; // Reduzido para 10 segundos para demonstração - altere para 300 para 5 minutos
  useEffect(() => {
    // Simular progresso do vídeo
    const videoTimer = setInterval(() => {
      setVideoTime((prev) => {
        const newTime = prev + 1;
        if (newTime >= UNLOCK_TIME && !isUnlocked) {
          setIsUnlocked(true);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(videoTimer);
  }, [isUnlocked]);

  //TEMPO DO ESTOQUE
  useEffect(() => {
    if (flacons > 0) {
      const interval = setInterval(() => {
        setFlacons((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 10000); // diminui a cada 10 segundos

      return () => clearInterval(interval);
    }
  }, []);

  // Animação sempre que o número muda
  useEffect(() => {
    if (flacons > 0) {
      setAnimate(true);
      setFlipped((prev) => !prev); // alterna a posição da ampulheta

      const timer = setTimeout(() => setAnimate(false), 800); // tempo da animação
      return () => clearTimeout(timer);
    }
  }, [flacons]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const scrollToOffers = () => {
    document.getElementById("offers")?.scrollIntoView({ behavior: "smooth" });
  };
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0"); // garante 2 dígitos
  const month = String(today.getMonth() + 1).padStart(2, "0"); // meses começam em 0
  const year = today.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white-50 to-white relative overflow-x-hidden">
      {/* Header Warning Bar */}
      <div className="bg-gradient-to-r from-red-700 to-red-800 text-yellow-100 py-3 px-4 text-center font-semibold text-sm md:text-base sticky top-0 z-40">
        <div className="flex items-center justify-center space-x-2">
          <Clock className="w-5 h-5" />
          <span>
            ATTENTION ! Cette présentation sera disponible seulement jusqu’au:{" "}
            {""}
            {formattedDate}
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Video Section */}

          <div className="aspect-video rounded-xl overflow-hidden mb-4">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example&controls=1&modestbranding=1&rel=0"
              title="Nutrivex - Video Presentazione"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
          <img src={selo2} />
        </div>
      </div>

      {/* Content Lock Overlay */}
      {!isUnlocked && (
        <div
          className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-30"
          style={{ top: "100vh", minHeight: "200vh" }}
        >
          <div className="text-center p-8">
            <div className="animate-spin w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-xl font-semibold text-green-800">
              Attendi il video per continuare...
            </p>
            <p className="text-gray-600 mt-2">
              Rimangono {UNLOCK_TIME - videoTime} secondi
            </p>
          </div>
        </div>
      )}

      {/* Unlocked Content */}

      
      {isUnlocked && (
        <>
        <section className="bg-[rgb(240,253,244)] py-6">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl leading-tight md:text-3xl font-extrabold text-gray-900">
            Choisissez votre forfait SlimVita avec notre remise spéciale à durée
            limitée !
          </h2>

          <p className="mt-3 text-base md:text-lg font-semibold text-gray-800 flex justify-center items-center gap-2">
            <span
              className={`text-lg md:text-xl inline-block transition-transform duration-700 ${
                flipped ? "rotate-180" : "rotate-0"
              }`}
            >
              ⏳
            </span>
            Flacons SlimVita restantes:{" "}
            <span
              className={`font-extrabold text-green-700 transition-transform duration-500 ${
                animate ? "scale-125 text-red-600" : ""
              }`}
            >
              {flacons}
            </span>
          </p>
        </div>
      </section>
          <section className="bg-white py-12 px-4 md:px-8">
            <Freight />
            <Product />
            {/* Título */}
            <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Voyez ce que{" "}
              <span className="text-green-700">
                plus de 1500 femmes françaises
              </span>
              , qui ont déjà transformé leur vie, disent sur{" "}
              <span className="text-green-700">SlimVita</span> :
            </h2>

            <Testimonies />
            <BeforeAfter />
          </section>

          <Ingredients />
          <Bonus />
          <section className="bg-white py-12 px-4 md:px-8">
            <Freight />
            <Product />
            <Guarantee flacons={flacons} setFlacons={setFlacons} />
            <Famous />
            <Freight />
          </section>
          <Product />
          <Faq />
          <Footer />
        </>
      )}

      {/* Popup Modal */}
      <Popup />
    </div>
  );
}
export default App;
