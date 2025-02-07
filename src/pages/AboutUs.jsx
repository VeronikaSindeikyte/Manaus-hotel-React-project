import { NavLink } from 'react-router-dom'
import './pagesCSS/AboutUs.css'

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-image-block">
                <img src="/images/AboutUs/first-block/first.png" alt="" />
                <img src="/images/AboutUs/first-block/second.png" alt="" />
                <img src="/images/AboutUs/first-block/third.png" alt="" />
            </div>
            <div className="about-second-block">
                <h2>About<br></br>Manaus Hotel</h2>
                <p>Manaus Hotel, signed by AMZ Arquitetos, is located near Amazonas Theater in the historic city center of Manaus (Brazil). The basic premises for developing the project was the renovation of an old house from the early 20th Century and the construction of a new attached building in the center of the block.</p>
                <p>The old houses first floor was lowered to the street level to accommodate the hotels reception. Its walls paintings were scratched off revealing the raw conditions of the original stone arcs and bricks that supported the houses wooden beams. In the upper floor (where its old rooms once were) is now located a restaurant that kept and recovered the original wooden floor and window frames of the house</p>

                <p>For better preservation of the houses original structure, all service areas (bar, kitchen, laundry) were placed in a new building construction. Still connected to the old house, it kept its same height creating a construction continuity.</p>

                <p>Occupying the center of the block, a new building for all the hotels dormitories was placed in the corner of the lot. The remaining space was occupied by the pool and garden creating a microclimate of their own (mild and shaded) and simulating the sensation of being in the middle of a tropical rainforest. Despite the buildings contemporary lines, it still created a changing dialogue with its surrounding historic center. The proportion of the window openings follow the rhythm of the nearby constructions.</p>

                <p>Furthermore, the preservation of the local atmosphere and culture were the starting point for the interior design. The benchs and luminaires design, same use of colors, materials and preservation of original structure coverings all integrate with the old houses style. Wooden and iron structures raw conditions blend with the indigenous basketry and regional crafting elements.</p>
            </div>

            <div className='third-block'>
                    <div className='third-block-content'>
                        <div className='third-block-text'>
                            <h3>Do you like it ? Book Apartment now !</h3>
                            <nav className='home-nav'>
                                <NavLink to="bookings">BOOK APARTMENT</NavLink>
                            </nav>
                        </div>
                        <div className='third-block-images'>
                            <img src="/images/third-block/image.png" alt="" />
                        </div>
                    </div>
                </div> 

        </div>
    )
}

export default AboutUs