import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Rodrigo",
  lastName: "Alano",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "{Product Design}",
  avatar: "/images/projects/project-01/avatar-06.jpg",
  location: "Brazil/East", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Portuguese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "github",
    icon: "github",
    link: "https://github.com/HuskyFawkes/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rodrigo-alano01/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:rodrigo.alano01@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Product Designer and researcher</>,
  subline: (
    <>
      Hi! I'm Rodrigo Alano and I work at <InlineCode>eduCAT</InlineCode>, where I craft intuitive
      <br /> user experiences. Crafting Thoughtful & Impactful Digital Experiences.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Rodrigo",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/rodrigoalano01/new-meeting",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Just your not so ordinary ADHD hyper-focus product designer (with some neat dev skills), 
        after finding out that being a developer was not exactly what drives me I found my call in design.  
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "eduCAT",
        timeframe: "2024 - Present",
        role: "Product Designer",
        achievements: [
          <>
            Designing intuitive and scalable user experiences for educational platforms used by millions of students 
            nationwide.  
          </>,
          <>
            Leading user research initiatives, optimizing mobile and web interfaces, and establishing 
            research operations to drive data-informed design decisions.
          </>,
          <>
          Contributing to design system evolution, ensuring consistency and accessibility across products.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/educat/img-educat-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Rhitmo Tecnologia",
        timeframe: "2023 - 2024",
        role: "Product Designer",
        achievements: [
          <>
            Specializing in B2B digital products, improving user experience and interface design across 
            multiple industries.
          </>,
          <>
            Leading end-to-end design cycles, from user research and journey 
            mapping to high-fidelity prototyping in Figma.
          </>,
          <>
          Collaborating with cross-functional teams 
          (POs, developers, stakeholders) to align business goals with strategic UX solutions.
          </>
        ],
        images: [],
      },
      {
        company: "Parafuzo",
        timeframe: "2022 - 2023",
        role: "Product Designer Jr.",
        achievements: [
          <>
            Enhancing platform usability through user-centered design solutions.  
            
          </>,
          <>
            Spearheading the creation of new features and leading projects aligned with the design system.
          </>,
          <>
          Ensuring pixel-perfect execution while optimizing workflows for scalability and efficiency.
          </>
        ],
        images: [],
      },
      {
        company: "VPA Infra",
        timeframe: "2022 - 2022",
        role: "Designer",
        achievements: [
          <>
            Versatile Product Designer focused on internal software optimization, driving usability 
            improvements and enhancing interface design.
          </>,
          <>
            Developed content strategies for social media, 
            contributing to record-breaking engagement and brand growth.
          </>,
        ],
        images: [],
      },
      {
        company: "Recebe Aqui",
        timeframe: "2020 - 2022",
        role: "UX/UI Designer intership",
        achievements: [
          <>
            Hands-on experience in UX/UI design and front-end development, contributing to app enhancements 
            and feature implementation that expanded the company's user base.
          </>,
          <>
            Designed new functionalities, optimized mobile interfaces, and developed content 
            strategies for social media engagement.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "UEMG - Universidade do Estado de Minas Gerais",
        description: <>Product Design.</>,
      },
      {
        name: "uni-BH",
        description: <>Computer Science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>A design system management, prototyping, UI design</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-06.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-07.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "User Research",
        description: <>interviews, usability testing, surveys User Flows & Journey Mapping</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-08.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};


const blog = {
  label: "Blog",
  title: "My hub for project documentation and maybe some random stuff",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
