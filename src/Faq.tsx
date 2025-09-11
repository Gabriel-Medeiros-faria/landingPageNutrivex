export default function FaqSection(){
    return(
        <>
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
  <summary className="flex justify-between items-center cursor-pointer px-6 py-4 text-green-800 font-semibold hover:bg-green-50 [&::-webkit-details-marker]:hidden list-none">
    <span>{item.q}</span>
    <svg
      className="w-6 h-6 text-green-600 transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0"
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
        </>
    )
}