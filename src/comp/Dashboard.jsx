
const Dashboard = () => {
    const isLoggedIn = true;
    return(
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            {isLoggedIn ? 
            <h4 className="text-5xl">True</h4> : 
            <h4 className="text-5xl">False</h4>}

            {isLoggedIn && (
                <>
                <h2>Please Log In</h2>
                </>
                )
            }
        </div>
    )
}

export default Dashboard