import { Outlet } from "react-router-dom"
import Contact from "../pages/Contact"

const ContactLayout = () => {
    return (
            <div>
            <Contact/>
            <div className="container">
            <Outlet/>
        </div>
        </div>
    )
}


export default ContactLayout