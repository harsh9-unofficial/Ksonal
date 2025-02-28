import React from "react";

const HeroImg = ({ srcImg }) => {
  return (
    <>
      <main className="w-full">
        <img src={srcImg} alt="Hero Image" className="h-full w-full" />
      </main>
    </>
  );
};

export default HeroImg;
