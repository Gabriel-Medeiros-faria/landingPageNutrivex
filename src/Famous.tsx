import famosa1 from "./assets/famosa1.png";
import famosa2 from "./assets/famosa2.png";
import famosa4 from "./assets/famosa4.png";
import famosa5 from "./assets/famosa5.png";
import famosa6 from "./assets/famosa1.jpeg";
import famosa7 from "./assets/famosa7.png";
import famosa8 from "./assets/famosa8.png";
import famosa9 from "./assets/famosa9.png";
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
                {[famosa1, famosa2, famosa4, famosa5, famosa6,famosa7,famosa8,famosa9].map((img, index) => (
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