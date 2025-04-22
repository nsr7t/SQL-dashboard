import {
    ActivityIcon,
    AlertCircleIcon,
    ClockIcon,
    UserIcon,
} from "lucide-react"

function DashboardCard() {
    // When backend is set up some data will be calculated
    const cardData = [
        {
            title: "Total Queries",
            value: "1,284",
            change: "+12.5%",
            positive: true,
            icon: <ActivityIcon className="text-blue-500" />,
            bgColor: "bg-blue-50",
        },
        {
            title: "Error Rate",
            value: "2.3%",
            change: "-0.8%",
            positive: true,
            icon: <AlertCircleIcon className="text-red-500" />,
            bgColor: "bg-red-50",
        },
        {
            title: "Active Users",
            value: "32",
            change: "+4",
            positive: true,
            icon: <UserIcon className="text-green-500" />,
            bgColor: "bg-green-50",
        },
        {
            title: "Avg. Query Time",
            value: "234ms",
            change: "-18ms",
            positive: true,
            icon: <ClockIcon className="text-green-500" />,
            bgColor: "bg-purple-50",
        },
    ]
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cardData.map((item, index) => (
                <div className="rounded-lg bg-white p-6 shadow" key={index}>
                    <div className="item-center flex">
                        <div className={`rounded-lg p-3 ${item.bgColor}`}>
                            {item.icon}
                        </div>
                        <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-500">
                                {item.title}
                            </h3>
                            <div className="flex items-baseline">
                                <p className="text-2xl font-semibold text-gray-900">
                                    {item.value}
                                </p>
                                <p
                                    className={`ml-2 text-sm font-medium ${item.positive ? "text-green-600" : `text-red-600`}`}
                                >
                                    {item.change}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DashboardCard
