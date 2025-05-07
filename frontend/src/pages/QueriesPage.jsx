import DataTable from "../components/ui/DataTable"
import { useState } from "react"
import InsertForm from "../components/ui/InsertForm"

function QueriesPage() {
    const columns = ["id", "username", "email", "role", "created_at"]

    const [isCreateModelOpen, setIsCreateModelOpen] = useState(false)
    function openCreateModel() {
        setIsCreateModelOpen((value) => !value)
    }
    function handleClose() {
        setIsCreateModelOpen((value) => !value)
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="w-64">
                    <label
                        htmlFor="table-select"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Select Table
                    </label>
                    <select
                        id="table-select"
                        className="block w-36 rounded-md border-gray-300 py-2 pr-10 pl-3 text-base focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
                    >
                        <option value="">Users</option>
                        <option value="">product</option>
                        <option value="">orders</option>
                        <option value="">customers</option>
                    </select>
                </div>
                <button
                    onClick={openCreateModel}
                    className="rounded-md bg-blue-600 px-6 py-2 text-xs text-white hover:bg-blue-700 disabled:bg-blue-300 md:text-base"
                >
                    Create New Record
                </button>
            </div>
            <DataTable columns={columns} />
            {isCreateModelOpen && (
                <InsertForm
                    title={"Add a Form"}
                    columns={columns}
                    onClose={handleClose}
                />
            )}
        </div>
    )
}

export default QueriesPage
