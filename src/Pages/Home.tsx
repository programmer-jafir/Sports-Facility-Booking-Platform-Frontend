import FeaturedSection from "../components/HomeComponents/FeaturedSection";
import Hero from "../components/HomeComponents/Hero";
import Navbar from "../components/Navbar/Navbar";
import SportsFooter from "../components/HomeComponents/SportsFooter";
import TestimonialSection from "../components/HomeComponents/Testimonial";

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