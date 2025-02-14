import { motion } from "framer-motion";
import videoBg from "../../assets/videos/bannervdo.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">
          Book Your Sports Facility Today
        </h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Find and reserve the best facilities for your next match or practice session.
        </p>

        {/* Animated Button */}
        <motion.a
          href="/facility"
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Book Now
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;