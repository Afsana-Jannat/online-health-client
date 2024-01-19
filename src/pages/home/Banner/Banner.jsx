
const Banner = () => {
    return (
        <div className="carousel mt-4
         lg:h-[600px] md:h-[400px] w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/surprised-doctor-physician-pointing-fingers-left-looking-logo-banner-showing-clinic-advertise_1258-127424.jpg?w=1380&t=st=1705657634~exp=1705658234~hmac=2f07433f10d2c8afd19913863fb6e1dba7b3b22d5bb2d1932bbd9548fe186ab7"
                    className="w-full object-cover h-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/covid-19-coronavirus-disease-healthcare-workers-concept-close-up-confident-professional-female-doctor-nurse-glasses-scrubs-standing-white-background-cross-arms_1258-84300.jpg?w=1380&t=st=1705657796~exp=1705658396~hmac=6514a9979be9f23f6df2237f58e95a142d8f82345b8da9f96f59a7b72a1d023d"
                    className="w-full object-cover h-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/medical-workers-healthcare-covid-vaccination-concept-attractive-cheerful-female-nurse-doctor_1258-92289.jpg?w=1380&t=st=1705657961~exp=1705658561~hmac=ce21d7df6c6623f1f93db653e0243120e28326fb9648ae969268ebf5cf4a3d51" className="w-full object-cover h-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;