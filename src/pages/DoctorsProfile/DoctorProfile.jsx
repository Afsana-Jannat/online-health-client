import Footer from "../footer/Footer";


const DoctorProfile = () => {
    return (
        <>
            <div className="hero mb-8 h-[170px] md:h-[240px]"
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
            <div className="mb-8 w-[95%] sm:w-[90%] md:w-[80%] lg:[70%] mx-auto lg:flex flex-row gap-20">
                <div className="flex flex-col rounded-xl mb-8 w-full lg:w-[30%] border
             border-gray-200">
                    <div className="lg:h-[500px] md:h-[800px]">
                        <img className="object-cover h-full w-full" src="https://wpthemesgrid.com/themes/medikit/img/doctor-detail.jpg"
                            alt="" />
                    </div>
                    <div className="text-gray-600 mt-8 ml-12">
                        <h1 className="text-xl font-bold">Contact info</h1>
                        <h1 className="mt-2">Call: +01 489 2394 23</h1>
                        <h1 className="mt-2">afsana@gamil.com</h1>
                        <h1 className="mt-2">4th Floor, 408 No chamber</h1>
                        <h1 className="text-xl font-bold mt-6">Working hours</h1>
                        <div className="grid grid-cols-2 gap-16">
                            <div>
                                <h1 className="mt-2">Monday - Fridayp</h1>
                                <h1 className="mt-2">Saturday</h1>
                                <h1 className="mt-2">Monday - Thusday</h1>
                                <h1 className="mt-2">Monday - Friday</h1>
                            </div>
                            <div>
                                <h1 className="mt-2">8.00-20.00</h1>
                                <h1 className="mt-2">9.00-18.30</h1>
                                <h1 className="mt-2">9.00-15.00</h1>
                                <h1 className="mt-2 mb-6">8.00-20.00</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 w-full px-[7%] lg:w-[60%]">
                    <h1 className="text-3xl font-semibold text-black">Dr. Sarah Taylor</h1>
                    <h1 className="mt-2 mb-4">Neurosurgeon.
                        <br />
                        MBBS in Neurology, PHD in Neurosurgeon.</h1>
                    <h1 className="text-3xl font-semibold mb-4 text-blue-600">Biography</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.

                        <br /> <br />
                        Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <h1 className="text-3xl font-semibold mb-4 mt-4
                         text-blue-600">Education</h1>
                    <p>
                        PHD degree in Neorology at University of Mediserv (2006)
                        <br /> Master of Neoro Surgery at University of Mediserv (2002)
                        <br /> MBBS degree in Neurosciences at University of Mediserv (2002)
                        <br /> Higher Secondary Certificate at Mediserv collage (1991)
                    </p>
                    <h1 className="text-3xl font-semibold mb-4 mt-4
                         text-blue-600">Research Interests:</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In addition to an illustrious career in clinical practice, Dr.Doctors Last Name has dedicated substantial time to advancing the field of neurology through groundbreaking research. Their primary research interests include mention specific research areas, e.g., neurodegenerative diseases, neuro-oncology, or neurological disorders in children.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default DoctorProfile;