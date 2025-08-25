"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// FAQ exclusivo de Direito Civil
const faqData = [
  { q: "O que é responsabilidade civil?", a: "É quando alguém causa um dano a outra pessoa e precisa indenizar." },
  { q: "O que é contrato?", a: "É um acordo entre pessoas que gera direitos e deveres." },
  { q: "O que é usucapião?", a: "É quando alguém adquire a propriedade de um bem por usá-lo por muito tempo." },
  { q: "O que são bens móveis?", a: "São objetos que podem ser transportados, como carros e móveis." },
  { q: "O que são bens imóveis?", a: "São terrenos, casas e apartamentos, que não podem ser movidos." },
  { q: "O que é posse?", a: "É quando a pessoa usa e controla um bem, mesmo sem ser dona." },
  { q: "O que é propriedade?", a: "É o direito legal de ser dono de um bem." },
  { q: "O que é condomínio?", a: "É quando várias pessoas dividem a propriedade de um imóvel." },
  { q: "O que é herança?", a: "É o conjunto de bens deixados por uma pessoa que faleceu." },
  { q: "O que é testamento?", a: "É um documento em que alguém decide para quem deixar seus bens." },
  { q: "O que é união estável?", a: "É uma convivência duradoura entre duas pessoas com intenção de formar família." },
  { q: "O que é regime de bens?", a: "São regras que definem como os bens do casal serão administrados." },
  { q: "O que é fiança?", a: "É quando alguém se responsabiliza por pagar a dívida de outra pessoa se ela não pagar." },
  { q: "O que é procuração?", a: "É um documento que autoriza alguém a agir em nome de outra pessoa." },
  { q: "O que é nulidade de contrato?", a: "É quando o contrato não tem validade legal por algum erro grave." },
]

export default function ChatCivil() {
  const [step, setStep] = useState("questions")
  const [answer, setAnswer] = useState(null)

  const handleQuestionClick = (q, a) => {
    setAnswer({ q, a })
    setStep("answer")
  }

  const handleBackToQuestions = () => {
    setStep("questions")
    setAnswer(null)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="shadow-lg border-border bg-card">
        <CardContent className="p-6">
          {step === "questions" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center mb-6 text-card-foreground">
                Direito Civil - Selecione uma dúvida:
              </h3>
              <div className="grid gap-3 max-h-96 overflow-y-auto">
                {faqData.map((item, idx) => (
                  <Button
                    key={idx}
                    onClick={() => handleQuestionClick(item.q, item.a)}
                    variant="outline"
                    className="text-left justify-start h-auto p-4 whitespace-normal"
                  >
                    {item.q}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {step === "answer" && answer && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-card-foreground">❓ {answer.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{answer.a}</p>

              <div className="space-y-3">
                <Button onClick={handleBackToQuestions} variant="outline" className="w-full bg-transparent">
                  🔙 Voltar às perguntas
                </Button>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <a href="https://wa.me/5585989025764" target="_blank" rel="noopener noreferrer">
                    💬 Falar com um advogado
                  </a>
                </Button>
                <Button onClick={() => setStep("questions")} variant="secondary" className="w-full">
                  ✅ Finalizar atendimento
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
