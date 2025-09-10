import antesdepois1 from "./assets/anteesdepois1.jpeg";
import antesdepois2 from "./assets/antesdepois2.jpeg";
import antesdepois3 from "./assets/antesdepois3.jpeg";
import antesdepois4 from "./assets/antesdepois4.jpeg";
import antesdepois5 from "./assets/antesdepois5.jpeg";
import antesdepois6 from "./assets/antesdepois6.jpeg";
import antesdepois7 from "./assets/antesdepois7.jpeg";
import antesdepois8 from "./assets/antesdepois8.jpeg";

export default function BeforeAfter() {
  return (
    <>
      <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Voyez <span className="text-green-700">COMMENT</span> le corps de ces
        femmes a changé :
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          antesdepois1,
          antesdepois2,
          antesdepois3,
          antesdepois4,
          antesdepois5,
          antesdepois6,
          antesdepois7,
          antesdepois8
        ].map((img, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-xl shadow-md overflow-hidden text-center"
          >
            <img
              src={img}
              alt={`Avant et Après ${i + 1}`}
              className="w-full h-60 object-cover"
            />
            <p className="text-gray-700 font-semibold p-2">Avant ➡ Après</p>
          </div>
        ))}
      </div>
    </>
  );
}
