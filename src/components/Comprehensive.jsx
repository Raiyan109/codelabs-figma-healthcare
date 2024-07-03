import satisfaction from '../assets/satisfaction-rate.png'
import certified from '../assets/certified.png'
import star from '../assets/fi-sr-star.png'
import patients from '../assets/patients.png'
import money from '../assets/money.png'
import video from '../assets/video.png'
const Comprehensive = () => {
    return (
        <div className="flex justify-center items-center">
            <div>
                <h1 className="text-primary font-bold text-5xl">Comprehensive Care for Every Patient</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    <div className="text-primary bg-white rounded-2xl p-3 space-y-3">
                        <h1 className='text-primary font-semibold text-3xl'>90%</h1>
                        <p className='text-secondary text-xs max-w-[100px]'>Patient satisfaction rate, reflecting our commitment.</p>
                        <div className='flex justify-center items-center'>
                            <img src={satisfaction} alt="" className='w-20 h-20 object-contain' />
                        </div>
                    </div>
                    <div className="text-primary bg-offWhite rounded-2xl p-3 space-y-1 h-44">
                        <h1 className='text-primary font-semibold text-3xl'>500+</h1>
                        <p className='text-secondary text-xs max-w-[100px]'>Board-certified doctors</p>
                        <div className='flex justify-end'>
                            <img src={certified} alt="" className='w-16 h-16 object-contain' />
                        </div>
                    </div>
                    <div className="text-primary bg-white rounded-2xl p-3 space-y-3">
                        <div className='flex items-center gap-2'>
                            <h1 className='text-primary font-semibold text-3xl'>4.8</h1>
                            <img src={star} alt="" className='w-6 h-6' />
                        </div>
                        <p className='text-secondary text-xs max-w-[100px]'>Over 20,000 Patient</p>
                        <div className='flex justify-center items-center'>
                            <img src={patients} alt="" className='w-20 h-20 object-contain' />
                        </div>
                    </div>
                    <div className="text-primary bg-white rounded-2xl p-3 space-y-3">
                        <h1 className='text-primary font-semibold text-3xl'>$5000</h1>
                        <p className='text-secondary text-xs max-w-[100px]'>Money spend
                            for poor patient</p>
                        <div className='flex justify-center items-center'>
                            <img src={money} alt="" className='w-20 h-20 object-contain' />
                        </div>
                    </div>
                    <div className="text-primary bg-white rounded-2xl p-3 space-y-3">
                        <h1 className='text-primary font-semibold text-3xl'>50+</h1>
                        <p className='text-secondary text-xs max-w-[100px]'>Free lession video
                            for patient</p>
                        <div className='flex justify-center items-center'>
                            <img src={video} alt="" className='w-20 h-20 object-contain' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comprehensive;