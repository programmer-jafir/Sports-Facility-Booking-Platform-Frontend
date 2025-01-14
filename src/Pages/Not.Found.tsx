import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import SportsFooter from '../components/HomeComponents/SportsFooter';
import Navbar from '../components/Navbar/Navbar';

const NotFound = () => {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-8xl font-bold text-red-600">404</h1>
        <p className="text-2xl text-red-500 mt-4">Oops! Page not found.</p>
        <p className="text-gray-500 mt-2">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="mt-6 inline-block">
          <button className="flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:from-secondary hover:to-primary transition-colors duration-300">
            <FaHome className="mr-2" /> Go Back Home
          </button>
        </Link>
      </div>
    </div>
    <SportsFooter/>
    </>
  );
};

export default NotFound;
