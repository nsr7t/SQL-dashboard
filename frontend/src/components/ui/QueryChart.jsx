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

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function QueryChart({ timeFrame }) {
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
    return <Bar data={getData()} options={chartOptions} />
}

export default QueryChart
