import Home from "../components/pages/Home";
import SystemUsers from "../components/pages/SystemUsers";
import BlankPage from "../components/pages/BlankPage";
import Page404 from "../components/pages/Page404";

export const routes = [
    {
        path: "*",
        element: <Page404/>
    },
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