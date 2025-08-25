import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatFamilia from "@/components/chat-familia"
import { Users } from "lucide-react"
import Image from "next/image"

export default function FamiliaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <Users className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Direito de Família</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              O Direito de Família trata das relações familiares e seus aspectos jurídicos, incluindo casamento, união
              estável, divórcio, guarda de filhos, pensão alimentícia, adoção e inventário. Oferecemos suporte jurídico
              completo em momentos delicados, sempre priorizando o bem-estar da família e especialmente das crianças
              envolvidas.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center mb-16">
            <Image
              src="/images/familia-happy.png"
              alt="Família feliz"
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
                    <span>Divórcio consensual e litigioso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Guarda compartilhada e unilateral</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Pensão alimentícia e revisional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Reconhecimento de união estável</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Adoção nacional e internacional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Inventário e partilha de bens</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Atendimento Humanizado</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Entendemos que questões familiares envolvem aspectos emocionais delicados. Por isso, oferecemos um
                  atendimento humanizado, respeitoso e sigiloso, buscando sempre soluções que preservem os vínculos
                  familiares e o bem-estar de todos os envolvidos, especialmente das crianças.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Tire suas dúvidas sobre Direito de Família
              </h2>
              <ChatFamilia />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
