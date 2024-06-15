
const Gallery = () => {
    return (
        <div className="mb-32">
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mx-auto container">
                <div>
                    <img className="transition-all hover:cursor-pointer hover:scale-95 duration-500 ease" src="https://i.postimg.cc/9QYVp3y2/gallery.jpg" alt="" />
                </div>
                <div>
                    <div>
                        <img className="transition-all hover:cursor-pointer hover:scale-95 duration-500 ease mb-6" src="https://i.postimg.cc/Gp3RgMjy/gallery2.jpg" alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                        <img className="transition-all hover:cursor-pointer hover:scale-95 duration-500 ease" src="https://i.postimg.cc/5tPVhwPk/gallery3.jpg" alt="" />
                        <img className="transition-all hover:cursor-pointer hover:scale-95 duration-500 ease" src="https://i.postimg.cc/zBVr8V6D/gallery4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;