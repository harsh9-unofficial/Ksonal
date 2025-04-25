const HeroImg = ({ srcImg, text }) => {
  return (
    <main className="w-full relative">
      <img
        src={srcImg}
        alt="Hero Image"
        className="h-full w-full object-cover"
      />
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
        {text}
      </span>
    </main>
  );
};

export default HeroImg;
