import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import BookingPage from './pages/BookingPage';
import ConfirmedBookingPage from './pages/ConfirmedBookingPage';
import NotFoundPage from './pages/NotFoundPage'


function App() {
  return (
    <Router>
      {/*
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
       */}

      <Routes>
        <Route exact path='/' element={<LandingPage />}/>
        <Route exact path='/booking' element={< BookingPage />}/>
        <Route exact path='/success' element={< ConfirmedBookingPage />}/>
        <Route path='*' element={< NotFoundPage />} />
        {/* 404 NOT FOUND route - no 'path' */}
      </Routes>

    </Router>

  );
}

export default App;
