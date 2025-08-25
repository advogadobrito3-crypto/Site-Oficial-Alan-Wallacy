import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Scale, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Sobre o Advogado</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conheça a trajetória profissional e a expertise do Dr. Alan Wallacy Alves de Brito Souza
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
            {/* Professional Info - agora ocupa 2 colunas */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Dr. Alan Wallacy Alves de Brito Souza</h2>
                <p className="text-xl text-primary font-semibold mb-6">OAB/CE 46083</p>
                <div className="mb-8">
                  <Button asChild variant="outline" className="flex items-center gap-2 bg-transparent w-fit">
                    <a
                      href="https://drive.google.com/file/d/105B-IeCVruGtyEQje8UmziW6vqbzmc-j/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verificar Registro Profissional
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Formação Acadêmica</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Bacharel em Direito</h4>
                      <p className="text-muted-foreground">Universidade Estácio de Sá</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Pós-graduação</h4>
                      <p className="text-muted-foreground">Direito Civil e Processo Civil</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Pós-graduação</h4>
                      <p className="text-muted-foreground">RPPS e Direito Previdenciário Militar</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Áreas de Especialização</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Direito Civil",
                    "Direito de Família",
                    "Direito do Consumidor",
                    "Direito Digital",
                    "Direito Previdenciário",
                  ].map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Scale className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo - agora à direita e menor */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Image
                  src="/images/dr-alan.jpeg"
                  alt="Dr. Alan Wallacy Alves de Brito Souza"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>

          {/* Professional Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-border shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Formação Sólida</h3>
                <p className="text-muted-foreground">Graduação e especializações em áreas estratégicas do direito</p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Experiência Prática</h3>
                <p className="text-muted-foreground">Atuação em múltiplas áreas do direito com foco em resultados</p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Atendimento Personalizado</h3>
                <p className="text-muted-foreground">
                  Cada caso é tratado com atenção individual e estratégia específica
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Precisa de Assessoria Jurídica?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Entre em contato para uma análise inicial do seu caso. Estou aqui para defender seus direitos e encontrar
              a melhor solução jurídica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a href="https://wa.me/5585989025764" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:awallacy@hotmail.com">Enviar E-mail</a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
