import { LightbulbIcon, LightbulbOffIcon, SettingsIcon } from "lucide-react"
import { useTheme } from "../hooks/useTheme"

function SettingsPage() {
    const [theme, setTheme] = useTheme()
    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-3">
                <SettingsIcon
                    size={24}
                    className="text-blue-600 dark:text-blue-400"
                />
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Settings
                </h1>
            </div>

            <div className="rounded-lg bg-white shadow dark:bg-gray-900 dark:shadow-md">
                <div className="border-b border-gray-200 p-6 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                        General Settings
                    </h2>
                </div>

                <div className="space-y-6 p-6">
                    {/* Theme Selection */}
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            htmlFor="dark-mode"
                        >
                            Theme
                        </label>
                        <select
                            onChange={(e) => setTheme(e.target.value)}
                            value={theme}
                            id="dark-mode"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pr-10 pl-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="system">System</option>
                        </select>
                    </div>

                    {/* Notification Settings */}
                    <div>
                        <label
                            htmlFor="notification"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Notifications
                        </label>
                        <div className="mt-2 space-y-2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="email"
                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-700"
                                />
                                <label
                                    htmlFor="email"
                                    className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                                >
                                    Email notifications
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="push"
                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-700"
                                />
                                <label
                                    htmlFor="push"
                                    className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                                >
                                    Push Notifications
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage
