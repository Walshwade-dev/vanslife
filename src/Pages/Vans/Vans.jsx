import { Link } from "react-router-dom";
import "./index.css"
import { useEffect, useState } from "react";


const VansList = () => {

    const [vans, setVans] =useState([])

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

      const vanElements = vans.map((van) => (
            <div key={van.id} className="van-tile rounded relative  h-[25rem]  lg:h-[35rem] lg:w-[28rem] lg:mb-10 dark:bg-content dark:text-bkg">
                <div className="h-[80%]">
                    <Link className="w-full h-[15rem]" to={`/vans/${van.id}`}>
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
      <div className="van-list-container lg:-mt-10 lg:mb-0 text-center w-full lg:h-[150vh] h-[370vh] pt-10 lg:pt-14 text-content bg-bkg overflow-x-auto pb-28">
        <h1 className="text-2xl lg:text-4xl font-bold pt-20">Explore our vans options</h1>
        <div className="van-list grid grid-col-1 mx-5 lg:mx-28 mt-5 gap-y-10 lg:gap-x-40 lg:grid-cols-3 lg:justify-center lg:items-center lg:gap-x-50 lg:gap-y-0 lg:mr-[10%] lg:mt-16 lg:mb-0">
            {vanElements}
        </div>
      </div>
    )
}

export default VansList