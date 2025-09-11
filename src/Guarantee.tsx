import React, { useState, useEffect } from "react";

import selo from "./assets/selo.jpeg";

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

type GuaranteeProps = {
  flacons: number;
  setFlacons: React.Dispatch<React.SetStateAction<number>>;
};

export default function Guarantee({ flacons, setFlacons }: GuaranteeProps) {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (flacons > 0) {
      const interval = setInterval(() => {
        setFlacons((prev) => prev - 1);
      }, 10000); // A cada 1 segundo diminui 1
      return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }
  }, [flacons]);
  return (
    <>
      <section className="mb-3 py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col items-center">
          {/* Selo no topo */}
          <div className="mb-8">
            <img
              src={selo}
              alt="Sceau Garantie 180 Jours"
              className=" h-60 object-contain mx-auto"
            />
          </div>

          <div className="w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4 text-center md:text-left">
              PROTECTION ABSOLUE DE 180 JOURS – NOUS ALLONS GARANTIR VOS
              RÉSULTATS !
            </h3>

            {/* Texto com a seta no final */}
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              <span className="align-middle">
                {showMore ? fullText : shortText}
              </span>

              {/* Botão inline com hit-area maior + fallback para touch */}
              <button
                type="button"
                aria-expanded={showMore}
                onClick={() => setShowMore((s) => !s)}
                onTouchStart={(e) => {
                  // evita que o toque gere comportamento indesejado (scroll brusco)
                  e.preventDefault();
                  setShowMore((s) => !s);
                }}
                className="ml-2 inline-flex items-center justify-center w-9 h-9 p-1 rounded focus:outline-none"
                style={{ touchAction: "manipulation" }}
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
    </>
  );
}
