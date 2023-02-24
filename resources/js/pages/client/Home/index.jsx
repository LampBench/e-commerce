import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { SET_CATEGORY } from '../../../reducers/categorySlice';
import CategoryService from '../../../services/category.service';

function Home() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);

    const getCategories = () => {
        if (categories) {
            CategoryService.getCategories({
                sort: "name",
                order: "asc",
                perPage: "all",
                search: "",
            })
                .then((res) => {
                    dispatch(SET_CATEGORY(res.data.data));
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="container">
            <h1>Home</h1>
        </div>
    );
}

export default Home;