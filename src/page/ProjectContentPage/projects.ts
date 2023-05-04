import images from '../../assets/index';

export const projects = [
  {
    id: 0,
    title: 'Portfolio desenvolvimento web',
    image: {
      url: images.portfolio,
      alt: 'Imagem da frontpage do portfolio',
    },
    resume: '',
    content:
      'Este projeto é uma page responsiva e mobile first, feita utilizando Typescript no Next.js com o intuito de apresentar alguns dos principais projetos desenvolvidos por mim durante meus estudos.',
    stack: 'React.js, Typescript e Styled Component',
    libs: 'Framer motion, phorphor icons e react icons',
    links: {
      github: 'https://github.com/Lucal22/lucal-portfolio-2.0',
      website: 'https://vercel.com/lucal22/portfolio-lucal',
    },
  },

  {
    id: 1,
    title: 'Contact list',
    image: {
      url: images.agenda,
      alt: 'image agenda',
    },
    resume: 'resume about the project.',
    content: `Conteúdo qualquer só para ter oq falar.
    É isso.`,
    stack: 'React.js, Typescript, Node.js, Axios, Prisma e Styled Component',
    libs: 'React icons, react forms, yup e jwt',
    links: {
      github: 'https://github.com/Lucal22/contact-frontend',
      website: 'https://agenda-m2t9nzti6-lucal22.vercel.app/',
    },
  },
  {
    id: 2,
    title: 'Imagem do keeper app',
    image: {
      url: images.keeper,
      alt: 'Imagem do keeper app',
    },
    resume: '',
    content:
      'O objetivo deste projeto foi criar uma lista de tarefas utilizando reactjs. Foi feito no ambiente de desenvolvimento do site CodeSandbox seguindo o curso da Dr. Angela Yu chamado "The Complete 2022 Web Development Bootcamp".',
    stack: 'React.js e CSS',
    libs: 'Material UI',
    links: {
      github: 'https://github.com/Lucal22/blog-strapi-api',
      website: 'https://codesandbox.io/s/github/Lucal22/Keeper-app',
    },
  },
  {
    id: 3,
    title: 'Jogo das nações',
    image: {
      url: images.nations,
      alt: 'Imagem do site jogo das nações',
    },
    resume: '',
    content:
      'Este projeto é uma page responsiva feita em react.js com o intuito de desenvolver um jogo de aposta onde é possível tentar adivinhar qual a nação do dia.',
    stack: 'React.js, React Redux e SCSS',
    libs: 'Headlessui, Framer motion e Phosphor icons',
    links: {
      github: 'https://github.com/Lucal22/nations-game',
      website: 'https://nations-game.vercel.app/',
    },
  },
  {
    id: 4,
    title: 'Blog pessoal - Frontend',
    image: {
      url: images.blog,
      alt: 'Imagem do site Lucal Thoughts',
    },
    resume: '',
    content:
      'Projeto desenvolvido utilizando Typescript e Next.js que funciona como frontend de um blog.',
    stack: 'Nexts.js, Typescript, Tailwind Css, GraphQL',
    libs: 'Phosphor icons',
    links: {
      github: 'https://github.com/Lucal22/lucal-thoughts',
      website: 'https://lucal-thoughts.vercel.app/',
    },
  },
  {
    id: 5,
    title: 'Blog pessoal - Backend',
    image: {
      url: images.strapipage,
      alt: 'Imagem do strapi',
    },
    resume: '',
    content:
      'Backend feito utilizando strapi para ser consumido pelo frontend do blog.',
    stack: 'Strapi',
    libs: '',
    links: {
      github: 'https://github.com/Lucal22/blog-strapi-api',
      website: '',
    },
  },
];
