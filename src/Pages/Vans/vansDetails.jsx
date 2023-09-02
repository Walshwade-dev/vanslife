import "./index.css"
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import {Link, useParams, useLocation } from "react-router-dom"



const vansDetails = () => {
    const {id} = useParams();
    const location = useLocation();


    const [vanDetail, setVanDetail] =useState([])

    useEffect(() => {
      fetch (`/api/vans/${id}`)
          .then(res => res.json())
          .then(data => setVanDetail(data.vans))
      }, [id]);

    const search = location.state ?.search || ""
    const type = location.state?.type || "all"
    
                
  return (
    <div className="px-4 py-32 text-bkg bg-bkg md:h-[100vh] lg:px-10">
      <Link to={`..${search}`} relative="path">
        <h4 className="text-content font-semibold underline mb-4">Back to {type} Vans</h4>
      </Link>   

      { vanDetail ?
      <div className=" pb-4 lg:p-0  bg-content rounded-md lg:h-5/6 lg:w-2/3 lg:flex">
        <img src={vanDetail.imageUrl} className="rounded-t-md lg:rounded-none lg:rounded-l-md" />
        <div className="lg:w-1/2 flex flex-col items-center">
          <h1 className="font-bold text-4xl mt-4 px-2">{vanDetail.name}</h1>
          <p className="text-xl px-2 lg:px-4"><span className="font-semibold text-xl">Description:</span>{vanDetail.description}</p>
          <button className="link-button mt-5 bg-bkg text-content w-2/3">Rent this van</button>
        </div>        
      </div>
      : <h1>Loading ....</h1>}
    </div>
  )
}

export default vansDetails