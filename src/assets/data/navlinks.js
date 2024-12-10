import Token from "../../utils/Token";

const navlinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Why us",
    path: "/why-us",
  },
  {
    name: "Team",
    path: "/team",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const createNavLinks = () => {
  const tokenData = Token();
  if (tokenData) {
    return [
      ...navlinks,
      {
        name: "Dashboard",
        path: "/dashboard",
      },
      {
        name: "Add User",
        path: "/signup",
      },
    ];
  }
  return [
    ...navlinks,
    {
      name: "Login",
      path: "/login",
    },
  ];
};

export default createNavLinks;
