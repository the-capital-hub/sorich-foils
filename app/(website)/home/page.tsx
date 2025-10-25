import React from "react";
import WhySorichFoils from "@/src/Components/HomePage/WhyPages";
import LeadershipSection from "@/src/Components/HomePage/LeaderShip";
import TestimonialSection from "@/src/Components/HomePage/Testimonials";
import StoreMapSection from "@/src/Components/HomePage/CheckOut";
import AboutSection from "@/src/Components/HomePage/AboutUs";
import HeroSection from "@/src/Components/HomePage/HeroSection";
import WeGrow from "@/src/Components/HomePage/WeGrow";

const HomePage = () => {
    return(
        <div>
            <WeGrow/>
            <AboutSection/>
            <WhySorichFoils/>
            <LeadershipSection/>
            <TestimonialSection/>
            <HeroSection/>
            <StoreMapSection/>


        </div>
    )
}

export default HomePage