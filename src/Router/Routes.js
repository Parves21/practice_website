import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import Class from "../Pages/Class/Class";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import Computer from "../Department/Computer/Computer";
import Civil from "../Department/Civil/Civil";
import Electrical from "../Department/Electrical/Electrical";
import Electronice from "../Department/Electronice/Electronice";
import Macanical from "../Department/Macanical/Macanical";
import Power from "../Department/Power/Power";
import Rac from "../Department/Rac/Rac";
import Environment from "../Department/Environment/Environment";
import About from "../About/About";
import Payment from "../Pages/Shared/RightNav/Payment";
import Stipend from "../Pages/Shared/RightNav/Stipend";
import Result from "../Pages/Shared/Header/Result";
import FirstSemester from "../Department/Computer/FirstSemester";
import SecondSemester from "../Department/Computer/SecondSemester";
import ThirdSemester from "../Department/Computer/ThirdSemester";
import FourthSemester from "../Department/Computer/FourthSemester";
import FifthSemester from "../Department/Computer/FifthSemester";
import SixthSemester from "../Department/Computer/SixthSemester";
import SeventhSemester from "../Department/Computer/SeventhSemester";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/header',
                element: <Header></Header>
            },
            {
                path: '/result',
                element: <Result></Result>
            }, 
            {
                path: '/payment',
                element: <Payment></Payment> 
            },
            {
                path: '/stipend',
                element: <Stipend></Stipend> 
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/class',
                element: <Class></Class>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/computer',
                element: <Computer></Computer>
            },
            {
                path: '/1stSemester',
                element: <FirstSemester></FirstSemester>
            },
            {
                path: '/2ndSemester',
                element: <SecondSemester></SecondSemester>
            },
            {
                path: '/3rdSemester',
                element: <ThirdSemester></ThirdSemester>
            },
            {
                path: '/4thSemester',
                element: <FourthSemester></FourthSemester>
            },
            {
                path: '/5thSemester',
                element: <FifthSemester></FifthSemester>
            },
            {
                path: '/6thSemester',
                element: <SixthSemester></SixthSemester>
            },
            {
                path: '/7thSemester',
                element: <SeventhSemester></SeventhSemester>
            },
            {
                path: '/civil',
                element: <Civil></Civil>
            },
            {
                path: '/electrical',
                element: <Electrical></Electrical>
            },
            {
                path: '/electronice',
                element: <Electronice></Electronice>
            },
            {
                path: '/macanical',
                element: <Macanical></Macanical>
            },
            {
                path: '/power',
                element: <Power></Power>
            },
            {
                path: '/rac',
                element: <Rac></Rac>
            },
            {
                path: '/environment',
                element: <Environment></Environment>
            }
        ]
    }
])

