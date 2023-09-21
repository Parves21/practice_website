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