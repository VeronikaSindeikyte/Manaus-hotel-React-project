import { NavLink } from 'react-router-dom';

const Deluxe = () => {
    return (
        <div className="deluxe-room">
            <h2>Deluxe Room</h2>
            <img src="/images/Bookings/Rooms/deluxe.png" alt="deluxe-room" />
            <p>Our Deluxe Room offers an exquisite blend of elegance, comfort, and modern luxury. Perfect for guests who appreciate the finer things in life, this room features:</p>
            <ul>
                <li><strong>Spacious Layout:</strong> Enjoy a generous 500 sq. ft. area with a beautifully designed open floor plan, providing ample space for relaxation and work.</li>
                <li><strong>Premium Bedding:</strong> A king-sized bed with high-thread-count linens, plush pillows, and a luxurious duvet, ensuring a restful nights sleep.</li>
                <li><strong>Smart Entertainment:</strong> A large flat-screen TV with access to premium movie channels, streaming services, and surround sound for an immersive experience.</li>
                <li><strong>Elegant Work Desk:</strong> A sleek, ergonomic desk for business travelers, equipped with high-speed internet and plenty of space for laptops and documents.</li>
                <li><strong>Private Balcony:</strong> A stunning balcony with panoramic views, perfect for enjoying a morning coffee or watching the sunset.</li>
                <li><strong>Gourmet Minibar:</strong> A well-stocked minibar featuring fine wines, artisanal snacks, and a selection of refreshing beverages.</li>
                <li><strong>Luxurious Bathroom:</strong> A marble-lined bathroom with a deep soaking tub, a rainfall shower, heated floors, and premium toiletries.</li>
            </ul>
            <p>Additional amenities include 24/7 room service, a personal concierge to handle any requests, and access to the exclusive VIP lounge. Whether youre here for business or leisure, our Deluxe Room offers a truly exceptional experience.</p>
            <nav className='room-nav'>
                <NavLink to="bookings">BOOK APARTMENT</NavLink>
            </nav>
        </div>
    )
}

export default Deluxe;