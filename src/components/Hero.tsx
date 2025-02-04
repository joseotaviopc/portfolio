import {
  Bookmark,
  Briefcase,
  FileText,
  GraduationCap,
  Hammer,
  PenTool,
  User,
} from "lucide-react";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Hero() {
  return (
    <section className="container mx-auto p-10 min-h-[60vh] flex items-center text-primary">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl font-serif ">
            José
            <br />
            Otavio
          </h1>

          <p className="text-2xl  leading-relaxed max-w-xl">
            Habilidades técnicas avançadas em desenvolvimento mobile, frontend e
            backend, experiência prática em projetos complexos.
          </p>

          <div className="flex items-center gap-4">
            <Image
              src="https://github.com/joseotaviopc.png"
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="">
              <div className="font-medium">MOBILE DEVELOPER</div>
              {/* <div className="text-sm">FULLSTACK DEVELOPER</div> */}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-sm uppercase tracking-wider  mb-8">
            Destaques
          </h2>
          <div className="flex flex-col space-y-4">
            <HoverCard>
              <HoverCardTrigger className="cursor-default flex gap-2 items-center">
                <div className="bg-secondary/90 p-2 rounded">
                  <Hammer className="w-5 h-5" />
                </div>
                Competências
              </HoverCardTrigger>
              <HoverCardContent
                className="w-[30rem] text-primary space-y-2"
                align="start"
              >
                <p className="text-sm">
                  <span className="font-bold">Frontend:</span>{" "}
                  React, Typescript, React Native, Next.js, Styled Components,
                  Tailwind, Radix-Ui, Material Ui.
                </p>
                <p className="text-sm">
                  <span className="font-bold">Backend:</span> Node.js, GraphQL.
                </p>
                <p className="text-sm">
                  <span className="font-bold">Banco de Dados:</span>{" "}
                  SQL, MongoDB.
                </p>
                <p className="text-sm">
                  <span className="font-bold">Outras Linguagens:</span>{" "}
                  Flutter, Python, Java.
                </p>
                <p className="text-sm">
                  <span className="font-bold">Ferramentas e Tecnologias:</span>
                  {" "}
                  Firebase, Intercom, geolocalização, testes unitários e
                  end-to-end, exportação de dados (pdf, csv, xls), gráficos.
                </p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger className="cursor-default flex gap-2 items-center">
                <div className="bg-secondary/90 p-2 rounded">
                  <GraduationCap className="w-5 h-5" />
                </div>
                Formação Acadêmica
              </HoverCardTrigger>
              <HoverCardContent
                className="w-[30rem] text-primary"
                align="start"
              >
                <p className="text-sm font-bold">
                  {`Let's Code (11/2021 - 11/2022)`}
                </p>
                <p className="text-sm mb-2">
                  Web Full-Stack Degree, focado em React e Node.js.
                </p>
                <p className="text-sm font-bold">
                  {`Let's Code (09/2021 - 10/2021)`}
                </p>
                <p className="text-sm mb-2">Coding Tank, curso de Python.</p>
                <p className="text-sm font-bold">
                  Pontifícia Universidade Católica do Rio de Janeiro (2008 -
                  2009)
                </p>
                <p className="text-sm mb-2">
                  Especialização em Engenharia de Tubulações.
                </p>
                <p className="text-sm font-bold">
                  Universidade Federal Fluminense (1997 - 2003)
                </p>
                <p className="text-sm">Graduação em Engenharia Mecânica.</p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger className="cursor-default flex gap-2 items-center">
                <div className="bg-secondary/90 p-2 rounded">
                  <Briefcase className="w-5 h-5" />
                </div>
                Experiência
              </HoverCardTrigger>
              <HoverCardContent
                className="w-[30rem] text-primary"
                align="start"
              >
                <p className="text-sm font-bold">
                  MusicPro, Desenvolvedor Frontend (09/2022 - 01/2025)
                </p>
                <p className="text-sm mb-2">
                  Migração de um app de distribuição de músicas para React
                  Native, focando nas telas de financeiro e analytics. Recriação
                  do fluxo de publicação de músicas, incluindo testes unitários
                  e end-to-end. Publicação do app nas lojas Google e Apple;
                  implementação de notificações push, login social, integração
                  com Firebase, chat via Intercom e geolocalização.
                  Desenvolvimento de features para um marketplace WEB3, com foco
                  em checkout de pagamento via PIX e cartão de crédito.
                </p>
                <p className="text-sm font-bold">
                  Paipe.co, Desenvolvedor Frontend (Março a Setembro de 2022)
                </p>
                <p className="text-sm mb-2">
                  Desenvolvimento de uma aplicação de registro de horas usando
                  React, Typescript, Styled Components, Radix-Ui, React Hook
                  Form, Yup. Adição de funcionalidades de cadastro, exportação
                  em pdf, csv e xls, gráficos e correções de bugs em um
                  dashboard de gerenciamento de fluxo de pagamento usando React,
                  Styled Components, Material Ui.
                </p>
                <p className="text-sm font-bold">
                  Flux Uniformes, Gerente Financeiro (2018 - 2022)
                </p>
                <p className="text-sm">
                  Responsável pelo controle financeiro e administrativo; contas
                  a pagar e a receber; fechamentos mensais e trimestrais de DRE.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </section>
  );
}
