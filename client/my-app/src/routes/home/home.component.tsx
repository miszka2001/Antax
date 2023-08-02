import { Outlet } from "react-router-dom";

const Home = () => {
    return (<div>
        <h1>I am home</h1>
        <Outlet />
    </div>)
}

export default Home;