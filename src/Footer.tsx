export default function Footer(){
    return(
        <>
        <footer className="bg-green-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <a
                    href="#"
                    className="hover:text-green-300 transition-colors"
                  >
                    Supporto
                  </a>
                  <a
                    href="#"
                    className="hover:text-green-300 transition-colors"
                  >
                    Termini
                  </a>
                  <a
                    href="#"
                    className="hover:text-green-300 transition-colors"
                  >
                    Privacy
                  </a>
                </div>
              </div>

              <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm text-green-200 leading-relaxed">
                  <strong>Avviso importante:</strong> Le informazioni presentate
                  non sostituiscono il controllo medico. In caso di gravidanza,
                  allattamento, uso di farmaci o condizioni mediche, consulta il
                  tuo medico prima di utilizzare questo prodotto.
                </p>
              </div>
            </div>
          </footer>
        </>
    )
}