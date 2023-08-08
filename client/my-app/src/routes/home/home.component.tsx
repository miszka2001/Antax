import { Outlet } from "react-router-dom";
import  CategoryItem  from "../../components/category-item/category-item.component"

const Home = () => {
const categories = [
    {
        id: 1,
        title: "T-shirts",
    },
    {
        id: 2,
        title: "Trousers",
    },
    {
        id: 3,
        title: "Hats",
    },
    {
        id: 4,
        title: "Mens",
    },
    {
        id: 5,
        title: "Womens",
    },
]

    return (
    <div>
        <div className="categories-container">
            {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
            ))}
        </div>
        <Outlet />
    </div>
    )
}

export default Home;