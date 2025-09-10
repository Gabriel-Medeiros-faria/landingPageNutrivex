import fruta1 from "./assets/How-long-does-it-take-berberine-to-work-768x512.webp";
import fruta2 from "./assets/Guarana_brule_graisse_amoseeds_specialiste_des_super_aliments_bio_7026c0da-529b-456a-8209-df0d91dfcb5b.jpg";
import fruta3 from "./assets/kwercetyna.webp";
import fruta4 from "./assets/52.jpg";

export default function Ingredients(){
    return(
        <>
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
        </>
    )
}