import { NavLink, Outlet } from "react-router-dom";


const Host = () => {

    const active = {
        textDecoration: "underline",
        fontWeight: "bold",
        fontSize: "large"
    }

    return(
        <div className="host-container bg-bkg text-content pt-20 h-[120vh] overflow-auto lg:pl-[15rem]">
            <div className="host-navbar pt-10 pl-10 flex gap-x-6">
                <NavLink to="." end style={({isActive}) => isActive ? active : null}>Dashboard</NavLink>
                <NavLink to="income" style={({isActive}) => isActive ? active : null}>Income</NavLink>
                <NavLink to="vans" style={({isActive}) => isActive ? active : null}>Vans</NavLink>
                <NavLink to="reviews" style={({isActive}) => isActive ? active : null}>Reviews</NavLink>
            </div>
            <Outlet />
        </div>
    )
}



export default Host;