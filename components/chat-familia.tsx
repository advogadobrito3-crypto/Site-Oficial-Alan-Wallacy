"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// FAQ exclusivo de Direito de Família
const faqData = [
  { q: "O que é casamento civil?", a: "É a união oficial entre duas pessoas reconhecida pela lei." },
  { q: "O que é união estável?", a: "É a convivência duradoura de duas pessoas como se fossem casadas." },
  { q: "Como funciona o divórcio?", a: "É a separação oficial que encerra o casamento civil." },
  { q: "Quem fica com a guarda dos filhos?", a: "Normalmente é compartilhada entre pai e mãe." },
  { q: "O que é pensão alimentícia?", a: "É o valor pago para ajudar no sustento dos filhos ou ex-cônjuge." },
  {
    q: "Até quando o filho recebe pensão?",
    a: "Normalmente até os 18 anos, mas pode se estender se estiver estudando.",
  },
  { q: "Como funciona a adoção?", a: "É o processo legal para receber uma criança como filho." },
  { q: "Avós podem pedir visita aos netos?", a: "Sim, os avós têm direito de convivência com os netos." },
  { q: "O que é guarda compartilhada?", a: "É quando pai e mãe dividem responsabilidades pelos filhos." },
  { q: "O que é regime de bens?", a: "É a regra de como os bens do casal serão administrados." },
  { q: "Posso mudar meu nome depois do casamento?", a: "Sim, é possível incluir ou retirar o sobrenome." },
  { q: "O que é tutela?", a: "É a responsabilidade de cuidar de menores quando os pais não podem." },
  { q: "O que é curatela?", a: "É quando alguém assume a responsabilidade por pessoa incapaz." },
  { q: "Como funciona o inventário?", a: "É o processo de dividir os bens de quem faleceu entre os herdeiros." },
  { q: "Posso me casar novamente após o divórcio?", a: "Sim, depois que o divórcio estiver concluído." },
]

export default function ChatFamilia() {
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
                Direito de Família - Selecione uma dúvida:
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
