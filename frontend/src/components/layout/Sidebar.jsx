import {
    LayoutDashboardIcon,
    DatabaseIcon,
    FileTextIcon,
    BarChartIcon,
    UserIcon,
    SettingsIcon,
    LogOutIcon,
} from "lucide-react"
import { Link } from "react-router-dom"

function Sidebar({ isOpen }) {
    const menuItems = [
        { name: "Overview", icon: <LayoutDashboardIcon />, path: "/overview" },
        { name: "Queries", icon: <DatabaseIcon />, path: "/queries" },
        { name: "Reports", icon: <FileTextIcon />, path: "/reports" },
        { name: "Analytics", icon: <BarChartIcon />, path: "/analytics" },
        { name: "Users", icon: <UserIcon />, path: "/users" },
        { name: "Settings", icon: <SettingsIcon />, path: "/settings" },
    ]
    return (
        <nav
            className={`flex min-h-[100dvh] flex-col border-r border-gray-200 bg-white ${isOpen ? "max-w-48" : "max-w-14"} overflow-x-clip`}
        >
            <div className="flex items-center justify-center border-b border-gray-200 p-4">
                <h1 className="text-lg font-bold text-blue-600">
                    {isOpen ? "SQL Dashboard" : "SD"}
                </h1>
            </div>
            <div className="flex-1 pt-4">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className="flex gap-3 px-4 py-3 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                            >
                                <span className="">{item.icon}</span>
                                {isOpen && <span>{item.name}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="border-t border-gray-200 p-4">
                <button className="flex items-center justify-center gap-2 text-gray-700 transition-colors hover:text-blue-600">
                    <span>
                        <LogOutIcon />
                    </span>
                    {isOpen && <span>Log Out</span>}
                </button>
            </div>
        </nav>
    )
}

export default Sidebar
