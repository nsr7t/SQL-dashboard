function DataTable() {
    const columns = ["id", "username", "email", "role", "created_at", "action"]

    if (false) {
        return (
            <div className="overflow-hidden bg-white py-10 text-center shadow sm:rounded-lg">
                <p className="text-gray-500">No data available</p>
            </div>
        )
    }
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    {columns.map((column, index) => (
                                        <th
                                            className="px-6 py-3 text-left text-sm font-medium tracking-wide text-gray-500 uppercase"
                                            key={index}
                                            scope="col"
                                        >
                                            {column}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                <tr className="hover:bg-gray-100">
                                    <td className="table-data-2">1</td>
                                    <td className="table-data-2">Jhon</td>
                                    <td className="table-data-2">
                                        Jhon@email.com
                                    </td>
                                    <td className="table-data-2">admin</td>
                                    <td className="table-data-2">2025-05-05</td>

                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                        <button className="mr-4 text-blue-600 hover:text-blue-500">
                                            Edit
                                        </button>
                                        <button className="text-red-600 hover:text-red-900">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="table-data-2">2</td>
                                    <td className="table-data-2">Tom</td>
                                    <td className="table-data-2">
                                        Tom@email.com
                                    </td>
                                    <td className="table-data-2">Developer</td>
                                    <td className="table-data-2">2024-12-03</td>
                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                        <button className="mr-4 text-blue-600 hover:text-blue-500">
                                            Edit
                                        </button>
                                        <button className="text-red-600 hover:text-red-900">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataTable
