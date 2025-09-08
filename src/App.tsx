import React, { useState, useEffect } from "react";
import "./index.css";
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
import oneBottle from "./assets/1 flacon - sem fundo.png";
import threeBottles from "./assets/3 flacons - sem fundo.png";
import sixBottles from "./assets/6 flacons - sem fundo.png";
import visa from "./assets/visa.svg";
import master from "./assets/master.png";
import amex from "./assets/amex.svg";
import discover from "./assets/discover.png";
import selo from "./assets/ChatGPT Image 3 de set. de 2025, 20_19_35.png";
import popup from "./assets/Popup (1).png";
import selo2 from "./assets/Selos.png";
import caminhao from "./assets/caminhao.png";
import mokup1 from "./assets/mockup 01.png";
import mokup2 from "./assets/mockup 02.png";
import mokup3 from "./assets/mockup 03.png";
import mokup4 from "./assets/mockup 04.png";
import mokup5 from "./assets/mockup 05.png";
import mokup6 from "./assets/mockup 06.png";
import mokup7 from "./assets/BONUSPRESENT 07.png";

import fruta1 from "./assets/How-long-does-it-take-berberine-to-work-768x512.webp";
import fruta2 from "./assets/Guarana_brule_graisse_amoseeds_specialiste_des_super_aliments_bio_7026c0da-529b-456a-8209-df0d91dfcb5b.jpg";
import fruta3 from "./assets/kwercetyna.webp";
import fruta4 from "./assets/52.jpg";
import famosa1 from "./assets/famosa1.jpeg";
import famosa2 from "./assets/famosa2.jpeg";
import famosa3 from "./assets/famosa3.jpeg";
import famosa4 from "./assets/famosa4.jpeg";
function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [flacons, setFlacons] = useState(48);
  // Configuração: tempo em segundos para desbloquear (5 minutos = 300 segundos)
  const UNLOCK_TIME = 10; // Reduzido para 10 segundos para demonstração - altere para 300 para 5 minutos
  const fullText = `SlimVita possède une garantie solide de 180 jours. En fait, je veux faire un défi de 180 jours avec vous… Oui, si en 180 jours vous essayez cette formule SlimVita… … et si, par hasard, vous ne voyez PAS votre poids chuter ni vos mesures diminuer après avoir utilisé notre formule… Ou si personne ne vous complimente en disant combien vous avez maigri pendant cette période.
  Nous vous rembourserons chaque centime de votre investissement. Il suffit d’envoyer un e-mail ou un message à notre support et nous procéderons immédiatement au remboursement !
Nous offrons cette garantie parce que nous savons que… … même avec des centaines de témoignages positifs sur notre formule, certaines personnes peuvent encore se sentir sceptiques ou hésitantes.
Après tout, bien qu’il existe des milliers d’hommes et de femmes qui ont réussi à perdre des dizaines de kilos avec notre formule… Et bien que SlimVita soit le seul complément 100 % soutenu par la science… Avec la seule formule qui agit réellement sur la cause de l’excès de poids…
  
La Big Pharma dépense des milliards d’euros chaque année… En pots-de-vin pour certains médecins corrompus et en publicités à la télévision pour cacher ces informations au public.
C’est pourquoi mon intention ici était de vous enlever le bandeau des yeux… De vous montrer la vérité derrière tous ces régimes et méthodes bidons de perte de poids… Et de révéler ce qui fait vraiment maigrir une personne.
Maintenant, vous savez déjà ce qui freine votre perte de poids. Vous savez ce qu’il faut faire pour résoudre ce problème. Et vous avez votre décision appuyée par une garantie de 180 jours qui enlève tout risque pour vous.
Vous êtes à une seule décision de changer votre vie pour toujours. Alors, s’il vous plaît, cliquez ci-dessous pour garantir votre pack de 6 mois ou le montant qui vous convient le mieux.`;

  const shortText = `SlimVita possède une garantie solide de 180 jours. En fait, je veux faire un défi de 180 jours avec vous… Oui, si en 180 jours vous essayez cette formule SlimVita… … et si, par hasard, vous ne voyez PAS votre poids chuter ni vos mesures diminuer après avoir utilisé notre formule… Ou si personne ne vous complimente en disant combien vous avez maigri pendant cette période.
  Nous vous rembourserons chaque centime de votre investissement. Il suffit d’envoyer un e-mail ou un message à notre support et nous procéderons immédiatement au remboursement !
Nous offrons cette garantie parce que nous savons que… … même avec des centaines de témoignages positifs sur notre formule, certaines personnes peuvent encore se sentir sceptiques ou hésitantes.
Après tout, bien qu’il existe des milliers d’hommes et de femmes qui ont réussi à perdre des dizaines de kilos avec notre formule… Et bien que SlimVita soit le seul complément 100 % soutenu par la science… Avec la seule formule qui agit réellement sur la cause de l’excès de poids…`;
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
    }, 300000);

    return () => {
      clearTimeout(initialPopup);
      clearInterval(recurringPopup);
    };
  }, []);
  //TEMPO DO ESTOQUE
  useEffect(() => {
    if (flacons > 0) {
      const interval = setInterval(() => {
        setFlacons((prev) => prev - 1);
      }, 10000); // A cada 1 segundo diminui 1
      return () => clearInterval(interval); // Limpa o intervalo ao desmontar
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white-50 to-white relative overflow-x-hidden">
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Choisissez votre forfait SlimVita avec notre <br />
                remise spéciale à durée limitée !
              </h2>

              <p className="mt-2 text-lg font-semibold text-gray-800 flex justify-center items-center gap-2">
                <span className="text-xl">⏳</span> Flacons SlimVita restantes:{" "}
                <span className="font-extrabold text-green-700">{flacons}</span>
              </p>
            </div>
          </section>
          <div className="mb-5 mt-8 flex justify-center mt-4">
            <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-xl px-6 py-4 shadow-sm max-w-2xl">
              {/* Ícone caminhão */}
              <img className="w-[100px] h-[50px]" src={caminhao} />

              {/* Texto */}
              <div className="text-left">
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  Profitez de la{" "}
                  <span className="text-green-700">LIVRAISON GRATUITE</span> sur
                  les commandes de 3 et 6 flacons !
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  *Pour des résultats à long terme, nous recommandons l’option 6
                  flacons.
                </p>
              </div>
            </div>
          </div>
          <section id="offers" className="py-12 bg-white">
            <div className="container mx-auto px-4">
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
                {/* BASIQUE */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-all flex flex-col h-full text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                      BASIQUE
                    </span>
                  </div>

                  {/* topo */}
                  <div className="flex flex-col items-center flex-1">
                    <h3 className="text-2xl font-extrabold text-gray-900 mt-6">
                      1 FLACON
                    </h3>
                    <p className="text-sm font-bold text-gray-800 mb-3">
                      CURE 30 JOURS
                    </p>

                    <img
                      src={oneBottle}
                      alt="Nutrivex - 1 bouteille"
                      className="h-[200px] object-contain mb-8 mt-5" // ↓ diminuiu 5%
                    />

                    <p className="font-inter font-medium tracking-tight text-7xl text-gray-900">
                      89€
                    </p>
                    <p className="text-sm font-semibold text-gray-700 mt-1 mb-4">
                      PAR FLACON
                    </p>

                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-green-600 font-bold">
                        VOUS ÉCONOMISEZ 140 $ !
                      </p>
                    </div>
                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-gray-800 font-semibold">
                        GARANTIE 60 JOURS
                      </p>
                    </div>
                  </div>

                  {/* rodapé */}
                  <div className="mt-auto">
                    <a
                      href="https://mvx-group.mycartpanda.com/checkout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg text-lg shadow-md mt-6 transition-transform duration-300 hover:scale-[1.01]"
                    >
                      AJOUTER AU PANIER
                    </a>

                    <div className="flex items-center justify-center gap-2 mt-4 opacity-90">
                      {[visa, master, discover, amex].map((card, i) => (
                        <img
                          key={i}
                          src={card}
                          alt="Paiement"
                          className="h-6 w-12 object-contain border border-gray-300 rounded-md"
                        />
                      ))}
                    </div>

                    <div className="text-center mt-3">
                      <p className="text-sm text-gray-900">
                        Total :{" "}
                        <span className="line-through text-red-700">$298</span>{" "}
                        <span className="font-bold">$158</span>
                      </p>
                      <p className="text-sm text-gray-600 mt-1">+ LIVRAISON</p>
                    </div>
                  </div>
                </div>

                {/* MEILLEUR RAPPORT QUALITÉ/PRIX */}
                <div
                  style={{ backgroundColor: "rgb(240, 253, 244)" }}
                  className="relative rounded-2xl p-6 border-2 ring-2 ring-green-500 border-gray-100 shadow-2xl transform scale-105 text-center hover:shadow-2xl transition flex flex-col h-full"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-extrabold tracking-wide whitespace-nowrap shadow-md">
                      LE PLUS POPULAIRE
                    </span>
                  </div>

                  {/* topo */}
                  <div className="flex flex-col items-center flex-1">
                    <h3 className="text-2xl font-extrabold text-green-800 mt-6">
                      3 FLACONS + 3 GRATUITS
                    </h3>
                    <p className="text-sm font-bold text-black-800 mb-3">
                      CURE 180 JOURS
                    </p>

                    <div className="relative w-[320px] pb-[10rem]">
                      {" "}
                      {/* Container relativo com largura igual à imagem */}
                      <img
                        src={sixBottles}
                        alt="Nutrivex - 6 bouteilles"
                        className="h-[340px] pl-7 object-contain"
                      />
                      <div
                        className="absolute pt-3 left-0 right-0"
                        style={{ top: "260px" }} // Ajusta a distância do topo para ficar perto da imagem
                      >
                        <p className="font-inter font-medium tracking-tight text-7xl text-gray-900">
                          48€
                        </p>
                        <p className="text-sm font-semibold text-gray-700 mb-0">
                          PAR FLACONS
                        </p>

                        <div className="border-t border-dashed border-gray-300 py-2 w-full">
                          <p className="text-green-600 font-bold mb-0">
                            VOUS ÉCONOMISEZ 600 $ !
                          </p>
                        </div>
                        <div className="border-t border-dashed border-gray-300 py-2 w-full">
                          <p className="text-gray-800 font-semibold mb-0">
                            PLUS GRANDE REMISE
                          </p>
                        </div>
                        <div className="border-t border-dashed border-gray-300 py-2 w-full">
                          <p className="text-gray-800 font-semibold mb-0">
                            + 2 BONUS OFFERTS
                          </p>
                        </div>
                        <div className="border-t border-dashed border-gray-300 py-2 w-full">
                          <p className="text-gray-800 font-semibold mb-0">
                            GARANTIE 60 JOURS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* rodapé */}
                  <div className="mt-auto">
                    <a
                      href="https://mvx-group.mycartpanda.com/checkout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg text-xl shadow-md mt-6 transition-transform duration-300 hover:scale-[1.01]"
                    >
                      AJOUTER AU PANIER
                    </a>

                    <div className="flex items-center justify-center gap-2 mt-4 opacity-90">
                      {[visa, master, discover, amex].map((card, i) => (
                        <img
                          key={i}
                          src={card}
                          alt="Paiement"
                          className="h-8 w-14 object-contain border border-gray-300 rounded-md"
                        />
                      ))}
                    </div>

                    <div className="text-center mt-3">
                      <p className="text-sm text-gray-900">
                        Total :{" "}
                        <span className="line-through text-red-700">$894</span>{" "}
                        <span className="font-bold">$294</span>
                      </p>
                      <p className="text-sm text-green-700 mt-1 font-semibold">
                        + LIVRAISON GRATUITE
                      </p>
                    </div>
                  </div>
                </div>

                {/* PACK */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-all flex flex-col h-full text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                      PACK
                    </span>
                  </div>

                  {/* topo */}
                  <div className="flex flex-col items-center flex-1">
                    <h3 className="text-2xl font-extrabold text-gray-900 mt-6">
                      2 FLACONS + 1 GRATUIT
                    </h3>
                    <p className="text-sm font-bold text-gray-800 mb-3">
                      CURE 90 JOURS
                    </p>

                    <img
                      src={threeBottles}
                      alt="Nutrivex - 3 bouteilles"
                      className="h-[220px] object-contain mb-4" // manteve
                    />

                    <p className="font-inter font-medium tracking-tight text-7xl text-gray-900">
                      59€
                    </p>
                    <p className="text-sm font-semibold text-gray-700 mt-1 mb-4">
                      PAR FLACONS
                    </p>

                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-green-600 font-bold">
                        VOUS ÉCONOMISEZ 300 $ !
                      </p>
                    </div>
                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-gray-800 font-semibold">
                        + 1 BONUS OFFERT
                      </p>
                    </div>
                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-gray-800 font-semibold">
                        GARANTIE 60 JOURS
                      </p>
                    </div>
                  </div>

                  {/* rodapé */}
                  <div className="mt-auto">
                    <a
                      href="https://mvx-group.mycartpanda.com/checkout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg text-lg shadow-md mt-6 transition-transform duration-300 hover:scale-[1.01]"
                    >
                      AJOUTER AU PANIER
                    </a>

                    <div className="flex items-center justify-center gap-2 mt-4 opacity-90">
                      {[visa, master, discover, amex].map((card, i) => (
                        <img
                          key={i}
                          src={card}
                          alt="Paiement"
                          className="h-6 w-12 object-contain border border-gray-300 rounded-md"
                        />
                      ))}
                    </div>

                    <div className="text-center mt-3">
                      <p className="text-sm text-gray-900">
                        Total :{" "}
                        <span className="line-through text-red-700">$447</span>{" "}
                        <span className="font-bold">$207</span>
                      </p>
                      <p className="text-sm text-green-600 mt-1">
                        + LIVRAISON GRATUITE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seção de Depoimentos */}
          <section className="bg-white py-12 px-4 md:px-8">
            {/* Título */}
            <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Voyez ce que{" "}
              <span className="text-green-700">
                plus de 1500 femmes françaises
              </span>
              , qui ont déjà transformé leur vie, disent sur{" "}
              <span className="text-green-700">SlimVita</span> :
            </h2>

            {/* Grid de Depoimentos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {[
                {
                  name: "Sophie, 45 ans",
                  text: "Grâce à SlimVita, j'ai retrouvé mon énergie et mon corps de rêve après 40 ans!",
                },
                {
                  name: "Claire, 50 ans",
                  text: "Je me sens plus confiante que jamais. Résultats incroyables!",
                },
                {
                  name: "Amélie, 42 ans",
                  text: "C'est le meilleur investissement que j'ai fait pour ma santé.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-xl shadow-md overflow-hidden"
                >
                  <img
                    src="https://www.tribunapr.com.br/wp-content/uploads/sites/1/2019/05/remedio-pixabay.jpg"
                    alt={`Depoimento ${i + 1}`}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-gray-700 text-sm">"{item.text}"</p>
                    <span className="block text-green-700 text-sm font-semibold mt-2">
                      — {item.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Seção Antes e Depois */}
            <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Voyez <span className="text-green-700">COMMENT</span> le corps de
              ces femmes a changé :
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-xl shadow-md overflow-hidden text-center"
                >
                  <img
                    src="https://img.freepik.com/fotos-premium/imagens-antes-e-depois-que-retratam-a-transformacao-de-una-jovem-adulta_1163068-195.jpg"
                    alt={`Avant et Après ${i}`}
                    className="w-full h-60 object-cover"
                  />
                  <p className="text-gray-700 font-semibold p-2">
                    Avant ➡ Après
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Seção Ingredientes */}
          <section className="bg-white py-12 px-4 md:px-8">
            {/* Título */}
            <section className="py-16 bg-gradient-to-b from-green-50 to-white">
              <div className="container mx-auto px-4">
                {/* Título */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                    Une formule 100 % naturelle,
                    <span className="text-green-700"> produite avec:</span> 
                  </h2>
                </div>

                {/* Grid de Ingredientes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {[
                    {
                      name: "Bérbérine",
                      desc: `Un fruit exotique de l’Amazonie, riche en un composant actif appelé bérbérine.
La bérbérine est un antioxydant extrêmement puissant, capable de réduire l’inflammation cellulaire jusqu’à 86 %.`,

                      img: fruta1,
                      benefits: [
                        "Reduces Favorise la perte de poids cells",
                        "Aide à contrôler la glycémie",
                        "Protège le cœur",
                      ],
                    },

                    {
                      name: "Graine de guaraná",
                      desc: `Le guaraná est l’un des fruits les plus emblématiques du Brésil.
Et de nombreuses études menées par des institutions renommées comme l’Inserm, Stanford et Johns Hopkins ont confirmé que le guaraná est l’un des fruits les plus efficaces pour brûler la graisse naturellement.`,

                      img: fruta2,
                      benefits: [
                        "Increases Augmente l’énergie et réduit la fatigue levels",
                        "Stimule la concentration et la mémoire",
                        "Favorise la combustion des graisses",
                      ],
                    },
                    {
                      name: "Quercétine",
                      desc: `Un flavonoïde puissant trouvé dans certains fruits.
La quercétine limite la formation de nouvelles cellules graisseuses, améliore la sensibilité à l’insuline…
Elle régule les niveaux de glucose dans le sang et stimule la production naturelle de GLP-1.
En plus, la quercétine agit directement sur la satiété, réduisant l’appétit et l’apport calorique, de manière similaire aux médicaments synthétiques comme l’Ozempic et le Mounjaro.`,
                      img: fruta3,
                      benefits: [
                        "Réduit la formation de nouvelles cellules graisseuses",
                        "Améliore la sensibilité à l’insuline et régule la glycémie",
                        "Augmente la satiété et aide à contrôler l’appétit",
                      ],
                    },

                    {
                      name: "Sel rose",
                      desc: `Un véritable trésor minéral de la nature.
Contrairement au sel commun, il contient plus de 80 minéraux bioactifs…
Comme le magnésium, le potassium et le calcium, qui aident à équilibrer l’organisme et à favoriser la combustion des graisses.
Ces minéraux contribuent à réguler l’insuline et améliorer l’absorption du glucose.
Mais ce n’est pas tout : le sel rose influence également la production de l’hormone GLP-1, directement liée au contrôle de l’appétit et à la perte de graisse.`,

                      img: fruta4,

                      benefits: [
                        "Riche en minéraux essentiels",
                        "Régule l’insuline et le glucose",
                        "Favorise la combustion des graisses",
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

            {/* Bônus */}
            <div className="py-20 bg-gradient-to-b from-green-50 to-white">
              <div className="container mx-auto px-4">
                {/* Título */}
                <div className="text-center  mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                    👉 En achetant le kit avec 6 flacons{" "}
                    <span className="text-yellow-500">AUJOURD’HUI</span>…
                  </h2>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Vous aurez encore droit à recevoir{" "}
                    <span className="font-bold text-green-700">
                      7 bonus exclusifs
                    </span>{" "}
                    :
                  </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                  {/* Linha verde */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-700 hidden md:block pointer-events-none"></div>

                  <div className="space-y-8 relative z-10">
                    {[
                      {
                        title: "La Méthode Taille de Rêve",
                        img: mokup1,
                      },
                      {
                        title: "La Recette Secrète du Cocktail Indien",
                        img: mokup2,
                      },
                      {
                        title: "Le Secret Anti-Effet Yoyo",
                        img: mokup3,
                      },
                      {
                        title:
                          "20 Façons d’Accélérer Votre Métabolisme à la Maison",
                          img: mokup4,
                      },
                      {
                        title: "Le Protocole Zéro Rétention",
                        img: mokup5,
                      },
                      {
                        title:
                          "9 Recettes pour Contrôler le Diabète et la Glycémie",
                          img: mokup6,
                      },
                      {
                        title:
                          "Un Cadeau Final et Très Spécial → Avec le droit de participer au tirage au sort de 1.000 € d’achats chez H&M",
                          img: mokup7,
                      },
                    ].map((bonus, index, arr) => (
                      <div key={index} className="relative">
                        {/* Ponto da timeline */}
                        <div className="absolute left-6 top-8 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

                        {/* Card */}
                        <div
                          className={`bg-white rounded-2xl shadow-xl p-8 ml-0 md:ml-16 border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300 ${
                            index === arr.length - 1 ? "mb-0" : ""
                          }`}
                        >
                          <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-1">
                              <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full font-bold text-lg w-max">
                                BONUS N°{index + 1}
                              </span>
                              <h3 className="text-xl font-semibold text-gray-800 mt-2">
                                {bonus.title}
                              </h3>
                              <p className="text-2xl font-bold text-yellow-500 mt-2">
                                GRATUIT
                              </p>
                            </div>

                            {/* Imagem quando existir */}
                            {bonus.img && (
                              <img
                                src={bonus.img}
                                alt={bonus.title}
                                className="w-50 md:w-52 lg:w-64 object-contain"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Valor total */}
                <div className="mt-6 text-center">
                  <div className="max-w-4xl mx-auto mt-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl px-6 py-2 md:py-4 shadow-md text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        VALEUR TOTALE DES BONUS: +300 €
                      </h3>
                      <p className="text-sm md:text-base text-white">
                        AUJOURD’HUI TOUT{" "}
                        <span className="font-bold text-base md:text-lg">
                          GRATUIT
                        </span>{" "}
                        avec votre commande !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 90-Day Guarantee Section */}
          <section className="mb-3 py-16 bg-white">
            <div className="container mx-auto px-4 max-w-5xl flex flex-col items-center">
              {/* Selo no topo */}
              <div className="mb-8">
                <img
                  src={selo}
                  alt="Sceau Garantie 180 Jours"
                  className="w-40 h-40 object-contain mx-auto"
                />
              </div>

              <div className="w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4 text-center md:text-left">
                  PROTECTION ABSOLUE DE 180 JOURS – NOUS ALLONS GARANTIR VOS
                  RÉSULTATS !
                </h3>

                {/* Texto com a seta no final */}
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {showMore ? fullText : shortText}
                  <button
                    aria-label={showMore ? "Réduire le texte" : "Afficher plus"}
                    onClick={() => setShowMore(!showMore)}
                    className="ml-2 align-middle text-green-900 hover:text-green-700"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        transform: showMore ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </p>
              </div>
            </div>
          </section>

          {/* Offers Section */}
          <section id="offers" className="py-12 bg-white">
            <div className="container mx-auto px-4">
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
                {/* BASIQUE */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-all flex flex-col h-full text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                      BASIQUE
                    </span>
                  </div>

                  {/* topo */}
                  <div className="flex flex-col items-center flex-1">
                    <h3 className="text-2xl font-extrabold text-gray-900 mt-6">
                      1 FLACON
                    </h3>
                    <p className="text-sm font-bold text-gray-800 mb-3">
                      CURE 30 JOURS
                    </p>

                    <img
                      src={oneBottle}
                      alt="Nutrivex - 1 bouteille"
                      className="h-[200px] object-contain mb-8 mt-5" // ↓ diminuiu 5%
                    />

                    <p className="font-inter font-medium tracking-tight text-7xl text-gray-900">
                      89€
                    </p>
                    <p className="text-sm font-semibold text-gray-700 mt-1 mb-4">
                      PAR FLACON
                    </p>

                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-green-600 font-bold">
                        VOUS ÉCONOMISEZ 140 $ !
                      </p>
                    </div>
                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-gray-800 font-semibold">
                        GARANTIE 60 JOURS
                      </p>
                    </div>
                  </div>

                  {/* rodapé */}
                  <div className="mt-auto">
                    <a
                      href="https://mvx-group.mycartpanda.com/checkout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg text-lg shadow-md mt-6 transition-transform duration-300 hover:scale-[1.01]"
                    >
                      AJOUTER AU PANIER
                    </a>

                    <div className="flex items-center justify-center gap-2 mt-4 opacity-90">
                      {[visa, master, discover, amex].map((card, i) => (
                        <img
                          key={i}
                          src={card}
                          alt="Paiement"
                          className="h-6 w-12 object-contain border border-gray-300 rounded-md"
                        />
                      ))}
                    </div>

                    <div className="text-center mt-3">
                      <p className="text-sm text-gray-900">
                        Total :{" "}
                        <span className="line-through text-red-700">$298</span>{" "}
                        <span className="font-bold">$158</span>
                      </p>
                      <p className="text-sm text-gray-600 mt-1">+ LIVRAISON</p>
                    </div>
                  </div>
                </div>

                {/* MEILLEUR RAPPORT QUALITÉ/PRIX */}
                <div
                  style={{ backgroundColor: "rgb(240, 253, 244)" }}
                  className="relative rounded-2xl p-6 border-2 ring-2 ring-green-500 border-gray-100 shadow-2xl transform scale-105 text-center hover:shadow-2xl transition flex flex-col h-full"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-extrabold tracking-wide whitespace-nowrap shadow-md">
                      LE PLUS POPULAIRE
                    </span>
                  </div>

                  {/* topo */}
                  <div className="flex flex-col items-center flex-1">
                    <h3 className="text-2xl font-extrabold text-green-800 mt-6">
                      3 FLACONS + 3 GRATUITS
                    </h3>
                    <p className="text-sm font-bold text-black-800 mb-3">
                      CURE 180 JOURS
                    </p>

                    <div className="relative w-[320px] pb-[10rem]">
                      {" "}
                      {/* Container relativo com largura igual à imagem */}
                      <img
                        src={sixBottles}
                        alt="Nutrivex - 6 bouteilles"
                        className="h-[340px] pl-7 object-contain"
                      />
                      <div
                        className="absolute pt-3 left-0 right-0"
                        style={{ top: "260px" }} // Ajusta a distância do topo para ficar perto da imagem
                      >
                        <p className="font-inter font-medium tracking-tight text-7xl text-gray-900">
                          48€
                        </p>
                        <p className="text-sm font-semibold text-gray-700 mb-0">
                          PAR FLACONS
                        </p>

                        <div className="border-t border-dashed border-gray-300 py-2 w-full">
                          <p className="text-green-600 font-bold mb-0">
                            VOUS ÉCONOMISEZ 600 $ !
                          </p>
                        </div>
                        <div className="border-t border-dashed border-gray-300 py-2 w-full">
                          <p className="text-gray-800 font-semibold mb-0">
                            PLUS GRANDE REMISE
                          </p>
                        </div>
                        <div className="border-t border-dashed border-gray-300 py-2 w-full">
                          <p className="text-gray-800 font-semibold mb-0">
                            + 2 BONUS OFFERTS
                          </p>
                        </div>
                        <div className="border-t border-dashed border-gray-300 py-2 w-full">
                          <p className="text-gray-800 font-semibold mb-0">
                            GARANTIE 60 JOURS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* rodapé */}
                  <div className="mt-auto">
                    <a
                      href="https://mvx-group.mycartpanda.com/checkout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg text-xl shadow-md mt-6 transition-transform duration-300 hover:scale-[1.01]"
                    >
                      AJOUTER AU PANIER
                    </a>

                    <div className="flex items-center justify-center gap-2 mt-4 opacity-90">
                      {[visa, master, discover, amex].map((card, i) => (
                        <img
                          key={i}
                          src={card}
                          alt="Paiement"
                          className="h-8 w-14 object-contain border border-gray-300 rounded-md"
                        />
                      ))}
                    </div>

                    <div className="text-center mt-3">
                      <p className="text-sm text-gray-900">
                        Total :{" "}
                        <span className="line-through text-red-700">$894</span>{" "}
                        <span className="font-bold">$294</span>
                      </p>
                      <p className="text-sm text-green-700 mt-1 font-semibold">
                        + LIVRAISON GRATUITE
                      </p>
                    </div>
                  </div>
                </div>

                {/* PACK */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-all flex flex-col h-full text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                      PACK
                    </span>
                  </div>

                  {/* topo */}
                  <div className="flex flex-col items-center flex-1">
                    <h3 className="text-2xl font-extrabold text-gray-900 mt-6">
                      2 FLACONS + 1 GRATUIT
                    </h3>
                    <p className="text-sm font-bold text-gray-800 mb-3">
                      CURE 90 JOURS
                    </p>

                    <img
                      src={threeBottles}
                      alt="Nutrivex - 3 bouteilles"
                      className="h-[220px] object-contain mb-4" // manteve
                    />

                    <p className="font-inter font-medium tracking-tight text-7xl text-gray-900">
                      59€
                    </p>
                    <p className="text-sm font-semibold text-gray-700 mt-1 mb-4">
                      PAR FLACONS
                    </p>

                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-green-600 font-bold">
                        VOUS ÉCONOMISEZ 300 $ !
                      </p>
                    </div>
                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-gray-800 font-semibold">
                        + 1 BONUS OFFERT
                      </p>
                    </div>
                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-gray-800 font-semibold">
                        GARANTIE 60 JOURS
                      </p>
                    </div>
                  </div>

                  {/* rodapé */}
                  <div className="mt-auto">
                    <a
                      href="https://mvx-group.mycartpanda.com/checkout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg text-lg shadow-md mt-6 transition-transform duration-300 hover:scale-[1.01]"
                    >
                      AJOUTER AU PANIER
                    </a>

                    <div className="flex items-center justify-center gap-2 mt-4 opacity-90">
                      {[visa, master, discover, amex].map((card, i) => (
                        <img
                          key={i}
                          src={card}
                          alt="Paiement"
                          className="h-6 w-12 object-contain border border-gray-300 rounded-md"
                        />
                      ))}
                    </div>

                    <div className="text-center mt-3">
                      <p className="text-sm text-gray-900">
                        Total :{" "}
                        <span className="line-through text-red-700">$447</span>{" "}
                        <span className="font-bold">$207</span>
                      </p>
                      <p className="text-sm text-green-600 mt-1">
                        + LIVRAISON GRATUITE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Témoignages Réels */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              {/* Título */}
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  De Vraies Utilisatrices De SlimVita.
                </h2>
                <p className="text-lg text-gray-700">
                  De Vrais Résultats Qui Changent La Vie
                </p>
              </div>

              {/* Grid de Imagens */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto ">
                {[famosa1, famosa2, famosa3, famosa4].map((img, index) => (
                  <div key={index} className="flex justify-center">
                    <img
                      src={img}
                      alt={`Cliente ${index + 1}`}
                      className="rounded-xl shadow-md object-cover w-40 h-60"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Grid de Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              {
                name: "Sophie, 45 ans",
                text: "Grâce à SlimVita, j'ai retrouvé mon énergie et mon corps de rêve après 40 ans!",
              },
              {
                name: "Claire, 50 ans",
                text: "Je me sens plus confiante que jamais. Résultats incroyables!",
              },
              {
                name: "Amélie, 42 ans",
                text: "C'est le meilleur investissement que j'ai fait pour ma santé.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src="https://www.tribunapr.com.br/wp-content/uploads/sites/1/2019/05/remedio-pixabay.jpg"
                  alt={`Depoimento ${i + 1}`}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-700 text-sm">"{item.text}"</p>
                  <span className="block text-green-700 text-sm font-semibold mt-2">
                    — {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Section: Livraison Gratuite + Avantages (com caminhão) */}
          <div className="mb-5 mt-8 flex justify-center mt-4">
            <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-xl px-6 py-4 shadow-sm max-w-2xl">
              {/* Ícone caminhão */}
              <img className="w-[100px] h-[50px]" src={caminhao} />

              {/* Texto */}
              <div className="text-left">
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  Profitez de la{" "}
                  <span className="text-green-700">LIVRAISON GRATUITE</span> sur
                  les commandes de 3 et 6 flacons !
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  *Pour des résultats à long terme, nous recommandons l’option 6
                  flacons.
                </p>
              </div>
            </div>
          </div>

          <section id="offers" className="py-12 bg-white">
            <div className="container mx-auto px-4">
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
                {/* BASIQUE */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-all flex flex-col h-full text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                      BASIQUE
                    </span>
                  </div>

                  {/* topo */}
                  <div className="flex flex-col items-center flex-1">
                    <h3 className="text-2xl font-extrabold text-gray-900 mt-6">
                      1 FLACON
                    </h3>
                    <p className="text-sm font-bold text-gray-800 mb-3">
                      CURE 30 JOURS
                    </p>

                    <img
                      src={oneBottle}
                      alt="Nutrivex - 1 bouteille"
                      className="h-[200px] object-contain mb-8 mt-5" // ↓ diminuiu 5%
                    />

                    <p className="font-inter font-medium tracking-tight text-7xl text-gray-900">
                      89€
                    </p>
                    <p className="text-sm font-semibold text-gray-700 mt-1 mb-4">
                      PAR FLACON
                    </p>

                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-green-600 font-bold">
                        VOUS ÉCONOMISEZ 140 $ !
                      </p>
                    </div>
                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-gray-800 font-semibold">
                        GARANTIE 60 JOURS
                      </p>
                    </div>
                  </div>

                  {/* rodapé */}
                  <div className="mt-auto">
                    <a
                      href="https://mvx-group.mycartpanda.com/checkout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg text-lg shadow-md mt-6 transition-transform duration-300 hover:scale-[1.01]"
                    >
                      AJOUTER AU PANIER
                    </a>

                    <div className="flex items-center justify-center gap-2 mt-4 opacity-90">
                      {[visa, master, discover, amex].map((card, i) => (
                        <img
                          key={i}
                          src={card}
                          alt="Paiement"
                          className="h-6 w-12 object-contain border border-gray-300 rounded-md"
                        />
                      ))}
                    </div>

                    <div className="text-center mt-3">
                      <p className="text-sm text-gray-900">
                        Total :{" "}
                        <span className="line-through text-red-700">$298</span>{" "}
                        <span className="font-bold">$158</span>
                      </p>
                      <p className="text-sm text-gray-600 mt-1">+ LIVRAISON</p>
                    </div>
                  </div>
                </div>

                {/* MEILLEUR RAPPORT QUALITÉ/PRIX */}
                <div
                  style={{ backgroundColor: "rgb(240, 253, 244)" }}
                  className="relative rounded-2xl p-6 border-2 ring-2 ring-green-500 border-gray-100 shadow-2xl transform scale-105 text-center hover:shadow-2xl transition flex flex-col h-full"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-extrabold tracking-wide whitespace-nowrap shadow-md">
                      LE PLUS POPULAIRE
                    </span>
                  </div>

                  {/* topo */}
                  <div className="flex flex-col items-center flex-1">
                    <h3 className="text-2xl font-extrabold text-green-800 mt-6">
                      3 FLACONS + 3 GRATUITS
                    </h3>
                    <p className="text-sm font-bold text-black-800 mb-3">
                      CURE 180 JOURS
                    </p>

                    <div className="relative w-[320px] pb-[10rem]">
                      {" "}
                      {/* Container relativo com largura igual à imagem */}
                      <img
                        src={sixBottles}
                        alt="Nutrivex - 6 bouteilles"
                        className="h-[340px] pl-7 object-contain"
                      />
                      <div
                        className="absolute pt-3 left-0 right-0"
                        style={{ top: "260px" }} // Ajusta a distância do topo para ficar perto da imagem
                      >
                        <p className="font-inter font-medium tracking-tight text-7xl text-gray-900">
                          48€
                        </p>
                        <p className="text-sm font-semibold text-gray-700 mb-0">
                          PAR FLACONS
                        </p>

                        <div className="border-t border-dashed border-gray-300 py-2 w-full">
                          <p className="text-green-600 font-bold mb-0">
                            VOUS ÉCONOMISEZ 600 $ !
                          </p>
                        </div>
                        <div className="border-t border-dashed border-gray-300 py-2 w-full">
                          <p className="text-gray-800 font-semibold mb-0">
                            PLUS GRANDE REMISE
                          </p>
                        </div>
                        <div className="border-t border-dashed border-gray-300 py-2 w-full">
                          <p className="text-gray-800 font-semibold mb-0">
                            + 2 BONUS OFFERTS
                          </p>
                        </div>
                        <div className="border-t border-dashed border-gray-300 py-2 w-full">
                          <p className="text-gray-800 font-semibold mb-0">
                            GARANTIE 60 JOURS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* rodapé */}
                  <div className="mt-auto">
                    <a
                      href="https://mvx-group.mycartpanda.com/checkout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg text-xl shadow-md mt-6 transition-transform duration-300 hover:scale-[1.01]"
                    >
                      AJOUTER AU PANIER
                    </a>

                    <div className="flex items-center justify-center gap-2 mt-4 opacity-90">
                      {[visa, master, discover, amex].map((card, i) => (
                        <img
                          key={i}
                          src={card}
                          alt="Paiement"
                          className="h-8 w-14 object-contain border border-gray-300 rounded-md"
                        />
                      ))}
                    </div>

                    <div className="text-center mt-3">
                      <p className="text-sm text-gray-900">
                        Total :{" "}
                        <span className="line-through text-red-700">$894</span>{" "}
                        <span className="font-bold">$294</span>
                      </p>
                      <p className="text-sm text-green-700 mt-1 font-semibold">
                        + LIVRAISON GRATUITE
                      </p>
                    </div>
                  </div>
                </div>

                {/* PACK */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-all flex flex-col h-full text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                      PACK
                    </span>
                  </div>

                  {/* topo */}
                  <div className="flex flex-col items-center flex-1">
                    <h3 className="text-2xl font-extrabold text-gray-900 mt-6">
                      2 FLACONS + 1 GRATUIT
                    </h3>
                    <p className="text-sm font-bold text-gray-800 mb-3">
                      CURE 90 JOURS
                    </p>

                    <img
                      src={threeBottles}
                      alt="Nutrivex - 3 bouteilles"
                      className="h-[220px] object-contain mb-4" // manteve
                    />

                    <p className="font-inter font-medium tracking-tight text-7xl text-gray-900">
                      59€
                    </p>
                    <p className="text-sm font-semibold text-gray-700 mt-1 mb-4">
                      PAR FLACONS
                    </p>

                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-green-600 font-bold">
                        VOUS ÉCONOMISEZ 300 $ !
                      </p>
                    </div>
                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-gray-800 font-semibold">
                        + 1 BONUS OFFERT
                      </p>
                    </div>
                    <div className="border-t border-dashed border-gray-300 py-2 w-full">
                      <p className="text-gray-800 font-semibold">
                        GARANTIE 60 JOURS
                      </p>
                    </div>
                  </div>

                  {/* rodapé */}
                  <div className="mt-auto">
                    <a
                      href="https://mvx-group.mycartpanda.com/checkout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 rounded-lg text-lg shadow-md mt-6 transition-transform duration-300 hover:scale-[1.01]"
                    >
                      AJOUTER AU PANIER
                    </a>

                    <div className="flex items-center justify-center gap-2 mt-4 opacity-90">
                      {[visa, master, discover, amex].map((card, i) => (
                        <img
                          key={i}
                          src={card}
                          alt="Paiement"
                          className="h-6 w-12 object-contain border border-gray-300 rounded-md"
                        />
                      ))}
                    </div>

                    <div className="text-center mt-3">
                      <p className="text-sm text-gray-900">
                        Total :{" "}
                        <span className="line-through text-red-700">$447</span>{" "}
                        <span className="font-bold">$207</span>
                      </p>
                      <p className="text-sm text-green-600 mt-1">
                        + LIVRAISON GRATUITE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* FAQ Section */}
          <section className="py-16 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4">
              {/* Título */}
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
                    q: "1. Depuis que j’ai commencé à prendre SlimVita, je sens mon corps plus léger et j’ai plus d’énergie. Est-ce normal ?",
                    a: "Oui ! C’est exactement ce qu’il faut attendre. SlimVita est le premier complément naturel au monde cliniquement formulé pour activer « l’hormone de la minceur » et accélérer la combustion des graisses profondes. En éliminant l’excès de cellules graisseuses accumulées et en restaurant l’équilibre naturel du corps… Vous vous sentez plus légère, plus disposée et pleine d’énergie pour la vie quotidienne.",
                  },
                  {
                    q: "2. Je prends déjà d’autres compléments et SlimVita semble avoir renforcé leurs effets. Est-ce vraiment le cas ?",
                    a: "Oui ! Les ingrédients naturels de SlimVita fonctionnent en synergie avec d’autres compléments. Beaucoup d’utilisateurs rapportent une amélioration non seulement de la perte de poids, mais aussi de la digestion, de la peau, de l’humeur et même de la qualité du sommeil.",
                  },
                  {
                    q: "3. Quels sont les ingrédients de SlimVita et comment fonctionnent-ils ?",
                    a: "SlimVita combine des ingrédients 100 % naturels comme le sel rose, la quercétine, la graine de guaraná et l’extrait de tucumã. Cette formule stimule la production naturelle de GLP-1… La même substance présente dans des médicaments comme l’Ozempic. Mais de façon sûre, sans aiguilles et jusqu’à 9 fois plus efficace que ces stylos injectables.",
                  },
                  {
                    q: "4. Comment dois-je prendre SlimVita ? Existe-t-il une façon correcte de l’utiliser et y a-t-il des contre-indications ?",
                    a: "SlimVita est super pratique et facile à utiliser. Il suffit de déposer la dose indiquée directement dans la bouche, exactement comme vous avez sûrement déjà vu certaines célébrités le faire, et voilà. Votre corps commence immédiatement à absorber les actifs naturels qui stimulent la production de GLP-1. La posologie recommandée est de 10 gouttes par jour (conformément aux indications sur l’emballage), pouvant être prises à tout moment de la journée. L’essentiel est de maintenir l’utilisation quotidienne pour maximiser les résultats. Concernant la sécurité, SlimVita est un produit naturel, c’est-à-dire zéro risque pour votre santé.",
                  },
                  {
                    q: "5. Pourquoi personne ne m’a parlé plus tôt de quelque chose d’aussi révolutionnaire que SlimVita ?",
                    a: "Excellente question ! SlimVita est véritablement une révolution dans l’amaigrissement naturel. Mais l’industrie de la minceur gagne des milliards avec des régimes radicaux, des médicaments pleins d’effets secondaires et des promesses vides. Nous avons choisi de transformer des vies en silence, en aidant des milliers de personnes à maigrir de manière saine et définitive.",
                  },
                  {
                    q: "6. Mon mari n’arrête pas de me regarder et de me désirer, et certaines amies sont curieuses de mon petit secret… Est-ce normal ?",
                    a: "Oui, cela arrive souvent ! SlimVita agit de l’intérieur vers l’extérieur, aidant votre corps à éliminer l’excès de poids et à dégonfler naturellement. Le résultat ne se voit pas seulement sur la balance, mais aussi dans le miroir et dans votre énergie : Vous commencez à vous sentir plus légère, plus confiante et avec une estime de soi renouvelée. Ce changement est si visible que le regard des gens autour de vous change. Beaucoup de clientes rapportent exactement cela : leur mari remarque davantage, les complimente, les désire… Et les amies ne résistent pas à demander quel est le petit secret derrière une telle transformation.",
                  },
                  {
                    q: "7. J’ai passé ma commande et elle est arrivée en seulement trois jours. Est-ce normal ?",
                    a: "Oui ! Dès que votre commande est confirmée sur notre page 100 % sécurisée, elle est expédiée rapidement. Le délai moyen est de 3 à 5 jours ouvrés, mais beaucoup de clients reçoivent avant ce délai.",
                  },
                  {
                    q: "8. J’ai reçu un e-mail disant que SlimVita pourrait être indisponible. Est-ce vrai ?",
                    a: "Malheureusement, oui. La forte demande, ajoutée au processus d’importation de certains ingrédients, peut affecter notre stock. C’est pourquoi il est important de garantir votre pack dès aujourd’hui.",
                  },
                  {
                    q: "9. Je veux commencer maintenant ! Que dois-je faire ?",
                    a: "C’est simple : cliquez sur le bouton ci-dessous, choisissez le meilleur pack pour vous et finalisez votre commande. Votre SlimVita arrivera sous 5 jours ouvrés maximum. Avec notre garantie de 180 jours, vous n’avez rien à perdre et tout à gagner.",
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
                      <div className="px-6 pb-4 text-gray-700 text-sm whitespace-pre-line">
                        {item.a}
                      </div>
                    </details>
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
                {/* IMAGEM ADICIONADA */}
                <img
                  src={popup}
                  alt="Popup Nutrivex"
                  className="mx-auto mb-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    (window.location.href =
                      "https://mvx-group.mycartpanda.com/checkout")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
