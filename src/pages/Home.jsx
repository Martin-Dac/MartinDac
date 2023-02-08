import { BDContext } from "../context/bdcontext";
import { useContext } from "react";

function Icon({icon}){
    return(
        <img className="w-12 h-12 m-1" src={"/icons/" + icon + ".webp"} title={icon} alt={icon + "icon"}/>
    )
}

export default function Home(){

    const {edad} = useContext(BDContext)

    return(
        <div className="text-left mt-4 ml-4">
            <h1 className="text-4xl font-bold lg:text-5xl 2xl:text-6xl">Hi, I am <span className="text-sky-400">Martin.</span></h1>
            <h2 className="inline-flex whitespace-nowrap text-3xl font-semibold overflow-hidden animate-writer lg:text-4xl 2xl:text-5xl">I am a <span className=" inline-flex text-amber-300 pl-2"> web developer.</span> 👨‍💻</h2>
            <p className="py-4 text-xl font-medium lg:text-2xl 2xl:text-3xl">I am {edad} years old student of system engineering, I really like works with teams, I am quiet person that want learn new technologies. </p>
            <p className="text-xl  font-medium lg:text-2xl 2xl:text-3xl">Some of my hobbies are playing videogames, watching anime, and go to gym.</p>
            <h3 className="text-2xl font-semibold pt-2">Technologies that I use:</h3>
            <div className="flex flex-wrap">
                <Icon icon={"html"}/>
                <Icon icon={"css"}/>
                <Icon icon={"tailwindcss"}/>
                <Icon icon={"python"}/>
                <Icon icon={"javascript"}/>
                <Icon icon={"react"}/>
                <Icon icon={"django"}/>
                <Icon icon={"mysql"}/>
            </div>
        </div>      
    )
}
