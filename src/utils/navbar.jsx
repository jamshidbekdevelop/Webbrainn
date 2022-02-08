import Generic from "../pages/Generic"
import Main from "../Components/Main"
import Word from "../Components/Word"
import Kurslar from "../Components/Kurslarimiz"
import Natijalar from "../Components/Natijalar"
import BizningJamoa from "../Components/BizningJamoa"
// import Bizning Jamoa from '../C'


export const navbar =[
{ id:1, title: 'Asosiy', pathname: '/asosiy', Element: Main, hidden: false,},
{ id:2, title: 'Kurslarimiz', pathname: '/kurslarimiz', Element: Kurslar, hidden: false,},
{ id:3, title: 'Natijalar', pathname: '/natijalar', Element: Natijalar, hidden: false,},
{ id:4, title: 'Bizning Jamoa', pathname: '/bizningjamoa', Element: BizningJamoa, hidden: false,},
{ id:5, title: 'Youtube', pathname: '/youtube', Element: Generic, hidden: false,},
{ id:6, title: 'SignIn', pathname: '/signin', Element: Word, hidden: true,},
// { id:7, title: 'SignUp', pathname: '/signup', Element: Generic, hidden: true,},
]

