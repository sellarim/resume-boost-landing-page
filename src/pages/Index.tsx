import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, CheckCircle2, FileText, FileSearch2, Rocket, BookText, Users2, Star } from "lucide-react";

// Depoimentos mockados:
const testimonials = [
  {
    name: "João Silva",
    text: "Consegui entrevista em uma big tech depois de seguir o Guia e usar a IA. Meu currículo nunca foi tão notado! Recomendo demais.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Amanda Costa",
    text: "A revisão automática apontou erros que eu nunca tinha percebido. Já indiquei para todos do meu grupo de dados.",
    img: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

const faqs = [
  {
    q: "Como a IA funciona?",
    a: "Você envia seu currículo (em PDF ou Word) e a IA avalia cada seção com feedback instantâneo, indicando pontos de melhoria e acertos.",
  },
  {
    q: "É só para área de dados?",
    a: "O foco é em dados e tecnologia, mas o método serve também para perfis técnicos em geral (programação, engenharia, etc).",
  },
  {
    q: "Preciso ter experiência prévia?",
    a: "Não! O Guia cobre desde iniciantes até profissionais experientes, com exemplos e dicas adaptáveis ao seu momento.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia - devolvemos seu dinheiro sem perguntas.",
  },
];

const Index = () => {
  // FAQ state.
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Estilo dos botões principais.
  const ctaButton = "px-8 py-3 rounded-[0.5rem] font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none";
  const ctaPrimary = "bg-[#0a2540] hover:bg-[#163767]";
  const ctaHighlightPurple = "bg-[#8f5cff] hover:bg-[#7c4eda]";
  const ctaHighlightGreen = "bg-[#22c55e] hover:bg-[#16a34a]";

  return (
    <div className="bg-[#f8fafd] min-h-screen w-full flex flex-col items-center">
      {/* HERO / HEADLINE */}
      <section className="w-full bg-[#0a2540] text-white pt-12 pb-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-fade-in mb-4">
            Seu currículo pode estar sendo ignorado – <br className="hidden md:inline" /> veja os 3 erros que estão te eliminando antes mesmo da entrevista
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 mt-2 animate-fade-in text-[#d9e6fb]">
            Combo exclusivo: o guia definitivo + uma IA que corrige seu currículo em minutos e revela o que está te afastando dos recrutadores
          </p>
          <div className="flex justify-center gap-4 animate-scale-in">
            <a
              href="#cta"
              className={ctaButton + " " + ctaHighlightPurple + " text-lg"}
              style={{ boxShadow: "0 4px 32px 0 rgba(143,92,255,0.25)" }}
            >
              Acessar agora com desconto limitado
            </a>
          </div>
          <div className="mt-10 flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-yellow-400" />
              <span className="text-white/80 text-base font-medium">+250 currículos corrigidos</span>
            </div>
            <div className="flex items-center gap-2">
              <Users2 size={20} className="text-green-400" />
              <span className="text-white/80 text-base font-medium">+170 profissionais no grupo</span>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="w-full bg-white py-14 px-4 border-b border-[#e4eaff]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a2540] text-center mb-8">O que você vai receber?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 bg-[#f3f6fa] rounded-xl shadow group transition-all hover:scale-[1.03]">
              <BookText size={38} className="mb-2 text-[#8f5cff]"/>
              <p className="text-lg font-medium text-[#0a2540]">Um eBook direto ao ponto com todos os erros e acertos dos currículos modernos</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-[#f3f6fa] rounded-xl shadow group transition-all hover:scale-[1.03]">
              <MessageCircle size={38} className="mb-2 text-[#22c55e]" />
              <p className="text-lg font-medium text-[#0a2540]">Acesso à IA que corrige seu currículo e responde dúvidas sobre cada seção</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-[#f3f6fa] rounded-xl shadow group transition-all hover:scale-[1.03]">
              <FileSearch2 size={38} className="mb-2 text-[#0a2540]"/>
              <p className="text-lg font-medium text-[#0a2540]">Exemplos de currículos validados por quem já está empregado</p>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3 p-5 bg-[#f3f6fa] rounded-lg">
              <Rocket size={28} className="text-[#8f5cff]" />
              <span className="text-base font-medium text-[#0a2540]">Dicas para LinkedIn, entrevista e posicionamento</span>
            </div>
            <div className="flex items-center gap-3 p-5 bg-[#f3f6fa] rounded-lg">
              <Users2 size={28} className="text-[#22c55e]" />
              <span className="text-base font-medium text-[#0a2540]">Grupo no WhatsApp com dúvidas respondidas semanalmente</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA DE ACESSO REPETIDO */}
      <section id="cta" className="w-full flex justify-center py-10 bg-[#f5f8fd] border-b border-[#e4eaff]">
        <a
          href="https://checkout-link-exemplo.com"
          className={ctaButton + " " + ctaHighlightGreen + " text-xl"}
        >
          Quero corrigir meu currículo agora
        </a>
      </section>

      {/* PROVA SOCIAL / TESTEMUNHOS */}
      <section className="w-full bg-white pb-16 pt-10 px-4 border-b border-[#e4eaff]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a2540] text-center">Transformou carreiras reais</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {testimonials.map((dep, idx) => (
              <div key={idx} className="bg-[#f3f6fa] rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-4 hover:scale-105 transition">
                <img src={dep.img} alt="" className="w-16 h-16 rounded-full object-cover border-2 border-[#8f5cff]" />
                <div className="flex-1">
                  <p className="text-[#0a2540] text-base font-medium mb-2">"{dep.text}"</p>
                  <span className="text-[#8f5cff] font-semibold">{dep.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-10">
            <img src="/photo-1498050108023-c5249f4df085" alt="Print currículo corrigido" className="w-[140px] h-[105px] object-cover rounded-lg shadow border border-[#e4eaff]" />
            <img src="/photo-1461749280684-dccba630e2f6" alt="Print depoimento" className="w-[140px] h-[105px] object-cover rounded-lg shadow border border-[#e4eaff]" />
            <img src="/photo-1488590528505-98d2b5aba04b" alt="Print LinkedIn" className="w-[140px] h-[105px] object-cover rounded-lg shadow border border-[#e4eaff]" />
          </div>
          <p className="text-center text-[#0a2540] mt-8 text-base">
            <CheckCircle2 className="inline mb-1 text-[#22c55e]" size={22} />
            Mais de <b>250 currículos corrigidos</b> e feedbacks verificados.
          </p>
        </div>
      </section>

      {/* ANTES E DEPOIS */}
      <section className="w-full bg-[#f3f6fa] py-16 px-4 border-b border-[#e4eaff]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a2540] text-center mb-10">Antes e Depois: Veja a diferença</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* Antes */}
            <div className="flex-1 bg-white rounded-xl p-6 shadow text-center border border-[#e6eaff]">
              <span className="inline-block px-3 py-1 bg-[#e6eaff] text-[#6b7791] font-bold mb-3 rounded">ANTES</span>
              <img src="/photo-1486312338219-ce68d2c6f44d" alt="Currículo Antes" className="w-full max-w-xs h-48 object-cover rounded mt-1 mb-5 mx-auto" />
              <ul className="text-sm text-[#6b7791] text-left list-disc px-4">
                <li>Seções confusas e sem destaque</li>
                <li>Erros de português despercebidos</li>
                <li>Falta de palavras-chave do mercado</li>
              </ul>
            </div>
            {/* Depois */}
            <div className="flex-1 bg-[#0a2540] text-white rounded-xl p-6 shadow text-center border border-[#8f5cff]">
              <span className="inline-block px-3 py-1 bg-[#8f5cff] text-white font-bold mb-3 rounded">DEPOIS</span>
              <img src="/photo-1649972904349-6e44c42644a7" alt="Currículo Depois" className="w-full max-w-xs h-48 object-cover rounded mt-1 mb-5 mx-auto" />
              <ul className="text-sm text-[#d9e6fb] text-left list-disc px-4">
                <li>Layout valorizado e leitura escaneável</li>
                <li>Resumo otimizado, sem enrolação</li>
                <li>Linguagem alinhada para vagas de dados e tech</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-white py-14 px-4 border-b border-[#e4eaff]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a2540] text-center mb-8">Perguntas frequentes</h2>
          <div className="divide-y border-t border-b">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full flex justify-between items-center p-5 text-[#0a2540] font-medium text-left text-lg hover:bg-[#f3f6fa] transition"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 bg-[#fbfbfe] px-5 ${
                    openFaq === i ? "max-h-40 py-3" : "max-h-0 py-0"
                  }`}
                >
                  <p className="text-[#474f60]">{openFaq === i && faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="w-full py-12 bg-[#0a2540] text-white px-4 border-b border-[#191c23]">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="text-[#22c55e]" size={28} />
            <span className="text-2xl font-bold">Garantia incondicional</span>
          </div>
          <p className="text-lg mt-1 mb-3">
            Satisfação ou reembolso em 7 dias. Sem enrolação, sem letra miúda.
          </p>
        </div>
      </section>

      {/* CTA FINAL COM URGÊNCIA */}
      <section className="w-full py-14 px-4 bg-gradient-to-r from-[#0a2540] to-[#3b2d84] flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 animate-fade-in">
          Essa é sua chance de sair na frente antes que as melhores vagas sejam preenchidas.
        </h2>
        <p className="text-lg text-[#d9e6fb] text-center mb-8 max-w-xl animate-fade-in">Não perca tempo com currículos que te sabotam: acesse o Guia Definitivo do Currículo agora e saia na frente no mercado tech.</p>
        <a
          href="https://checkout-link-exemplo.com"
          className={ctaButton + " " + ctaHighlightPurple + " text-xl"}
        >
          Acessar com desconto por tempo limitado
        </a>
      </section>

      {/* Rodapé Simples */}
      <footer className="w-full bg-[#0a2540] text-[#d9e6fb] py-6 text-center text-sm">
        &copy; 2025 Guia Definitivo do Currículo. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Index;
