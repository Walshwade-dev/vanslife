
import { useOutletContext } from "react-router-dom"

const Price = () => {

  const {vanDetails} = useOutletContext()


  const vanPrice = vanDetails.map(van => (
    <div key={van.id} className="text-content bg-bkg h-[5rem] mt-10 p-4 rounded-md flex items-center">
        <h1 className="text-2xl font-semibold">${van.price}<span className="font-normal"> /day</span></h1>
    </div>
  ))

  return (
    <section>
      {vanPrice}
    </section>
  )
}

export default Price;