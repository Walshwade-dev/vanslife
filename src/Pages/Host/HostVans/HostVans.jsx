import "./index.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



const HostVans = () => {

    const [hostVans, setHostVans] = useState([])

    useEffect(() => {
        fetch(`/api/host/vans`)
          .then(res => res.json())
          .then(data => setHostVans(data.vans))
      }, [])
    
    

    const hostVansDetails = hostVans.map( van => (
        <div className="van-tile flex  rounded-md h-[5rem] pr-4 dark:bg-content dark:text-bkg mt-5" key={van.id}>
            <section className="flex items-center mr-auto">
                <Link to={`/host/vans/${van.id}`} className="cursor-pointer h-full"><img className="h-full rounded-l-md" src={van.imageUrl} /></Link>
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