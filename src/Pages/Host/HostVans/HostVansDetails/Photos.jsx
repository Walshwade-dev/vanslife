import { useOutletContext } from "react-router-dom"

const Photos = () => {

  const {vanDetails} = useOutletContext()


  const vanPhotos = vanDetails.map(van => (
    <div key={van.id} className="text-bkg bg-content h-[15rem] flex items-center justify-center">
        <img className="w-1/2 rounded-md" src={van.imageUrl} alt="van_image"/>
    </div>
  ))
  return (
    <section>
      {vanPhotos}
    </section>
  )
}

export default Photos