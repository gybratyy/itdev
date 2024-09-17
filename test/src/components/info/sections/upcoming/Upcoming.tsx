import Divider from "@/components/ui/divider";
import UpcomingItem from "./UpcomingItem";


export const upcomingItems = [
    {icon:"sick", date:"Jan 27", description:"1 day of sick"},
    {icon:"holiday", date:"Jul 4", description:"Independence Day"},
]
export function Upcoming() {
    return (
        <>
            <h2><span></span>Upcoming Time Off</h2>
            <Divider/>
            {upcomingItems.map((item) => (
                <UpcomingItem date={item.date} icon={item.icon } description={item.description}/>
            ))}

        </>
    )
}