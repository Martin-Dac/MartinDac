import { useState, useEffect } from "react";

function ProjectGrid({projects}){
  return (
    <div className="relative grid grid-cols-1 mb-4 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {projects && projects.length>0 && projects.map((item) =>
      <div className=" bg-stone-900 group rounded overflow-hidden shadow-lg border border-slate-800 hover:scale-105 duration-500 ease-in-out ">
      <div className="relative">
        <img className= "border-b-slate-800 border-b " src={item.thumbnail} alt={item.name}/>
        <p className="absolute inset-0 opacity-0 px-2 py-5 font-semibold group-hover:bg-slate-700 group-hover:bg-opacity-60 group-hover:opacity-100 duration-200 ease">{item.descripcion}</p>
      </div>
      <h1 className="pl-3 text-lg font-semibold">{item.name}</h1>
      <div className="flex justify-between px-2 my-2">
        <a className="bg-black rounded-full w-full px-10 py-1 text-xs hover:bg-[#0f0f0f]" href={item.linkGitHub} target="_blank" rel="noreferrer" > View Code</a>
        <a className="bg-sky-600 rounded-full w-full ml-1 px-10 py-1 text-xs hover:bg-sky-500" href={item.link} target="_blank" rel="noreferrer" > Visit Website</a>
      </div>
    </div>   
      )}
    </div>
  )
}

function Projects() {
  const [Projects, setProjects] = useState("");
  
  useEffect(() => { 
    fetch('./projects.json')
    .then(response => response.json())
    .then((data) => setProjects(data) )
  }, [])
  

  return <div className="mt-4 mx-3">
    <h1 className="text-3xl font-bold pb-2">Projects</h1>
    <ProjectGrid projects={Projects}/>
  </div>;
}

export default Projects;
