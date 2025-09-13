import oneBottle from "./assets/1 flacon - sem fundo.png";
import threeBottles from "./assets/3 flacons - sem fundo.png";
import sixBottles from "./assets/6 flacons - sem fundo.png";
import "./index.css";
import visa from "./assets/visa.svg";
import master from "./assets/master.png";
import amex from "./assets/amex.svg";
import discover from "./assets/discover.png";
export default function Product() {
  return (
    <>
      <section id="offers" className="py-12 bg-white">
        <div className="container mx-auto px-5">
          {/* Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 max-w-6xl mx-auto items-stretch">

            {/* BASIQUE */}
            <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-all flex flex-col h-full text-center">
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                  BASIQUE
                </span>
              </div>

              {/* Conteúdo */}
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
                  className="h-[200px] object-contain mb-8 mt-5"
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

              {/* Rodapé */}
              <div className="mt-auto">
                <a
                  href="https://mvx-group.mycartpanda.com/checkout/193835329:1"
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
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-extrabold tracking-wide whitespace-nowrap shadow-md">
                  LE PLUS POPULAIRE
                </span>
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col items-center flex-1">
                <h3 className="text-2xl font-extrabold text-green-800 mt-6">
                  3 FLACONS + 3 GRATUITS
                </h3>
                <p className="text-sm font-bold text-black-800 mb-3">
                  CURE 180 JOURS
                </p>

                <div className="relative w-[320px] pb-[10rem]">
                  <img
                    src={sixBottles}
                    alt="Nutrivex - 6 bouteilles"
                    className="h-[340px] pl-7 object-contain"
                  />
                  <div
                    className="absolute pt-3 left-0 right-0"
                    style={{ top: "260px" }}
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

              {/* Rodapé */}
              <div className="mt-auto">
                <a
                  href="https://mvx-group.mycartpanda.com/checkout/193835332:1"
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
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                  PACK
                </span>
              </div>

              {/* Conteúdo */}
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
                  className="h-[220px] object-contain mb-4"
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

              {/* Rodapé */}
              <div className="mt-auto">
                <a
                  href="https://mvx-group.mycartpanda.com/checkout/193835331:1"
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
    </>
  );
}
