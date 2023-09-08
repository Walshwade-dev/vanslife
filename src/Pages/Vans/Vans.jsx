/* eslint-disable react-refresh/only-export-components */
import { useSearchParams,Link, useLoaderData} from "react-router-dom";
import "./index.css"


import { getVans } from "../../api";



export function loader() {
    return getVans();
}



const VansList = () => {


    
    
    
    // const [vans, setVans] =useState([])
    const [searchParams, setSearchParams] = useSearchParams();


    const vans = useLoaderData();
    
    const typeFilter = searchParams.get("type");

    const filteredVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;
   
    

      const vanElements = filteredVans.map((van) => (
            <div key={van.id} className="van-tile rounded relative  h-[25rem]  lg:h-[35rem] lg:w-[28rem] lg:mb-10 dark:bg-content dark:text-bkg">
                <div className="h-[80%]">
                    <Link className="w-full h-[15rem]" to={van.id} state={{search: `?${searchParams.toString()}`, type: typeFilter }}> 
                        <img className="h-[100%] w-full rouded rounded-t-md"  src={van.imageUrl} />
                    </Link>
                </div>

                <div className="van-info flex p-2 lg:p-3">
                    <h3 className="van-info-title text-xl font-bold mr-auto">{van.name}</h3>
                    <p className="font-bold text-xl">${van.price}<span className="font-normal">/day</span></p>
                </div>
                <div className="absolute left-2 lg:right-0">
                    <i className={`van-type ${van.type} selected  lg:-ml-[20.2rem]`}>{van.type}</i>
                </div>
            </div>
        ))



    return(
      <div className="van-list-container lg:-mt-10 lg:mb-0 text-center w-full lg:h-[200vh] md:h-[370vh] h-[620vh] pt-10 lg:pt-14 text-content bg-bkg pb-28">
        <h1 className="text-2xl lg:text-4xl font-bold pt-20">Explore our vans options</h1>

        <div className="mt-10 flex justify-center items-center ml-10">
        <div className="van-list-filter-buttons grid grid-rows-2 grid-flow-col gap-4 lg:flex ">
                <button 
                    onClick={() => setSearchParams({type: "simple"})}
                    className={
                        `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button 
                    onClick={() => setSearchParams({type: "luxury"})}
                    className={
                        `van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button 
                    onClick={() => setSearchParams({type: "rugged"})}
                    className={
                        `van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>
                
                {/* conditionally rendering the clear button */}
                { typeFilter ? (<button 
                    onClick={() => setSearchParams({})}
                    className="van-type clear-filters"
                >Clear filter</button>) : null }
            
            </div>
        </div>

        <div className="van-list grid grid-col-1 mx-5 lg:mx-28 mt-5 gap-y-10 lg:gap-x-40 lg:grid-cols-3 lg:justify-center lg:items-center lg:gap-x-50 lg:gap-y-0 lg:mr-[10%] lg:mt-16 lg:mb-0">
            {vanElements}
        </div>
      </div>
    )
}

export default VansList