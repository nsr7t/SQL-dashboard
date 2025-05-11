import { BarChartIcon } from "lucide-react"

function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-3">
                <BarChartIcon
                    size={24}
                    className="text-blue-600 dark:text-blue-400"
                />
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Analytics
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-900 dark:shadow-md">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                        Query Performance
                    </h2>
                    <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-400">
                            Performance Chart will be displayed here
                        </p>
                    </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-900 dark:shadow-md">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                        Database Load
                    </h2>
                    <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-400">
                            Load metrics will be displayed here
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsPage
