import Banner from '../components/Banner';
import Comprehensive from '../components/Comprehensive';
import Faq from '../components/Faq';
import FirstAppointment from '../components/FirstAppointment';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Service from '../components/Service';
import Testimonial from '../components/Testimonial';
import WhoWeAre from '../components/WhoWeAre';

const Home = () => {
    return (
        <div>
            <div className='bg-[#d9effa] bg-hero-pattern px-3 md:px-48'>
                <Navbar />
                <Banner />
                <Comprehensive />
                <WhoWeAre />
                <Service />
                <Testimonial />
                <Faq />
                <FirstAppointment />
            </div>
            <Footer />
        </div>
    );
};

export default Home;