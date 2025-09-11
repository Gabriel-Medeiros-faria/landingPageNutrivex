import caminhao from "./assets/caminhao.png";

export default function Freight(){
    return(
        <>
       <div className="mb-5 mt-8 flex justify-center">
  <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm max-w-md md:max-w-2xl">
    {/* Ícone caminhão */}
    <img className="w-20 h-10 md:w-[120px] md:h-[80px]" src={caminhao} />

    {/* Texto */}
    <div className="text-left">
      <p className="text-sm md:text-base font-normal md:font-semibold text-gray-900">
        Profitez de la{" "}
        <span className="text-green-700">LIVRAISON GRATUITE</span> sur les commandes de 3 et 6 flacons !
      </p>
      <p className="text-xs md:text-sm text-gray-600 mt-1">
        *Pour des résultats à long terme, nous recommandons l’option 6 flacons.
      </p>
    </div>
  </div>
</div>

        </>
    )
}