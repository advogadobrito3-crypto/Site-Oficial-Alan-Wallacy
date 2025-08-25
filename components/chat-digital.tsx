"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// FAQ exclusivo de Direito Digital
const faqData = [
  { q: "O que é direito digital?", a: "É a área que trata dos direitos e deveres no mundo online." },
  {
    q: "O que fazer em caso de golpe pela internet?",
    a: "Registrar ocorrência e procurar o banco ou empresa envolvida.",
  },
  { q: "O que é vazamento de dados?", a: "É quando informações pessoais são divulgadas sem autorização." },
  { q: "Como proteger minhas senhas?", a: "Use senhas fortes e ative a autenticação em dois fatores." },
  { q: "O que é crime cibernético?", a: "São crimes cometidos pela internet, como invasões e fraudes." },
  { q: "Posso processar por ofensas em redes sociais?", a: "Sim, ofensas online podem gerar indenização." },
  { q: "O que é phishing?", a: "É um golpe em que criminosos fingem ser empresas para roubar dados." },
  { q: "O que é LGPD?", a: "É a lei que protege os dados pessoais no Brasil." },
  {
    q: "O que fazer se clonarem meu WhatsApp?",
    a: "Entre em contato com a operadora e recupere sua conta no aplicativo.",
  },
  { q: "Comprar em sites falsos tem solução?", a: "Você pode tentar reaver o dinheiro pelo banco ou Justiça." },
  { q: "O que é assinatura digital?", a: "É uma forma segura de assinar documentos pela internet." },
  { q: "Posso exigir exclusão dos meus dados?", a: "Sim, você tem direito de pedir que empresas deletem seus dados." },
  { q: "É crime compartilhar fotos íntimas sem consentimento?", a: "Sim, é crime e pode gerar prisão e indenização." },
  { q: "Como denunciar crimes online?", a: "No site da Polícia Federal ou delegacias especializadas." },
  { q: "O que é golpe do PIX?", a: "É quando criminosos enganam a vítima para transferir dinheiro via PIX." },
]

export default function ChatDigital() {
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
                Direito Digital - Selecione uma dúvida:
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
