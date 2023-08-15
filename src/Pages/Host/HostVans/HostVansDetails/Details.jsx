
import { useOutletContext } from "react-router-dom"


const Details = () => {

  const {vanDetails} = useOutletContext()

  const vanDescriptions = vanDetails.map(van => (
    <div key={van.id} className="text-bkg bg-content">
          <h1 className="font-normal text-hostLw mt-4"><span className="font-semibold mr-3">Name:</span>{van.name}</h1>
          <h1 className="font-normal text-hostLw mt-4"><span className="font-semibold mr-3">Category:</span>{van.type}</h1>
          <h1 className="font-normal text-hostLw mt-4"><span className="font-semibold mr-3">Description:</span>{van.description}</h1>
          <h1 className="font-normal text-hostLw mt-4"><span className="font-semibold mr-3">Visibility:</span> Public</h1>
      </div>
  ))

  return (
    <section>
      {vanDescriptions}
    </section>
  )
}

export default Details