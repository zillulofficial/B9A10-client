import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const AllCrafts = () => {
    const [allItems, setAllItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allProduct/')
            .then(res => res.json())
            .then(data => {
                setAllItems(data)
            })
    }, [])
    return (
        <div className="mb-16 mt-16 container mx-auto">
            {
                allItems.map(item => <div key={item._id}>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>
                                {/* row 1 */}
                                <tr className="mb-20">
                                    <th className="roboto font-extrabold text-5xl flex items-center text-slate-400">.</th>
                                    <td className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask rounded-xl w-16 h-16">
                                                    <img src={item.photoURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                                <div className="text-sm opacity-50">{item.subName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-start">
                                        <div>
                                            <div className="roboto flex items-center gap-1 mb-2"><FaStar className="text-orange-600"></FaStar>{item.rating}</div>
                                            <div className="text-sm opacity-50 roboto flex items-center gap-1">{item.price} <TbCurrencyTaka className="text-lg text-green-700"></TbCurrencyTaka></div>
                                        </div>
                                    </td>
                                    <td className="">{item.email}</td>
                                    <th className=" flex justify-end">
                                        <Link to={`/viewDetails/${item._id}`}><button className="btn border-none bg-[#4f7942b4] text-white hover:text-slate-400 hover:bg-[#4f79424d]">View Details</button></Link>
                                    </th>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>)
            }

        </div>
    );
};

export default AllCrafts;