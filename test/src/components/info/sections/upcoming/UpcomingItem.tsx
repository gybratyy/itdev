import React from "react";
import Image from "next/image";
import Divider from "@/components/ui/divider";
interface UpcomingItemProps {
    icon:string,
    description:string,
    date:string
}

import icons from "@icons/icons"
const {sick, holiday} = icons;


export default function UpcomingItem(data: UpcomingItemProps) {
    return(
        <div className="py-4">
            <div className="flex items-center space-x-4">
               {data.icon === "sick" ? <Image src={sick} alt="sick" width={24} height={24}/> : <Image src={holiday} alt="holiday" width={24} height={24}/>}
                <div>
                    <div className="font-semibold text-gray-700">{data.date}</div>
                    <div className="text-sm text-gray-500">{data.description}</div>
                </div>
            </div>
            <Divider/>
        </div>
    )
}