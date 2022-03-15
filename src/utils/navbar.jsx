import Generic from "../pages/Generic";
import Main from "../Components/Main";
import Kurslar from "../Components/Kurslarimiz";
import Natijalar from "../Components/Natijalar";
import BizningJamoa from "../Components/BizningJamoa";
import Krish from "../Components/Krish";
import Royhat from "../Components/Royhat";
import Tolovlar from "../Components/Tolovlar";

export const navbar = [
  { id: 1, title: "Asosiy", pathname: "/asosiy", Element: Main, hidden: false },
  {
    id: 2,
    title: "Kurslarimiz",
    pathname: "/kurslarimiz",
    Element: Kurslar,
    hidden: false,
  },
  {
    id: 3,
    title: "Natijalar",
    pathname: "/natijalar",
    Element: Natijalar,
    hidden: false,
  },
  {
    id: 4,
    title: "Bizning Jamoa",
    pathname: "/bizningjamoa",
    Element: BizningJamoa,
    hidden: false,
  },
  {
    id: 5,
    title: "Youtube",
    pathname: "/youtube",
    Element: Generic,
    hidden: false,
  },
  {
    id: 6,
    title: "Tolovlar",
    pathname: "/tolov",
    Element: Tolovlar,
    hidden: true,
  },
  { id: 7, title: "SignIn", pathname: "/signin", Element: Krish, hidden: true },
  {
    id: 8,
    title: "SignUp",
    pathname: "/signup",
    Element: Royhat,
    hidden: true,
  },
];
