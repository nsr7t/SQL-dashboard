import { BrowserRouter } from "react-router"
import Layout from "./components/layout/Layout"

function App() {
    return (
        <BrowserRouter>
            <div className="flex">
                <Layout />
            </div>
        </BrowserRouter>
    )
}

export default App
