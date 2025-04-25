import {
    DownloadIcon,
    FilterIcon,
    RefreshCcwDotIcon,
    RefreshCwIcon,
    SaveIcon,
} from "lucide-react"
import Button from "./Button"

function QueryFilters({ dateRange, setDateRange }) {
    return (
        <div className="border-b border-gray-200 p-6">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
                    <div>
                        <label
                            htmlFor="dateRange"
                            className="mb-1 block text-sm font-medium text-gray-700"
                        >
                            Date Range
                        </label>
                        <select
                            id="dateRange"
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                            className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <option value="today">Today</option>
                            <option value="yesterday">Yesterday</option>
                            <option value="last7days">Last 7 days</option>
                            <option value="last30days">Last 30 days</option>
                            <option value="custom">Custom Range</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="queryType"
                            className="mb-1 block text-sm font-medium text-gray-700"
                        >
                            Query Type
                        </label>
                        <select
                            id="queryType"
                            className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <option value="all">All Queries</option>
                            <option value="select">SELECT</option>
                            <option value="insert">INSERT</option>
                            <option value="update">UPDATE</option>
                            <option value="delete">DELETE</option>
                        </select>
                    </div>
                    <div className="md:self-end">
                        <Button>
                            <FilterIcon size={16} className="mr-1" />
                            MoreFilters
                        </Button>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <Button>
                        <RefreshCwIcon size={16} className="mr-1" />
                        Run Query
                    </Button>
                    <Button>
                        <DownloadIcon size={16} className="mr-1" />
                        Export CSV
                    </Button>
                    <Button>
                        <SaveIcon size={16} className="mr-1" />
                        Save Report
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default QueryFilters
