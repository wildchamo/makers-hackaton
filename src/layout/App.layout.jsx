// Router
import {Outlet} from "react-router-dom";

// Components
import Footer from "./Footer/Footer.layout.jsx";

const AppLayout = () => {

    return (
        <>
            <div className="App">
                <Outlet/>
                <Footer/>
            </div>
        </>
    );
};

export default AppLayout;
