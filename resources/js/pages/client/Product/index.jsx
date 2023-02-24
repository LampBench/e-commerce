import { CircularProgress, Pagination } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CATEGORY } from '../../../reducers/categorySlice';
import { SET_EXPIRE_SOON_PRODUCTS } from '../../../reducers/productSlice';
import ProductCard from '../../../components/client/ProductCard';
import ProductsCarousel from '../../../components/client/ProductsCarousel';
import CountdownComponent from '../../../components/client/CountdownComponent';
import CategoryService from '../../../services/category.service';
import ProductService from '../../../services/product.service';
import { expireDiscountDays, availableStatus, comingSoonStatus } from '../../../constants/shared/product.constant';
import { productStatusNameList } from "../../../constants/shared/columns/products.columns.constant";
import BoltIcon from '@mui/icons-material/Bolt';
import './style.scss';
import NestedDropdown from '../../../components/shared/NestedDropdown';

function ProductList() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);
    const expireSoonProducts = useSelector((state) => state.product.expireSoonProducts);
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const [showCategories, setShowCategories] = useState([]);
    const [showStatus, setShowStatus] = useState([]);
    const [params, setParams] = useState({
        page: 1,
        sort: "discount-amount",
        order: "desc",
        perPage: "10",
        search: "",
        filterFields: {
            status: {
                field: "status",
                value: showStatus.join("+")
            },
            manufacturer: {
                field: "manufacturer-id",
                value: ""
            },
            category: {
                field: "category-id",
                value: showCategories.join("+")
            }
        },
        expire: ""
    });

    const filterFields = [
        {
            field: 'category',
            show: 'Categories',
            values: categories,
            checkShow: showCategories,
            setCheckShow: setShowCategories
        },
        {
            field: 'status',
            show: 'Status',
            values: Object.keys(productStatusNameList).map((key) => {
                return ({
                    'id': parseInt(key),
                    'name': productStatusNameList[key],
                    'all_children': []
                });
            }),
            checkShow: showStatus,
            setCheckShow: setShowStatus
        },
    ]

    const handleChange = (event, value) => {
        setPage(value);
        setParams((prevValue) => {
            return { ...prevValue, page: value };
        });
    };

    const ready = () => {
        return data && categories && expireSoonProducts;
    }

    const getProducts = (urlParams) => {
        console.log('fetch')
        ProductService.getProducts(urlParams)
            .then((res) => {
                setData(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const getExpireSoonProducts = () => {
        if (expireSoonProducts) {
            ProductService.getProducts({
                sort: "final-price",
                order: "asc",
                perPage: "all",
                expire: expireDiscountDays,
                filterFields: {
                    status: {
                        field: "status",
                        value: availableStatus
                    },
                },
            })
                .then((res) => {
                    dispatch(SET_EXPIRE_SOON_PRODUCTS(res.data.data));
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }

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

    const setAPIParams = (checkShowId, filterField, setCheckShow) => {
        let tempParams = params;
        tempParams.filterFields[filterField].value = checkShowId.join("+");
        getProducts(tempParams);
        setCheckShow(checkShowId);
        setParams(tempParams);
    }

    useEffect(() => {
        getCategories();
        getProducts(params);
        getExpireSoonProducts();
    }, []);

    return (
        <div className='container product-page'>
            {!ready() && <CircularProgress />}
            {ready() &&
                <div className='product-content'>
                    {expireSoonProducts.length > 0 &&
                        <div className='row products-expire-soon'>
                            <div className='carousel-header'>
                                <h1 className='title'><BoltIcon className='carousel-icon'></BoltIcon> Expire soon</h1>
                                <h4 className='carousel-countdown'>Expire in <CountdownComponent expireDiscountDays={expireDiscountDays} /></h4>
                            </div>
                            <ProductsCarousel items={expireSoonProducts} carouselName={'expireSoon'} perSlide={4}></ProductsCarousel>
                        </div>
                    }
                    <div className='products-filter'>
                        {filterFields.map((filterField) => {
                            return (
                                <NestedDropdown
                                    items={filterField.values}
                                    dropdownName={filterField.field}
                                    title={filterField.show}
                                    drop={'down'}
                                    setAPIParams={setAPIParams}
                                    checkShow={filterField.checkShow}
                                    setCheckShow={filterField.setCheckShow}
                                    key={'nested_dropdown_' + filterField.field}>
                                </NestedDropdown>
                            );
                        })}
                    </div>
                    <div className='row products-list'>
                        {data.data.map((item) => {
                            return (
                                <ProductCard item={item} key={'product_' + item.id}></ProductCard>
                            );
                        })}
                        <div className='pagination'>
                            <Pagination count={data.meta.last_page} page={page} onChange={handleChange} color="primary" />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default ProductList;