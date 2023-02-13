import * as Yup from "yup";

export const CategoryFormItems = [
    {
        label: "Category Name",
        name: "category_name",
        type: "text",
        placeholder: "Enter category name",
        rangeLength: 50,
        rules: Yup.string()
            .required("Category name is required")
            .max(50, "Category name must be less than 50 characters")
            .min(3, "Category name must be more than 3 characters"),
    },
    {
        label: "Category Desc",
        name: "category_desc",
        type: "text",
        placeholder: "Enter category description",
        rangeLength: 50,
        rules: Yup.string()
            .required("Category description is required")
            .max(50, "Category description must be less than 50 characters")
            .min(3, "Category description must be more than 3 characters"),
    },
];
