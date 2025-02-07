import { Link } from 'react-router-dom'
import './pagesCSS/NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found">
            <h2>Puslapis nerastas</h2>
            <p>Atsiprašome, bet ieškomas puslapis nerastas.</p>
            <p>Grįžti į <Link to='/'>pradinį puslapį</Link></p>
        </div>
  )
}

export default NotFound