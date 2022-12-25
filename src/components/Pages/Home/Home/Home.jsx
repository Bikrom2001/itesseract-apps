import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Kits from "../Kits/Kits";
import Partner from "../Partner/Partner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Partner></Partner>
      <Contact></Contact>
      <Kits></Kits>
    </div>
  );
};

export default Home;
