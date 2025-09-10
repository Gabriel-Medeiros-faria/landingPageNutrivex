import famosa1 from "./assets/famosa1.jpeg";
import famosa2 from "./assets/famosa2.jpeg";
import famosa3 from "./assets/famosa3.jpeg";
import famosa4 from "./assets/famosa4.jpeg";
import famosa5 from "./assets/famosa5.jpeg";
import famosa6 from "./assets/famosa6.jpeg";

export default function Famous(){
    return(
        <>
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
                {[famosa1, famosa2, famosa3, famosa4, famosa5, famosa6].map((img, index) => (
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
        </>
    )
}