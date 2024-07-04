import Slider from 'react-slick'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from '../assets/Ellipse 10(1).png'
import avatar2 from '../assets/Ellipse 10(2).png'
import avatar3 from '../assets/Ellipse 10.png'
import star from '../assets/5-star.png'
const data = [
    {
        heading: 'Expertise and Compassion Combined',
        paragraph: 'I cant thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.',
        avatar: avatar1,
        name: 'Sarah D',
        title: 'IT Professional',
    },
    {
        heading: 'Life-Saving Care, Life-Changing Experience',
        paragraph: 'My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.',
        avatar: avatar2,
        name: 'Michael R',
        title: 'Business Executive',
    },
    {
        heading: 'A Partner in Health and Wellness',
        paragraph: 'As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, theyve become my trusted partner in health and',
        avatar: avatar3,
        name: 'David S',
        title: 'Lawyer',
    },
]
const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="py-20 space-y-5">
            <div className="">
                <div className='capsule'>
                    Testimonial
                </div>
                <h1 className='section-headings'>What they say about us</h1>
            </div>
            {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 */}
            <div className="">
                <div className='mt-10'>
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div key={d.name} className="bg-offWhite p-5 flex flex-col gap-5 rounded-3xl space-y-2 h-56">
                                <h1 className='text-2xl font-semibold text-primary max-w-sm leading-tight'>{d.heading}</h1>
                                <p className='text-sm text-primary font-light max-w-sm'>{d.paragraph}</p>
                                <div className='flex items-center gap-3'>
                                    <img src={d.avatar} alt="" />
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='text-sm'><strong className='text-primary'>{d.name}</strong>, {d.title}</h1>
                                        <div>
                                            <img src={star} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;