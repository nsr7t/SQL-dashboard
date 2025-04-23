import DashboardCard from "../components/ui/DashboardCard"
import { useState } from "react"
import LineGraph from "../components/ui/LineGraph"
import QueryChart from "../components/ui/QueryChart"

function Dashboard() {
    const [timeFrame, setTimeFrame] = useState("7")
    return (
        <div className="space-y-6 p-6">
            <div>
                <h1 className="text-2xl font-black text-gray-800">
                    Dashboard Overview
                </h1>
                <p className="mb-2 text-gray-600">
                    Welcome Back! Here's what's happening with your database
                    today.
                </p>
            </div>
            <DashboardCard />
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow lg:col-span-2">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Query Trends
                        </h2>
                        <select
                            className="rounded-md border border-blue-300 px-3 py-1.5 text-sm"
                            onChange={(e) => setTimeFrame(e.target.value)}
                        >
                            <option value="7">Last 7 days</option>

                            <option value="30">Last 30 days</option>

                            <option value="90">Last 90 days</option>
                        </select>
                    </div>

                    <div className="h-80 w-full sm:h-96">
                        <QueryChart timeFrame={timeFrame} />
                    </div>
                </div>
                <div className="rounded-lg bg-white p-6 shadow">
                    <h2 className="mb-6 text-lg font-semibold text-gray-800">
                        Performance Breakdown
                    </h2>
                    <div className="space-y-4">
                        <LineGraph
                            title={"SELECT Queries"}
                            percentage={65}
                            bgColor={"bg-blue-500"}
                        />
                        <LineGraph
                            title={"SELECT Queries"}
                            percentage={15}
                            bgColor={"bg-green-500"}
                        />
                        <LineGraph
                            title={"UPDATE Queries"}
                            percentage={12}
                            bgColor={"bg-yellow-500"}
                        />
                        <LineGraph
                            title={"DELETE Queries"}
                            percentage={8}
                            bgColor={"bg-red-500"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
