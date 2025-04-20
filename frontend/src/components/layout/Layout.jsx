import { useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

function Layout() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Sidebar isOpen={isOpen} />
            <Header setIsOpen={setIsOpen} isOpen={isOpen} />
        </>
    )
}

export default Layout
