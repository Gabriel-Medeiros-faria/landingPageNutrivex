import depoimento1 from "./assets/depoimento1.jpeg"
import depoimento2 from "./assets/depoimento2.jpeg"
import depoimento3 from "./assets/depoimento3.jpeg"

export default function Testimonies(){

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
  {[
    {
      name: "Sophie, 38 ans",
      text: "Il ne restait que 3 semaines avant mon mariage et j’étais désespérée, avec peur que la robe ne m’aille plus. J’ai acheté le kit SlimVita de 6 flacons et c’était la meilleure décision : j’ai perdu 12 kg en seulement 3 semaines et j’ai pu me marier beaucoup plus mince et confiante !",
      img: depoimento1,
    },
    {
      name: "Claire, 28 ans",
      text: "J’ai utilisé SlimVita pendant seulement 1 mois et j’ai été impressionnée par les résultats. Les composants accélèrent vraiment la combustion des graisses, mon corps a complètement changé en quelques semaines.",
      img: depoimento2,
    },
    {
      name: "Amélie, 35 ans",
      text: "J’avais très honte de porter un bikini à cause de mes kilos. Avec un voyage prévu dans 2 mois, j’ai décidé d’acheter SlimVita. C’était le meilleur choix de ma vie ! J’ai réussi à perdre du poids, j’ai atteint le poids que je voulais et aujourd’hui je n’ai plus honte de porter un bikini.",
      img: depoimento3,
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-gray-100 rounded-xl shadow-md overflow-hidden flex flex-col h-full"
    >
      {/* Imagem ou placeholder */}
      {item.img ? (
        <img
          src={item.img}
          alt={`Depoimento ${i + 1}`}
          className="w-full h-60 object-cover"
        />
      ) : (
        <div className="w-full h-60 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
          Sans photo
        </div>
      )}

      {/* Texto e nome alinhados */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <p className="text-gray-700 text-sm mb-4">"{item.text}"</p>
        <span className="block text-green-700 text-sm font-semibold">
          — {item.name}
        </span>
      </div>
    </div>
  ))}
</div>

        </>
    )
}