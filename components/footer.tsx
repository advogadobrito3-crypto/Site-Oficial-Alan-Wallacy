import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Scale } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-start mb-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Dr. Alan Wallacy - Advogado"
              width={280}
              height={63}
              className="h-14 w-auto brightness-0 invert"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Scale className="w-5 h-5" />
                <span>(85) 98902-5764</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>awallacy@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Região Metropolitana de Fortaleza - CE</span>
              </div>
            </div>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Áreas de Atuação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/civil" className="hover:text-secondary transition-colors">
                  Direito Civil
                </Link>
              </li>
              <li>
                <Link href="/familia" className="hover:text-secondary transition-colors">
                  Direito de Família
                </Link>
              </li>
              <li>
                <Link href="/consumidor" className="hover:text-secondary transition-colors">
                  Direito do Consumidor
                </Link>
              </li>
              <li>
                <Link href="/digital" className="hover:text-secondary transition-colors">
                  Direito Digital
                </Link>
              </li>
              <li>
                <Link href="/previdenciario" className="hover:text-secondary transition-colors">
                  Direito Previdenciário
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Informações Importantes</h3>
            <p className="text-sm leading-relaxed mb-3">
              <strong>Importante:</strong> A análise inicial do caso serve para avaliar a admissibilidade e a
              viabilidade de uma ação judicial.
            </p>
            <p className="text-sm">
              <strong>OAB/CE 46083</strong> -
              <a
                href="https://drive.google.com/file/d/105B-IeCVruGtyEQje8UmziW6vqbzmc-j/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors ml-1"
              >
                Registro Profissional
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-6 text-center text-sm">
          <p>© 2025 Alan Wallacy Alves de Brito Souza – Advogado | OAB/CE 46083. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
