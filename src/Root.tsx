import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar"

 export default function Root(){

return (
    <nav className="bg-slate-100">
    <Navbar/>
    <Outlet/>
    </nav>
)

}

