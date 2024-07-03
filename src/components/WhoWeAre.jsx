import bg from '../assets/who-we-are.png'
import { GoArrowUpRight } from "react-icons/go";
const WhoWeAre = () => {
    return (
        <div className="py-20 flex flex-col md:flex-row justify-center items-center">
            <div className="flex-1 space-y-5">
                <div className='capsule'>
                    Who we are
                </div>
                <h1 className='section-headings'>We Help To Get Soultions</h1>
                <p className='section-paragraphs'>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <button className='accent-button'>Load more
                    <GoArrowUpRight />
                </button>
            </div>
            <div className="flex-1 relative">
                <img src={bg} alt="" />
                <div className='bg-secondary text-white w-80 rounded-3xl py-14 px-4 absolute -bottom-5 -left-24 space-y-3  flex flex-col justify-center'>
                    <h1 className='text-xl'>Our mission is simple</h1>
                    <p className='text-sm text-white/80 max-w-[280px]'>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;