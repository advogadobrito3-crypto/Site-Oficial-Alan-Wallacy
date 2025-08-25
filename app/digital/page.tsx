import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatDigital from "@/components/chat-digital"
import { Smartphone } from "lucide-react"

export default function DigitalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <Smartphone className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Direito Digital</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              O Direito Digital é uma área em constante evolução que trata das questões jurídicas relacionadas ao mundo
              virtual. Atuamos na proteção dos seus direitos no ambiente digital, incluindo crimes cibernéticos,
              proteção de dados pessoais, LGPD, contratos eletrônicos e demais questões que envolvem tecnologia e
              internet.
            </p>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Principais Serviços</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Crimes cibernéticos e fraudes online</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Proteção de dados pessoais (LGPD)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Vazamento de dados e privacidade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Difamação e injúria em redes sociais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Contratos eletrônicos e e-commerce</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Direito ao esquecimento</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Proteção no Mundo Digital</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Com o avanço da tecnologia, surgem novos desafios jurídicos no ambiente digital. Nossa expertise em
                  Direito Digital garante que você esteja protegido contra crimes virtuais, violações de privacidade e
                  demais questões que podem afetar sua vida pessoal e profissional no mundo online.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Tire suas dúvidas sobre Direito Digital
              </h2>
              <ChatDigital />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
