import { NavLink } from 'react-router-dom';

const Junior = () => {
    return (
        <div className="junior-suite">
            <h2>Junior Suite</h2>
            <img src="/images/Bookings/Rooms/junior.png" alt="junior-room" />
            <p>Our Junior Suite is specially designed for young guests, offering a vibrant and fun atmosphere while maintaining comfort and relaxation. Ideal for ages 6-16, this room features:</p>
            <ul>
                <li><strong>Spacious Design:</strong> Plenty of room to move around with a fun and colorful interior.</li>
                <li><strong>Interactive Entertainment:</strong> A smart TV with access to popular kids channels and games.</li>
                <li><strong>Cozy Sleeping Area:</strong> A comfortable bed with soft linens and a pillow menu to ensure a great nights sleep.</li>
                <li><strong>Gaming Zone:</strong> Equipped with a small table, chairs, and board games for entertainment.</li>
                <li><strong>Mini Fridge:</strong> Stocked with snacks and drinks tailored to juniors tastes, such as juice boxes, fruit, and chocolate bars.</li>
                <li><strong>Safety Features:</strong> Childproofing elements including secure windows and soft corner protectors.</li>
            </ul>
            <p>Special amenities include access to our exclusive kids club, a variety of junior-friendly activities, and a welcome kit with toys and games. Book your stay now for a memorable and enjoyable experience!</p>
            <nav className='room-nav'>
                <NavLink to="bookings">BOOK APARTMENT</NavLink>
            </nav>
        </div>
    )
}

export default Junior;