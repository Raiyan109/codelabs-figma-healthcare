import { useState } from "react";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";


const Faq = () => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div className="py-20 space-y-5">
            <div className="">
                <div className='capsule w-16 h-10'>
                    Faq
                </div>
                <h1 className='section-headings leading-tight max-w-2xl'>Frequntly Asked Question</h1>
            </div>
            <div className="py-2">
                <button
                    onClick={() => setAccordionOpen(!accordionOpen)}
                    className="flex justify-between w-full bg-offWhite p-3 rounded-t-2xl"
                >
                    <span>dfdf</span>
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
                    {accordionOpen ? <MdOutlineKeyboardArrowDown size={30} color="gray" /> : <MdOutlineKeyboardArrowUp size={30} color="gray" />}

                </button>
                <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="overflow-hidden shadow-2xl p-5 rounded-b-2xl">dfdf</div>
                </div>
            </div>
        </div>
    );
};

export default Faq;