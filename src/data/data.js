import calculateAge from "../helpers/calculateAge";

export const TAB = ["STATUS", "PROFILE", "PROJECT"];

export const BASICINFO = [
  { title: "NAME", content: "CHI FENG (CLIFF)" },
  { title: "AGE", content: calculateAge(new Date("1996/10/05")) },
  { title: "GENDER", content: "MALE" },
  { title: "LOACTION", content: "TAIWAN" },
  {
    title: "SENIORITY",
    content: `${calculateAge(new Date("2018/10/01"))}+ YEARS`,
  },
];

export const SKILLS = [
  {
    icon: <i className="fab fa-html5"></i>,
    title: "HTML5",
    content: "experienced with Pug.",
  },
  {
    icon: <i className="fab fa-sass"></i>,
    title: "SCSS",
    content: "experienced with RWD and css with e-mail / fax.",
  },
  {
    icon: <i className="fab fa-js-square"></i>,
    title: "JS / TS",
    content: "experienced with ES6 features, TypeScript.",
  },
  {
    icon: <i className="fab fa-react"></i>,
    title: "REACT",
    content: "experienced with Redux, Reselect and React-hooks etc.",
  },
  {
    icon: <i className="fab fa-vuejs"></i>,
    title: "VUE",
    content: "only have experience before 2.0.",
  },
  {
    icon: <i className="fas fa-tasks"></i>,
    title: "TESTING",
    content: "experienced with Cypress, Testing Library and Enzyme.",
  },
];

export const LANGUAGE = [
  {
    title: "JLPT",
    content: "N1 certificate, 154(44/60/50).",
  },
  {
    title: "TOEIC",
    content: "gold certificate, 885(445/440).",
  },
];

export const CONTACT = [
  {
    icon: <i className="fab fa-instagram"></i>,
    title: "INSTAGRAM",
    content: "share my daily life, food and travel.",
    link: "https://www.instagram.com/chi_feng1005/",
  },
  {
    icon: <i className="fab fa-facebook-f"></i>,
    title: "FACEBOOK",
    content: "no more post now, only check my friends sharing.",
    link: "https://www.facebook.com/wind.chi/",
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
    title: "LINKEDIN",
    content: "only use for search job.",
    link: "https://www.linkedin.com/in/feng-chi-1714b3203/",
  },
  {
    icon: <i className="fas fa-envelope"></i>,
    title: "EMAIL",
    content: "mail for any business.",
    link: "mailto:ga021396@gmail.com",
  },
];

export const ABOUT =
  "travel lover. enjoy to having yummy food, watching anime and trying new things.";

export const EXPERIENCE = [
  {
    title: "Natonal Taipei University of Business",
    contnet: "Information Management",
    date: "2015.09",
  },
  {
    title: "Chiba University of Commerce",
    contnet: "Exchange Student",
    date: "2017.09",
  },
  {
    title: "Galaxy Software Services Corporation",
    contnet: "FrontEnd Intern",
    date: "2018.10",
  },
  {
    title: "Rakuten Travel",
    contnet: "Application Engineer",
    date: "2020.03",
  },
];

export const PROJECTS = [
  {
    link: "https://ga021396.github.io/mota-bro-ver/",
    title: "MOTA-BOR-VER",
    content: (
      <>
        this is alter from the classic flash game "MOTA", made for Twitch
        streamer
        <a
          href="https://www.youtube.com/watch?v=O0zQ-b1v4Sc&ab_channel=%E7%9F%AD%E6%9A%AB%E5%AD%98%E6%94%BE"
          className="aLink"
          target="_blank"
        >
          "sam1268"
        </a>
        , "butterflyouo".
      </>
    ),
  },
  {
    link: "https://ga021396.github.io/Vue-AnimeFilter/",
    title: "ANIME-FILTER",
    content: "this is my first project to practice Vue.js.",
  },
  {
    link: "https://ga021396.github.io/magic-pants/",
    title: "MAGIC-PANTS",
    content: `this is a memory game made for Twitch streamer "bbbb87".`,
  },
  {
    link: "https://ga021396.github.io/steamer-test/",
    title: "STREAMER-TEST",
    content: `this is a psychological test made for Twitch streamer "sam1268".`,
  },
];
