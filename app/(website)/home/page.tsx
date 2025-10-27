import React from "react";
import WhySorichFoils from "@/src/Components/HomePage/WhyPages";
import LeadershipSection from "@/src/Components/HomePage/LeaderShip";
import TestimonialSection from "@/src/Components/HomePage/Testimonials";
import StoreMapSection from "@/src/Components/HomePage/CheckOut";
import AboutSection from "@/src/Components/HomePage/AboutUs";
import HeroSection from "@/src/Components/HomePage/HeroSection";
import WeGrow from "@/src/Components/HomePage/WeGrow";
import Navbar from "@/src/Components/Common/Navbar";

const HomePage = () => {
    return(
        <div>
            <HeroSection/>
            <AboutSection/>
            <WeGrow/>
            <LeadershipSection/>
            <WhySorichFoils/>
            <StoreMapSection/>
            <TestimonialSection/>
            
            


        </div>
    )
}

export default HomePage