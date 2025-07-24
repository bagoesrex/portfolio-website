import { LuBookOpen, LuGamepad2, LuHeadphones, LuSmartphone } from "react-icons/lu";

const hobbies = [
    {
        icon: <LuBookOpen />,
        title: "Reading",
        description: "Mainly tech books and manga in my spare time."
    },
    {
        icon: <LuGamepad2 />,
        title: "Gaming",
        description: "Mostly enjoy sandbox games like Roblox and classic MMORPGs."
    },
    {
        icon: <LuHeadphones />,
        title: "Music",
        description: "From lo-fi to Japanese jazz. Helps me focus."
    },
    {
        icon: <LuSmartphone />,
        title: "Android Modding",
        description: "Tinkering with custom ROMs, root tools, and system tweaks just for fun."
    }

];

export default function HobbiesGrid() {
    return (
        <div className="grid grid-cols-2 gap-4">
            {hobbies.map((hobby, i) => (
                <div key={i} className="flex items-center gap-8 py-4 px-8 bg-muted/20 rounded-xl">
                    <div className="text-2xl text-primary">{hobby.icon}</div>
                    <div>
                        <h3 className="font-semibold">{hobby.title}</h3>
                        <p className="text-sm text-muted-foreground">{hobby.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}