import { NavLink } from 'react-router-dom';

const Superior = () => {
    return (
        <div className="superior-room">
            <h2>Superior Room</h2>
            <img src="/images/Bookings/Rooms/superior.png" alt="superior-room" />
            <p>Our Superior Room offers an upgraded experience for those seeking extra comfort, style, and sophistication. With enhanced features and luxurious touches, it is perfect for both business and leisure travelers who want something special. The room includes:</p>
            <ul>
                <li><strong>Spacious Layout:</strong> A generous 400 sq. ft. room with a comfortable seating area, perfect for both relaxation and entertaining guests.</li>
                <li><strong>King-Sized Bed:</strong> A plush king-sized bed with high-quality linens and a selection of pillows to suit every preference.</li>
                <li><strong>Upgraded Entertainment:</strong> A large flat-screen TV with a variety of premium movie channels, streaming services, and surround sound speakers for a true cinematic experience.</li>
                <li><strong>Luxury Bathroom:</strong> A beautifully designed bathroom featuring a rainfall shower, a deep soaking tub, high-end toiletries, and soft bathrobes and slippers.</li>
                <li><strong>Mini Bar and Coffee Station:</strong> A well-stocked minibar with premium beverages, along with a Nespresso machine for a quick coffee fix.</li>
                <li><strong>Work and Leisure Space:</strong> A spacious desk with ergonomic seating, high-speed internet, and ample room for meetings or productivity, along with a cozy lounge chair to unwind after a busy day.</li>
                <li><strong>Panoramic Views:</strong> Floor-to-ceiling windows offering beautiful views of the surrounding area, perfect for enjoying the sunset or cityscape.</li>
            </ul>
            <p>The Superior Room offers the perfect combination of functionality and elegance, making it an ideal choice for those who want to indulge in a little extra luxury during their stay.</p>
            <nav className='room-nav'>
                <NavLink to="bookings">BOOK APARTMENT</NavLink>
            </nav>
        </div>
    )
}

export default Superior;