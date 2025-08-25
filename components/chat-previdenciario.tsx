"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// FAQ exclusivo de Direito Previdenciário
const faqData = [
  { q: "O que é INSS?", a: "É o órgão que cuida da aposentadoria e benefícios no Brasil." },
  { q: "Quem tem direito à aposentadoria?", a: "Trabalhadores que contribuem para o INSS." },
  {
    q: "Qual a diferença entre aposentadoria por idade e por tempo de contribuição?",
    a: "Idade exige idade mínima, e tempo exige anos de contribuição.",
  },
  { q: "O que é pensão por morte?", a: "É o benefício pago aos dependentes de quem faleceu." },
  { q: "O que é auxílio-doença?", a: "É o benefício para quem fica temporariamente incapaz de trabalhar." },
  { q: "O que é salário-maternidade?", a: "É o pagamento feito às mães durante o período de licença." },
  { q: "O que é BPC/LOAS?", a: "É o benefício assistencial pago a idosos e pessoas com deficiência de baixa renda." },
  { q: "Autônomo pode se aposentar?", a: "Sim, desde que contribua para o INSS." },
  { q: "O que é aposentadoria especial?", a: "É para quem trabalhou em atividades insalubres ou perigosas." },
  { q: "O que é carência?", a: "É o número mínimo de contribuições exigidas para ter direito a benefícios." },
  {
    q: "Quem não contribuiu tem direito a benefícios?",
    a: "Em alguns casos, pode ter direito a benefícios assistenciais.",
  },
  { q: "Posso contribuir como MEI?", a: "Sim, o MEI paga contribuição reduzida e tem direito a benefícios." },
  { q: "Como consultar meus pagamentos no INSS?", a: "No aplicativo ou site Meu INSS." },
  { q: "O que é revisão da aposentadoria?", a: "É quando o benefício é reavaliado para corrigir valores." },
  { q: "Posso acumular aposentadoria e pensão?", a: "Em alguns casos sim, mas pode haver limitações de valores." },
]

export default function ChatPrevidenciario() {
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
                Direito Previdenciário - Selecione uma dúvida:
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
