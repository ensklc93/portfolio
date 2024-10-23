import CardSlider from "./CardSlider";

const Projects = () => {
  return (
    <section id="projects" className="w-screen h-dvh order-3">
      <h1 className="text-center text-5xl font-bold m-10">My Projects</h1>
      <h2 className="text-center text-xl font-bold m-10">This is a selection of my projects as a web developer.</h2>
      <CardSlider />
    </section>
  )
}

export default Projects;
