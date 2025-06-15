import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, CheckCircle2, FileText, FileSearch2, Rocket, BookText, Users2, Star } from "lucide-react";
import antesImg from "/lovable-uploads/a42d453d-859a-4160-a9a7-7b70b0cfcc67.png";
import depoisImg from "/lovable-uploads/c8d0b988-c458-4bc1-9a9f-593ad8209b49.png";

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

const precoOriginal = "R$79,90";
const precoPromocional = "R$29,90";
const tituloPreco = "Não perca a chance de turbinar seu currículo e sua carreira!";
const vantagens = [
  "Acesso imediato ao Guia prático do Currículo com todos os segredos para se destacar",
  "Inteligência Artificial exclusiva que analisa e corrige seu currículo em minutos",
  "Exemplos validados por profissionais de dados e tech já empregados",
  "Suporte para dúvidas sobre cada seção do currículo",
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
            Guia curriculo definitivo 2.0
          </h1>
          <p className="text-lg md:text-xl font-semibold mb-2 animate-fade-in text-[#add2fd]">
            Segunda versão do guia: mais de 300 vendidos na anterior
          </p>
          <p className="text-xl md:text-2xl font-medium mb-8 mt-2 animate-fade-in text-[#d9e6fb]">
            Agora atualizado e com uma IA personalizada - use a mesma inteligencia artificial que te reprova automaticamente, ao seu favor
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
              <span className="text-white/80 text-base font-medium">+300 currículos corrigidos na versão anterior</span>
            </div>
            {/* Removido: indicador de grupo de profissionais */}
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
          <div className="mt-8 grid md:grid-cols-1 gap-6">
            <div className="flex flex-col items-center justify-center gap-3 p-5 bg-[#f3f6fa] rounded-lg text-center">
              <Rocket size={28} className="text-[#8f5cff]" />
              <span className="text-base font-medium text-[#0a2540]">
                Use a mesma IA dos recrutadores agora pra corrigir seu curriculo
              </span>
            </div>
            {/* Removido: grupo no WhatsApp */}
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

      {/* NOVA SEÇÃO: Benefícios da IA */}
      <section className="w-full bg-white pb-16 pt-10 px-4 border-b border-[#e4eaff]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a2540] text-center flex items-center gap-2 mb-3">
            <span className="text-2xl md:text-3xl">🚀</span>
            A IA que te ajuda a montar o currículo perfeito
          </h2>
          <p className="text-lg text-[#474f60] text-center max-w-2xl mb-8">
            Tenha uma inteligência artificial ao seu lado para corrigir, orientar e reescrever seu currículo com base no que o mercado realmente procura.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-7">
            {/* 1 */}
            <div className="bg-[#f3f6fa] rounded-xl shadow flex flex-col items-center gap-2 text-center p-6 border border-[#e4eaff] transition hover:scale-105">
              <span className="text-3xl mb-2">✍️</span>
              <strong className="text-[#0a2540] text-base mb-1">Reescreve seu currículo do zero</strong>
              <p className="text-[#4e5676] text-sm">
                Receba uma nova versão do seu currículo com estrutura ideal, texto polido e foco no que mais importa para os recrutadores.
              </p>
            </div>
            {/* 2 */}
            <div className="bg-[#f3f6fa] rounded-xl shadow flex flex-col items-center gap-2 text-center p-6 border border-[#e4eaff] transition hover:scale-105">
              <span className="text-3xl mb-2">❓</span>
              <strong className="text-[#0a2540] text-base mb-1">Tira dúvidas sobre cada parte</strong>
              <p className="text-[#4e5676] text-sm">
                Não sabe o que colocar em “Resumo Profissional”? A IA te explica o que escrever e como adaptar ao seu momento.
              </p>
            </div>
            {/* 3 */}
            <div className="bg-[#f3f6fa] rounded-xl shadow flex flex-col items-center gap-2 text-center p-6 border border-[#e4eaff] transition hover:scale-105">
              <span className="text-3xl mb-2">🧭</span>
              <strong className="text-[#0a2540] text-base mb-1">Te orienta onde colocar cada informação</strong>
              <p className="text-[#4e5676] text-sm">
                Entenda o que deve ir em cada seção e evite erros comuns de organização que fazem o recrutador perder interesse.
              </p>
            </div>
            {/* 4 */}
            <div className="bg-[#f3f6fa] rounded-xl shadow flex flex-col items-center gap-2 text-center p-6 border border-[#e4eaff] transition hover:scale-105">
              <span className="text-3xl mb-2">🎯</span>
              <strong className="text-[#0a2540] text-base mb-1">Entrega palavras-chave que aumentam suas chances</strong>
              <p className="text-[#4e5676] text-sm">
                A IA analisa sua área de atuação e sugere termos que aumentam sua visibilidade em sistemas de triagem automática.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANTES E DEPOIS */}
      <section className="w-full bg-[#f3f6fa] py-16 px-4 border-b border-[#e4eaff]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a2540] text-center mb-10">Antes e Depois: Veja a diferença</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Antes */}
            <div className="flex-1 bg-white rounded-xl p-6 shadow text-center border border-[#e6eaff] min-w-[280px] max-w-[370px] h-[420px] flex flex-col justify-between md:h-[420px]">
              <div>
                <span className="inline-block px-3 py-1 bg-[#e6eaff] text-[#6b7791] font-bold mb-3 rounded">ANTES</span>
                <img
                  src={antesImg}
                  alt="Exemplo de currículo com estrutura errada"
                  className="w-full max-w-xs h-40 object-contain rounded mt-2 mb-5 mx-auto"
                  style={{ background: "transparent" }}
                />
              </div>
              <ul className="text-sm text-[#6b7791] text-left list-disc px-4 flex-1 flex flex-col justify-start gap-2">
                <li>Erros de digitação e ortografia (ex: "Posttion", "Fducation")</li>
                <li>Seções mal organizadas e confusas</li>
                <li>Layout difícil de ler; texto muito colado</li>
                <li>Falta de informações relevantes e exemplos claros</li>
              </ul>
            </div>
            {/* Depois */}
            <div className="flex-1 bg-[#0a2540] text-white rounded-xl p-6 shadow text-center border border-[#8f5cff] min-w-[280px] max-w-xs h-[420px] flex flex-col justify-between md:h-[420px]">
              <div>
                <span className="inline-block px-3 py-1 bg-[#8f5cff] text-white font-bold mb-3 rounded">DEPOIS</span>
                <img
                  src={depoisImg}
                  alt="Currículo Depois"
                  className="w-full max-w-xs h-40 object-contain rounded mt-2 mb-5 mx-auto"
                  style={{ background: "transparent" }}
                />
              </div>
              <ul className="text-sm text-[#d9e6fb] text-left list-disc px-4 flex-1 flex flex-col justify-start gap-2">
                <li>Layout valorizado e leitura escaneável</li>
                <li>Resumo otimizado, sem enrolação</li>
                <li>Linguagem alinhada para vagas de dados e tech</li>
                {/* Ajuste de "invisible" removido para manter alinhamento pelo padding geral. */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SESSÃO DE PREÇO */}
      <section className="w-full flex justify-center py-6 bg-white border-b border-[#e4eaff]">
        <div className="bg-[#f8fafd] rounded-2xl shadow-lg p-7 pb-8 max-w-md w-full flex flex-col items-center border border-[#e4eaff]">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-[#0a2540]">{tituloPreco}</h3>
          <ul className="mb-6 space-y-2 text-[#0a2540] text-base">
            {vantagens.map((vant, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1">
                  <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="9" fill="#22c55e"/><path d="M6.8 9.9l1.7 1.7 2.7-3.2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span>{vant}</span>
              </li>
            ))}
          </ul>
          <div className="my-3 w-full flex flex-col items-center bg-white rounded-md py-4 border border-[#e4eaff]">
            <span className="text-[#6b7791] text-lg line-through mb-1">De: <b>{precoOriginal}</b></span>
            <span className="text-[#0a2540] mb-2">Por apenas</span>
            <span className="text-3xl font-extrabold text-[#2463eb]">{precoPromocional}</span>
            <span className="bg-[#e9f7ef] text-[#22914d] text-xs rounded font-semibold px-2 py-1 mt-1">preço promocional</span>
          </div>
          <a
            href="https://checkout-link-exemplo.com"
            className="mt-4 w-full rounded-lg bg-[#2463eb] hover:bg-[#1e4fc1] text-white font-semibold py-3 text-lg transition-colors text-center shadow"
          >
            Quero garantir meu acesso!
          </a>
        </div>
      </section>

      {/* NOVA SEÇÃO - Comunidade */}
      <section className="w-full py-14 px-4 bg-[#f3f6fa] border-b border-[#e4eaff]">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a2540] mb-3 flex items-center gap-2">
            <span className="text-2xl md:text-3xl">🤝</span>
            Uma comunidade que cresce junto com você
          </h2>
          <p className="text-lg text-[#474f60] text-center mb-3">
            Ao comprar o Guia, você também entra para um espaço colaborativo exclusivo com quem está na mesma jornada — e com acesso direto a mim, aos colegas e à IA.
          </p>
          <div className="bg-white rounded-xl shadow p-6 md:p-8 my-4 w-full text-[#0a2540]">
            <p className="mb-5 text-base text-center">
              Dentro da plataforma, você terá acesso a uma <strong>comunidade ativa</strong> onde:
            </p>
            <ul className="mb-2 flex flex-col gap-2">
              <li><b>•</b> <b>Tirar dúvidas diretamente comigo</b></li>
              <li><b>•</b> <b>Conversar com outros membros</b> que estão montando e ajustando seus currículos</li>
              <li><b>•</b> A <b>IA também está presente nos fóruns</b> para responder perguntas objetivas e te guiar em tempo real</li>
            </ul>
            <div className="bg-[#f8fafd] rounded-lg p-4 text-[#474f60] text-center mt-5 mb-2">
              <span className="block mb-2 text-base">
                💡 É como ter uma mentoria coletiva e automatizada ao seu lado — com gente real te apoiando, compartilhando feedbacks e experiências.
              </span>
              <span className="block text-sm">
                📚 Toda semana surgem novas perguntas, novos modelos e aprendizados. Você não precisa passar por essa fase sozinho.
              </span>
            </div>
            {/* Destaques Visuais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-[#eceafe] rounded-lg p-4 flex items-center gap-3">
                <span className="text-2xl">👥</span>
                <span className="text-base font-medium">Acesso imediato à comunidade exclusiva</span>
              </div>
              <div className="bg-[#e6fcf1] rounded-lg p-4 flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <span className="text-base font-medium">IA disponível nos fóruns para dúvidas técnicas</span>
              </div>
              <div className="bg-[#fef7e1] rounded-lg p-4 flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <span className="text-base font-medium">Trocas entre membros que já estão aplicando</span>
              </div>
              <div className="bg-[#e5f0fe] rounded-lg p-4 flex items-center gap-3">
                <span className="text-2xl">📈</span>
                <span className="text-base font-medium">Ambiente que evolui com as demandas do mercado</span>
              </div>
              <div className="bg-[#edf4ed] rounded-lg p-4 flex items-center gap-3 sm:col-span-2">
                <span className="text-2xl">🧠</span>
                <span className="text-base font-medium">Insights semanais e aprendizados coletivos</span>
              </div>
            </div>
          </div>
          <div className="mt-5 text-[#3b2d84] font-semibold text-center text-base flex items-center gap-2">
            O conhecimento vai além do guia — a comunidade é onde você cresce junto com quem está construindo o mesmo futuro.
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
