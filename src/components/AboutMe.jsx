/* eslint-disable react/no-unescaped-entities */
import { Player } from '@lottiefiles/react-lottie-player';

const AboutMe = () => {

    return (
        <section className="flex flex-col w-screen h-svh order-2 lg:order-first" id="about">
            <h2 className="text-center ~text-3xl/5xl font-black ~mt-8/10">About Me</h2>
            <div className="md:flex max-h-[65%] mx-auto justify-center items-center ~mt-2/5">
                <div className="flex flex-col gap-3 mx-5 ~text-sm/lg md:w-1/2 *:font-bold lg:leading-relaxed ">
                    <p>
                        Hi, I'm Enes from Hamburg, Germany. I'm a certified Full Stack Web Developer with a background in law and translation.
                    </p>
                    <p>
                        My career transition began when I returned to my hometown, Hamburg / Germany. While exploring new job opportunities and in search of a more fulfilling career, I discovered web development.
                    </p>
                    <p>
                        I started teaching myself programming through online resources, beginning with 'The Odin Project.' After that, I decided to enroll in CareerFoundry's Full Stack Web Development course. There, I earned my certification as a Full Stack Web Developer.
                    </p>
                    <p>
                        Now, with almost a year of experience in the programming world, I’m driven by passion and curiosity to continually grow and enjoy the process of coding. I’m excited to connect with fellow web enthusiasts, share knowledge, collaborate on projects, and contribute to creating amazing things!
                    </p>
                </div>
                <div className="hidden md:flex ">
                    <Player src="https://lottie.host/980005c6-d8f6-4b0e-9805-543af5f6c251/X3HS6nFtjx.json" loop autoplay />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
