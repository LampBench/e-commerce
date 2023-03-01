import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_HOME_EXPIRE_SOON_PRODUCTS, SET_RECOMMENDED_PRODUCTS } from "../../../reducers/productSlice";
import { carouselImages, carouselMultiItems, carouselCategories } from "../../../constants/client/home-page.constant";
import { availableStatus, comingSoonStatus, expireDiscountDays } from "../../../constants/shared/product.constant";
import ProductService from '../../../services/product.service';
import NestedCarousel from "../../../components/client/NestedCarousel";
import CountdownComponent from "../../../components/client/CountdownComponent";
import PicturesCarousel from "../../../components/client/PicturesCarousel";
import MultiItemsCarousel from "../../../components/client/MultiItemsCarousel";
import ProductsCarousel from "../../../components/client/ProductsCarousel";
import BoltIcon from '@mui/icons-material/Bolt';
import { CircularProgress } from "@mui/material";
import './style.scss';

function Home() {

    const dispatch = useDispatch();
    const homeExpireSoonProducts = useSelector((state) => state.product.homeExpireSoonProducts);
    const recommendedProducts = useSelector((state) => state.product.recommendedProducts);

    const homePerSlide = 8;
    const [loading, setLoading] = useState(true);

    const getExpireSoonProducts = () => {
        if (homeExpireSoonProducts.length === 0) {
            ProductService.getProductsApplyFilter({
                sort: "on-sale",
                order: "asc",
                expire: expireDiscountDays,
                filterFields: {
                    status: {
                        field: "status",
                        value: availableStatus
                    },
                    category: {
                        field: "category-id",
                        value: ""
                    },
                    perPage: {
                        field: "per-page",
                        value: "all"
                    }
                },
            })
                .then((res) => {
                    dispatch(SET_HOME_EXPIRE_SOON_PRODUCTS(res.data.data));
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }

    const getRecommendedProducts = () => {
        if (recommendedProducts.length === 0) {
            ProductService.getProductsApplyFilter({
                sort: "recommended",
                order: "asc",
                expire: '',
                filterFields: {
                    status: {
                        field: "status",
                        value: availableStatus
                    },
                    category: {
                        field: "category-id",
                        value: ""
                    },
                    perPage: {
                        field: "per-page",
                        value: homePerSlide * 3
                    }
                },
            })
                .then((res) => {
                    dispatch(SET_RECOMMENDED_PRODUCTS(res.data.data));
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        setLoading(false);
    }

    useEffect(() => {
        getExpireSoonProducts();
        getRecommendedProducts();
    }, []);

    return (
        <div className="home-page">
            {loading && <CircularProgress />}
            {!loading &&
                <div className="home-content">
                    <PicturesCarousel carouselImage={carouselImages}></PicturesCarousel>
                    <MultiItemsCarousel carouselMultiItems={carouselMultiItems}></MultiItemsCarousel>
                    {homeExpireSoonProducts.length > 0 &&
                        <div className='row products-expire-soon'>
                            <div className='carousel-header'>
                                <h1 className='title'><BoltIcon className='carousel-icon'></BoltIcon> Expire soon</h1>
                                <h4 className='carousel-countdown'>Expire in <CountdownComponent expireDiscountDays={expireDiscountDays} /></h4>
                            </div>
                            <ProductsCarousel items={homeExpireSoonProducts} carouselName={"homeExpireSoon"} perSlide={homePerSlide}></ProductsCarousel>
                        </div>
                    }
                    {carouselCategories.length > 0 && carouselCategories.map((carouselCategory) => {
                        return (
                            <NestedCarousel item={carouselCategory} key={'nested_carousel_category' + carouselCategory.id}></NestedCarousel>
                        );
                    })}
                    {recommendedProducts.length > 0 &&
                        <div className='row products-recommended'>
                            <div className='carousel-header'>
                                <h1 className='title'> Recommend for you</h1>
                            </div>
                            <ProductsCarousel items={recommendedProducts} carouselName={"homeRecommended"} perSlide={homePerSlide}></ProductsCarousel>
                        </div>
                    }
                </div>}
        </div>
    );
}

export default Home;