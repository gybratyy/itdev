import {Overview, Upcoming, History} from "./sections"
import {Sidebar} from "@/components/info/sections/sidebar/Sidebar";
export function Info() {
    return (
        <div className={"flex"}>
           <Sidebar/>
            <div>
                <Overview/>
                <Upcoming/>
                <History/>
            </div>


        </div>  
    )
}