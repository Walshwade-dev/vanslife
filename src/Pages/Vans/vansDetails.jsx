/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import {Link, useParams } from "react-router-dom"


const vansDetails = () => {
    const {id} = useParams();

    const [vanDetail, setVanDetail] =useState([])

    useEffect(() => {
      fetch (`/api/vans/${id}`)
          .then(res => res.json())
          .then(data => setVanDetail(data.vans))
      }, [id]);

    
                
  return (
    <div className="px-4 py-32 text-bkg bg-bkg md:h-[100vh] lg:px-10">
      <Link to=".." relative="path">
        <h4 className="text-content font-semibold underline mb-4">Back to Vans</h4>
      </Link>

      { vanDetail ?
      <div className=" pb-4 lg:p-0  bg-content rounded-md lg:h-2/3 lg:w-1/2 lg:flex">
        <img src={vanDetail.imageUrl} className="rounded-t-md lg:rounded-none lg:rounded-l-md" />
        <div className="lg:w-1/2 flex flex-col items-center">
          <h1 className="font-bold text-4xl mt-4 px-2">{vanDetail.name}</h1>
          <p className="text-xl px-2 lg:px-4"><span className="font-semibold text-xl">Description:</span>{vanDetail.description}</p>
        </div>
      </div>
      : <h1>Loading ....</h1>}
    </div>
  )
}

export default vansDetails