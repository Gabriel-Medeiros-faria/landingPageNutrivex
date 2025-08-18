import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Star, Shield, Gift, Leaf, Heart, Zap, Clock, Award } from 'lucide-react';
import oneBottle from "./assets/1Flacon.jpg"
import threeBottles from "./assets/3flacons.png"
import sixBottles from "./assets/6flacons.png"
import visa from "./assets/visa.svg"
import master from "./assets/master.png"
import amex from "./assets/amex.svg"
import discover from "./assets/discover.png"


function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  
  // Configuração: tempo em segundos para desbloquear (5 minutos = 300 segundos)
  const UNLOCK_TIME = 10; // Reduzido para 10 segundos para demonstração - altere para 300 para 5 minutos
  
  useEffect(() => {
    // Simular progresso do vídeo
    const videoTimer = setInterval(() => {
      setVideoTime(prev => {
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
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToOffers = () => {
    document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white relative overflow-x-hidden">
      {/* Header Warning Bar */}
      <div className="bg-gradient-to-r from-red-700 to-red-800 text-yellow-100 py-3 px-4 text-center font-semibold text-sm md:text-base sticky top-0 z-40">
        <div className="flex items-center justify-center space-x-2">
          <Clock className="w-5 h-5" />
          <span>ATTENZIONE! Questa presentazione sarà disponibile solo fino al: 14/08/2025</span>
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
                  ⏳ Attendi {UNLOCK_TIME - videoTime} secondi per sbloccare il contenuto completo
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Lock Overlay */}
      {!isUnlocked && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-30" 
             style={{ top: '100vh', minHeight: '200vh' }}>
          <div className="text-center p-8">
            <div className="animate-spin w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-xl font-semibold text-green-800">Attendi il video per continuare...</p>
            <p className="text-gray-600 mt-2">Rimangono {UNLOCK_TIME - videoTime} secondi</p>
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
                  Studi scientifici dimostrano che gli ingredienti di Nutrivex possiedono proprietà 
                  uniche per accelerare il metabolismo, ridurre il grasso corporeo e migliorare la salute generale.
                </p>
                <p className="text-base text-gray-600 mt-4">
                  Vedi qui sotto alcune pubblicazioni riconosciute a livello mondiale:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  "Journal of Natural Medicine",
                  "International Journal of Obesity",
                  "Nutrition & Metabolism Research"
                ].map((journal, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                    <div className="flex items-center mb-3">
                      <Award className="w-6 h-6 text-green-600 mr-2" />
                      <h3 className="font-semibold text-green-900">{journal}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Studi dimostrano l'efficacia degli ingredienti naturali nella perdita di peso sana.
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
                  Clicca sul pulsante qui sotto per assicurarti il tuo Nutrivex prima che le ultime unità si esauriscano.
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
          <section id="offers" className="py-16 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                  Scegli il tuo piano Nutrivex
                </h2>
                <p className="text-lg text-gray-600">Trasforma la tua vita con i nostri piani speciali</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Package 1 - Basic */}
                <div className="relative bg-white rounded-2xl shadow-xl p-8 border-2 border-slate-200 hover:border-green-300 transition-all duration-300">
                  {/* Header ribbon */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-slate-700 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wide">BASIC</span>
                  </div>

                  {/* Supply label */}
                  <div className="text-center mb-2 mt-1">
                    <h3 className="text-[28px] leading-none font-extrabold text-slate-900">1 BOTTLE</h3>
                    <div className="inline-block mt-2 text-[11px] font-semibold tracking-wider bg-slate-100 text-slate-700 px-2 py-1 rounded">60 DAY SUPPLY</div>
                  </div>

                  {/* Product image */}
                  <div className="flex justify-center mb-4">
                    <img 
                      src={oneBottle} 
                      alt="Nutrivex 2 flaconi" 
                      className="w-28 h-36 object-cover rounded-lg shadow-md"
                    />
                  </div>

                  {/* Price per bottle */}
                  <div className="text-center mb-2">
                    <p className="text-5xl font-extrabold text-slate-900 leading-none">
                      <span className="text-slate-900">$79</span>
                      <span className="block text-xs font-semibold text-slate-500 mt-1 tracking-widest">PER BOTTLE</span>
                    </p>
                  </div>

                  {/* Savings + Guarantee */}
                  <div className="text-center space-y-2 my-5">
                    <div className="border border-slate-300 rounded-lg p-2">
                      <p className="text-slate-800 font-semibold text-sm">YOU SAVE $140!</p>
                    </div>
                    <div className="border border-slate-300 rounded-lg p-2">
                      <p className="text-slate-800 font-semibold text-sm">60 DAYS GUARANTEE</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg">
                    ADD TO CART
                  </button>

                  {/* Payments */}
                  <div className="flex items-center justify-center gap-4 mt-4 opacity-90">
                    <img src={visa} alt="Visa" className="h-6 w-auto object-contain" />
                    <img src={master} alt="Mastercard" className="h-6 w-auto object-contain" />
                    <img src={discover} alt="Discover" className="h-6 w-auto object-contain" />
                    <img src={amex} alt="American Express" className="h-6 w-auto object-contain" />
                  </div>

                  {/* Total + Shipping */}
                  <div className="text-center mt-4">
                    <p className="text-xs text-slate-500">Total: <span className="line-through">$298</span> <span className="font-bold text-slate-900">$158</span></p>
                    <p className="text-[11px] text-slate-600 mt-1">+ SHIPPING</p>
                  </div>
                </div>

                {/* Package 2 - Best Value */}
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border-4 border-green-600 transform scale-105">
                  {/* Header ribbon */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-green-700 text-white px-5 py-1.5 rounded-full text-xs font-extrabold tracking-wide">BEST VALUE!</span>
                  </div>

                  {/* Supply label */}
                  <div className="text-center mb-2 mt-1">
                    <h3 className="text-[26px] leading-none font-extrabold text-slate-900">BUY 3 GET + 3 FREE</h3>
                    <div className="inline-block mt-2 text-[11px] font-semibold tracking-wider bg-green-50 text-green-800 px-2 py-1 rounded">180 DAY SUPPLY</div>
                  </div>

                  {/* Product image */}
                  <div className="flex justify-center">
                    <img 
                      src={sixBottles} 
                      alt="Nutrivex 6 flaconi" 
                      className="w-60 h-40 object-cover"
                    />
                  </div>

                  {/* Price per bottle */}
                  <div className="text-center mb-2">
                    <p className="text-6xl font-extrabold text-slate-900 leading-none">
                      <span>$49</span>
                      <span className="block text-xs font-semibold text-slate-500 mt-1 tracking-widest">PER BOTTLE</span>
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 my-5">
                    <div className="border border-green-600 rounded-lg p-2 text-center">
                      <p className="text-green-800 font-bold text-sm">YOU SAVE $600!</p>
                    </div>
                    <div className="grid gap-2">
                      <div className="border border-slate-300 rounded-lg p-2 text-center text-sm font-semibold text-slate-800">BIGGEST DISCOUNT</div>
                      <div className="border border-slate-300 rounded-lg p-2 text-center text-sm font-semibold text-slate-800">+ 2 FREE BONUSES</div>
                      <div className="border border-slate-300 rounded-lg p-2 text-center text-sm font-semibold text-slate-800">60 DAYS GUARANTEE</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg">
                    ADD TO CART
                  </button>

                  {/* Payments */}
                  <div className="flex items-center justify-center gap-4 mt-4 opacity-90">
                    <img src={visa} alt="Visa" className="h-6 w-auto object-contain" />
                    <img src={master} alt="Mastercard" className="h-6 w-auto object-contain" />
                    <img src={discover} alt="Discover" className="h-6 w-auto object-contain" />
                    <img src={amex} alt="American Express" className="h-6 w-auto object-contain" />
                  </div>

                  {/* Total + Shipping */}
                  <div className="text-center mt-4">
                    <p className="text-xs text-slate-500">Total: <span className="line-through">$894</span> <span className="font-bold text-slate-900">$294</span></p>
                    <p className="text-[11px] text-emerald-700 mt-1 font-semibold">+ FREE SHIPPING</p>
                  </div>
                </div>

                {/* Package 3 - Most Popular */}
                <div className="relative bg-white rounded-2xl shadow-xl p-8 border-4 border-[#53675E] hover:to-green-300 transition-all duration-300">
                  {/* Header ribbon */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-700 text-white px-5 py-2.5 rounded-full text-md font-bold tracking-wide">MOST POPULAR</span>
                  </div>

                  {/* Supply label */}
                  <div className="text-center mb-5 mt-1">
                    <h3 className="text-4xl leading-none font-extrabold text-slate-900 tracking-wide">BUY 2 GET + <br></br>1 FREE</h3>
                    <div className="inline-block text-xl font-semibold tracking-wide text-gray-600 px-2 py-1 rounded">90 DAY SUPPLY</div>
                  </div>

                  {/* Product image */}
                  <div className="flex justify-center mb-4">
                    <img 
                      src={threeBottles} 
                      alt="Nutrivex 3 flaconi" 
                      className="w-70 h-auto object-cover"
                    />
                  </div>

                  {/* Price per bottle */}
                  <div className="text-center mb-2">
                    <p className="text-7xl font-extrabold text-slate-900 leading-none">
                      <span>$69 <span className="block text-xl font-extra-bold text-gray-700 mt-1 tracking-widest">PER BOTTLE</span></span>
                      
                    </p>
                  </div>

                  {/* Savings + Guarantee */}
                  <div className="text-center my-5">
                    <div className="border-t-[3px] border-dashed border-slate-300 rounded-lg p-2">
                      <p className="text-slate-800 font-bold text-xl">YOU SAVE $240!</p>
                    </div>
                    <div className="border-t-[3px] border-b-[3px] border-dashed border-slate-300 rounded-lg p-2">
                      <p className="text-slate-800 font-bold text-xl">60 DAYS GUARANTEE</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-5 rounded-lg transition-all duration-300 shadow-lg text-4xl">
                    ADD TO CART
                  </button>

                  {/* Payments */}
                  <div className="flex items-center justify-between gap-1 mt-4 opacity-90 ">
                    <img src={visa} alt="Visa" className="h-16 w-25 object-contain border border-slate-300 rounded-md" />
                    <img src={master} alt="Mastercard" className="h-16 p-2 w-20 object-contain border border-slate-300 rounded-md" />
                    <img src={discover} alt="Discover" className="h-16 w-20 object-contain border border-slate-300 rounded-md" />
                    <img src={amex} alt="American Express" className="h-16 w-20 object-contain border border-slate-300 rounded-md" />
                  </div>

                  {/* Total + Shipping */}
                  <div className="text-center mt-12">
                    <p className="text-lg text-black-500">Total: <span className="line-through text-red-700">$447</span> <span className="font-bold text-slate-900">$207</span></p>
                    <p className="text-[28px] text-red-700 mt-1 font-semibold">+ FREE <span className='text-black'>SHIPPING</span></p>
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
                  o rimborso completo entro <span className="font-bold text-green-700">90 giorni!</span>
                </p>
                <p className="text-lg text-gray-600">
                  Se non sei soddisfatto dei risultati, rimborsiamo il 100% del tuo investimento. 
                  Senza domande, senza burocrazia.
                </p>
              </div>
            </div>
          </section>

          {/* Bonuses Section */}
          <section className="py-20 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                  Ordina ora e ricevi 6 <span className="text-yellow-500">BONUS ESCLUSIVI</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Oltre al Nutrivex, riceverai gratuitamente questi 6 bonus del valore di oltre €300
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
                    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=250&fit=crop"
                  },
                  { 
                    title: "MetaBurn", 
                    subtitle: "20 strategie per accelerare il metabolismo",
                    price: "€54,95",
                    desc: "Tecniche scientificamente provate per bruciare calorie anche a riposo e trasformare il tuo corpo.",
                    image: "https://images.pexels.com/photos/4498318/pexels-photo-4498318.jpeg?auto=compress&cs=tinysrgb&w=200&h=250&fit=crop"
                  },
                  { 
                    title: "Effetto Permanente", 
                    subtitle: "Come non riprendere mai più il peso perso",
                    price: "€49,95",
                    desc: "Il segreto giapponese per mantenere il peso ideale per tutta la vita senza effetto yo-yo.",
                    image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=200&h=250&fit=crop"
                  },
                  { 
                    title: "Ricetta Dorada", 
                    subtitle: "Migliora la circolazione e riduci i gonfiori",
                    price: "€39,95",
                    desc: "Una ricetta antica che migliora la circolazione e ridefinisce le tue gambe in 21 giorni.",
                    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=200&h=250&fit=crop"
                  },
                  { 
                    title: "Zero Ritenzione", 
                    subtitle: "Elimina ritenzione idrica e gonfiore",
                    price: "€44,95",
                    desc: "Metodi naturali per eliminare la ritenzione idrica e ottenere un corpo più definito.",
                    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=200&h=250&fit=crop"
                  },
                  { 
                    title: "Guida Anti-Tossine", 
                    subtitle: "Sostanze che sabotano la tua salute",
                    price: "€34,95",
                    desc: "Scopri quali sostanze quotidiane bloccano la perdita di peso e come evitarle.",
                    image: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=200&h=250&fit=crop"
                  }
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
                              PREZZO CONSIGLIATO: <span className="line-through">{bonus.price}</span> OGGI:
                            </p>
                            <p className="text-2xl font-bold text-yellow-500">GRATUITO</p>
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
                      OGGI TUTTO <span className="font-bold text-2xl">GRATUITO</span> con il tuo ordine!
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
                  { icon: <Leaf className="w-8 h-8" />, title: "Formula 100% naturale" },
                  { icon: <Heart className="w-8 h-8" />, title: "Ingredienti di origine vegetale" },
                  { icon: <CheckCircle className="w-8 h-8" />, title: "Sem OGM" },
                  { icon: <Zap className="w-8 h-8" />, title: "Facile da usare (in gocce)" },
                  { icon: <Shield className="w-8 h-8" />, title: "Senza stimolanti" },
                  { icon: <Star className="w-8 h-8" />, title: "Non crea dipendenza" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md">
                    <div className="text-green-600">{benefit.icon}</div>
                    <span className="font-semibold text-gray-800">{benefit.title}</span>
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
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Ho perso 8kg in sole 3 settimane! Più energia, meno fame e autostima alle stelle."
                  </p>
                  <p className="font-semibold text-green-900">Maria S., 38 anni</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Finalmente sono riuscito a dimagrire senza soffrire! Lo consiglio a tutti."
                  </p>
                  <p className="font-semibold text-green-900">Paolo M., 45 anni</p>
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
                  { name: "Alginati", benefit: "Riduce il grasso, combatte le tossine" },
                  { name: "Vitamina K12", benefit: "Regola il metabolismo e migliora la salute cardiovascolare" },
                  { name: "RS3", benefit: "Fibra fermentabile che regola la glicemia e brucia grassi" },
                  { name: "Camellia Sinensis", benefit: "Antiossidante e anti-infiammatorio" },
                  { name: "Theobroma Cacao", benefit: "Aumenta energia e immunità" },
                  { name: "Schisandra", benefit: "Accelera il metabolismo e previene l'invecchiamento precoce" }
                ].map((ingredient, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                    <h3 className="font-bold text-green-900 text-lg mb-2">{ingredient.name}</h3>
                    <p className="text-gray-600 text-sm">{ingredient.benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-green-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <a href="#" className="hover:text-green-300 transition-colors">Supporto</a>
                  <a href="#" className="hover:text-green-300 transition-colors">Termini</a>
                  <a href="#" className="hover:text-green-300 transition-colors">Privacy</a>
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm text-green-200 leading-relaxed">
                  <strong>Avviso importante:</strong> Le informazioni presentate non sostituiscono il controllo medico. 
                  In caso di gravidanza, allattamento, uso di farmaci o condizioni mediche, 
                  consulta il tuo medico prima di utilizzare questo prodotto.
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
                  Clicca su "Guarda" qui sotto e scopri i risultati incredibili che 
                  migliaia di persone hanno già ottenuto con Nutrivex.
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