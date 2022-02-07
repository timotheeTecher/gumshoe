//Libraries
import React from "react";

//Components
import Header from "../../Components/Header/Header";
import ShopSection from "../../Components/ShopSection/ShopSection";
import AboutSection from "../../Components/AboutSection/AboutSection";
import BlogSection from "../../Components/BlogSection/BlogSection";

const Home = () => {
  return (
    <>
      <Header/>
      <ShopSection/>
      <AboutSection/>
      <BlogSection/>
    </>
  );
}

export default Home;