import { createContext } from "react";

export const BDContext = createContext()

export function BDContextProvider(props){

  var hoy = new Date();
  var BirthDate = new Date("2001/02/21");
  var edad = hoy.getFullYear() - BirthDate.getFullYear();
  if (
    hoy.getMonth() < BirthDate.getMonth() ||
    (hoy.getMonth() === BirthDate.getMonth() &&
      hoy.getDate() < BirthDate.getDate())
  ) {
    edad--;
  }

  var ShortBirth = BirthDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

    return(
        <BDContext.Provider value={{ShortBirth, edad}}>
        {props.children}
        </BDContext.Provider>
    )
}

