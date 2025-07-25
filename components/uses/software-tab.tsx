import { BiLogoVisualStudio } from "react-icons/bi";
import { SiAndroid, SiAndroidstudio, SiBrave, SiDiscord, SiGooglechrome, SiPostman, SiSpotify, SiTelegram } from "react-icons/si";
import { VscRemoteExplorer } from "react-icons/vsc";
import UsesCard from "../shared/uses-card";

const softwareItems = [
    {
        icon: <BiLogoVisualStudio size={35} />,
        title: "VSCode",
    },
    {
        icon: <SiAndroidstudio size={35} />,
        title: "Android Studio",
    },
    {
        icon: <SiSpotify size={35} />,
        title: "Spotify",
    },
    {
        icon: <SiGooglechrome size={35} />,
        title: "Google Chrome",
    },
    {
        icon: <SiBrave size={35} />,
        title: "Brave",
    },
    {
        icon: <SiDiscord size={35} />,
        title: "Discord",
    },
    {
        icon: <SiTelegram size={35} />,
        title: "Telegram",
    },
    {
        icon: <SiPostman size={35} />,
        title: "Postman",
    },
    {
        icon: <SiAndroid size={35} />,
        title: "CRB Android Kitchen",
    },
    {
        icon: <VscRemoteExplorer size={35} />,
        title: "Ultraviewer",
    },
];


export default function SoftwareTab() {
    return (
        <section>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-primary">
                    Software
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {softwareItems.map((item, index) => (
                        <UsesCard key={index} icon={item.icon} title={item.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}