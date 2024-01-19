
const Banner = () => {
    return (
        <div>
            <div className="hero h-[300px] md:h-[620px]"
                style={{ backgroundImage: 'url(https://i.ibb.co/zfS9gN2/doctor-medical-background-24834402.jpg)' }}>
                <div className="bg-opacity-60"></div>
                <div className="text-center">
                    <div className="max-w-md">
                        <h1 className="text-2xl md:text-5xl text-slate-600  font-semibold">
                            Doctors Details
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;