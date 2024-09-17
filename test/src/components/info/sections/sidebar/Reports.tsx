export function Reports({ data }: { data: string[] }){
    return(
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-sm text-black font-semibold">Direct Reports</h3>
            <ul className="mt-2">
                {data.map((report, index) => (
                    <li key={index} className="flex items-center space-x-2 text-black">
                        {/* Placeholder icon */}
                        {/*<img src="/icons/report.svg" alt={report} className="h-5 w-5"/>*/}
                        <span>{report}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}