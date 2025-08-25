import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatPrevidenciario from "@/components/chat-previdenciario"
import { FileText } from "lucide-react"
import Image from "next/image"

export default function PrevidenciarioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <FileText className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Direito Previdenciário</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              O Direito Previdenciário trata dos benefícios e direitos relacionados à Previdência Social. Com
              pós-graduação específica em RPPS e Direito Previdenciário Militar, oferecemos assessoria completa para
              aposentadorias, pensões, auxílios e demais benefícios do INSS, sempre buscando garantir que você receba o
              que tem direito.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center mb-16">
            <Image
              src="/images/previdenciario-team.png"
              alt="Equipe diversa representando beneficiários da previdência"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Principais Serviços</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Aposentadoria por idade e tempo de contribuição</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Aposentadoria especial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Auxílio-doença e aposentadoria por invalidez</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Pensão por morte</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>BPC/LOAS (Benefício Assistencial)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Revisão de benefícios</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Especialização Comprovada</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Com pós-graduação específica em RPPS e Direito Previdenciário Militar, possuímos conhecimento
                  aprofundado das regras previdenciárias. Nossa experiência garante a análise precisa do seu caso e a
                  estratégia mais adequada para conquistar ou revisar seu benefício previdenciário.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Tire suas dúvidas sobre Direito Previdenciário
              </h2>
              <ChatPrevidenciario />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
