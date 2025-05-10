import { SettingsIcon } from "lucide-react"

function SettingsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-3">
                <SettingsIcon size={24} className="text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
            </div>
            <div className="rounded-lg bg-white shadow">
                <div className="border-b border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-800">
                        General Settings
                    </h2>
                </div>
                <div className="space-y-6 p-6">
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="dark-mode"
                        >
                            Theme
                        </label>
                        <select
                            id="dark-mode"
                            className="mt-1 block w-full rounded-md border border-gray-300 py-2 pr-10 pl-3 text-base focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                        >
                            <option value="">Light</option>
                            <option value="">Dark</option>
                            <option value="">System</option>
                        </select>
                    </div>
                    <div className="">
                        <label
                            htmlFor="notification"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Notifications
                        </label>
                        <div className="mt-2 space-y-2">
                            <input
                                type="checkbox"
                                id="email"
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label
                                htmlFor="email"
                                className="ml-2 text-sm text-gray-700"
                            >
                                Email notifications
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="push"
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label
                                htmlFor="push"
                                className="ml-2 text-sm text-gray-700"
                            >
                                Push Notifications
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage
