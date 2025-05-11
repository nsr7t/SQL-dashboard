import { useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            {/* Sidebar on the left */}
            <Sidebar isOpen={isOpen} />

            {/* Right side: header + page content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header at the top */}
                <Header setIsOpen={setIsOpen} isOpen={isOpen} />

                {/* Page content below header */}
                <main className="flex-1 overflow-auto bg-gray-50 p-4 dark:bg-gray-950">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
