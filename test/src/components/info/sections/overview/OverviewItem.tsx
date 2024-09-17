interface OverviewItemProps {
    title:string,
    icon:string,
    days:number,
    description:string,
    additional:string,
    policy:string
}



export function OverviewItem(data: OverviewItemProps) {

   /* const renderIcon = () => {
        switch(data.icon) {
            case 'sick':
                return <FaRegSick className="text-blue-600 text-3xl" />;
            case 'mount':
                return <FaRegCalendarPlus className="text-green-600 text-3xl" />;
            case 'time':
                return <FaRegClock className="text-yellow-600 text-3xl" />;
            default:
                return <FaRegClock className="text-gray-600 text-3xl" />;
        }
    };*/
    return (
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
            {/*<div className="icon mb-4">
                {renderIcon()}
            </div>*/}
            <h3 className="text-xl font-bold">{data.title}</h3>
            <p className="text-2xl font-semibold text-gray-700">{data.days}</p>
            <p className="text-sm text-gray-500">{data.description}</p>
            {data.additional && <p className="text-xs text-gray-400 mt-2">{data.additional}</p>}
            <p className="text-sm text-gray-600 font-medium mt-4">{data.policy}</p>
        </div>
    )
}