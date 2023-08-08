import CategoryItem from "../category-item/category-item.component"
import { Category } from "../category-item/category-item.component"

const categories: Category[] = [
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

const Directory = () => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}
export default Directory;