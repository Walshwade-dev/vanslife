import "./index.css"
import Graph from "../../../assets/graph.png"


const Income = () => {
     return(
        <div className="income-container ml-10">
            <section className="pt-5">
                <h1 className="font-bold text-3xl">Income</h1>
                <p className="text-sm mt-2">last  <span className="font-bold underline"> 30 days</span></p>
                <p className="text-3xl font-bold mt-4">$2,260</p>
            </section>
            <section className="pt-10 bg-hostUp w-[20rem] mt-10 p-2 rounded-md">
                <img className=" w-[20rem]" src={Graph} />
            </section>
            <section className="mt-10 mr-10 w-[20rem]">
                <div className="flex">
                    <h1 className="font-bold mr-auto">Your transactions (3) </h1>
                    <p className="text-sm">last <span className="font-bold underline">30 days</span></p>
                </div>
                <div className="mt-5 ">
                    <section className="flex items-center p-5 h-16 bg-hostLw rounded-md mb-2">
                        <p className="font-bold text-xl mr-auto">$720</p>
                        <p className="text-sm">1/12/22</p>
                    </section>
                    <section className="flex items-center p-5 h-16 bg-hostLw rounded-md mb-2">
                        <p className="font-bold text-xl mr-auto">$560</p>
                        <p className="text-sm"> 10/11/22</p>
                    </section>
                    <section className="flex items-center p-5 h-16 bg-hostLw rounded-md mb-2">
                        <p className="font-bold text-xl mr-auto">$980</p>
                        <p className="text-sm"> 23/11/22</p>
                    </section>
                </div>
            </section>
        </div>
     )
}

export default Income