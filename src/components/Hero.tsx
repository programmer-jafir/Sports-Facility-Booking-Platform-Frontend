import img from '../assets/images/chino-rocha-2FKTyJqfWX8-unsplash.jpg'
import { motion } from 'framer-motion';
const Hero = () => {
    return (
        <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${img})` }} // Replace with your image
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Book Your Sports Facility Today
        </h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Find and reserve the best facilities for your next match or practice session.
        </p>

        {/* Framer Motion Animated Button */}
        <motion.a
          href="#book-now"
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-md"
          whileHover={{ scale: 1.1 }} // Grow slightly on hover
          whileTap={{ scale: 0.9 }} // Shrink slightly on click
          initial={{ opacity: 0, y: 50 }} // Start hidden and below
          animate={{ opacity: 1, y: 0 }} // Slide up and become visible
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
        >
          Book Now
        </motion.a>
      </div>
    </section>
    );
};

export default Hero;