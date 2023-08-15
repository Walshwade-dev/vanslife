
import { useEffect, useState } from "react"
import { Link, useParams, Outlet, NavLink} from "react-router-dom"


function hostVansDetails() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[vanDetails, setVanDetails] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {id} = useParams();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=> {fetch(`/api/host/vans/${id}`)
                        .then(res => res.json())
                        .then(data => setVanDetails(data.vans))
    }, [id]);


    console.log(vanDetails)

    if (!vanDetails) {
        return <h1>Loading.....</h1>
    }

    const activeStyles = {
        backgroundColor: "#7062c0",
        color: "#beadfa",
    }
    

    const vanElements = vanDetails.map(van => (
        <div key={van.id} >
            <div className="flex items-center">
                <div className="mr-4">
                    <img src={van.imageUrl} className="h-24 " alt="van"/>
                </div>

                <div className=" text-hostLw">
                    <button className="h-7 w-[5rem] bg-orange-500 font-semibold rounded-md">{van.type}</button>
                    <h2 className="font-semibold text-xl">{van.name}</h2>
                    <p className="font-semibold">${van.price}<span className="font-normal">/day</span></p>
                </div>
            </div>
            
            <nav className="-ml-4 mt-5 flex list-none font-semibold text-content">
                <NavLink to="." 
                         end 
                         style={({isActive}) => isActive ? activeStyles: null}
                         className={`text-content bg-bkg hover:bg-content hover:text-bkg ml-4 rounded-l-full px-1 border-r-2 border-r-hostLw`}
                >Details
                </NavLink>

                <NavLink 
                         to="pricing"
                         style={({isActive}) => isActive ? activeStyles: null}
                         className={`text-content bg-bkg hover:bg-content hover:text-bkg px-1 border-r-2 border-r-hostLw`}
                >Pricing
                </NavLink>

                <NavLink 
                         to="photos"
                         style={({isActive}) => isActive ? activeStyles: null}
                         className={`text-content bg-bkg hover:bg-content hover:text-bkg px-1 rounded-r-full`}
                >Photos
                </NavLink>

            </nav>
        </div>
    ))


    return (
    <div className="px-4 mt-10 overflow-auto">
        <div>
            <Link to=".." relative="path" className="cursor-pointer"><h1 className="font-semibold text-xl underline">Back to all vans</h1></Link>
        </div>

        <section className="bg-content rounded-md mt-10 p-4 lg:w-1/4 mr-2">
            {vanElements}
            <Outlet context={{vanDetails}}/>
        </section>
    </div>
    )
}


export default hostVansDetails;