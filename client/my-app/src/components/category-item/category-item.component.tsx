import React from "react";
import { FC } from "react";
import { CategoryBody, CategoryContainer } from "./category-item.styles";

export type Category = {
    id: number;
    title: string;
}

type CategoryItemProps = {
    category: Category;
}

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
    return <CategoryContainer>
        {/* <img /> */}
        <CategoryBody>
            <h2>{category.title}</h2>
            <p>Shop now</p>
        </CategoryBody>
    </CategoryContainer>;
}

export default CategoryItem;
