import { NavLink } from "react-router-dom";
import { BsHouse, BsFolder, BsLinkedin, BsGithub } from "react-icons/bs";

export default function NavBar() {
  const activeLink = 'my-1 mx-3 text-blue-400'
  const normalLink = 'my-1 mx-3'

  return (
    <div className="flex w-[90%] m-auto ">
      <div className="flex rounded-xl w-full mt-8 bg-stone-800 border border-neutral-700">
        <NavLink to="/" className={({isActive}) => isActive ? activeLink:normalLink}>
          <button className="btn inline-flex">
            <BsHouse className="mt-1 mr-1"/> Home
          </button>
        </NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? activeLink:normalLink}>
          <button className="btn inline-flex">
            <BsFolder className="mt-1 mr-1"/> projects  
          </button>
        </NavLink>
        <a href="https://github.com/Martin-Dac" target="_blank" rel="noreferrer" className="ml-auto mr-2 my-auto text-2xl hover:scale-110"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/martin-de-avila-cunha/" target="_blank" rel="noreferrer" className="text-[#0e76a8] bg-white rounded-[5px] ml-2 mr-10 my-auto text-2xl hover:scale-110"><BsLinkedin/></a>
      </div>
    </div>
  );
}
