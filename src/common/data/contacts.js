import avatar1 from "../../assets/images/users/avatar-1.jpg"
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../assets/images/users/avatar-3.jpg"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import avatar5 from "../../assets/images/users/avatar-5.jpg"
import avatar7 from "../../assets/images/users/avatar-7.jpg"

const users = [
  {
    id: 1,
    name: "David McHenry",
    designation: "UI/UX Designer",
    color: "primary",
    email: "david@skote.com",
    projects: "125",
    tags: ["Photoshop", "illustrator"],
  },
  {
    id: 2,
    img: avatar2,
    name: "Frank Kirk",
    designation: "Frontend Developer",
    email: "frank@skote.com",
    projects: "132",
    tags: ["Html", "Css", "Php"],
  },
  {
    id: 3,
    img: avatar3,
    name: "Rafael Morales",
    designation: "Backend Developer",
    email: "Rafael@skote.com",
    projects: "1112",
    tags: ["Php", "Java", "Python", "Html"],
  },
  {
    id: 4,
    name: "Mark Ellison",
    designation: "Full Stack Developer",
    color: "success",
    email: "mark@skote.com",
    projects: "121",
    tags: ["Ruby", "Php", "UI/UX Designer"],
  },
  {
    id: 5,
    img: avatar4,
    name: "Minnie Walter",
    designation: "Frontend Developer",
    email: "minnie@skote.com",
    projects: "145",
    tags: ["Html", "Css", "Java"],
  },
  {
    id: 6,
    img: avatar5,
    name: "Shirley Smith",
    designation: "UI/UX Designer",
    email: "shirley@skote.com",
    projects: "136",
    tags: ["Photoshop", "illustrator"],
  },
  {
    id: 7,
    name: "John Santiago",
    designation: "Full Stack Developer",
    color: "info",
    email: "john@skote.com",
    projects: "125",
    tags: ["Ruby", "Php", "Java"],
  },
  {
    id: 8,
    img: avatar7,
    name: "Colin Melton",
    designation: "Backend Developer",
    color: "",
    email: "colin@skote.com",
    projects: "136",
    tags: ["Php", "Java", "Python"],
  },
]
const client = [
  {
    id: 1,
    name: "Renard Wisslyn",
    designation: "UI/UX Designer",
    color: "primary",
    email: "reanrd@prosper.com",
    projects: "125",
    tags: ["MOTO", "JET-SKI"],
  },
  {
    id: 2,
    img: avatar2,
    name: "Mahmoud Frikh",
    designation: "Frontend Developer",
    email: "mahmoud@prosper.com",
    projects: "132",
    tags: ["CHIENT", "AUTOMOBILE"],
  },
  {
    id: 3,
    img: avatar3,
    name: "Lionel Ramos",
    designation: "Backend Developer",
    email: "lionel@prosper.com",
    projects: "1112",
    tags: ["IMMEUBLE MIXTE", "INDUSTRIEL", "MOTO"],
  },
  {
    id: 4,
    name: "Mark Ellison",
    designation: "Full Stack Developer",
    color: "success",
    email: "mark@skote.com",
    projects: "121",
    tags: ["Ruby", "Php", "UI/UX Designer"],
  },
  {
    id: 5,
    img: avatar4,
    name: "Minnie Walter",
    designation: "Frontend Developer",
    email: "minnie@skote.com",
    projects: "145",
    tags: ["Html", "Css", "Java"],
  },
  {
    id: 6,
    img: avatar5,
    name: "Shirley Smith",
    designation: "UI/UX Designer",
    email: "shirley@skote.com",
    projects: "136",
    tags: ["Photoshop", "illustrator"],
  },
]
const partenaires = [
  {
    id: 1,
    name: "Renard Wisslyn",
    designation: "UI/UX Designer",
    color: "primary",
    email: "reanrd@prosper.com",
    projects: "125",
    tags: ["MOTO", "JET-SKI"],
  },
  {
    id: 2,
    img: avatar2,
    name: "Mahmoud Frikh",
    designation: "Frontend Developer",
    email: "mahmoud@prosper.com",
    projects: "132",
    tags: ["CHIENT", "AUTOMOBILE"],
  },
  {
    id: 3,
    img: avatar3,
    name: "Lionel Ramos",
    designation: "Backend Developer",
    email: "lionel@prosper.com",
    projects: "1112",
    tags: ["IMMEUBLE MIXTE", "INDUSTRIEL", "MOTO"],
  },
  {
    id: 4,
    name: "Mark Ellison",
    designation: "Full Stack Developer",
    color: "success",
    email: "mark@skote.com",
    projects: "121",
    tags: ["Ruby", "Php", "UI/UX Designer"],
  },
  {
    id: 5,
    img: avatar4,
    name: "Minnie Walter",
    designation: "Frontend Developer",
    email: "minnie@skote.com",
    projects: "145",
    tags: ["Html", "Css", "Java"],
  },
  {
    id: 6,
    img: avatar5,
    name: "Shirley Smith",
    designation: "UI/UX Designer",
    email: "shirley@skote.com",
    projects: "136",
    tags: ["Photoshop", "illustrator"],
  },
]
const userProfile = {
  id: 1,
  name: "Anissa Giordano",
  img: avatar1,
  projectCount: 12,
  revenue: 25,
  personalDetail:
    "",
  phone: "(123) 123 1234",
  email: "cynthiaskote@gmail.com",
  location: "California, United States",
  experiences: [
    {
      id: 1,
      iconClass: "bx-server",
      link: "#",
      designation: "Back end Developer",
      timeDuration: "2016 - 19",
    },
    {
      id: 2,
      iconClass: "bx-code",
      link: "#",
      designation: "Front end Developer",
      timeDuration: "2013 - 16",
    },
    {
      id: 3,
      iconClass: "bx-edit",
      link: "#",
      designation: "UI /UX Designer",
      timeDuration: "2011 - 13",
    },
  ],
  projects: [
    {
      id: 1,
      name: "Skote admin UI",
      startDate: "2 Sep, 2019",
      deadline: "20 Oct, 2019",
      budget: "$506",
    },
    {
      id: 2,
      name: "Skote admin Logo",
      startDate: "1 Sep, 2019",
      deadline: "2 Sep, 2019",
      budget: "$94",
    },
    {
      id: 3,
      name: "Redesign - Landing page",
      startDate: "21 Sep, 2019",
      deadline: "29 Sep, 2019",
      budget: "$156",
    },
    {
      id: 4,
      name: "App Landing UI",
      startDate: "29 Sep, 2019",
      deadline: "04 Oct, 2019",
      budget: "$122",
    },
    {
      id: 5,
      name: "Blog Template",
      startDate: "05 Oct, 2019",
      deadline: "16 Oct, 2019",
      budget: "$164",
    },
    {
      id: 6,
      name: "Redesign - Multipurpose Landing",
      startDate: "17 Oct, 2019",
      deadline: "05 Nov, 2019",
      budget: "$192",
    },
    {
      id: 7,
      name: "Logo Branding",
      startDate: "04 Nov, 2019",
      deadline: "05 Nov, 2019",
      budget: "$94",
    },
  ],
}

export { users, client, userProfile, partenaires}