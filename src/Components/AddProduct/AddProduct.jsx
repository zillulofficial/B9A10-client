
const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target
        const name= form.name.value
        const subName= form.subName.value
        const price= form.price.value
        const rating= form.rating.value
        const time= form.time.value
        const details= form.details.value
        const customization= form.customization.value
        const stock= form.stock.value
        const photoURL= form.photoURL.value
        
        const product= {
            name, subName, price, rating, time, details, customization, stock, photoURL
        }
        console.log(product)

        fetch(`http://localhost:5000/addProduct`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res=> res.json())
        .then(data=>console.log(data))
    }
    return (
        <div>
            <div className="bg-[#F4F3F0]  py-16 px-28">
                <div className=" text-center mb-10">
                    <h3 className="Rancho text-5xl mb-4">Add New Craft</h3>
                    <p>Welcome to the Add Craft section of MapleWhisper.com, where the essence of skilled craftsmanship meets the beauty
                        of natural wood. Here, we celebrate the art of <br className="hidden lg:block" />woodworking by bringing you an exclusive collection of handcrafted
                        items that are as unique as they are beautiful.</p>
                </div>
                <form onSubmit={handleAddProduct}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" name="name" placeholder="Enter Product Name" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Sub-Name</span>
                                </div>
                                <input type="text" name="subName" placeholder="Enter Product Sub-Name" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Price</span>
                                </div>
                                <input type="text" name="price" placeholder="Enter Product Price" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Rating</span>
                                </div>
                                <input type="text" name="rating" placeholder="Enter Product Rating" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Processing Time</span>
                                </div>
                                <input type="text" name="time" placeholder="Enter process time" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Description</span>
                                </div>
                                <input type="text" name="details" placeholder="Enter Product Details" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Customization</span>
                                </div>
                                <input type="text" name="customization" placeholder="Yes / No" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Stock Status</span>
                                </div>
                                <input type="text" name="stock" placeholder="In Stock / Made to Order" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="col-span-2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Photo</span>
                                </div>
                                <input type="text" name="photoURL" placeholder="Enter Product URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <input className="btn Rancho text-2xl text-[#331A15] bg-[#D2B48C] w-full mt-7 hover:bg-[#D2B48C60] border-none" type="submit" value="Add a Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;