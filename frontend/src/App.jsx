import { BrowserRouter } from "react-router"
import Layout from "./components/layout/Layout"

function App() {
    return (
        <BrowserRouter>
            <div className="flex">
                <Layout>Some Context</Layout>
            </div>
        </BrowserRouter>
    )
}

export default App
