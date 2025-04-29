import { DatabaseIcon } from "lucide-react"

function QueriesPage() {
    return (
        <div>
            <div className="">
                <DatabaseIcon />
                <h1>SQL Queries</h1>
            </div>
            <div className=" ">
                <div className="">
                    <textarea
                        placeholder="Enter your SQL query here..."
                        defaultValue="SELECT * FROM users"
                    ></textarea>
                </div>
            </div>
        </div>
    )
}

export default QueriesPage
