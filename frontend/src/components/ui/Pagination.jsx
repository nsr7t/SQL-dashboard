function Pagination() {
    return (
        <nav
            className="mt-4 flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 dark:border-gray-700"
            aria-label="Pagination"
        >
            <div className="">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    Showing page <span className="font-medium">12</span> of{" "}
                    <span className="font-medium">22</span>
                </p>
            </div>
            <div className="flex flex-1 justify-center sm:justify-end">
                <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:disabled:bg-gray-700 dark:disabled:text-gray-500">
                    Previous
                </button>
                <div className="">
                    <span
                        className={`relative mx-1 inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium ${
                            /*currentPage*/ false
                                ? "z-10 border-blue-500 bg-blue-50 text-blue-600 dark:border-blue-400 dark:bg-blue-950 dark:text-blue-400"
                                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                        }`}
                    >
                        11
                    </span>
                </div>
                <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:disabled:bg-gray-700 dark:disabled:text-gray-500">
                    Next
                </button>
            </div>
        </nav>
    )
}

export default Pagination
