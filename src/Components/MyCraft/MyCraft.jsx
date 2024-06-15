import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaStar } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";

const MyCraft = () => {
    const loadedProducts= useLoaderData()
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`https://b9-a10-server-ashy.vercel.app/myCraft/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [user])

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://b9-a10-server-ashy.vercel.app/allProduct/${id}`,{
                    method:"DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount>0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const del= loadedProducts.filter(data=> data._id!== id)
                            setProducts(del)
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="text-center mb-16 mt-16">
                <h2 className="Rancho text-5xl mb-4">Your Added Products</h2>
                <p>Explore MapleWhisper's Add Craft section, featuring unique, handcrafted wooden decor. Discover exquisite,
                    customizable pieces crafted by skilled artisans, blending <br className="hidden lg:block" />natural beauty with timeless design for your home.</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                {
                    products.map(product => <div key={product._id}>
                        <div className="hero bg-base-200 rounded-lg p-4 transition-all hover:cursor-pointer hover:scale-95 duration-500 ease">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={product.photoURL} className="w-80 max-h-72 rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-3xl Rancho font-bold mb-4">{product.name}</h1>
                                    <p className="text-slate-500 mb-3">{product.details}</p>
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="roboto flex items-center gap-1">{product.price} <TbCurrencyTaka className="text-lg text-green-700"></TbCurrencyTaka></p>
                                        <p className="roboto flex items-center gap-1 justify-center"><FaStar className="text-orange-600"></FaStar>{product.rating}</p>
                                    </div>
                                    <p className="roboto mb-2">Availability: {product.stock}</p>
                                    <div className="mb-6 flex justify-between items-center">
                                        <p className="roboto">Preparation time: {product.time}</p>
                                        <p className="roboto">Customizable: {product.customization}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <Link to={`/viewDetails/${product._id}`}><button className="btn border-none bg-[#4f7942b4] text-white hover:text-slate-400 hover:bg-[#4f79424d]">View Details</button></Link>
                                        <div>
                                            <Link to={`/updateProduct/${product._id}`}><button className='text-lg p-2 rounded-md bg-[#3C393B] text-white'><MdEdit></MdEdit></button></Link>
                                            <button onClick={() => handleDelete(product._id)} className='text-lg p-2 rounded-md bg-[#EA4744] text-white ml-4'><MdDelete></MdDelete></button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCraft;