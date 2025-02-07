import { NavLink as Navlink } from 'react-router-dom';
import './pagesCSS/Bookings.css';

const Bookings = () => {
    return (
        <div className="bookings">
            <div className="bookings-first-block">
            <img src="/images/bubble.png" alt="bubble" className='bubble1'/>
            <img src="/images/bubble.png" alt="bubble" className='bubble2'/>
                <div className='bookings-calendar'>
                    <h2>Rooms at Manau Hotel</h2> 
                    <img src="/images/Bookings/calendar.png" alt="calendar" />
                </div>
                
                <div className='first-block-images'>
                    <img src="/images/Bookings/first-block.png" alt="" />
                    
                </div>
            </div>

            
            <div className="rooms">
                <div className="room">
                    <div className="room-info">
                        <h3>Standard Room</h3>
                        <p>Immerse Yourself in Luxury Amidst Natures Tranquil Embrace.</p>
                        <p>147.6 € <span>/Night</span></p>
                        <nav>
                            <Navlink to="#" className='book-now'>BOOK NOW</Navlink>
                            <Navlink to="/rooms/standard" className='more-details'>MORE DETAILS</Navlink>
                        </nav>
                    </div>
                    <img src="/images/Bookings/Rooms/standard.png" alt="standard-room" />
                </div>

                <div className="room">
                    <img src="/images/Bookings/Rooms/superior.png" alt="superior-room" />
                    <div className="room-info">
                        <h3>Superior Room</h3>
                        <p>Immerse Yourself in Luxury Amidst Natures Tranquil Embrace.</p>
                        <p>196.8 € <span>/Night</span></p>
                        <nav>
                            <Navlink to="#" className='book-now'>BOOK NOW</Navlink>
                            <Navlink to="/rooms/superior" className='more-details'>MORE DETAILS</Navlink>
                        </nav>
                    </div>
                </div>

                <div className="room">
                    <div className="room-info">
                        <h3>Deluxe Room</h3>
                        <p>Immerse Yourself in Luxury Amidst Natures Tranquil Embrace.</p>
                        <p>233.7 € <span>/Night</span></p>
                        <nav>
                            <Navlink to="#" className='book-now'>BOOK NOW</Navlink>
                            <Navlink to="/rooms/deluxe" className='more-details'>MORE DETAILS</Navlink>
                        </nav>
                    </div>
                    <img src="/images/Bookings/Rooms/deluxe.png" alt="deluxe-room" />
                </div>

                <div className="room">
                    <img src="/images/Bookings/Rooms/junior.png" alt="junior-room" />
                    <div className="room-info">
                        <h3>Junior Suite</h3>
                        <p>Immerse Yourself in Luxury Amidst Natures Tranquil Embrace.</p>
                        <p>270.6 € <span>/Night</span></p>
                        <nav>
                            <Navlink to="#" className='book-now'>BOOK NOW</Navlink>
                            <Navlink to="/rooms/junior" className='more-details'>MORE DETAILS</Navlink>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookings;