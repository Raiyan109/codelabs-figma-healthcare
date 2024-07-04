import { useState } from "react";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";


const Faq = () => {
    const [accordionOpen1, setAccordionOpen1] = useState(false);
    const [accordionOpen2, setAccordionOpen2] = useState(false);
    const [accordionOpen3, setAccordionOpen3] = useState(false);
    const [accordionOpen4, setAccordionOpen4] = useState(false);
    const [accordionOpen5, setAccordionOpen5] = useState(false);
    return (
        <div className="py-20 space-y-5">
            <div className="">
                <div className='capsule w-16 h-10'>
                    Faq
                </div>
                <h1 className='section-headings leading-tight max-w-2xl'>Frequntly Asked Question</h1>
            </div>
            <div>
                <div className="">
                    <button
                        onClick={() => setAccordionOpen1(!accordionOpen1)}
                        className="flex justify-between w-full bg-offWhite py-5 px-12 rounded-t-2xl"
                    >
                        <span className="text-2xl text-primary font-semibold"> What are your office hours?</span>
                        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                        {/* <svg
                        className="fill-indigo-500 shrink-0 ml-8"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                                }`}
                        />
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                                }`}
                        />
                    </svg> */}
                        {accordionOpen1 ? <MdOutlineKeyboardArrowDown size={30} color="gray" /> : <MdOutlineKeyboardArrowUp size={30} color="gray" />}

                    </button>
                    <div
                        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm rounded-b-2xl ${accordionOpen1
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        <div className="overflow-hidden shadow-2xl p-5 rounded-b-2xl bg-white px-12">
                            <h1 className=" text-lg text-gray-500">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button
                        onClick={() => setAccordionOpen2(!accordionOpen2)}
                        className="flex justify-between w-full bg-offWhite py-5 px-12 rounded-t-2xl"
                    >
                        <span className="text-2xl text-primary font-semibold"> How can I schedule an appointment?</span>
                        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                        {/* <svg
                        className="fill-indigo-500 shrink-0 ml-8"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                                }`}
                        />
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                                }`}
                        />
                    </svg> */}
                        {accordionOpen2 ? <MdOutlineKeyboardArrowDown size={30} color="gray" /> : <MdOutlineKeyboardArrowUp size={30} color="gray" />}

                    </button>
                    <div
                        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm rounded-b-2xl ${accordionOpen2
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        <div className="overflow-hidden shadow-2xl p-5 rounded-b-2xl bg-white px-12">
                            <h1 className=" text-lg text-gray-500">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button
                        onClick={() => setAccordionOpen3(!accordionOpen3)}
                        className="flex justify-between w-full bg-offWhite py-5 px-12 rounded-t-2xl"
                    >
                        <span className="text-2xl text-primary font-semibold">Do you accept insurance?</span>

                        {accordionOpen3 ? <MdOutlineKeyboardArrowDown size={30} color="gray" /> : <MdOutlineKeyboardArrowUp size={30} color="gray" />}

                    </button>
                    <div
                        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm rounded-b-2xl ${accordionOpen3
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        <div className="overflow-hidden shadow-2xl p-5 rounded-b-2xl bg-white px-12">
                            <h1 className=" text-lg text-gray-500">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button
                        onClick={() => setAccordionOpen5(!accordionOpen5)}
                        className="flex justify-between w-full bg-offWhite py-5 px-12 rounded-t-2xl"
                    >
                        <span className="text-2xl text-primary font-semibold">Do you offer telemedicine appointments?</span>
                        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                        {/* <svg
                        className="fill-indigo-500 shrink-0 ml-8"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                                }`}
                        />
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                                }`}
                        />
                    </svg> */}
                        {accordionOpen5 ? <MdOutlineKeyboardArrowDown size={30} color="gray" /> : <MdOutlineKeyboardArrowUp size={30} color="gray" />}

                    </button>
                    <div
                        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm rounded-b-2xl ${accordionOpen5
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        <div className="overflow-hidden shadow-2xl p-5 rounded-b-2xl bg-white px-12">
                            <h1 className=" text-lg text-gray-500">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button
                        onClick={() => setAccordionOpen4(!accordionOpen4)}
                        className="flex justify-between w-full bg-offWhite py-5 px-12 rounded-t-2xl"
                    >
                        <span className="text-2xl text-primary font-semibold">What should I bring to my appointment?</span>

                        {accordionOpen4 ? <MdOutlineKeyboardArrowDown size={30} color="gray" /> : <MdOutlineKeyboardArrowUp size={30} color="gray" />}

                    </button>
                    <div
                        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm rounded-b-2xl ${accordionOpen4
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        <div className="overflow-hidden shadow-2xl p-5 rounded-b-2xl bg-white px-12">
                            <h1 className=" text-lg text-gray-500">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;