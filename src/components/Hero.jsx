/* eslint-disable react/no-unescaped-entities */
import portfolioImg from "../assets/images/portfolio-pic-4-min.webp"

const Hero = () => {

  return (
    <main className="flex flex-col md:flex-row items-center justify-center h-screen w-screen order-1 gap-6" id="hero">
      <div className="flex flex-col gap-6 justify-center mx-3">
        <h1 className="text-5xl md:text-8xl font-black text-shadow">Hey, I'm Enes.</h1>
        <h2 className="text-3xl font-bold">A curios & passionate Full Stack Web Developer</h2>
      </div>
      <img src={portfolioImg} loading="lazy" alt="profile picture of Enes Kilic" className="clip max-h-[60vh] max-w-[60vw]" />
    </ main>
  )
};

export default Hero;
