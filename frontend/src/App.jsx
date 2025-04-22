import { BrowserRouter } from "react-router"
import Layout from "./components/layout/Layout"
import Dashboard from "./pages/Dashboard"

function App() {
    return (
        <BrowserRouter>
            <div className="flex">
                <Layout>
                    <Dashboard />
                </Layout>
            </div>
        </BrowserRouter>
    )
}

export default App
