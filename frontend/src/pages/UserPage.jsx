import { UserIcon } from "lucide-react"

function UserPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-3">
                <UserIcon size={24} className="text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-800">Users</h1>
            </div>
            <div className="rounded-lg bg-white shadow">
                <div className="border-b border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Active Users
                    </h2>
                </div>
                <div className="p-6">
                    <table className="min-w-full">
                        <thead>
                            <tr className="text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                <td className="px-6 py-3">User</td>
                                <td className="px-6 py-3">Role</td>
                                <td className="px-6 py-3">Status</td>
                                <td className="px-6 py-3">Last Active</td>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {[
                                {
                                    name: "John Doe",
                                    role: "Admin",
                                    status: "Online",
                                    lastActive: "Now",
                                },

                                {
                                    name: "Jane Smith",
                                    role: "Developer",
                                    status: "Online",
                                    lastActive: "5m ago",
                                },

                                {
                                    name: "Mike Johnson",
                                    role: "Analyst",
                                    status: "Offline",
                                    lastActive: "2h ago",
                                },
                            ].map((user, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4">{user.name}</td>
                                    <td className="px-6 py-4 text-gray-500">
                                        <span
                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${user.status === "Online" ? "bg-green-100 text-green-800" : "bg-green-100 text-gray-800"}`}
                                        >
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{user.status}</td>
                                    <td className="px-6 py-4 text-gray-500">
                                        {user.lastActive}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserPage
