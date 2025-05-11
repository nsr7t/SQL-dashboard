import { FileTextIcon } from "lucide-react"

function ReportsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
                <FileTextIcon
                    size={24}
                    className="text-blue-600 dark:text-blue-400"
                />
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Reports
                </h1>
            </div>

            {/* Report Cards Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                    "Daily Summary",
                    "Performance Metrics",
                    "Error Logs",
                    "User Activity",
                    "Database Health",
                    "Custom Reports",
                ].map((report) => (
                    <div
                        key={report}
                        className="rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md dark:bg-gray-900 dark:shadow-md"
                    >
                        <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                            {report}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            View and analyze your {report.toLowerCase()} data
                        </p>
                        <button className="mt-3 cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                            View Report →
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReportsPage
