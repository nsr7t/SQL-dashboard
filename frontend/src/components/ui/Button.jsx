function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    props,
}) {
    const baseClasses =
        "inline-flex item-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors "

    const variantClasses = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
        secondary:
            "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",
        outline:
            "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
        danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
    }

    const sizeClasses = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    }
    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
