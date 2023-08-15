

function Hero() {
  return (
        <div className="hero  mt-20 ml-20 bg-bkg">
            <div className="hero-content flex flex-col lg:flex-row gap-5 w-1/2 h-[15rem] rounded">
                <img className="rounded h-[100%]" src="https://shorturl.at/ehAH7" />
                <div className="flex flex-col ">
                    <h1 className="text-5xl font-bold text-content">Box Office News!</h1>
                    <p className="py-6 text-xl text-content">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn h-12 w-28 rounded font-bold  text-[#fff] capitalize bg-[#692dc9] ">Get Started</button>
                </div>
            </div>
        </div>
  )
}

export default Hero