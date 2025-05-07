import { FileTextIcon } from "lucide-react"

function ReportsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <FileTextIcon size={24} className="text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
            </div>
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
                        className="rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md"
                    >
                        <h3 className="mb-2 text-lg font-semibold text-gray-800">
                            {report}
                        </h3>
                        <p>View and analyze your {report.toLowerCase()} data</p>
                        <button className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700">
                            View Report →
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReportsPage
