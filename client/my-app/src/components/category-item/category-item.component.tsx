import React from "react";
import { FC } from "react";

export type Category = {
    id: number;
    title: string;
}

type CategoryItemProps = {
    category: Category;
}

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
    return <div className="category-container">
        {/* <img /> */}
        <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Shop now</p>
        </div>
    </div>;
}

export default CategoryItem;
