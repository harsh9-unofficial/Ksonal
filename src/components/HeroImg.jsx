const HeroImg = ({ srcImg, text }) => {
  return (
    <main className="w-full relative">
      <img
        src={srcImg}
        alt="Hero Image"
        className="h-full w-full object-cover"
      />
      <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-center px-2 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
        {text}
      </span>
    </main>
  );
};

export default HeroImg;
