import './App.css'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'



// pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Bookings from './pages/Bookings';
import Standard from './pages/rooms/Standard';
import Superior from './pages/rooms/Superior';
import Deluxe from './pages/rooms/Deluxe';
import Junior from './pages/rooms/Junior';
import NotFound from './pages/NotFound';




//layouts
import RootLayout from './layouts/RootLayout';
import RoomLyout from './layouts/RoomLyout';





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='bookings' element={<Bookings />} />
      <Route path='rooms' element={<RoomLyout />}>
        <Route path='standard' element={<Standard />} />
        <Route path='superior' element={<Superior />} />
        <Route path='deluxe' element={<Deluxe />} />
        <Route path='junior' element={<Junior />} />
      </Route>

      <Route path='*' element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
