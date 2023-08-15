import { Link } from 'react-router-dom'
import image from '../../assets/vanNight.png';

import "./index.css";

const About = () => {
    return (
    <div className='overflow-x-auto bg-bkg w-full h-[220vh] md:h-[150vh] lg:h-[150vh] '>
    
        <section className="absolute left-10 right-10 top-28 lg:top-[20%] bottom-[-10%]  lg:left-[22%] lg:mr-[20%] text-content">
            <div className=" h-[20vh] lg:h-[50vh] w-full bg-contain bg-no-repeat" style={{backgroundImage: `url(${image})`,}}></div>
            <p className=" text-2xl lg:text-5xl font-bold "> Don`t squeeze in a sedan when you could relax in a van</p>
            <p className=" text-xl lg:text-2xl mt-10">
                Our mission is to enliven your road trip with the perfect travel van rental.
                Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra <i className="fa-regular fa-face-smile-wink"></i>)<br/>
            </p>

            <p className='text-xl lg:text-2xl mt-10'>
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
            <div className='button--container bg-[#ff8c38] mt-6 lg:mt-10  rounded h-[12rem] lg:h-[15rem] p-1 lg:p-5'>
                <p className='text-xl lg:text-2xl font-bold'>
                    Your destination is waiting.<br/>
                    Your van is ready
                </p>
                <Link to="/vans"><button className="rounded  h-9 w-[100%] lg:w-[20%] lg:h-[20%] bg-[#2f2f2f] text-xl font-bold text-[#fff] mt-10 lg:mt-16">Explore our vans</button></Link>
            </div>
        </section>
    </div>
    )
}

export default About;