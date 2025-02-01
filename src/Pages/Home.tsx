import FeaturedSection from "../components/HomeComponents/FeaturedSection";
import Hero from "../components/HomeComponents/Hero";
import Navbar from "../components/Navbar/Navbar";
import SportsFooter from "../components/HomeComponents/SportsFooter";
import TestimonialSection from "../components/HomeComponents/Testimonial";
import Brand from "../components/HomeComponents/Brand";

const Home = () => {
    return (
        <>
        <Navbar/>
           <Hero/>
           <FeaturedSection/>
           <Brand/>
           <TestimonialSection/> 
           <SportsFooter/>
        </>
    );
};

export default Home;