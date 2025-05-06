import React from "react"

function InsertForm({ columns, onClose }) {
    // Filter out 'created_at' and 'action' from the columns list
    const filteredColumns = columns.filter(
        (column) => column !== "created_at" && column !== "action",
    )

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm">
                <div className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-xl">
                    <button
                        className="absolute top-4 right-4 text-lg font-bold text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        &times;
                    </button>

                    <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
                        Add your new dataset
                    </h2>
                    <form>
                        {filteredColumns.map((column, index) => (
                            <div key={index} className="mb-4">
                                <label className="block font-semibold text-gray-700">
                                    {column}
                                </label>
                                <input
                                    type="text"
                                    placeholder={`Enter ${column}`}
                                    className="mt-2 w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        ))}
                    </form>
                </div>
            </div>
        </>
    )
}

export default InsertForm
