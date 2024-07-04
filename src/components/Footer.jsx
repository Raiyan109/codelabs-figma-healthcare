import logo from '../assets/logo light.png'
import fb from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import yt from '../assets/youtube.png'
import insta from '../assets/insta.png'
const Footer = () => {
    return (
        <>
            <footer className="relative z-10 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] flex justify-center items-center bg-primary">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                            <div className="mb-10 w-full">
                                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                                    <img
                                        src={logo}
                                        alt="logo"
                                        className="max-w-full dark:hidden"
                                    />
                                    <img
                                        src={logo}
                                        alt="logo"
                                        className="max-w-full hidden dark:block"
                                    />
                                </a>
                                <p className="mb-7 text-white/60 text-sm max-w-[220px]">
                                    123 Main Street Anytown, USA Postal Code: 12345

                                </p>
                                <p className="mb-7 text-white/60 text-sm max-w-[220px]">

                                    Support: support@oyolloo.com
                                    (Available : 10:00am to 07:00pm)
                                </p>

                            </div>
                        </div>

                        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 lg:grid-cols-3">
                            <div className="">
                                <ul className="space-y-3 text-white/60">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Home</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">About us</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Success Page</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Terms and Conditions</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <ul className="space-y-3 text-white/60">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Services</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Scheduling</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Contact us</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">
                                            Patient Portal
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-white/60 space-y-8">
                                <div className='space-y-3'>
                                    <h1>Follow us</h1>
                                    <div className='flex items-center gap-4'>
                                        <img src={fb} alt="" />
                                        <img src={insta} alt="" />
                                        <img src={linkedin} alt="" />
                                        <img src={yt} alt="" />
                                    </div>
                                </div>
                                <h1>@docplus 2024</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;