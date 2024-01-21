import { FaPhone } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoPhonePortraitSharp } from "react-icons/io5";
const PatientProfile = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-6 flex p-8
         flex-row bg-[#F6F6F6]">
            <div>
                <div className="flex flex-col shadow bg-white border rounded-xl p-6 pr-8 pl-8 border-gray-200">
                    <div>
                        <div className="flex flex-row gap-5">
                            <div className="w-[60px] h-[60px] rounded-full">
                                <img className="rounded-full object-cover w-full h-full" src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="" /></div>
                            <div>
                                <h1 className="mt-4 font-bold text-xl text-black">Ms.Jane Rink</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="mt-4 mb-2 font-bold text-xl text-black">Contact Details:</h1>
                            <ul className="space-y-2">
                                <li className="flex justify-between items-center"> <FaPhone /> 07844-23454</li>
                                <li className="flex justify-between items-center"> <IoPhonePortraitSharp /> 09834-23211</li>
                                <li className="flex justify-between items-center"> <IoIosMailOpen /> jkanerink@gmail.com</li>
                                <li className="flex justify-between items-center"> <FaHome /> 15 Treayan Aventur,</li>
                                Dhaka,Sw12
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-5 shadow bg-white border rounded-xl p-6 pr-8 pl-8 border-gray-200">
                    <div>
                        <h1 className="mt-4 mb-2 font-bold text-xl text-black">Latest Lab Results: </h1>
                        <ul className="space-y-2">
                            <li className="flex justify-between items-center">Ovarian Scan, 25 Nov, 2.7 MB</li>
                            <li className="flex justify-between items-center">XYV Blood Tests, 0.7 MB</li>
                            <li className="flex justify-between items-center">Blood Tests XYz, 0.7 MB</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                hel;o
            </div>
        </div>
    );
};

export default PatientProfile;