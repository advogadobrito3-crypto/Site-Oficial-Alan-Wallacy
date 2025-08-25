import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, Users, Shield, Smartphone, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const areas = [
    {
      title: "Direito Civil",
      description: "Contratos, responsabilidade civil, usucapião, propriedade e demais questões civis.",
      icon: Scale,
      href: "/civil",
      color: "text-blue-600",
      image: "/images/professional-team.png", // usando imagem B2 (D4.png) para Civil
    },
    {
      title: "Direito de Família",
      description: "Divórcio, guarda, pensão alimentícia, adoção e questões familiares.",
      icon: Users,
      href: "/familia",
      color: "text-green-600",
      image: "/images/familia-happy.png",
    },
    {
      title: "Direito do Consumidor",
      description: "Defesa dos direitos do consumidor, produtos defeituosos e relações de consumo.",
      icon: Shield,
      href: "/consumidor",
      color: "text-purple-600",
      image: "/images/handshake-legal.png", // usando imagem C3 para Consumidor
    },
    {
      title: "Direito Digital",
      description: "Crimes cibernéticos, proteção de dados, LGPD e questões digitais.",
      icon: Smartphone,
      href: "/digital",
      color: "text-cyan-600",
      image: "/images/digital-security.png", // usando imagem C4 para Digital
    },
    {
      title: "Direito Previdenciário",
      description: "Aposentadorias, benefícios do INSS, revisões e questões previdenciárias.",
      icon: FileText,
      href: "/previdenciario",
      color: "text-orange-600",
      image: "/images/previdenciario-team.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                ALAN WALLACY ALVES DE BRITO SOUZA – ADVOGADO OAB/CE 46.083
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">Escritório de Advocacia</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Atendimento jurídico estratégico, pautado na ética, no profissionalismo e na busca por soluções seguras
                e eficientes para cada cliente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a href="https://wa.me/5585989025764" target="_blank" rel="noopener noreferrer">
                    Consulta Inicial
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/sobre">Conheça o Advogado</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/justice-scales.png"
                alt="Escritório de Advocacia - Balança da Justiça"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Áreas de Atuação</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos serviços jurídicos especializados em diversas áreas do direito, com atendimento personalizado e
              soluções eficazes para cada caso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-border overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={area.image || "/placeholder.svg"}
                        alt={area.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg bg-muted mr-4`}>
                          <IconComponent className={`w-6 h-6 ${area.color}`} />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground">{area.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{area.description}</p>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      >
                        <Link href={area.href}>Saiba Mais</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Como Podemos Ajudar Você?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            <strong>Análise Inicial do Caso:</strong> Entre em contato e nos conte o seu caso. Após uma análise,
            retornaremos com orientações e a viabilidade de uma possível ação jurídica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="https://wa.me/5585989025764" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <a href="https://seguro.meutypebot.com/advogado" target="_blank" rel="noopener noreferrer">
                Atendimento Online
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
