interface EmployeeProps {
    hireDate: string;
    tenure: string;
    reports: string[];
    jobDetails: {
        employees: number;
        jobType: string;
        department: string;
        region: string;
        location: string;
    };
}

export function Employee({data}:{data:EmployeeProps}) {
    return (
        <div className="bg-white text-black p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-sm font-semibold">Hire Date</h3>
            <p>{data.hireDate}</p>
            <p>{data.tenure}</p>
            <hr className="my-4"/>
            <div className="flex items-center space-x-2">
                <span>#{data.jobDetails.employees}</span>
                <span>{data.jobDetails.jobType}</span>
            </div>
            <div className="mt-2">
                <p>{data.jobDetails.department}</p>
                <p>{data.jobDetails.region}</p>
                <p>{data.jobDetails.location}</p>
            </div>
        </div>
    )

}