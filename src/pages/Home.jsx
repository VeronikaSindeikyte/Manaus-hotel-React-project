import { NavLink } from 'react-router-dom';
import './pagesCSS/Home.css';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Home = () => {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });
    return (
        <div className="home">
            <div className="first-block">
                <img src="/images/first-block/first-block.png" alt="" />
                <div className="text">
                    <h2>Welcome to Manaus Hotel:</h2>
                    <p>Your Gateway to Unmatched Comfort and Luxury</p>
                    <nav className='home-nav'>
                        <NavLink to="contact" className="contact-us-button">CONTACT US</NavLink>
                        <NavLink to="bookings" className="bookings-button">BOOKINGS</NavLink>
                    </nav>
                </div>
            </div>


            <div className='second-block'>
                <div className='second-block-content'>
                    <div className='second-block-text'>
                        <h2><strong>Explore</strong> our Hotel</h2>
                        <p>Immerse Yourself in Luxury Amidst Natures Tranquil Embrace</p>
                    </div>
                    <div className='second-block-images'>
                        <img src="/images/second-block/image.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='third-block'>
                <div className='third-block-content'>
                    <div className='third-block-text'>
                        <p>Do you like it ? Book Apartment now !</p>
                        <nav className='home-nav'>
                            <NavLink to="bookings">BOOK APARTMENT</NavLink>
                        </nav>
                    </div>
                    <div className='third-block-images'>
                        <img src="/images/third-block/image.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='fourth-block'>
                <div className='fourth-block-content'>
                    <div className='fourth-block-text'>
                        <h2>Explore <strong>nearby us</strong></h2>
                        <p>Uncover Local Gems and Nearby Adventures to Enhance Your Experience.</p>
                    </div>
                    <div className="fourth-block-carousel">
                        {/* Fancybox Gallery */}
                        <a href="/images/fourth-block/image1.png" data-fancybox="gallery" data-caption="Nearby Attraction 1">
                            <img src="/images/fourth-block/image1.png" alt="Nearby Attraction 1" />
                        </a>
                        <a href="/images/fourth-block/image2.png" data-fancybox="gallery" data-caption="Nearby Attraction 2">
                            <img src="/images/fourth-block/image2.png" alt="Nearby Attraction 2" />
                        </a>
                        <a href="/images/fourth-block/image3.png" data-fancybox="gallery" data-caption="Nearby Attraction 3">
                            <img src="/images/fourth-block/image3.png" alt="Nearby Attraction 3" />
                        </a>
                        <a href="/images/fourth-block/image4.jpg" data-fancybox="gallery" data-caption="Nearby Attraction 4">
                            <img src="/images/fourth-block/image4.jpg" alt="Nearby Attraction 4" />
                        </a>
                        <a href="/images/fourth-block/image5.jpg" data-fancybox="gallery" data-caption="Nearby Attraction 5">
                            <img src="/images/fourth-block/image5.jpg" alt="Nearby Attraction 5" />
                        </a>
                        <a href="/images/fourth-block/image6.jpg" data-fancybox="gallery" data-caption="Nearby Attraction 6">
                            <img src="/images/fourth-block/image6.jpg" alt="Nearby Attraction 6" />
                        </a>
                        <a href="/images/fourth-block/image7.jpg" data-fancybox="gallery" data-caption="Nearby Attraction 7">
                            <img src="/images/fourth-block/image7.jpg" alt="Nearby Attraction 7" />
                        </a>
                        <a href="/images/fourth-block/image8.jpg" data-fancybox="gallery" data-caption="Nearby Attraction 8">
                            <img src="/images/fourth-block/image8.jpg" alt="Nearby Attraction 8" />
                        </a> 
                    </div>
                    
                </div>

            </div>

        </div>
    );
};

export default Home;