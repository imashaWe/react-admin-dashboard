import Home from "../components/pages/Home";
import SystemUsers from "../components/pages/SystemUsers";
import BlankPage from "../components/pages/BlankPage";

export const routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/blank",
        element: <BlankPage/>
    },
    {
        path: "/users",
        element: <SystemUsers/>
    },

];