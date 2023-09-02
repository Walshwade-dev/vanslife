import { Link } from "react-router-dom"

const NotFound = () => {
    return(
        <div className="flex flex-col items-center justify-center my-[20%]">
            <h1 className="text-inter text-black font-semibold text-xl">Sorry, the page you were looking for was not found.</h1>
            <Link to="/" className="bg-black rounded-md text-white font-inter font-semiBold text-center h-12 w-1/3 mt-10 flex items-center justify-center">Return to Home</Link>
        </div>
    );
};

export default NotFound;