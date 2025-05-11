import { CheckCircleIcon, MoreHorizontalIcon, XCircleIcon } from "lucide-react"

//RANDOM DATA
const queries = [
    {
        id: "Q-1234",
        query: "SELECT * FROM users WHERE last_login > DATE_SUB(NOW(), INTERVAL 7 DAY)",
        database: "User DB",
        user: "john.doe",
        duration: "45ms",
        timestamp: "2 mins ago",
        status: "success",
    },
    {
        id: "Q-1235",
        query: 'INSERT INTO logs (user_id, action, timestamp) VALUES (42, "login", NOW())',
        database: "Logs DB",
        user: "system",
        duration: "12ms",
        timestamp: "5 mins ago",
        status: "success",
    },
    {
        id: "Q-1236",
        query: "UPDATE products SET stock = stock - 1 WHERE product_id = 567",
        database: "Products DB",
        user: "jane.smith",
        duration: "28ms",
        timestamp: "12 mins ago",
        status: "success",
    },
    {
        id: "Q-1237",
        query: 'SELECT COUNT(*) FROM orders WHERE status = "pending" GROUP BY customer_id',
        database: "Orders DB",
        user: "analytics",
        duration: "156ms",
        timestamp: "25 mins ago",
        status: "error",
    },
    {
        id: "Q-1238",
        query: "DELETE FROM temp_data WHERE created_at < DATE_SUB(NOW(), INTERVAL 1 HOUR)",
        database: "Temp DB",
        user: "system",
        duration: "34ms",
        timestamp: "45 mins ago",
        status: "success",
    },
]

function QueryTable() {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="bg-gray-50 text-left text-sm font-medium tracking-wide text-gray-500 uppercase dark:bg-gray-900">
                        <th className="table-header">Query ID</th>
                        <th className="table-header">Query</th>
                        <th className="table-header">Database</th>
                        <th className="table-header">User</th>
                        <th className="table-header">Duration</th>
                        <th className="table-header">Timestamp</th>
                        <th className="table-header">Status</th>
                        <th className="sr-only">
                            <span>Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {queries.map((query) => (
                        <tr key={query.id}>
                            <td className="table-data font-medium text-blue-600">
                                {query.id}
                            </td>
                            <td className="table-data truncate">
                                {query.query}
                            </td>
                            <td className="table-data text-gray-500">
                                {query.database}
                            </td>
                            <td className="table-data text-gray-500">
                                {query.user}
                            </td>
                            <td className="table-data text-gray-500">
                                {query.duration}
                            </td>
                            <td className="table-data text-gray-500">
                                {query.timestamp}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {query.status === "success" ? (
                                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                        <CheckCircleIcon
                                            size={12}
                                            className="mr-1"
                                        />
                                        Success
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 pt-0.5 text-xs font-medium text-red-800">
                                        <XCircleIcon
                                            size={12}
                                            className="mr-1"
                                        />{" "}
                                        Error
                                    </span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreHorizontalIcon size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default QueryTable
