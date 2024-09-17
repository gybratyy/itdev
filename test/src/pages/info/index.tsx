import {Info} from "@/components/info/Info";


export const description =
    "A settings page. The settings page has a sidebar navigation and a main content area. The main content area has a form to update the store name and a form to update the plugins directory. The sidebar navigation has links to general, security, integrations, support, organizations, and advanced settings."

export default function InfoPage() {
    return(



            <div className="flex min-h-screen w-full flex-col">

                <Info/>
             </div>


)
}