import bg from '../assets/first-appointment-bg.png'
import logoLight from '../assets/logo light.png'
import { GoArrowUpRight } from "react-icons/go";

const FirstAppointment = () => {
    return (
        <div className="relative ">
            <div
                className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/70 rounded-[70px]"
            ></div>
            <img src={bg} alt="" className="w-full rounded-[70px]" />
            <div className='absolute top-44 space-y-7 px-20 hidden md:block'>
                <h1 className='text-5xl text-white max-w-sm leading-snug font-bold'>Get Your
                    First Appointment
                    at 50% Off!</h1>
                <div className='flex items-center gap-6'>
                    <button className='accent-button rounded-xl'>Appointment
                        <GoArrowUpRight />
                    </button>
                    <button className='accent-button bg-transparent border rounded-xl text-white'>Load more
                        <GoArrowUpRight />
                    </button>
                </div>
            </div>
            <div className='absolute top-12 right-14'>
                <img src={logoLight} alt="" className="hidden md:block" />
            </div>
        </div>

    );
};

export default FirstAppointment;