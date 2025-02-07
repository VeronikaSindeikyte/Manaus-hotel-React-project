import { NavLink, Outlet } from 'react-router-dom';
import './RootLayout.css';

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <img src="/images/Logo.png" alt="logo" />
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About Us</NavLink>
                    <NavLink to='bookings'>Bookings</NavLink>
                    <NavLink to='rooms'>Rooms</NavLink>
                    <NavLink to='contact'>Contact</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className='footer-content'>
                    <div className='footer-newsletter'>
                        <h3>Join our Hotel newsletter with news and sales</h3>
                        <p>Donec et scelerisque quam. Aliquam varius et sapien.</p>
                        <form>
                            <input type='email' placeholder='Enter your email' />
                            <button>Submit</button>
                        </form>
                        <div className='icons'>
                                <a href='https://www.youtube.com/'><img src='/images/icons/youtube.png' alt='youtube' /></a>
                                <a href='https://www.facebook.com/'><img src='/images/icons/facebook.png' alt='facebook' /></a>
                                <a href='https://www.instagram.com/'><img src='/images/icons/instagram.png' alt='instagram' /></a>
                                <a href='https://www.twitter.com/'><img src='/images/icons/tik-tok.png' alt='twitter' /></a>
                            </div>
                        <p className="footer-bottom">© 2025 Manaus Hotel. All Rights Reserved.</p>
                    </div>
                    <div className="footer-links">
                        <div>
                            <h4>Booking</h4>
                            <ul>
                                <li><NavLink to='/rooms/standard'>Standard Room</NavLink></li>
                                <li><NavLink to='/rooms/superior'>Superior Room</NavLink></li>
                                <li><NavLink to='/rooms/deluxe'>Deluxe Room</NavLink></li>
                                <li><NavLink to='/rooms/junior'>Junior Suite</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Hotel</h4>
                            <ul>
                                <li> <NavLink to='about'>About Us</NavLink></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RootLayout;