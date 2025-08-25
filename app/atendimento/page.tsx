import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Video, MapPin, Clock } from "lucide-react"

export default function AtendimentoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Atendimento</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oferecemos atendimento personalizado tanto online quanto presencial, adaptando-nos às suas necessidades e
              preferências para garantir o melhor suporte jurídico.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Online Service */}
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Video className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-card-foreground">Atendimento Online</h2>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  O Atendimento Online é um primeiro contato, sendo posteriormente agendada uma consulta por vídeo
                  chamada. Ideal para orientações iniciais, acompanhamento de processos e esclarecimento de dúvidas de
                  forma rápida e conveniente.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-3 text-primary" />
                    <span>Disponível 24/7 via WhatsApp</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    <span>Consultas por videoconferência agendadas</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <a href="https://wa.me/5585989025764" target="_blank" rel="noopener noreferrer">
                      WhatsApp: (85) 98902-5764
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href="https://seguro.meutypebot.com/advogado" target="_blank" rel="noopener noreferrer">
                      Atendimento Automatizado
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Presential Service */}
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-card-foreground">Atendimento Presencial</h2>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Consultas presenciais na Região Metropolitana de Fortaleza - CE. Ideal para casos complexos que
                  requerem análise detalhada de documentos e discussão aprofundada das estratégias jurídicas.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>Região Metropolitana de Fortaleza - CE</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-3 text-primary" />
                    <span>Agendamento prévio necessário</span>
                  </div>
                </div>

                <Button asChild className="w-full">
                  <a href="https://wa.me/5585989025764" target="_blank" rel="noopener noreferrer">
                    Agendar Consulta Presencial
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Análise Inicial</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Entre em contato e nos conte o seu caso. Após uma análise inicial, retornaremos com orientações e a
              viabilidade de uma possível ação jurídica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a href="https://wa.me/5585989025764" target="_blank" rel="noopener noreferrer">
                  Iniciar Conversa no WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://seguro.meutypebot.com/advogado" target="_blank" rel="noopener noreferrer">
                  Atendimento Automatizado
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
