import Hero from "./components/Hero"
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { useEffect } from "react"

export default function App() {
    useEffect(() => {
        let heroElement = document.getElementById('hero')
        heroElement.scrollIntoView({ behavior: 'instant' });
    }, [])


    return (
        <>
            <Navbar />
            <div className="flex flex-col w-screen lg:flex-row lg:flex-wrap lg:w-[300vw] lg:overflow-hidden">
                <AboutMe/>
                <Hero/>
                <Contact/>
                <div className="lg:w-screen lg:order-3"/>
                <Projects className="lg:order-4"/>
            </div>
        </>
    )
}