import { Outlet } from "react-router-dom"
import NavBarMain from "../components/NavbarMain"
import FooterMain from "../components/FooterMain"



const MainLayout = ()=>{
    return (
        <div>
        <NavBarMain />
        <main>
            <Outlet />
        </main>
        <FooterMain />
        </div>
    )
}

export default MainLayout