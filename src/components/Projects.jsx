import CardSlider from "./CardSlider";

const Projects = () => {
  return (
    <section id="projects" className="w-screen h-svh order-3">
      <h1 className="text-center ~text-3xl/5xl font-black mt-3">My Projects</h1>
      <h2 className="text-center ~text-base/xl font-bold ~m-3/6">This is a selection of my projects as a web developer.</h2>
      <CardSlider />
    </section>
  )
}

export default Projects;
