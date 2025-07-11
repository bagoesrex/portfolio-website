import Navbar from "./navbar";

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 h-14 mt-1">
            <div className="flex flex-row justify-between bg-white rounded-2xl items-center shadow-md max-w-3xl mx-auto px-5 h-full">
                <div>
                    <h1>{`< Header Icon />`}</h1>
                </div>
                <Navbar />
            </div>
        </header>
    );
}

