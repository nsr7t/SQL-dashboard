import { BellIcon, MenuIcon, SearchIcon, UserIcon, XIcon } from "lucide-react"

function Header({ setIsOpen, isOpen }) {
    return (
        <header className="-hidden flex max-h-[61px] flex-1 items-center justify-between border-b border-gray-200 px-4 py-1 md:gap-[250px] lg:gap-[520px]">
            <div className="flex flex-1 items-center space-x-6">
                <button
                    onClick={() => setIsOpen((e) => !e)}
                    className="mr-4 hidden text-gray-600 hover:text-blue-600 focus:outline-none md:block"
                >
                    {isOpen ? <XIcon /> : <MenuIcon />}
                </button>
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search queries, tables..."
                        className="ml-[-12px] w-full min-w-32 rounded-lg border border-gray-300 py-2 pl-7 placeholder:text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none md:ml-0 md:w-full md:px-12 md:placeholder:text-base"
                    />
                    <SearchIcon
                        className="absolute top-2.5 left-[-7px] text-gray-400 md:left-6"
                        size={18}
                    />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <button className="relative text-gray-600 hover:text-blue-600">
                    <BellIcon size={20} />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                        3
                    </span>
                </button>
                <div className="flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                        <UserIcon size={16} />
                    </div>
                    <div className="ml-2 hidden md:block">
                        <p className="text-sm font-medium text-gray-700">
                            John Doe
                        </p>
                        <p className="text-xs text-gray-500">Admin</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
