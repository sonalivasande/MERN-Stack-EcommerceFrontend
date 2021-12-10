import React from "react";
import Announcement from "../component/Announcement";
import Category from "../component/Category";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";


const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
