function LineGraph({ percentage, title, bgColor }) {
    return (
        <div>
            <div className="mb-1 flex justify-between">
                <span className="text-sm font-medium text-gray-600">
                    {title}
                </span>
                <span className="text-sm font-medium text-gray-900">
                    {percentage}%
                </span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                    className={`h-2 rounded-full ${bgColor}`}
                    style={{
                        width: `${percentage}%`,
                    }}
                ></div>
            </div>
        </div>
    )
}

export default LineGraph
