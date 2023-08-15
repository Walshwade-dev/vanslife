import "./index.css";
import image from '../../assets/mountains.png';
import {Link} from 'react-router-dom';


const Home = () => {
    return (
        <div className="h-[100vh] w-full bg-cover" style={{backgroundImage: `url(${image})`,}}>
    
            <section className="absolute top-[15%] left-10 mr-10 lg:top-[30%] lg:left-[22%] text-content dark:text-amber-100">
                <p className="lg:text-5xl text-2xl  font-bold ">You got the travel plans, we got the travel vans.</p>
                <p className="text-xl mt-10">
                    Add adventure to your life by joining the #vanlife movement.<br/>
                    Rent the perfect van to make your perfect road trip.
                </p>
                <Link to="/vans"><button className="rounded w-[50%] h-16 bg-[#ff8c38] hover:bg-[#ff8b38a1] text-xl font-bold mt-16">Find your van</button></Link>
            </section>
        </div>
    );
}

export default Home;