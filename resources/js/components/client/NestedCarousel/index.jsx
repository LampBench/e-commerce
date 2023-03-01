import React from "react";
import { useState, useEffect } from "react";
import { availableStatus } from "../../../constants/shared/product.constant";
import ProductService from '../../../services/product.service';
import ProductsCarousel from "../ProductsCarousel";
import MultiItemsCarousel from "../MultiItemsCarousel";
import './style.scss';

function NestedCarousel({ item }) {
    const [products, setProducts] = useState([]);
    const carouselHeader = item.carouselHeader.map((slide) => {
        return {
            id: slide.id,
            values: slide.values.map((value) => {
                return {
                    name: value,
                    backgroundColor: null,
                    fieldSelect: 'category',
                    category: {
                        id: item.id,
                        name: item.name
                    },
                    manufacturer: null
                };
            })
        };
    });

    const getProducts = () => {
        ProductService.getProductsApplyFilter({
            sort: "on-sale",
            order: "asc",
            filterFields: {
                status: {
                    field: "status",
                    value: availableStatus
                },
                category: {
                    field: "category-id",
                    value: item.id
                },
                perPage: {
                    field: "per-page",
                    value: item.perSlide * item.slide
                }
            },
        })
            .then((res) => {
                setProducts(res.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            {products.length > 0 &&
                <div className='row nested-carousel'
                    style={{ backgroundColor: item.backgroundColor }}>
                    <div className='carousel-header'>
                        <h1 className='title' style={{ color: item.color }}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h1>
                        <MultiItemsCarousel carouselMultiItems={carouselHeader}></MultiItemsCarousel>
                    </div>
                    <ProductsCarousel items={products} carouselName={"nestedCarousel" + item.id} perSlide={item.perSlide}></ProductsCarousel>
                </div>
            }
        </>
    );
}

export default NestedCarousel;