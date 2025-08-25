import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatConsumidor from "@/components/chat-consumidor"
import { Shield } from "lucide-react"

export default function ConsumidorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <Shield className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Direito do Consumidor</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              O Direito do Consumidor protege os direitos de quem adquire produtos ou serviços, garantindo relações de
              consumo justas e equilibradas. Atuamos na defesa dos seus direitos contra práticas abusivas, produtos
              defeituosos, propaganda enganosa, cobranças indevidas e demais violações ao Código de Defesa do
              Consumidor.
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
                    <span>Produtos com defeito ou vício</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Serviços mal prestados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Propaganda enganosa e abusiva</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Cobranças indevidas e abusivas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Negativação indevida</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Cancelamento de contratos</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Seus Direitos Garantidos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Como consumidor, você tem direitos garantidos por lei. Nossa equipe especializada conhece
                  profundamente o Código de Defesa do Consumidor e está preparada para defender seus interesses contra
                  empresas que desrespeitam seus direitos. Buscamos sempre a solução mais rápida e eficaz para seu caso.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Tire suas dúvidas sobre Direito do Consumidor
              </h2>
              <ChatConsumidor />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
