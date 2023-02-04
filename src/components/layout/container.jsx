import SideBar from "./sidebar"

export default function Container({ children }){
    return(
        <div className="grid grid-rows-2 grid-cols-4 w-[85%] mx-auto mt-8 gap-6">
            <div className="row-span-2 col-span-full rounded-xl bg-stone-800 border border-neutral-700 md:col-span-3">{children}</div>
            <div className="row-span-1 rounded-xl bg-stone-800 border border-neutral-700 invisible md:visible"><SideBar></SideBar></div>
        </div>
    )
}