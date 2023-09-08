/* eslint-disable react-refresh/only-export-components */
import "./index.css"
import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"
import { getHostVans } from "../../../api"
import requireAuth   from "../../../utils"

export async function loader() {
    await requireAuth();
    return getHostVans();
}

const HostVans = () => {

    const hostVans = useLoaderData();
    

    const hostVansDetails = hostVans.map( van => (
        <div className="van-tile flex  rounded-md h-[5rem] pr-4 dark:bg-content dark:text-bkg mt-5" key={van.id}>
            <section className="flex items-center mr-auto">
                <Link to={van.id} className="cursor-pointer h-full"><img className="h-full rounded-l-md" src={van.imageUrl} /></Link>
                <div className="ml-2">
                    <Link to={`/host/vans/${van.id}`} className="cursor-pointer h-full"><p className="font-bold text-xl">{van.name}</p></Link>
                    <p>${van.price}<span>/day</span></p>
                </div>
            </section>
            <section className="flex items-center text-sm">
                <p>Edit</p>
            </section>
        </div>
    ))


     return(
        <div className="mt-10 px-4 lg:w-1/4 md:w-1/2 w-4/3">
            <h1 className="font-bold text-4xl">Your Listed vans</h1>
            
            <section className="host-vans-container mt-4">
                {hostVansDetails}
            </section>
        </div>
     )
}

export default HostVans;