import { NavLink, Outlet } from 'react-router-dom'
import './RoomLyout.css'


const RoomLyout = () => {
    return (
        <div className="room-layout">
            <h2>Information about rooms:</h2>
            <p>Choose the room that suits you best:</p>
            <nav>
                <NavLink to="standard">Standard Room</NavLink>
                <NavLink to="superior">Superior Room</NavLink>
                <NavLink to="deluxe">Deluxe Room</NavLink>
                <NavLink to="junior">Junior Suite</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default RoomLyout