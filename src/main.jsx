import React from 'react'
import ReactDOM from 'react-dom/client'
// Styles
import '@globalStyles/styles.css';
// Router
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
//Layout
import AppLayout from "./layout/App.layout.jsx";
//Chat
import Home from "./pages/Home/Home.jsx";
import Chat from "./pages/Chat/Chat.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/chat",
                element: <Chat/>
            },
        ],
    },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
