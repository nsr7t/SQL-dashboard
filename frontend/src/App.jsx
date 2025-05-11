import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Layout from "./components/layout/Layout"
import Dashboard from "./pages/Dashboard"
import AnalyticsPage from "./pages/AnalyticsPage"
import SettingsPage from "./pages/SettingsPage"
import QueriesPage from "./pages/QueriesPage"
import ReportsPage from "./pages/ReportsPage"
import UserPage from "./pages/UserPage"

function App() {
    return (
        <BrowserRouter>
            <div className="flex">
                <Layout>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/dashboard" />}
                        />
                        <Route
                            path="/overview"
                            element={<Navigate to="/dashboard" />}
                        />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/queries" element={<QueriesPage />} />
                        <Route path="/reports" element={<ReportsPage />} />
                        <Route path="/analytics" element={<AnalyticsPage />} />
                        <Route path="/users" element={<UserPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Routes>
                </Layout>
            </div>
        </BrowserRouter>
    )
}

export default App
