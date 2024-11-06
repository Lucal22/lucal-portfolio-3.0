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
    title: 'SSBOOK',
    image: {
      url: images.solchallenge,
      alt: 'Frontpage of the website SSBOOK',
    },
    description: 'A library website challenge by Studio Sol.',
    content: `SSBOOK was developed as a frontend challenge made by Studios Sol.
    The design was made following a Figma project provided by the company and implemented using React.js, Tailwind and styled components.

    Axios and React Query was used to fetch the api objects and Jest for testing.

    The website is deployed on Vercel.
    `,
    stack: 'React.js, React Redux and SCSS',
    libs: 'Headlessui, Framer motion and Phosphor icons',
    links: {
      github: 'https://github.com/Lucal22/sol-challenge',
      website: 'https://sol-challenge.vercel.app/',
    },
  },
  {
    id: 2,
    title: 'Capputeeno',
    image: {
      url: images.ecommerce,
      alt: 'Frontpage of Capputeeno',
    },
    description: `An ecommerce frontend challenge project by Rocketseat.`,
    content: ` Capputeeno is an ecommerce frontend project developed following the instructions of the challenge provided by Rocketseat.

    It was developed using Next.js, Typescript, Styled Components and also axios to fetch the data provided from a graphQl API.
    `,
    stack: 'Next.js, Typescript and Styled Components',
    libs: 'Axios',
    links: {
      github: 'https://github.com/Lucal22/Front-end-challenge',
      website: '',
    },
  },
  {
    id: 3,
    title: 'The Scions Report',
    image: {
      url: images.blog,
      alt: 'Frontpage of the website The scions Report',
    },
    description: 'A Final Fantasy XIV fansite (In development).',
    content: `"The Scions Report" provide guides and news about Final Fantasy XIV Online, a MMORPG published by Square Enix.

    To kickstart the project, I utilized Next.js, a versatile framework renowned for its server-side rendering (SSR) capabilities and efficient routing system, TypeScript played a pivotal role in enhancing the reliability and maintainability of the codebase and Styled Components was implemented to craft a visually appealing and responsive user interface.

    GraphQL served as a powerful data-fetching tool, enabling efficient communication between the frontend and backend. Through GraphQL queries, I seamlessly retrieved and manipulated data, allowing for dynamic content updates and reducing unnecessary network requests.

    The Scions Report is deployed on Vercel and still in development.
    `,
    stack: 'Next.js, Typescript and Styled Components.',
    libs: 'GraphQL, Jest and Phosphor icons.',
    links: {
      github: 'https://github.com/Lucal22/tsr',
      website: 'https://tsr-lucal22.vercel.app/',
    },
  },
  {
    id: 4,
    title: 'Strapi - The Scions Report Backend',
    image: {
      url: images.strapipage,
      alt: 'Frontpage of the website Strapi',
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
    id: 5,
    title: 'Nations game',
    image: {
      url: images.nations,
      alt: 'Frontpage of the website Nations game',
    },
    description:
      'A game website inspired on a very popular brazilian gamble called "Jogo do Bicho".',
    content: `This project based on the popular game called "Jogo do Bicho" allows the user to guess what is the nation of the day.

    For the frontend development it was used framer motion to do the animation of the theme button, the popover component from the Headlessui lib, was implemented to improve the acessibility and SCSS to style the website.

    It was used React Redux to send the state that handles the theme change and using the localStorage was possible to save the theme preference and the previous countries that the user selected.

    To make the daily draw, it was used a math operation involving the date components. The website is deployed on hostinger.
    `,
    stack: 'React.js, React Redux and SCSS',
    libs: 'Headlessui, Framer motion and Phosphor icons',
    links: {
      github: 'https://github.com/Lucal22/nations-game',
      website: 'https://nations-game.vercel.app/',
    },
  },
  {
    id: 6,
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
    stack: 'React.js, Typescript, Node.js, Axios, Postgress e Styled Component',
    libs: 'React icons, react forms, , Prisma, yup e jwt',
    links: {
      github: 'https://github.com/Lucal22/contact-frontend',
      githubBackend: 'https://github.com/Lucal22/contact-backend',
      website: 'https://contact-list-lucal.vercel.app/',
    },
  },

  {
    id: 7,
    title: 'Widget',
    image: {
      url: images.widget,
      alt: 'Frontpage of the website Widget',
    },
    description:
      'Save your daily tasks on the Keeper app, a to do list developed on react.js.',
    content: `The widget was developed during the NLW return week offered by Rocketseat, that allows the user to send a feedback report.

    The frontend was developed in react.js and the library Headless UI to increase the accessibility of the project. The mobile app was built in React Native.

    For the backend was used the library NodeMailer to send emails containing the informations of the feedback sent by an user. Nodejs and Typescript was used to configure and validate the data that would be sent to the database and email.
    `,
    stack: 'React.js, React Native, Tailwind CSS, Typescript and Node.js.',
    libs: 'Headless UI, Jest, Prisma and Phosphor Icons.',
    links: {
      github: 'https://github.com/Lucal22/WidgetProject-NLW-8',
      website: 'https://widget-project-nlw-8.vercel.app/',
    },
  },
];
