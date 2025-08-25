"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// FAQ exclusivo de Direito do Consumidor (50 perguntas e respostas)
const faqData = [
  { q: "O que é o Código de Defesa do Consumidor?", a: "É a lei que protege os direitos dos consumidores." },
  {
    q: "O que fazer se um produto vier com defeito?",
    a: "Você pode pedir a troca, o conserto ou o dinheiro de volta.",
  },
  {
    q: "Qual o prazo para reclamar de produtos com defeito?",
    a: "30 dias para produtos não duráveis e 90 dias para duráveis.",
  },
  { q: "E se a loja não quiser resolver o problema?", a: "Você pode procurar o Procon ou a Justiça." },
  { q: "Tenho direito a arrependimento em compras online?", a: "Sim, em até 7 dias após o recebimento do produto." },
  { q: "O que é propaganda enganosa?", a: "É quando a empresa anuncia algo diferente do que realmente oferece." },
  { q: "O que é venda casada?", a: "É quando o consumidor é obrigado a comprar algo junto sem querer." },
  { q: "Posso cancelar serviços como internet e TV?", a: "Sim, você pode cancelar a qualquer momento." },
  { q: "O que fazer em caso de cobrança indevida?", a: "Você pode exigir a devolução em dobro do valor pago." },
  { q: "E se a entrega atrasar?", a: "Você pode cancelar a compra ou exigir cumprimento da entrega." },
  { q: "O que são juros abusivos?", a: "São cobranças de juros muito acima do que é permitido pela lei." },
  { q: "Tenho direito a garantia?", a: "Sim, todo produto novo tem garantia legal de 90 dias." },
  { q: "E se perder a nota fiscal?", a: "Você ainda tem direito, pode apresentar outros comprovantes da compra." },
  { q: "O que é recall?", a: "É quando a empresa chama os consumidores para corrigir defeitos do produto." },
  { q: "Posso ser cobrado por dívida já paga?", a: "Não, e você pode exigir correção e indenização." },
]

export default function ChatConsumidor() {
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
                Direito do Consumidor - Selecione uma dúvida:
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
