function calculateAge(birthday) {
  // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

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
    icon: <i class="fab fa-html5"></i>,
    title: "HTML5",
    content: "experienced with Pug.",
  },
  {
    icon: <i class="fab fa-sass"></i>,
    title: "SCSS",
    content: "experienced with RWD and css with e-mail / fax.",
  },
  {
    icon: <i class="fab fa-js-square"></i>,
    title: "JS / TS",
    content: "experienced with ES6 features, TypeScript.",
  },
  {
    icon: <i class="fab fa-react"></i>,
    title: "REACT",
    content: "experienced with Redux, Reselect and React-hooks etc.",
  },
  {
    icon: <i class="fab fa-vuejs"></i>,
    title: "VUE",
    content: "only have experience before 2.0.",
  },
  {
    icon: <i class="fas fa-tasks"></i>,
    title: "TESTING",
    content: "experienced with Cypress, Testing Library and Enzyme.",
  },
];

export const LANGUAGE = [
  {
    icon: <i class="fas fa-language"></i>,
    title: "JLPT",
    content: "N1 certificate, 154(44/60/50).",
  },
  {
    icon: <i class="fas fa-globe"></i>,
    title: "TOEIC",
    content: "gold certificate, 885(445/440).",
  },
];
