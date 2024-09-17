import {Contacts} from "@/components/info/sections/sidebar/Contacts";
import {Employee} from "@/components/info/sections/sidebar/Employee";
import {Reports} from "@/components/info/sections/sidebar/Reports";


const contactInfo = {
    phone: "07911 654321",
    email: "avd.yana@videorollnet",
    socials: ["linkedin", "facebook", "twitter"], // You can create a custom component for these
};

const employeeDetails = {
    hireDate: "Sep. 3, 2020",
    tenure: "3y - 9m - 20d",
    jobDetails: {
        employees: 5,
        jobType: "Full-Time",
        department: "Operations",
        region: "Europe",
        location: "London, UK",
    },
    reports: ["Shane", "Nathan", "Mitchell", "Philip", "4 More..."],
};
export function Sidebar() {
    return (

        <div className={"w-[200px]"}>
            <Contacts data={contactInfo}/>
            <Employee data={employeeDetails}/>
            <Reports data={employeeDetails.reports}/>
        </div>
    )
}