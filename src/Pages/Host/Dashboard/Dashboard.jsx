import "./index.css"
import star from "../../../assets/star.png"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Dashboard = () => {
    

    const [hostVans, setHostVans] = useState([])

    useEffect(() => {
        fetch(`/api/host/vans`)
          .then(res => res.json())
          .then(data => setHostVans(data.vans))
      }, [])
    
    console.log(hostVans)

    const hostVansDetails = hostVans.map( van => (
        <div className="van-tile flex  rounded-md h-[5rem] text-content dark:bg-hostLw mt-5" key={van.id}>
            <div className="flex items-center mr-auto w-full">
                <img className="h-full rounded-l-md" src={van.imageUrl} />
                <div className="p-2 flex relative w-[100%]">
                    <div className="mr-auto">
                        <p className="font-bold text-xl">{van.name}</p>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <div className="text-sm absolute top-1/3 right-2">
                        <Link to="." className="cursor-pointer"><p>Edit</p></Link>
                    </div>
                </div>
            </div>
           
        </div>
    ))

    return(
        <div className="dashboard-container mt-5 px-4 lg:w-1/4">
            <section className="bg-hostLw rounded-md">
                <h1 className="text-xl font-bold p-4">Welcome !</h1>
                <div className="flex p-4">
                    <p className="text-sm mr-auto">income last <span className="font-bold underline">30 days</span></p>
                    <span className="text-sm">Details</span>
                </div>
                <h1 className="mt-4 font-bold text-3xl p-4">$2,260</h1>
                <div className="flex items-center mt-5 rounded-b-md bg-hostUp w-full h-14 px-4">
                    <div className="flex items-center gap-1 mr-auto ">
                        <h1 className="font-bold mr-2">Review score</h1>
                        <img className="h-4" src={star} />
                        <h1 className="font-bold">5.0<span className="font-normal">/5</span></h1>
                    </div>
                    <span className="text-sm">Details</span>
                </div>
            </section>

            <section className="host-vans-container mt-4">
                {hostVansDetails}
            </section>
        </div>
    )
}

export default Dashboard;