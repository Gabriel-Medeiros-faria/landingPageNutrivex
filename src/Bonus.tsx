import mokup1 from "./assets/mockup 01.png";
import mokup2 from "./assets/mockup 02.png";
import mokup3 from "./assets/mockup 03.png";
import mokup4 from "./assets/mockup 04.png";
import mokup5 from "./assets/mockup 05.png";
import mokup6 from "./assets/mockup 06.png";
import mokup7 from "./assets/BONUSPRESENT 07.png";
import combos from "./assets/comboss (5).png";

export default function Bonus() {
  return (
    <>
      <div className="py-7 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 from-green-50">
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
                  title: "20 Façons d’Accélérer Votre Métabolisme à la Maison",
                  img: mokup4,
                },
                {
                  title: "Le Protocole Zéro Rétention",
                  img: mokup5,
                },
                {
                  title: "9 Recettes pour Contrôler le Diabète et la Glycémie",
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
              <div className="bg-gradient-to-r from-black via-green-500 to-black rounded-xl px-6 py-2 md:py-4 shadow-md text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
  VALEUR TOTALE DES BONUS:{" "}
  <span className="line-through decoration-red-500">+500 €</span>
</h3>

                <p className="text-sm md:text-base text-white ">
                  TU VAS RECEVOIR TOUT ÇA ICI, PROFILE : IL RESTE PEU DE{" "}
                  <span className="font-bold text-base md:text-lg no-underline">
                    FLACONS EN STOCK.
                  </span>
                </p>

                <img className="w-[600px] mx-auto " src={combos} />
                
                <h3 className="text-xl md:text-2xl font-bold text-white mt-5  ">
                     Choisis ton kit avec le bouton ci-dessous 
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
