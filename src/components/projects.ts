import { Project } from "@/types/project";

const appProjects: Project[] = [
  {
    id: 1,
    title: "Musicpro",
    description: "Aplicativo de distribuição digital de músicas",
    fullDescription:
      "Atualização nas telas de financeiro e analytics, recriação do fluxo de publicação de músicas, com testes unitários e end to end. Publicação do app nas lojas Google e Apple, atuação com notificação push, login social, integração com firebase, chat via Intercom e geolocalização.",
    imageUrl: "/app-musicpro.png?height=300&width=300",
    projectLink: "https://play.google.com/store/apps/details?id=live.musicpro",
  },
  {
    id: 2,
    title: "Negociar",
    description: "A brief description of Project 2",
    fullDescription:
      "Participação no desenvolvimento das telas de boas vindas, login, criar conta, recuperar senha.",
    imageUrl: "/app-negociar.png?height=300&width=300",
    projectLink:
      "https://play.google.com/store/apps/details?id=br.com.arriel.negociar",
  },
  {
    id: 3,
    title: "Você Presente",
    description: "A brief description of Project 3",
    fullDescription:
      "Atualização do projeto para utilização de tecnologias mais recentes, deixando o app mais performático, ajuste de funcionalidades do player de música e melhoria na visualização dos pdfs e da listagem na página principal.",
    imageUrl: "/app-voce-presente.png?height=300&width=300",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.cpmindfulness",
  },
  {
    id: 4,
    title: "Nacional G3",
    description: "A brief description of Project 4",
    fullDescription:
      "Participação na resolução de bugs, e pequenas melhorias em algumas telas do app.",
    imageUrl: "/app-nacional-g3.png?height=300&width=300",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.arriel.nacionalg3",
  },
];

const webProjects: Project[] = [
  {
    id: 1,
    title: "Vanto Boletos",
    description: "Aplicativo de distribuição digital de músicas",
    fullDescription:
      "Criação de uma página para visualização de contratos de financiamento, com visualização de boletos, código pix, código de barras, e compartilhamento destas informações tanto por whatsapp quanto email.",
    imageUrl: "/web-vanto-boletos.png?height=300&width=300",
    projectLink: "https://vanto-boletos.arriel.com.br/",
  },
  {
    id: 2,
    title: "Canto da Bala",
    description: "A brief description of Project 2",
    fullDescription:
      "Sistema de gerenciamento de vendas, com cadastro de produtos, fornecedores, clientes e contas. Com dashboard resumindo as informções e informativos por tipo de operação.",
    imageUrl: "/web-canto-da-bala.png?height=300&width=300",
    projectLink: "https://canto-da-bala.vercel.app/",
  },
  {
    id: 3,
    title: "Webapp Musicpro",
    description: "A brief description of Project 3",
    fullDescription:
      "Participação na resolução de bugs da plataforma, com mais de 10 mil usuários ativos que enviam mais de 600 músicas por dia.",
    imageUrl: "/web-musicpro.png?height=300&width=300",
    projectLink: "https://app.musicpro.live/",
  },
  {
    id: 4,
    title: "Creator Pro",
    description: "A brief description of Project 4",
    fullDescription:
      "Participação da criação de uma plataforma de assinaturas, coleções e ativos digitais usando web3. Realização de telas de exibição dos produtos e no passo de pagamento.",
    imageUrl: "/web-creator.png?height=300&width=300",
    projectLink: "https://creatorpro.live/",
  },
  {
    id: 5,
    title: "Paperon",
    description: "A brief description of Project 5",
    fullDescription:
      "Participação no início da criação de uma plataforma de gestão de projetos, na parte de gerenciamento do tempo de tarefas.",
    imageUrl: "/web-paperon.png?height=300&width=300",
    projectLink: "https://paperon.app/",
  },
  {
    id: 6,
    title: "Payos Dashboard",
    description: "A brief description of Project 5",
    fullDescription:
      "Atuação em telas de relatórios financeiros e viisualização de dados de um dashboard financeiro.",
    imageUrl: "/web-payos.png?height=300&width=300",
    projectLink: "https://dashboard.payos.app/",
  },
];

export { appProjects, webProjects };
