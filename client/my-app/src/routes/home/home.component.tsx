import { Outlet } from "react-router-dom";

const Home = () => {
    return (
    <div>
        <div className="categories-container">
            <div className="category-container">
                {/* <img /> */}
                <div className="category-body-container">
                    <h2>T-shirt</h2>
                    <p>Shop now</p>
                </div>
            </div>
            <div className="category-container">
                {/* <img /> */}
                <div className="category-body-container">
                    <h2>Trousers</h2>
                    <p>Shop now</p>
                </div>
            </div>
            <div className="category-container">
                {/* <img /> */}
                <div className="category-body-container">
                    <h2>Glasses</h2>
                    <p>Shop now</p>
                </div>
            </div>
            <div className="category-container">
                {/* <img /> */}
                <div className="category-body-container">
                    <h2>Jackets</h2>
                    <p>Shop now</p>
                </div>
            </div>
            <div className="category-container">
                {/* <img /> */}
                <div className="category-body-container">
                    <h2>Hats</h2>
                    <p>Shop now</p>
                </div>
            </div>

        </div>
        <Outlet />
    </div>
    )
}

export default Home;