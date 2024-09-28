import FeaturedSection from "../components/FeaturedSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import SportsFooter from "../components/SportsFooter";
import TestimonialSection from "../components/Testimonial";

const Home = () => {
    return (
        <>
        <Navbar/>
           <Hero/>
           <FeaturedSection/>
           <TestimonialSection/> 
           <SportsFooter/>
        </>
    );
};

export default Home;