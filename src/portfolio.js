const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/ashleyer/',
  title: 'https://i.imgur.com/n5CzvVj.png'
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ashley Romano...',
  role: 'an Eager Entry-level Developer',
  description:
    'Prepped with a firm hold on the many career-driven coding topics met during the Full-Stack Developer Immersive Bootcamp with General Assembly and primed by an innate curiosity and willingness to take on the difficult, Ashley is now poised to prove herself an asset in a job role that shapes her career focus via meaningful work.',

  resume: 'https://docs.google.com/document/d/1hnp_y3SWttqaIQ6T4x5d34A8AId_QLMgzx4Zt5HWhys/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/ashley-e-romano/',
    github: 'https://github.com/ashleyer/',
  },
}

const projects =  [
  {
    img: "https://i.imgur.com/4Y14hRut.png",
    name: "MASH!",
    description: "Browser-based game",
    stack: "Html, Css, Javascript",
    sourceCode: "https://github.com/ashleyer/mash",

  },
  {
    img: "https://i.imgur.com/hYWseYut.png",
    name: "Zashlios News",
    description:
      "A refactor of the popular News site, Axios",
    stack: "MEN Stack",
    sourceCode: "https://your_project_github_link",
    demo_url: "https://your_project_demo_link",
  },
  {
    img: "https://i.imgur.com/WcMCaLMt.png",
    name: "Almanack",
    description: "",
    stack: "",
    sourceCode: "https://your_project_github_link",
    demo_url: "https://your_project_demo_link/",
  },
  {
    img: "https://i.imgur.com/1bwCmQKt.png",
    name: "",
    description:
      "",
    stack: "",
    sourceCode: "https://your_project_github_link",
    demo_url: "https://your_project_demo_link",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Full-stack',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Github',
  'SASS',
  'Node',
  'Git',
  'Django',
  'Bootstrap',
  'MERN',
  'Data planning/modeling',
  'Express',
  'jQuery',
  'python'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ashleye.romano@gmail.com',
}

export { header, about, projects, skills, contact }
