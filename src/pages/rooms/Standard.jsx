import { NavLink } from 'react-router-dom';

const Standard = () => {
    return (
        <div className="standard-room">
            <h2>Standard Room</h2>
            <img src="/images/Bookings/Rooms/standard.png" alt="standard-room" />
            <p>Our Standard Room is the perfect balance of comfort and affordability, offering a pleasant stay without compromising on essential amenities. Ideal for solo travelers or couples, this room includes:</p>
            <ul>
                <li><strong>Comfortable Bedding:</strong> A queen-sized bed with soft linens and fluffy pillows to ensure a restful nights sleep.</li>
                <li><strong>Functional Workspace:</strong> A small desk with a chair and reliable high-speed internet, ideal for guests who need to catch up on work.</li>
                <li><strong>Flat-Screen TV:</strong> A 32-inch TV with access to local channels and a selection of streaming services for your entertainment.</li>
                <li><strong>Convenient Storage:</strong> A wardrobe and drawers for storing your clothing and personal items, plus a small safe for valuables.</li>
                <li><strong>Modern Bathroom:</strong> A clean and tidy bathroom with a shower, fresh towels, and basic toiletries.</li>
                <li><strong>Mini Fridge:</strong> A compact minibar stocked with snacks and drinks for added convenience.</li>
            </ul>
            <p>Perfect for travelers who are looking for value without sacrificing quality, our Standard Room offers everything you need for a comfortable and enjoyable stay. Whether youre here for business or leisure, we strive to make your experience memorable.</p>
            <nav className='room-nav'>
                <NavLink to="bookings">BOOK APARTMENT</NavLink>
            </nav>
        </div>
    );
};

export default Standard;