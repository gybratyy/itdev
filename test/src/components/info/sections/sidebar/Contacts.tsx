interface ContactsProps {
    phone: string;
    email: string;
    socials: string[];
}
export function Contacts({data}:{data:ContactsProps}) {
    return(
        <>
            <div className="bg-white text-black p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-2">
                    {/*<PhoneIcon className="h-5 w-5 text-blue-500"/>*/}
                    <span>{data.phone}</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                   {/* <MailIcon className="h-5 w-5 text-blue-500"/>*/}
                    <span>{data.email}</span>
                </div>
                <div className="flex space-x-4 mt-4">
                    {data.socials.map((social, index) => (
                        <a key={index} href={`#${social}`}>
                            {/* Replace with appropriate icons */}
                            <img src={`/icons/${social}.svg`} alt={social} className="h-5 w-5"/>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}