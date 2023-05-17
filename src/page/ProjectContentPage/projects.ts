import images from '../../assets/index';

export const projects = [
  {
    id: 0,
    title: 'Portfolio',
    image: {
      url: images.portfolio,
      alt: 'Frontpage of the website portfolio',
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
      githubBackend: '',
      website: 'https://vercel.com/lucal22/portfolio-lucal',
    },
  },

  {
    id: 1,
    title: 'Contact list (CRUD)',
    image: {
      url: images.agenda,
      alt: 'Frontpage of the website Contact List',
    },
    description:
      'A notebook that allows you to save the contacts of your dear friends.',
    content: `The primary objective of this project was to develop an application that embrace all the essential functionalities of a CRUD (Create, Read, Update, Delete) system. By implementing this system, users can effectively manage and manipulate data within the application.

    With a focus on user convenience, this application provides the ability to create user accounts, enabling individuals to securely store and manage contact information for the people who matter most to them. By leveraging this functionality, users can easily access and update contact details as needed.

    The Contact Manager was developed implementing React.js for the frontend and Node.js for the backend, both with the help of Typescript to provide static typing. Styled Components was used to style the pages of the project and Axios components to make HTTP requests. On the backend, Express was used to create the API routes and Prisma was used as the ORM for database access.

    The React Hook Form and YUP libraries were used to validate and create rules for user creation, login forms, contact creation and updating. In the Backend JWT was used to generate the token that allows the user to remain logged in after closing and reopening the page and Bcryptjs to encrypt the users' password.

    The frontend is deployed on Vercel and the backend on Railway.
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
    title: 'The Scions Report',
    image: {
      url: images.blog,
      alt: 'Frontpage of the website The scions Report',
    },
    description: 'A Final Fantasy XIV fanmade website (In development).',
    content: `The goal with this blog its to show informations such as guides and news for the final fantasy xiv community.

    The frontend is developed on Next.js with the assistance of Typescript. The data is fetched using graphql and rendered with static props
    `,
    stack: 'Next.js, Typescript, Styled Components',
    libs: 'GraphQL, Jest and Phosphor icons. ',
    links: {
      github: 'https://github.com/Lucal22/tsr',
      website: 'https://tsr-pi.vercel.app/',
    },
  },
  {
    id: 3,
    title: 'Strapi - The Scions Report Backend',
    image: {
      url: images.strapipage,
      alt: 'Imagem do strapi',
    },
    description: `Post manager for "The Scions Report" using Strapi.`,
    content: `Strapi is an open-source headless CMS that allows developers to build and manage API-driven content easily. It provides a flexible and customizable environment for creating and organizing content, including structured data, media files, and more.

    The app is deployed on Railway.
    `,
    stack: 'Strapi, Postgress',
    libs: 'GraphQL, CKEditor',
    links: {
      github: 'https://github.com/Lucal22/blog-strapi-api',
      website: '',
    },
  },
  {
    id: 4,
    title: 'Nations game',
    image: {
      url: images.nations,
      alt: 'Imagem do site jogo das nações',
    },
    description:
      'A game website inspired on a very popular brazilian gamble called "Jogo do Bicho".',
    content: `This project based on the popular game called "Jogo do Bicho" allows the user to guess what is the nation of the day.

    For the frontend development it was used framer motion to do the animation of the theme button, the popover component from the Headlessui lib, was implemented to improve the acessibility and SCSS to style the website.

    It was used React Redux to send the state that handles the theme change and using the localStorage was possible to save the theme preference and the previous countries that the user selected.

    To make the daily draw, it was used a math operation involving the date components. The frontend is deployed on Vercel.
    `,
    stack: 'React.js, React Redux e SCSS',
    libs: 'Headlessui, Framer motion e Phosphor icons',
    links: {
      github: 'https://github.com/Lucal22/nations-game',
      website: 'https://nations-game.vercel.app/',
    },
  },
  {
    id: 5,
    title: 'Keeper app',
    image: {
      url: images.keeper,
      alt: 'Imagem do keeper app',
    },
    description:
      'Save your daily tasks on the Keeper app, a to do list developed on react.js',
    content: `The keeper app is a to do list developed with react.js on the CodeSandBox enviroment. This was my first project developed in react.js.
    `,
    stack: 'React.js e CSS',
    libs: 'Material UI',
    links: {
      github: 'https://github.com/Lucal22/Keeper-app',
      website: 'https://codesandbox.io/s/github/Lucal22/Keeper-app',
    },
  },
];
