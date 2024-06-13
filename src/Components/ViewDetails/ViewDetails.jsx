import { BsCurrencyDollar } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const { id } = useParams()
    const crafts = useLoaderData()

    const data = crafts.find(craft => craft._id == id)
    console.log(data);
    return (
        <div>
            <div className="mb-24 mt-8 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                    <div className="lg:col-span-2">
                        <img className="rounded-lg" src={data.photoURL} alt="" />
                    </div>
                    <div className="p-5 space-y-5">
                        <h2 className="text-4xl mb-4 Rancho text-[#406335]">{data.subName}</h2>
                        <p className="font-semibold text-[#4f7942] text-lg  border-dashed border-b-2 pb-2">{data.name}</p>
                        <div className="flex justify-between items-center mb-3">
                            <p className="flex gap-1 items-center">{data.price}<BsCurrencyDollar className="text-[#4f7942]"></BsCurrencyDollar></p>
                            <p className="flex gap-1 items-center text-[#4f7942c4] font-bold roboto justify-end"><FaStar></FaStar>{data.rating}</p>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <p className="roboto text-sm"><span className="text-lg text-[#4f7942c4] font-bold">{data.time}</span> in making</p>
                            <p className="flex items-center justify-end gap-1"><CiLocationOn className="text-xl text-[#4f7942c4]"></CiLocationOn>{data.stock}</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-[#4f7942] border-dashed border-b-2 pb-2">Description</p>
                            <p className="font-thin roboto mt-6">{data.details}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to="/"><button className="btn bg-[#4f7942b4] text-white hover:text-slate-400 hover:bg-[#4f79424d]">Go Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;