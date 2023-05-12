import images from '../../assets/index';

export const projects = [
  {
    id: 0,
    title: 'Portfolio',
    image: {
      url: images.portfolio,
      alt: 'Imagem da frontpage do portfolio',
    },
    description:
      'A Portifolio created using React.js, Typescript and Styled Components.',
    content: `This portfolio was developed to showcase the projects that i built using web technologies. Applying the concept of "mobile first", the website offers a great experience across various devices regardless of the screen size.

    The frontend of this portfolio has been developing using React.js, TypeScript, and Styled Components.  React Router was implemented to create navigation and dynamic rounting. Framer motion was incorporated to make the motion of the description section in both about and projects page.

    To ensure the reliability and functionality of the components, testing was conducted using the Jest library. Furthermore, this project was successfully deployed on Hostinger.
    `,
    stack: 'React.js, Typescript and Styled Component',
    libs: 'React Router, Jest, Framer motion, Phosphor icons and React icons',
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
    description:
      'A notebook that allows you to save the contacts of your dear friends.',
    content: `The primary objective of this project was to develop an application that embrace all the essential functionalities of a CRUD (Create, Read, Update, Delete) system. By implementing this system, users can effectively manage and manipulate data within the application.

    With a focus on user convenience, this application provides the ability to create user accounts, enabling individuals to securely store and manage contact information for the people who matter most to them. By leveraging this functionality, users can easily access and update contact details as needed.

    The Contact Manager was developed implementing React.js for the frontend and Node.js for the backend, both with the help of Typescript to provide static typing. Styled Components was used to style the pages of the project and Axios components to make HTTP requests. On the backend, Express was used to create the API routes and Prisma was used as the ORM for database access.

    The React Hook Form and YUP libraries were used to validate and create rules for user creation, login forms, contact creation and updating. In the Backend JWT was used to generate the token that allows the user to remain logged in after closing and reopening the page and Bcryptjs to encrypt the users' password.

    The frontend is hosted on Vercel and the backend on Railway.
    `,
    stack: 'React.js, Typescript, Node.js, Axios, Prisma e Styled Component',
    libs: 'React icons, react forms, yup e jwt',
    links: {
      github: 'https://github.com/Lucal22/contact-frontend',
      githubBackend: 'https://github.com/Lucal22/contact-backend',
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
    description: '',
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
    description: '',
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
    description: '',
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
    description: '',
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
