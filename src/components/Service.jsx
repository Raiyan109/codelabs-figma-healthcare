import { GoArrowUpRight } from "react-icons/go";
import advanced from '../assets/service-advanced.png'
import online from '../assets/service-online.png'
import consultancy from '../assets/service-consultency.png'

const Service = () => {
    return (
        <div className="py-20">
            <div className="bg-offWhite grid grid-cols-1 lg:grid-cols-2 gap-5 p-10 rounded-3xl">
                <div className="space-y-5">
                    <div className='capsule w-24'>
                        Services
                    </div>
                    <h1 className='section-headings'>Empowering Health, Enriching Lives</h1>
                    <p className='section-paragraphs max-w-lg'>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                    </p>
                    <button className='accent-button'>Appointment
                        <GoArrowUpRight />
                    </button>
                </div>
                <div className="relative">
                    <img src={advanced} alt="" className="rounded-3xl w-full" />
                    <div className='bg-primary/60 text-white w-80 rounded-3xl py-10 px-4 absolute bottom-5 left-8 space-y-3  flex flex-col justify-center'>
                        <h1 className='text-xl'>Advanced Technology</h1>
                        <p className='text-sm text-white/80 max-w-[280px]'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    </div>
                </div>
                <div className="relative">
                    <img src={online} alt="" className="rounded-3xl w-full" />
                    <div className='bg-primary/60 text-white w-80 rounded-3xl py-10 px-4 absolute bottom-5 left-8 space-y-3  flex flex-col justify-center'>
                        <h1 className='text-xl'>Online Doctor Meet</h1>
                        <p className='text-sm text-white/80 max-w-[280px]'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    </div>
                </div>
                <div className="relative">
                    <img src={consultancy} alt="" className="rounded-3xl w-full" />
                    <div className='bg-primary/60 text-white w-80 rounded-3xl py-10 px-4 absolute bottom-5 left-8 space-y-3  flex flex-col justify-center'>
                        <h1 className='text-xl'>Consultancy your health</h1>
                        <p className='text-sm text-white/80 max-w-[280px]'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;