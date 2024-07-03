import { useState } from 'react';
import logoDark from '../assets/logo dark.png'
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <header className="py-4 text-primary">
                <div className="flex justify-between h-16 mx-auto">
                    <div className='flex items-center p-2'>
                        <img src={logoDark} alt="" className='w-20 h-20 object-contain' />
                    </div>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-blue-600 border-blue-600">Home</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Services</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">About us</a>
                        </li>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <button className="self-center flex gap-2 items-center px-4 py-2 font-semibold rounded bg-transparent border border-primary">
                            Appointment <GoArrowUpRight />
                        </button>
                    </div>
                    <button className="p-4 flex lg:hidden text-4xl absolute right-0 z-10"
                        onClick={() => setOpen(!open)}
                    >

                        {open ? <IoMdClose /> :
                            <RxHamburgerMenu />}
                    </button>

                    {open &&
                        (
                            <div className='absolute -right-5 md:-left-28 h-screen bg-teal-100 w-screen transition ease-out duration-100 transform'>
                                {/* hidden lg: */}
                                <ul className="space-y-5 flex flex-col items-center absolute left-44 md:left-96 top-52 text-2xl">
                                    <li className="flex">
                                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-blue-600 border-blue-600">Link</a>
                                    </li>
                                    <li className="flex">
                                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                                    </li>
                                    <li className="flex">
                                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                                    </li>
                                    <li className="flex">
                                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                                    </li>
                                </ul>
                                {/* hidden lg: */}
                                <div className="flex items-center absolute flex-shrink-0 top-[550px] left-[170px] md:left-[380px] gap-3 border border-teal-500 p-2 rounded-full">

                                    <button className="self-center px-4 py-3 font-semibold rounded-full bg-gradient-to-r from-green-400 to-teal-500 text-gray-50 flex items-center gap-1 text-sm">Get Quote

                                    </button>
                                </div>
                            </div>
                        )}
                </div>
            </header>
        </div>
    );
};

export default Navbar;