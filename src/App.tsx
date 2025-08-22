import React, { useState, useEffect } from "react";
import {
  X,
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
import oneBottle from "./assets/1Flacon.jpg";
import threeBottles from "./assets/3flacons.png";
import sixBottles from "./assets/6flacons.png";
import visa from "./assets/visa.svg";
import master from "./assets/master.png";
import amex from "./assets/amex.svg";
import discover from "./assets/discover.png";

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [videoTime, setVideoTime] = useState(0);

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

  useEffect(() => {
    // Popup inicial após 20 segundos
    const initialPopup = setTimeout(() => {
      setShowPopup(true);
    }, 20000);

    // Popup recorrente a cada 2 minutos após o primeiro
    const recurringPopup = setInterval(() => {
      setShowPopup(true);
    }, 120000);

    return () => {
      clearTimeout(initialPopup);
      clearInterval(recurringPopup);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const scrollToOffers = () => {
    document.getElementById("offers")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white relative overflow-x-hidden">
      {/* Header Warning Bar */}
      <div className="bg-gradient-to-r from-red-700 to-red-800 text-yellow-100 py-3 px-4 text-center font-semibold text-sm md:text-base sticky top-0 z-40">
        <div className="flex items-center justify-center space-x-2">
          <Clock className="w-5 h-5" />
          <span>
            ATTENZIONE! Questa presentazione sarà disponibile solo fino al:
            14/08/2025
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Video Section */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-8">
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

            {!isUnlocked && (
              <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <p className="text-yellow-800 text-sm">
                  ⏳ Attendi {UNLOCK_TIME - videoTime} secondi per sbloccare il
                  contenuto completo
                </p>
              </div>
            )}
          </div>
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
          {/* Scientific References Section */}
          <section className="py-16 bg-gradient-to-b from-white to-green-50">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
                  Riferimenti Scientifici
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Studi scientifici dimostrano che gli ingredienti di Nutrivex
                  possiedono proprietà uniche per accelerare il metabolismo,
                  ridurre il grasso corporeo e migliorare la salute generale.
                </p>
                <p className="text-base text-gray-600 mt-4">
                  Vedi qui sotto alcune pubblicazioni riconosciute a livello
                  mondiale:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  "Journal of Natural Medicine",
                  "International Journal of Obesity",
                  "Nutrition & Metabolism Research",
                ].map((journal, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500"
                  >
                    <div className="flex items-center mb-3">
                      <Award className="w-6 h-6 text-green-600 mr-2" />
                      <h3 className="font-semibold text-green-900">
                        {journal}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Studi dimostrano l'efficacia degli ingredienti naturali
                      nella perdita di peso sana.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Promotional CTA Section */}
          <section className="py-16 bg-gradient-to-r from-green-600 to-green-800">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Vuoi trasformare il tuo corpo in modo naturale e veloce?
                </h2>
                <p className="text-xl text-green-100 mb-8">
                  Clicca sul pulsante qui sotto per assicurarti il tuo Nutrivex
                  prima che le ultime unità si esauriscano.
                </p>
                <button
                  onClick={scrollToOffers}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  SÌ! Voglio il mio Nutrivex ora!
                </button>
              </div>
            </div>
          </section>

          {/* Offers Section */}
          <section
            id="offers"
            className="py-12 bg-gradient-to-b from-green-50 to-white"
          >
            <div className="container mx-auto px-4">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-2">
                  Scegli il tuo piano Nutrivex
                </h2>
                <p className="text-base text-gray-600">
                  Trasforma la tua vita con i nostri piani speciali
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* PACKAGE 1 - BASIC */}
                <div className="relative bg-white rounded-2xl shadow-xl p-5 border-4 border-slate-300 hover:border-green-300 transition-all duration-300">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-slate-700 text-white px-4 py-1 rounded-full text-xs font-bold">
                      BASIC
                    </span>
                  </div>
                  <div className="text-center mb-3 mt-1">
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      1 BOTTLE
                    </h3>
                    <div className="inline-block text-sm font-semibold text-gray-600">
                      60 DAY SUPPLY
                    </div>
                  </div>
                  <div className="flex justify-center mb-3">
                    <img
                      src={oneBottle}
                      alt="Nutrivex 1 Bottle"
                      className="w-24 h-32 object-cover"
                    />
                  </div>
                  <div className="text-center mb-2">
                    <p className="text-4xl font-extrabold text-slate-900">
                      $79
                    </p>
                    <p className="text-sm font-semibold text-gray-700 mt-1">
                      PER BOTTLE
                    </p>
                  </div>
                  <div className="text-center my-3">
                    <div className="border-t-4 border-dashed border-slate-300 rounded-lg py-1">
                      <p className="text-slate-800 font-bold text-base">
                        YOU SAVE $140!
                      </p>
                    </div>
                    <div className="border-t-4 border-b-4 border-dashed border-slate-300 py-1 mt-1">
                      <p className="text-slate-800 font-bold text-base">
                        60 DAYS GUARANTEE
                      </p>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg shadow-lg text-lg">
                    ADD TO CART
                  </button>
                  <div className="flex items-center justify-between gap-2 mt-3 opacity-90">
                    {[visa, master, discover, amex].map((card, i) => (
                      <img
                        key={i}
                        src={card}
                        alt="Payment"
                        className="h-6 w-12 object-contain border border-slate-300 rounded-md"
                      />
                    ))}
                  </div>
                  <div className="text-center mt-3">
                    <p className="text-sm text-black">
                      Total:{" "}
                      <span className="line-through text-red-700">$298</span>{" "}
                      <span className="font-bold text-slate-900">$158</span>
                    </p>
                    <p className="text-sm text-gray-700 mt-1">+ SHIPPING</p>
                  </div>
                </div>

                {/* PACKAGE 2 - BEST VALUE */}
                <div className="relative bg-white rounded-2xl shadow-2xl p-6 border-4 border-green-600 transform scale-105">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-700 text-white px-4 py-1.5 rounded-full text-sm font-extrabold">
                      BEST VALUE!
                    </span>
                  </div>
                  <div className="text-center mb-3 mt-1">
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      BUY 3 GET + 3 FREE
                    </h3>
                    <div className="inline-block text-base font-semibold text-green-700">
                      180 DAY SUPPLY
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={sixBottles}
                      alt="Nutrivex 6 Bottles"
                      className="w-48 h-auto object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-extrabold text-slate-900 -mt-9">
                      $49
                    </p>
                    <p className="text-sm font-semibold text-gray-700 mt-1">
                      PER BOTTLE
                    </p>
                  </div>

                  <div className="text-center my-3">
                    <div className="border-t-4 border-dashed border-green-600 py-1">
                      <p className="text-green-700 font-bold text-base">
                        YOU SAVE $600!
                      </p>
                    </div>
                    <div className="border-t-4 border-b-4 border-dashed border-slate-300 py-1 mt-1">
                      <p className="text-slate-800 font-bold text-base">
                        BIGGEST DISCOUNT
                      </p>
                    </div>
                    <div className="border-b-4 border-dashed border-slate-300 py-1">
                      <p className="text-slate-800 font-bold text-base">
                        + 2 FREE BONUSES
                      </p>
                    </div>
                    <div className="border-b-4 border-dashed border-slate-300 py-1">
                      <p className="text-slate-800 font-bold text-base">
                        60 DAYS GUARANTEE
                      </p>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg shadow-lg text-xl">
                    ADD TO CART
                  </button>
                  <div className="flex items-center justify-between gap-2 mt-3 opacity-90">
                    {[visa, master, discover, amex].map((card, i) => (
                      <img
                        key={i}
                        src={card}
                        alt="Payment"
                        className="h-8 w-14 object-contain border border-slate-300 rounded-md"
                      />
                    ))}
                  </div>
                  <div className="text-center mt-3">
                    <p className="text-sm text-black">
                      Total:{" "}
                      <span className="line-through text-red-700">$894</span>{" "}
                      <span className="font-bold text-slate-900">$294</span>
                    </p>
                    <p className="text-sm text-green-700 mt-1 font-semibold">
                      + FREE SHIPPING
                    </p>
                  </div>
                </div>

                {/* PACKAGE 3 - MOST POPULAR */}
                <div className="relative bg-white rounded-2xl shadow-xl p-5 border-4 border-slate-300 hover:border-green-500 transition-all duration-300">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                  <div className="text-center mb-3 mt-1">
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      BUY 2 GET + 1 FREE
                    </h3>
                    <div className="inline-block text-sm font-semibold text-green-600">
                      90 DAY SUPPLY
                    </div>
                  </div>
                  <div className="flex justify-center mb-3">
                    <img
                      src={threeBottles}
                      alt="Nutrivex 3 Bottles"
                      className="w-32 h-auto object-cover"
                    />
                  </div>
                  <div className="text-center mb-2">
                    <p className="text-4xl font-extrabold text-slate-900">
                      $69
                    </p>
                    <p className="text-sm font-semibold text-gray-700 mt-1">
                      PER BOTTLE
                    </p>
                  </div>
                  <div className="text-center my-3">
                    <div className="border-t-4 border-dashed border-green-500 py-1">
                      <p className="text-green-600 font-bold text-base">
                        YOU SAVE $300!
                      </p>
                    </div>
                    <div className="border-t-4 border-b-4 border-dashed border-slate-300 py-1 mt-1">
                      <p className="text-slate-800 font-bold text-base">
                        + 1 FREE BONUS
                      </p>
                    </div>
                    <div className="border-b-4 border-dashed border-slate-300 py-1">
                      <p className="text-slate-800 font-bold text-base">
                        60 DAYS GUARANTEE
                      </p>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg shadow-lg text-lg">
                    ADD TO CART
                  </button>
                  <div className="flex items-center justify-between gap-2 mt-3 opacity-90">
                    {[visa, master, discover, amex].map((card, i) => (
                      <img
                        key={i}
                        src={card}
                        alt="Payment"
                        className="h-6 w-12 object-contain border border-slate-300 rounded-md"
                      />
                    ))}
                  </div>
                  <div className="text-center mt-3">
                    <p className="text-sm text-black">
                      Total:{" "}
                      <span className="line-through text-red-700">$447</span>{" "}
                      <span className="font-bold text-slate-900">$207</span>
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      + FREE SHIPPING
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Guarantee Section */}
          <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                  <Shield className="w-20 h-20 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                  Soddisfazione Garantita
                </h2>
                <p className="text-xl text-gray-700 mb-4">
                  o rimborso completo entro{" "}
                  <span className="font-bold text-green-700">90 giorni!</span>
                </p>
                <p className="text-lg text-gray-600">
                  Se non sei soddisfatto dei risultati, rimborsiamo il 100% del
                  tuo investimento. Senza domande, senza burocrazia.
                </p>
              </div>
            </div>
          </section>

          {/* Bonuses Section */}
          <section className="py-20 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                  Ordina ora e ricevi 6{" "}
                  <span className="text-yellow-500">BONUS ESCLUSIVI</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Oltre al Nutrivex, riceverai gratuitamente questi 6 bonus del
                  valore di oltre €300
                </p>
              </div>

              <div className="max-w-4xl mx-auto relative">
                {/* Vertical connecting line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-700 hidden md:block"></div>

                <div className="space-y-8">
                  {[
                    {
                      title: "Detox Naturale",
                      subtitle: "Guida completa per la pulizia dell'organismo",
                      price: "€49,95",
                      desc: "Scopri come eliminare le tossine accumulate nel tuo corpo con metodi 100% naturali e sicuri.",
                      image:
                        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=250&fit=crop",
                    },
                    {
                      title: "MetaBurn",
                      subtitle: "20 strategie per accelerare il metabolismo",
                      price: "€54,95",
                      desc: "Tecniche scientificamente provate per bruciare calorie anche a riposo e trasformare il tuo corpo.",
                      image:
                        "https://images.pexels.com/photos/4498318/pexels-photo-4498318.jpeg?auto=compress&cs=tinysrgb&w=200&h=250&fit=crop",
                    },
                    {
                      title: "Effetto Permanente",
                      subtitle: "Come non riprendere mai più il peso perso",
                      price: "€49,95",
                      desc: "Il segreto giapponese per mantenere il peso ideale per tutta la vita senza effetto yo-yo.",
                      image:
                        "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=200&h=250&fit=crop",
                    },
                    {
                      title: "Ricetta Dorada",
                      subtitle: "Migliora la circolazione e riduci i gonfiori",
                      price: "€39,95",
                      desc: "Una ricetta antica che migliora la circolazione e ridefinisce le tue gambe in 21 giorni.",
                      image:
                        "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=200&h=250&fit=crop",
                    },
                    {
                      title: "Zero Ritenzione",
                      subtitle: "Elimina ritenzione idrica e gonfiore",
                      price: "€44,95",
                      desc: "Metodi naturali per eliminare la ritenzione idrica e ottenere un corpo più definito.",
                      image:
                        "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=200&h=250&fit=crop",
                    },
                    {
                      title: "Guida Anti-Tossine",
                      subtitle: "Sostanze che sabotano la tua salute",
                      price: "€34,95",
                      desc: "Scopri quali sostanze quotidiane bloccano la perdita di peso e come evitarle.",
                      image:
                        "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=200&h=250&fit=crop",
                    },
                  ].map((bonus, index) => (
                    <div key={index} className="relative">
                      {/* Connection dot */}
                      <div className="absolute left-6 top-8 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

                      <div className="bg-white rounded-2xl shadow-xl p-8 ml-0 md:ml-16 border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                          <div className="flex-shrink-0">
                            <img
                              src={bonus.image}
                              alt={bonus.title}
                              className="w-32 h-40 object-cover rounded-lg shadow-md"
                            />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center mb-4">
                              <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full font-bold text-lg mr-4">
                                BONUS N°{index + 1}
                              </span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {index + 1} - {bonus.title}
                            </h3>

                            <h4 className="text-lg font-semibold text-gray-700 mb-3">
                              {bonus.subtitle}
                            </h4>

                            <div className="mb-4">
                              <p className="text-gray-600 text-sm mb-2">
                                PREZZO CONSIGLIATO:{" "}
                                <span className="line-through">
                                  {bonus.price}
                                </span>{" "}
                                OGGI:
                              </p>
                              <p className="text-2xl font-bold text-yellow-500">
                                GRATUITO
                              </p>
                            </div>

                            <p className="text-gray-600 leading-relaxed">
                              {bonus.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total value highlight */}
                <div className="mt-12 text-center">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 shadow-2xl">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      VALORE TOTALE DEI BONUS: €273,70
                    </h3>
                    <p className="text-xl text-white">
                      OGGI TUTTO{" "}
                      <span className="font-bold text-2xl">GRATUITO</span> con
                      il tuo ordine!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                  Perché scegliere Nutrivex?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    icon: <Leaf className="w-8 h-8" />,
                    title: "Formula 100% naturale",
                  },
                  {
                    icon: <Heart className="w-8 h-8" />,
                    title: "Ingredienti di origine vegetale",
                  },
                  {
                    icon: <CheckCircle className="w-8 h-8" />,
                    title: "Sem OGM",
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Facile da usare (in gocce)",
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Senza stimolanti",
                  },
                  {
                    icon: <Star className="w-8 h-8" />,
                    title: "Non crea dipendenza",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="text-green-600">{benefit.icon}</div>
                    <span className="font-semibold text-gray-800">
                      {benefit.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                  Cosa dicono i nostri clienti
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Ho perso 8kg in sole 3 settimane! Più energia, meno fame e
                    autostima alle stelle."
                  </p>
                  <p className="font-semibold text-green-900">
                    Maria S., 38 anni
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Finalmente sono riuscito a dimagrire senza soffrire! Lo
                    consiglio a tutti."
                  </p>
                  <p className="font-semibold text-green-900">
                    Paolo M., 45 anni
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ingredients Section */}
          <section className="py-16 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                  Ingredienti Naturali
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  {
                    name: "Alginati",
                    benefit: "Riduce il grasso, combatte le tossine",
                  },
                  {
                    name: "Vitamina K12",
                    benefit:
                      "Regola il metabolismo e migliora la salute cardiovascolare",
                  },
                  {
                    name: "RS3",
                    benefit:
                      "Fibra fermentabile che regola la glicemia e brucia grassi",
                  },
                  {
                    name: "Camellia Sinensis",
                    benefit: "Antiossidante e anti-infiammatorio",
                  },
                  {
                    name: "Theobroma Cacao",
                    benefit: "Aumenta energia e immunità",
                  },
                  {
                    name: "Schisandra",
                    benefit:
                      "Accelera il metabolismo e previene l'invecchiamento precoce",
                  },
                ].map((ingredient, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500"
                  >
                    <h3 className="font-bold text-green-900 text-lg mb-2">
                      {ingredient.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {ingredient.benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

         {/* Section: Livraison Gratuite + Avantages (com caminhão) */}
<section className="bg-gradient-to-r from-green-800 to-green-500 text-white py-16">
  <div className="container mx-auto px-4 text-center">

    {/* Caminhão */}
    <div className="flex justify-center mb-6">
      <svg
        viewBox="0 0 64 64"
        className="w-16 h-16 md:w-20 md:h-20 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Linhas de movimento */}
        <line x1="6" y1="30" x2="14" y2="30" />
        <line x1="2" y1="34" x2="12" y2="34" />
        {/* Baú */}
        <rect x="6" y="24" width="30" height="16" rx="2" />
        {/* Cabine + carroceria */}
        <path d="M36 24h10l6 8v8H36z" />
        {/* Janela da cabine */}
        <rect x="40" y="27" width="7" height="5" rx="1" />
        {/* Chão da carroceria */}
        <line x1="6" y1="40" x2="58" y2="40" />
        {/* Rodas */}
        <circle cx="18" cy="44" r="4" />
        <circle cx="46" cy="44" r="4" />
      </svg>
    </div>

    {/* Título */}
    <h2 className="text-2xl md:text-3xl font-bold mb-2">
      Chaque commande de{" "}
      <span className="text-yellow-300">6 flacons</span> bénéficie également de la{" "}
      <span className="text-yellow-300">livraison GRATUITE !</span>
    </h2>

    {/* Subtítulo */}
    <p className="text-sm md:text-base mb-8">
      *96 % de nos clientes commandent 6 flacons (
      <span className="italic">notre option recommandée</span>)
    </p>

    {/* Benefícios */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {[
        "Formule Naturelle",
        "Ingrédients d'Origine Végétale",
        "Sans OGM",
        "Gouttes Faciles À Prendre",
        "Sans Stimulants",
        "Ne Crée Pas De Dépendance",
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white text-gray-900 rounded-xl shadow-md p-4 flex items-center justify-center font-semibold"
        >
          <svg
            className="w-5 h-5 text-green-600 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
          {item}
        </div>
      ))}
    </div>
  </div>
</section>


          {/* Section: Témoignages Réels */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              {/* Título */}
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  De Vraies Utilisatrices De LipoMounj.
                </h2>
                <p className="text-lg text-gray-700">
                  De Vrais Résultats Qui Changent La Vie.
                </p>
              </div>

              {/* Grid de Imagens */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  "https://www.ijlalhsn.com/wp-content/uploads/2023/04/girl-model-pictures--696x628.png",
                  "https://www.ijlalhsn.com/wp-content/uploads/2023/04/girl-model-pictures--696x628.png",
                  "https://www.ijlalhsn.com/wp-content/uploads/2023/04/girl-model-pictures--696x628.png",
                  "https://www.ijlalhsn.com/wp-content/uploads/2023/04/girl-model-pictures--696x628.png",
                ].map((img, index) => (
                  <div key={index} className="flex justify-center">
                    <img
                      src={img}
                      alt={`Cliente ${index + 1}`}
                      className="rounded-xl shadow-md object-cover w-40 h-40"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ingredients Section (Novo Estilo) */}
          <section className="py-16 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4">
              {/* Título */}
              <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                  Inside every drop of{" "}
                  <span className="text-green-700">LipoMounj</span> you will
                  find:
                </h2>
                <p className="text-lg text-gray-700">
                  A unique proprietary blend of 6 rare, science-backed
                  ingredients that promote
                  <span className="font-semibold text-green-700">
                    {" "}
                    GLP-1
                  </span>{" "}
                  and
                  <span className="font-semibold text-green-700">
                    {" "}
                    GIP
                  </span>{" "}
                  production to burn fat!
                </p>
              </div>

              {/* Grid de Ingredientes */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    name: "Alginatos",
                    desc: "An incredible nutrient found in seaweed, capable of helping your body stabilize insulin levels.",
                    img: "https://th.bing.com/th/id/OIP.jvf9gNNhr703jV6q_8CUgAHaE8?w=269&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                    benefits: [
                      "Reduces fat cells",
                      "Combats common toxins",
                      "Reduces bad cholesterol",
                    ],
                  },
                  {
                    name: "Vitamin K12",
                    desc: "Powerful nutrient that aids in metabolic regulation, creating a favorable environment for hormone secretion.",
                    img: "https://th.bing.com/th/id/OIP.jvf9gNNhr703jV6q_8CUgAHaE8?w=269&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                    benefits: [
                      "Increases satiety levels",
                      "Activates intestinal microbiota",
                      "Reduces cardiovascular diseases",
                    ],
                  },
                  {
                    name: "RS3",
                    desc: "Bioactive compound that acts as a fermentable fiber, promoting natural GLP-1 and GIP release.",
                    img: "https://th.bing.com/th/id/OIP.jvf9gNNhr703jV6q_8CUgAHaE8?w=269&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                    benefits: [
                      "Powerful fat burner",
                      "Activates good bacteria in the intestine",
                      "Regulates blood sugar",
                    ],
                  },
                  {
                    name: "Camellia Sinensis",
                    desc: "This plant has potent antioxidant and anti-inflammatory properties that improve insulin sensitivity.",
                    img: "https://th.bing.com/th/id/OIP.jvf9gNNhr703jV6q_8CUgAHaE8?w=269&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                    benefits: [
                      "De-inflames fat cells",
                      "Reduces oxidative stress",
                      "Promotes cardiovascular health",
                    ],
                  },
                  {
                    name: "Theobroma Cacao",
                    desc: "Tropical superfood overflowing with epicatechin, a natural flavonoid.",
                    img: "https://th.bing.com/th/id/OIP.jvf9gNNhr703jV6q_8CUgAHaE8?w=269&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                    benefits: [
                      "Acts on insulin regulation",
                      "Strengthens the immune system",
                      "Increases physical and mental energy",
                    ],
                  },
                  {
                    name: "Schisandra",
                    desc: "Powerful calorie-burning red berries brimming with antioxidant compounds.",
                    img: "https://th.bing.com/th/id/OIP.jvf9gNNhr703jV6q_8CUgAHaE8?w=269&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                    benefits: [
                      "Promotes fat burning",
                      "Accelerates metabolism",
                      "Prevents premature aging",
                    ],
                  },
                ].map((ingredient, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100"
                  >
                    {/* Imagem */}
                    <img
                      src={ingredient.img}
                      alt={ingredient.name}
                      className="w-full h-40 object-cover"
                    />
                    {/* Conteúdo */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-green-900 mb-2">
                        {ingredient.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {ingredient.desc}
                      </p>
                      {/* Benefícios */}
                      <ul className="space-y-2">
                        {ingredient.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-700 text-sm"
                          >
                            <svg
                              className="w-5 h-5 text-green-600 mr-2 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
                  Domande Frequenti
                </h2>
                <p className="text-lg text-gray-700">
                  Le risposte alle domande più comuni dei nostri clienti.
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  {
                    q: "Quanto tempo impiega Nutrivex per fare effetto?",
                    a: "La maggior parte delle persone nota i primi risultati già nelle prime 2 settimane.",
                  },
                  {
                    q: "Nutrivex è sicuro?",
                    a: "Sì, la formula è 100% naturale, priva di OGM e stimolanti.",
                  },
                  {
                    q: "Quante bottiglie dovrei ordinare?",
                    a: "Consigliamo il pacchetto di 3 o 6 bottiglie per risultati migliori e duraturi.",
                  },
                  {
                    q: "Qual è il modo migliore per assumere Nutrivex?",
                    a: "Assumi 2 capsule al giorno con un bicchiere d’acqua, preferibilmente dopo i pasti.",
                  },
                  {
                    q: "È un pagamento unico?",
                    a: "Sì, paghi una sola volta, senza abbonamenti nascosti.",
                  },
                  {
                    q: "E se Nutrivex non funziona per me?",
                    a: "Hai una garanzia soddisfatti o rimborsati di 60 giorni. Se non sei soddisfatto, riceverai il rimborso completo.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md border border-green-200 overflow-hidden"
                  >
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer px-6 py-4 text-green-800 font-semibold hover:bg-green-50">
                        <span>{item.q}</span>
                        <svg
                          className="w-5 h-5 text-green-600 transform group-open:rotate-180 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="px-6 pb-4 text-gray-700 text-sm">
                        {item.a}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 90-Day Guarantee Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left: Big 90-Days Seal */}
                <div className="flex justify-center">
                  <svg
                    viewBox="0 0 500 500"
                    className="w-72 h-72"
                    role="img"
                    aria-label="Garanzia 90 Giorni"
                  >
                    <defs>
                      <linearGradient
                        id="sealGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="250"
                      cy="250"
                      r="220"
                      fill="url(#sealGradient)"
                    />
                    <circle cx="250" cy="250" r="200" fill="white" />
                    <circle
                      cx="250"
                      cy="250"
                      r="180"
                      fill="url(#sealGradient)"
                    />
                    <circle cx="250" cy="250" r="150" fill="white" />

                    {/* Outer text */}
                    <text
                      x="250"
                      y="120"
                      textAnchor="middle"
                      fontSize="28"
                      fontWeight="700"
                      fill="#1f2937"
                    >
                      MONEY BACK
                    </text>
                    <text
                      x="250"
                      y="385"
                      textAnchor="middle"
                      fontSize="28"
                      fontWeight="700"
                      fill="#1f2937"
                    >
                      GUARANTEE
                    </text>

                    {/* 90 DAYS */}
                    <text
                      x="250"
                      y="235"
                      textAnchor="middle"
                      fontSize="36"
                      fontWeight="700"
                      fill="#1f2937"
                    >
                      90 DAYS
                    </text>
                    <rect
                      x="140"
                      y="245"
                      width="220"
                      height="44"
                      fill="url(#sealGradient)"
                      rx="8"
                    />
                    <text
                      x="250"
                      y="274"
                      textAnchor="middle"
                      fontSize="26"
                      fontWeight="800"
                      fill="white"
                    >
                      MONEY BACK
                    </text>
                  </svg>
                </div>

                {/* Right: Copy + mini badges */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-green-900">
                    Soddisfazione 100% — Garanzia di Rimborso 90 Giorni
                  </h3>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Il tuo ordine è coperto dalla nostra garanzia di rimborso
                    entro 90 giorni. Se non sei soddisfatto dei risultati,
                    contattaci in qualsiasi momento entro 90 giorni e
                    rimborseremo il 100% del tuo investimento—senza domande.
                  </p>

                  {/* Mini badges */}
                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {[
                      {
                        label: "GMP Quality",
                        icon: (
                          <path d="M12 2l3 6 6 .9-4.5 4.3 1.1 6.5L12 17l-5.6 2.7 1.1-6.5L3 8.9 9 8l3-6z" />
                        ),
                      },
                      {
                        label: "FDA Registered",
                        icon: <path d="M4 6h16v12H4zM8 10h8M8 14h8" />,
                      },
                      {
                        label: "Natural",
                        icon: (
                          <path d="M12 3c-4 4-6 8-6 11a6 6 0 0012 0c0-3-2-7-6-11zM8 14c2 0 4-1 4-3" />
                        ),
                      },
                      {
                        label: "Made in USA",
                        icon: <path d="M4 7h16M4 11h16M4 15h16M4 19h16" />,
                      },
                      {
                        label: "GMO Free",
                        icon: <path d="M5 19L19 5M8 8a4 4 0 016 6" />,
                      },
                    ].map((b, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center"
                      >
                        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {b.icon}
                          </svg>
                        </span>
                        <p className="mt-2 text-sm font-semibold text-gray-700">
                          {b.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-green-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <a
                    href="#"
                    className="hover:text-green-300 transition-colors"
                  >
                    Supporto
                  </a>
                  <a
                    href="#"
                    className="hover:text-green-300 transition-colors"
                  >
                    Termini
                  </a>
                  <a
                    href="#"
                    className="hover:text-green-300 transition-colors"
                  >
                    Privacy
                  </a>
                </div>
              </div>

              <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm text-green-200 leading-relaxed">
                  <strong>Avviso importante:</strong> Le informazioni presentate
                  non sostituiscono il controllo medico. In caso di gravidanza,
                  allattamento, uso di farmaci o condizioni mediche, consulta il
                  tuo medico prima di utilizzare questo prodotto.
                </p>
              </div>
            </div>
          </footer>
        </>
      )}

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div className="mb-6">
                <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  Perdere peso non è mai stato così facile
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Clicca su "Guarda" qui sotto e scopri i risultati incredibili
                  che migliaia di persone hanno già ottenuto con Nutrivex.
                </p>
              </div>

              <button
                onClick={() => {
                  setShowPopup(false);
                  scrollToOffers();
                }}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                SÌ! Voglio provare Nutrivex e perdere peso velocemente!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
