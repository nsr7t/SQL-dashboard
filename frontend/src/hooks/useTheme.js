import { useState, useEffect } from "react"

function useTheme() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme")
            ? localStorage.getItem("theme")
            : "system",
    )

    const element = document.documentElement
    const darkQuery = window.matchMedia("(prefer-color-scheme: dark)")

    function onWindowMatch() {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) && darkQuery.matches)
        ) {
            element.classList.add("dark")
        } else {
            element.classList.remove("dark")
        }
    }

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) && darkQuery.matches)
        ) {
            element.classList.add("dark")
        } else {
            element.classList.remove("dark")
        }
    }, [darkQuery, element])

    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add("dark")
                localStorage.setItem("theme", "dark")
                break
            case "light":
                element.classList.remove("dark")
                localStorage.setItem("theme", "light")
                break
            default:
                localStorage.removeItem("theme")
                onWindowMatch()
        }
    }, [element, onWindowMatch, theme])

    useEffect(() => {
        const changeHandler = (e) => {
            if (!("theme" in localStorage)) {
                if (e.matches) {
                    element.classList.add("dark")
                } else {
                    element.classList.remove("dark")
                }
            }
        }

        darkQuery.addEventListener("change", changeHandler)

        return () => {
            darkQuery.removeEventListener("change", changeHandler)
        }
    }, [darkQuery, element])

    return [theme, setTheme]
}

export { useTheme }
