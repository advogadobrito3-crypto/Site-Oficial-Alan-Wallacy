import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatCivil from "@/components/chat-civil"
import { Scale } from "lucide-react"

export default function CivilPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <Scale className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Direito Civil</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              O Direito Civil é o ramo do direito que regula as relações entre particulares, abrangendo questões como
              contratos, responsabilidade civil, direitos reais, família e sucessões. Nossa expertise inclui a resolução
              de conflitos contratuais, ações de usucapião, questões de propriedade, indenizações por danos morais e
              materiais, e demais questões que envolvem direitos e obrigações entre pessoas físicas e jurídicas.
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
                    <span>Elaboração e revisão de contratos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Ações de responsabilidade civil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Usucapião urbano e rural</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Questões de propriedade e posse</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Indenizações por danos morais e materiais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Questões condominiais</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Por que escolher nossos serviços?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Com ampla experiência em Direito Civil, oferecemos atendimento personalizado e soluções jurídicas
                  eficazes. Nossa abordagem combina conhecimento técnico aprofundado com estratégias práticas para
                  resolver seus conflitos de forma rápida e eficiente, sempre priorizando seus interesses e direitos.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Tire suas dúvidas sobre Direito Civil
              </h2>
              <ChatCivil />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
