
const Dashboard = () => {
    const isLoggedIn = true;
    return(
        <div>
            {isLoggedIn ? "true" : "false"}
        </div>
    )
}

export default Dashboard