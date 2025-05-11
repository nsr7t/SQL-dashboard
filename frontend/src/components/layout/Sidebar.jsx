import { Link } from "react-router-dom"
import {
    LayoutDashboardIcon,
    DatabaseIcon,
    FileTextIcon,
    BarChartIcon,
    UserIcon,
    SettingsIcon,
    LogOutIcon,
} from "lucide-react" // Update this if you're using another icon lib

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
            className={`flex min-h-[100dvh] flex-col overflow-x-clip border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 ${
                isOpen ? "max-w-48" : "max-w-14"
            }`}
        >
            {/* Header */}
            <div className="flex items-center justify-center border-b border-gray-200 p-4 dark:border-gray-700">
                <h1 className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {isOpen ? "SQL Dashboard" : "SD"}
                </h1>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 pt-4">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className="flex gap-3 px-4 py-3 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                            >
                                <span>{item.icon}</span>
                                {isOpen && <span>{item.name}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 dark:border-gray-700">
                <button className="flex items-center justify-center gap-2 text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
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
