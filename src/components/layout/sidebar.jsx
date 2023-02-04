import { BDContext } from "../../context/bdcontext";
import { useContext } from "react";

function AboutMe({ label, value }) {
  return (
    <div className="flex justify-between my-3 mx-2">
      <p className="font-bold">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

export default function SideBar() {

    const {edad, ShortBirth} = useContext(BDContext)

  return (
    <div>
      <h1 className="font-bold text-xl text-center">
        👤About Me
      </h1>
      <AboutMe label={"Age"} value={edad}/>
      <AboutMe label={"Birthday"} value={ShortBirth}/>
      <AboutMe label={"Country"} value={'Argentina'}/>
      <AboutMe label={"City"} value={'Buenos Aires'}/>
    </div>
  );
}
