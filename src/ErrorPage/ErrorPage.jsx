import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center h-[600px] flex flex-col gap-6 justify-center">
            <h3 className="text-3xl">Oops!!</h3>
            <p className="text-6xl"><span className="font-extrabold text-[#1abc9c]">404</span> Not Found</p>
            <div className="mx-auto">
                <img className="w-52" src="https://i.postimg.cc/ZnqfTWT5/error.png" alt="" />
            </div>
            <Link to="/"><button className="btn text-white bg-[#1abc9c] hover:bg-white hover:text-[#1abc9c] hover:border-[#1abc9c]">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;