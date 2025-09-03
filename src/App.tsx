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
import selo from "./assets/ChatGPT Image 3 de set. de 2025, 20_19_35.png"

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [showMore, setShowMore] = useState(false);
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
            {/* Texto Révélé acima da div URGENT */}
            <p className="text-center text-gray-700 text-base md:text-lg font-medium mb-6 max-w-3xl mx-auto">
              <span className="font-bold text-green-700">Révélé :</span> le
              secret
              <span className="italic">
                {" "}
                presque inconnu des célébrités américaines
              </span>
              pour avoir un corps{" "}
              <span className="font-semibold text-green-800">
                jeune, sexy et enviable
              </span>{" "}
              après 40 ans.
            </p>

            <div className="bg-white border border-green-200 rounded-2xl shadow-md p-6 md:p-8 mb-8 text-center max-w-4xl mx-auto">
              {/* Badge URGENT (com animação pulse) */}
              <div className="inline-block bg-green-600 text-white text-xs md:text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase animate-pulse">
                URGENT
              </div>

              {/* Headline */}
              <h2 className="text-green-800 text-2xl md:text-3xl font-extrabold leading-snug mb-4">
                Deux actrices sont enquêtées pour avoir perdu{" "}
                <span className="text-green-600 underline">
                  36 kg en 3 semaines
                </span>
              </h2>

              {/* Subtítulo */}
              <p className="text-gray-800 text-lg md:text-xl font-semibold mb-3">
                Pourquoi les grandes industries pharmaceutiques{" "}
                <span className="underline text-green-700">NE veulent PAS</span>{" "}
                que vous découvriez cela ?!
              </p>

              {/* Corpo */}
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Le secret venu directement de la{" "}
                <strong className="text-green-700">mer de l’Himalaya</strong>,
                qui rend les célébrités américaines
                <em> minces, sexy et enviables</em> après 40 ans, a été révélé.
              </p>

              {/* Link para VSL */}
              <a
                href="#"
                className="inline-flex items-center justify-center text-green-700 font-bold hover:text-green-900 transition underline text-lg"
              >
                ▶ Regardez cette présentation ci-dessous, avant que la Big
                Pharma ne la retire.
              </a>
            </div>
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
            <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Une formule{" "}
              <span className="text-green-700">100 % naturelle</span>, produite
              avec :
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {[
                {
                  title: "Bérbérine",
                  desc: "Un fruit exotique de l’Amazonie, riche en un composant actif appelé bérbérine.",
                  extra:
                    "La bérbérine est un antioxydant extrêmement puissant, capable de réduire l’inflammation cellulaire jusqu’à 86 %.",
                  img: "https://img.freepik.com/photos-premium/baies-rouges-naturelles-exotiques-isolees-fond-blanc_118047-9727.jpg",
                },
                {
                  title: "Graine de guaraná",
                  desc: "Le guaraná est l’un des fruits les plus emblématiques du Brésil.",
                  extra:
                    "Des études confirment que c’est l’un des fruits les plus efficaces pour brûler la graisse naturellement.",
                  img: "https://img.freepik.com/fotos-premium/fruta-guarana-fundo-branco_35641-1021.jpg",
                },
                {
                  title: "Quercétine",
                  desc: "Un flavonoïde puissant trouvé dans certains fruits.",
                  extra:
                    "Limite la formation de nouvelles cellules graisseuses, régule le glucose et agit sur la satiété.",
                  img: "https://img.freepik.com/fotos-gratis/frutas-frescas-em-fundo-branco_144627-14565.jpg",
                },
                {
                  title: "Sel rose",
                  desc: "Un véritable trésor minéral contenant plus de 80 minéraux bioactifs.",
                  extra:
                    "Régule l’insuline, améliore l’absorption du glucose et stimule la production naturelle de GLP-1.",
                  img: "https://img.freepik.com/fotos-gratis/sal-rosa-himalaya-fundo-branco_123827-23865.jpg",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-green-700">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm mt-2">{item.desc}</p>
                    <p className="text-gray-600 text-xs mt-1">{item.extra}</p>
                  </div>
                </div>
              ))}
            </div>

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
                  {/* Linha verde - ajustada para parar no último bonus */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-700 hidden md:block pointer-events-none"></div>

                  <div className="space-y-8 relative z-10">
                    {[
                      "La Méthode Taille de Rêve",
                      "La Recette Secrète du Cocktail Indien",
                      "Le Secret Anti-Effet Yoyo",
                      "20 Façons d’Accélérer Votre Métabolisme à la Maison",
                      "Le Protocole Zéro Rétention",
                      "9 Recettes pour Contrôler le Diabète et la Glycémie",
                      "Un Cadeau Final et Très Spécial → Avec le droit de participer au tirage au sort de 1.000 € d’achats chez H&M",
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
                          <div className="flex flex-col gap-4">
                            <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full font-bold text-lg w-max">
                              BONUS N°{index + 1}
                            </span>
                            <h3 className="text-xl font-semibold text-gray-800">
                              {bonus}
                            </h3>
                            <p className="text-2xl font-bold text-yellow-500">
                              GRATUIT
                            </p>
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
                <span className="text-yellow-300">6 flacons</span> bénéficie
                également de la{" "}
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
