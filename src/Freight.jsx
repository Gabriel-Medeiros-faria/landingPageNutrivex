import caminhao from "./assets/caminhao.png";

export default function Freight(){
    return(
        <>
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
        </>
    )
}