import Banner from "./Banner";
import { FaPaperPlane } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { RxTimer } from "react-icons/rx";
const Home = () => {
    return (
        <div>
            <Banner></Banner>

            {/* extra info section */}
            <div className="flex flex-col md:flex-row container mx-auto justify-evenly mb-20 gap-6">
                <div className="text-center flex flex-col justify-center items-center ">
                    <FaPaperPlane className="text-4xl text-slate-300 mb-4"></FaPaperPlane>
                    <p className="roboto mb-2 font-bold text-slate-700">FREE SHIPPING</p>
                    <p>on all order over $200.00</p>
                </div>
                <div className="text-center flex flex-col justify-center items-center ">
                    <GrAnnounce className="font-bold text-4xl text-slate-300 mb-4"></GrAnnounce>
                    <p className="roboto mb-2 font-bold text-slate-700">FRIENDLY SUPPORT</p>
                    <p>24 hours per day, excluding holiday</p>
                </div>
                <div className="text-center flex flex-col justify-center items-center ">
                    <RxTimer className="font-bold text-4xl text-slate-300 mb-4"></RxTimer>
                    <p className="roboto mb-2 font-bold text-slate-700">MONEY BACK</p>
                    <p>10 days for free return and exchange</p>
                </div>
            </div>
        </div>
    );
};

export default Home;