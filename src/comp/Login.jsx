import { useState } from "react"

const LogIn = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>Gotcha  Login Page</div>
            <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Log In - {count}
            </button>
        </>
    )
}
export default LogIn