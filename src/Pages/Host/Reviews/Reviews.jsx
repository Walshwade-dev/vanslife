import "./index.css"
import Ratings from "../../../assets/ratings.png"
import Star from "../../../assets/star.png"

const Reviews = () => {

    const image = Star;
    const Images = [];
    for(let i = 0; i < 5; i++) {
        Images.push(
            <img
                key={i}
                src={image}
                alt={`Image ${i + 1}`}
             />
        )
    }
    

     return(
        <div className="income-container px-4 w-[20rem]">
            <section className="pt-5 flex">
                <h1 className="font-bold text-3xl mr-auto">Your reviews</h1>
                <p className="text-sm mt-2">last  <span className="font-bold underline"> 30 days</span></p>
            </section>
            <section className="pt-10 bg-hostUp w-[20rem] mt-10 p-2 rounded-md">
                <img className=" w-[20rem]" src={Ratings} />
            </section>
            <section className="mt-10 mr-10 w-[20rem]">
                <div className="flex">
                    <h1 className="font-bold mr-auto">Reviews (2) </h1>
                </div>
                <div className="mt-5">
                    <section className="mt-2">
                        <div className="flex gap-1">{Images}</div>
                        <div className='font-bold flex mt-2'>
                            <h1 className='mr-2'>Elliot</h1>
                            <h1 className='text-[grey] '>December 1, 2022</h1>
                        </div>
                        <p>
                            The beach bum is such an awesome van! Such as comfortable
                            trip. We had it for 2 weeks and there was not a single issue.
                            Super clean when we picked it up and the host is very comfortable 
                            and understanding. Highly recommend!
                        </p>
                        <hr className='mt-4 text-hostUp'></hr>   
                    </section>

                    <section className="mt-4">
                        <div className="flex gap-1">{Images}</div>
                        <div className='font-bold flex mt-2'>
                        <h1 className='mr-2'>Sandy</h1>
                        <h1 className='text-[grey] '>November 23, 2022</h1>
                        </div>
                        <p>
                            This is ourt third time using the Modest Explorer for our travels and we love it!
                            No complaints, absolutely perfect!
                        </p>
                        <hr className='mt-4 text-hostUp '></hr>   
                    </section>
                </div>
            </section>
        </div>
     )
}

export default Reviews