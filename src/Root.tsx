import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

 export default function Root(){

return (
    <div className="min-h-screen flex flex-col bg-slate-100">
  <Navbar />

  {/* Main content grows to fill space */}
  <main className="flex-grow">
    <Outlet />
  </main>

  <Footer />
</div>
)

}

