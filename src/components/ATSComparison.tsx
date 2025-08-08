import { FC } from "react";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, ArrowRight, Sparkles } from "lucide-react";

const Badge: FC<{ tone: "good" | "bad"; children: React.ReactNode }> = ({ tone, children }) => (
  <span
    className={
      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold " +
      (tone === "good"
        ? "bg-[#e9f7ef] text-[#22914d]"
        : "bg-[#fee2e2] text-[#b91c1c]")
    }
  >
    {tone === "good" ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
    {children}
  </span>
);

const Chip: FC<{ tone?: "good" | "neutral"; children: React.ReactNode }> = ({ tone = "neutral", children }) => (
  <span
    className={
      "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium " +
      (tone === "good" ? "bg-[#e6fcf1] text-[#22914d]" : "bg-[#edf2f7] text-[#4e5676]")
    }
  >
    {children}
  </span>
);

const Block: FC<{ title: string; children: React.ReactNode; accent?: "before" | "after" }> = ({ title, children, accent = "before" }) => (
  <article className="flex-1 rounded-xl border border-[#e4eaff] bg-white p-6 shadow">
    <div className="mb-3 flex items-center justify-between">
      <span
        className={
          "inline-block rounded px-2.5 py-1 text-xs font-bold " +
          (accent === "before" ? "bg-[#e6eaff] text-[#6b7791]" : "bg-[#8f5cff] text-white")
        }
      >
        {accent === "before" ? "ANTES" : "DEPOIS"}
      </span>
      {accent === "after" && (
        <Badge tone="good">
          <Sparkles size={14} /> ATS Friendly
        </Badge>
      )}
    </div>
    <h3 className="mb-4 text-base font-semibold text-[#0a2540]">{title}</h3>
    {children}
  </article>
);

const ATSComparison: FC = () => {
  return (
    <section className="w-full bg-[#f3f6fa] py-16 px-4 border-b border-[#e4eaff]" aria-labelledby="ats-compare-title">
      <div className="mx-auto max-w-4xl">
        <h2 id="ats-compare-title" className="mb-10 text-center text-2xl md:text-3xl font-bold text-[#0a2540]">
          Antes e Depois: resultados reais focados em ATS
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* ANTES */}
          <Block title="Compatibilidade com filtros e leitura automática" accent="before">
            <div className="mb-4">
              <div className="mb-1 flex items-center justify-between text-sm text-[#6b7791]">
                <span>ATS Score</span>
                <span>42/100</span>
              </div>
              <Progress value={42} className="h-2" />
            </div>
            <ul className="flex list-disc flex-col gap-2 pl-5 text-sm text-[#6b7791]">
              <li>Formato não compatível com ATS (tabelas, ícones e imagens em excesso)</li>
              <li>Palavras-chave genéricas e desalinhadas à vaga</li>
              <li>Bullets sem métricas ou impacto claro</li>
              <li>Seções pouco escaneáveis; hierarquia confusa</li>
            </ul>
          </Block>

          {/* DEPOIS */}
          <Block title="Compatibilidade com filtros e leitura automática" accent="after">
            <div className="mb-4">
              <div className="mb-1 flex items-center justify-between text-sm text-[#d9e6fb]">
                <span>ATS Score</span>
                <span>86/100</span>
              </div>
              <Progress value={86} className="h-2" />
            </div>
            <ul className="flex list-disc flex-col gap-2 pl-5 text-sm text-[#4e5676]">
              <li>Layout limpo, seções claras e leitura escaneável</li>
              <li>Palavras-chave estratégicas alinhadas à vaga</li>
              <li>Bullets com métricas e resultados (+35% eficiência)</li>
              <li>Formato padrão, sem elementos que travam o ATS</li>
            </ul>
          </Block>
        </div>

        {/* DIFF DE BULLETS */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[#e6eaff] bg-white p-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#b91c1c]">
              <XCircle size={18} /> Exemplo fraco (antes)
            </div>
            <p className="text-sm text-[#6b7791]">"Responsável por relatórios e análises de dados"</p>
          </div>
          <div className="rounded-xl border border-[#8f5cff] bg-white p-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#22914d]">
              <CheckCircle2 size={18} /> Reescrita orientada por IA (depois)
            </div>
            <p className="text-sm text-[#0a2540]">
              "Liderei a padronização de relatórios automatizados, reduzindo o tempo de geração em 35% e melhorando a acurácia em 18% usando SQL e Python"
            </p>
          </div>
        </div>

        {/* PALAVRAS-CHAVE E MATCH */}
        <div className="mt-10 rounded-2xl border border-[#e4eaff] bg-white p-6">
          <div className="mb-4 flex flex-col items-start justify-between gap-3 md:flex-row">
            <h3 className="text-base font-semibold text-[#0a2540]">Palavras-chave e aderência à vaga</h3>
            <div className="flex items-center gap-2 text-sm text-[#4e5676]">
              <Badge tone="bad">Match com a vaga 38%</Badge>
              <ArrowRight className="text-[#6b7791]" size={16} />
              <Badge tone="good">Match com a vaga 82%</Badge>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#6b7791]">Antes</p>
              <div className="flex flex-wrap gap-2">
                <Chip>relatórios</Chip>
                <Chip>excel</Chip>
                <Chip>análises</Chip>
                <Chip>projetos</Chip>
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#6b7791]">Depois</p>
              <div className="flex flex-wrap gap-2">
                <Chip tone="good">sql</Chip>
                <Chip tone="good">python</Chip>
                <Chip tone="good">etl</Chip>
                <Chip tone="good">dashboards</Chip>
                <Chip tone="good">kpis</Chip>
                <Chip tone="good">power bi</Chip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATSComparison;
