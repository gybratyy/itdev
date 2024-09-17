import Divider from "@/components/ui/divider";
import {OverviewItem} from "@/components/info/sections/overview/OverviewItem";

export const overviewItems = [
    {
        title:"Sick",
        icon:"sick",
        days:3,
        description:"Days available",
        additional:"1 day scheduled",
        policy:"Sick Full-Time"
    },
    {
        title:"Annual leave",
        icon:"mount",
        days:10.3,
        description:"Days available",
        additional:"",
        policy:"Holiday Full-Time"
    },
    {
        title:"Comp/in Lieu Time",
        icon:"time",
        days:0,
        description:"Human Used(YTD)",
        additional:"",
        policy:"Comp/in Lieu Time Flexible Policy"
    },

]

export function Overview() {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Upcoming Time Off</h2>
            <Divider/>
            <div className="grid lg:grid-cols-3 gap-8 mt-6">
                {overviewItems.map((item, index) => (
                    <OverviewItem
                        key={index}
                        title={item.title}
                        icon={item.icon}
                        days={item.days}
                        description={item.description}
                        additional={item.additional}
                        policy={item.policy}
                    />
                ))}
            </div>
        </>
    )
}