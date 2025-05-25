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
                <div className="flex flex-wrap gap-4 space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
                    <div className="flex items-center justify-start gap-2 md:block md:gap-0">
                        <label
                            htmlFor="dateRange"
                            className="mb-1 block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Date Range
                        </label>
                        <select
                            id="dateRange"
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                            className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white"
                        >
                            <option
                                value="today"
                                className="dark:bg-gray-700 dark:text-gray-100"
                            >
                                Today
                            </option>
                            <option
                                value="yesterday"
                                className="dark:bg-gray-700 dark:text-gray-100"
                            >
                                Yesterday
                            </option>
                            <option
                                value="last7days"
                                className="dark:bg-gray-700 dark:text-gray-100"
                            >
                                Last 7 days
                            </option>
                            <option
                                value="last30days"
                                className="dark:bg-gray-700 dark:text-gray-100"
                            >
                                Last 30 days
                            </option>
                            <option
                                value="custom"
                                className="dark:bg-gray-700 dark:text-gray-100"
                            >
                                Custom Range
                            </option>
                        </select>
                    </div>
                    <div className="flex items-center justify-start gap-2 md:block md:gap-0">
                        <label
                            htmlFor="queryType"
                            className="mb-1 block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Query Type
                        </label>
                        <select
                            id="queryType"
                            className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white"
                        >
                            <option
                                value="all"
                                className="dark:bg-gray-700 dark:text-gray-100"
                            >
                                All Queries
                            </option>
                            <option
                                value="select"
                                className="dark:bg-gray-700 dark:text-gray-100"
                            >
                                SELECT
                            </option>
                            <option
                                value="insert"
                                className="dark:bg-gray-700 dark:text-gray-100"
                            >
                                INSERT
                            </option>
                            <option
                                value="update"
                                className="dark:bg-gray-700 dark:text-gray-100"
                            >
                                UPDATE
                            </option>
                            <option
                                value="delete"
                                className="dark:bg-gray-700 dark:text-gray-100"
                            >
                                DELETE
                            </option>
                        </select>
                    </div>
                    <div className="md:self-end">
                        <Button
                            variant="outline"
                            className="dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                        >
                            <FilterIcon size={16} className="mr-1" />
                            MoreFilters
                        </Button>
                    </div>
                </div>
                <div className="flex flex-wrap items-start gap-4 space-x-2 md:flex-row md:items-center">
                    <Button>
                        <RefreshCwIcon size={16} className="mr-1" />
                        Run Query
                    </Button>
                    <Button variant="outline">
                        <DownloadIcon size={16} className="mr-1" />
                        Export CSV
                    </Button>
                    <Button variant="outline">
                        <SaveIcon size={16} className="mr-1" />
                        Save Report
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default QueryFilters
