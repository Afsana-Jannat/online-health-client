import Footer from "../footer/Footer";


const Doctors = () => {
    return (
        <>
            <div className="hero h-[170px] md:h-[240px]"
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
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-10 max-w-screen-xl mx-auto'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://wpthemesgrid.com/themes/medikit/img/team1.jpg" alt="Shoes" /></figure>
                    <div className="card-body  text-center bg-white">
                        <h2 className="text-black">Neurosurgeon</h2>
                        <p className="text-black text-3xl">Collis Molate</p>

                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://wpthemesgrid.com/themes/medikit/img/team2.jpg" alt="Shoes" /></figure>
                    <div className="card-body  text-center bg-white">
                        <h2 className="text-black">Neurosurgeon</h2>
                        <p className="text-black text-3xl">Collis Molate</p>

                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://wpthemesgrid.com/themes/medikit/img/team2.jpg" alt="Shoes" /></figure>
                    <div className="card-body  text-center bg-white">
                        <h2 className="text-black">Neurosurgeon</h2>
                        <p className="text-black text-3xl">Collis Molate</p>

                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://wpthemesgrid.com/themes/medikit/img/team4.jpg" alt="Shoes" /></figure>
                    <div className="card-body  text-center bg-white">
                        <h2 className="text-black">Neurosurgeon</h2>
                        <p className="text-black text-3xl">Collis Molate</p>

                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://wpthemesgrid.com/themes/medikit/img/team1.jpg" alt="Shoes" /></figure>
                    <div className="card-body  text-center bg-white">
                        <h2 className="text-black">Neurosurgeon</h2>
                        <p className="text-black text-3xl">Collis Molate</p>

                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://wpthemesgrid.com/themes/medikit/img/team2.jpg" alt="Shoes" /></figure>
                    <div className="card-body  text-center bg-white">
                        <h2 className="text-black">Neurosurgeon</h2>
                        <p className="text-black text-3xl">Collis Molate</p>

                    </div>
                </div>
            </div>
            <div className="hero mt-12 py-10 bg-[#EDF2FF]">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-2xl text-black">
                            Sign up for newsletter</h1>
                        <p className="py-6 text-slate-900">Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,homero alterum.</p>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <input type="email" placeholder="email" className="input input-bordered bg-white" required />
                            <div>
                                <button className="btn bg-[#1A76D1]">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Doctors;