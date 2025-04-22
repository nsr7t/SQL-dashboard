import DashboardCard from "../components/ui/DashboardCard"
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { useState } from "react"
import LineGraph from "../components/ui/LineGraph"

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function Dashboard() {
    const [timeFrame, setTimeFrame] = useState("7")
    function getData() {
        switch (timeFrame) {
            case "7":
                return {
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [
                        {
                            label: "Total Queries",
                            data: [40, 50, 75, 30, 95, 32, 45],
                            backgroundColor: "rgba(75,192,192,0.6)",
                        },
                    ],
                }
            case "30":
                return {
                    labels: Array.from({ length: 30 }, (_, i) => {
                        const date = new Date()
                        date.setDate(date.getDate() - (29 - i))
                        return date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                        })
                    }),
                    datasets: [
                        {
                            label: "Total Queries",
                            data: Array.from({ length: 30 }, () =>
                                Math.floor(Math.random() * 4000),
                            ),
                            backgroundColor: "rgba(75,192,192,0.6)",
                        },
                    ],
                }

            case "90":
                return {
                    labels: Array.from({ length: 90 }, (_, i) => {
                        {
                            const date = new Date()
                            date.setDate(date.getDate() - (29 - i))
                            return date.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                            })
                        }
                    }),
                    datasets: [
                        {
                            label: "Total Queries",
                            data: Array.from({ length: 90 }, () =>
                                Math.floor(Math.random() * 4000),
                            ),
                            backgroundColor: "rgba(75,192,192,0.6)",
                        },
                    ],
                }
            default:
                return {}
        }
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Query Activity" },
        },
    }

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
                        <Bar data={getData()} options={chartOptions} />
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
