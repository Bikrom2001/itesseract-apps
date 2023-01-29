import React from "react";
import IHero from "./IHero/IHero";
import IPlay from "./IPlay/IPlay";

const ProductList = () => {
  return (
    <div>
      <IPlay
        topTitle="iPlay"
        title="Building blocks for the next generation"
        details="iPlay is the most cutting-edge technological advancement for
                teaching Artificial Intelligence, Data Science, Image
                Processing, Problem Solving, and Computer Programming. The iPlay
                package utilizes cutting-edge technology to help students
                develop professional ready 4IR skills."
        image="https://i.ibb.co/D1qcyVk/i-Play-Mockup-updated.png"
      ></IPlay>
      <IHero></IHero>
      <IPlay
        topTitle="iEdu"
        title="Tools for starting a programming education"
        details="iEdu box is for learning programming languages and robotics. Create your own projects such as a soccer robot, a line follower, or a distance measurement robot. Utilize the fantastic batman robot to teach yourself graphic programming, C programming, and Python programming."
        image="https://i.ibb.co/xHzwQFk/i-Edu-mockup.png"
      ></IPlay>
    </div>
  );
};

export default ProductList;
