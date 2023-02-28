import { CircularProgress, Pagination } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_EXPIRE_SOON_PRODUCTS } from '../../../reducers/productSlice';
import ProductCard from '../../../components/client/ProductCard';
import ProductsCarousel from '../../../components/client/ProductsCarousel';
import CountdownComponent from '../../../components/client/CountdownComponent';
import ProductService from '../../../services/product.service';
import ManufacturerService from '../../../services/manufacturer.service';
import {
    expireDiscountDays,
    availableStatus,
    defaultShow,
    defaultSort,
    defaultOrder,
    sortFields,
    orderFields,
    perPageFields
} from '../../../constants/shared/product.constant';
import { productStatusNameList } from "../../../constants/shared/columns/products.columns.constant";
import BoltIcon from '@mui/icons-material/Bolt';
import './style.scss';
import NormalDropdown from '../../../components/shared/NormalDropdown';
import SublistDropdown from '../../../components/shared/SublistDropdown';

function ProductList() {
    const dispatch = useDispatch();
    const chosenCategory = useSelector((state) => state.category.chosenCategory);
    const expireSoonProducts = useSelector((state) => state.product.expireSoonProducts);
    const [data, setData] = useState(null);
    const [manufacturers, setManufacturers] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [showStatus, setShowStatus] = useState([availableStatus]);
    const [showOrder, setShowOrder] = useState([defaultOrder]);
    const [showSort, setShowSort] = useState([defaultSort]);
    const [showManufacturer, setShowManufacturer] = useState([]);
    const [showPerPage, setShowPerPage] = useState([defaultShow]);
    const [params, setParams] = useState({
        page: 1,
        sort: defaultSort,
        order: defaultOrder,
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
                value: chosenCategory ? chosenCategory.id : ""
            },
            perPage: {
                field: "per-page",
                value: showPerPage[0]
            }
        },
        expire: ""
    });

    const filterFields = [
        {
            field: 'status',
            show: 'Status',
            parentField: "filterFields",
            multiple: true,
            sublist: false,
            values: Object.keys(productStatusNameList).map((key) => {
                return ({
                    'id': parseInt(key),
                    'name': productStatusNameList[key],
                });
            }),
            checkShow: showStatus,
            setCheckShow: setShowStatus
        },
        {
            field: 'manufacturer',
            show: 'Manufacturers',
            parentField: "filterFields",
            multiple: true,
            sublist: true,
            values: manufacturers.map((item) => {
                return ({
                    'id': item.id,
                    'name': item.name,
                });
            }),
            checkShow: showManufacturer,
            setCheckShow: setShowManufacturer
        },
        {
            field: 'perPage',
            show: 'Show ' + showPerPage[0],
            parentField: "filterFields",
            multiple: false,
            sublist: false,
            values: perPageFields,
            checkShow: showPerPage,
            setCheckShow: setShowPerPage
        },
        {
            field: 'sort',
            show: sortFields.filter((field) => field.id == showSort)[0].name,
            parentField: null,
            multiple: false,
            sublist: false,
            values: sortFields,
            checkShow: showSort,
            setCheckShow: setShowSort
        },
        {
            field: 'order',
            show: orderFields.filter((field) => field.id == showOrder)[0].name,
            parentField: null,
            multiple: false,
            sublist: false,
            values: orderFields,
            checkShow: showOrder,
            setCheckShow: setShowOrder
        },
    ]

    const handleChange = (event, value) => {
        let tempParams = params;
        tempParams.page = value;
        getProducts(tempParams);
        setPage(value);
        setParams(tempParams);
    };

    const getProducts = (urlParams) => {
        console.log(urlParams)
        ProductService.getProductsApplyFilter(urlParams)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const getManufacturers = () => {
        ManufacturerService.getManufacturersApplyFilter({
            sort: "name",
            order: "asc",
            search: "",
            filterFields: {
                perPage: {
                    field: "per-page",
                    value: 'all'
                },
                category: {
                    field: "category-id",
                    value: chosenCategory ? chosenCategory.id : ""
                }
            }
        })
            .then((res) => {
                setManufacturers(res.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const getExpireSoonProducts = () => {
        if (expireSoonProducts) {
            ProductService.getProductsApplyFilter({
                sort: "on-sale",
                order: "asc",
                perPage: "all",
                expire: expireDiscountDays,
                filterFields: {
                    status: {
                        field: "status",
                        value: availableStatus
                    },
                    category: {
                        field: "category-id",
                        value: chosenCategory ? chosenCategory.id : ""
                    }
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

    const ready = () => {
        return data && expireSoonProducts && manufacturers;
    }

    const checkMultipleChoices = (checkShowId, multiple) => {
        return multiple ? checkShowId.join("+") : checkShowId[0];
    }

    const setAPIParams = (checkShowId, item, setCheckShow) => {
        setLoading(true);
        let tempParams = params;
        if (item.parentField) {
            tempParams[item.parentField][item.field].value = checkMultipleChoices(checkShowId, item.multiple);
        }
        else {
            tempParams[item.field] = checkMultipleChoices(checkShowId, item.multiple);
        }
        getProducts(tempParams);
        setCheckShow(checkShowId);
        setParams(tempParams);
    }

    useEffect(() => {
        getProducts(params);
        getManufacturers();
        getExpireSoonProducts();
    }, []);

    useEffect(() => {
        if (chosenCategory) {
            setLoading(true);
            let tempParams = params;
            tempParams.filterFields.manufacturer.value = "";
            tempParams.filterFields.category.value = chosenCategory.id;
            getProducts(tempParams);
            getExpireSoonProducts();
            getManufacturers();
            setShowManufacturer([]);
            setParams(tempParams);
        }
    }, [chosenCategory]);

    return (
        <div className='container product-page'>
            {loading && <CircularProgress />}
            {!loading &&
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
                    {chosenCategory && <h3 className='page-title'>{chosenCategory.name.charAt(0).toUpperCase() + chosenCategory.name.slice(1)}</h3>}
                    <div className='filter-components'>
                        {filterFields.map((filterField) => {
                            if (filterField.sublist) {
                                return (
                                    <SublistDropdown item={filterField}
                                        setAPIParams={setAPIParams}
                                        checkShow={filterField.checkShow}
                                        setCheckShow={filterField.setCheckShow}
                                        key={'dropdown_' + filterField.field}>
                                    </SublistDropdown>
                                );
                            }
                            else {
                                return (
                                    <NormalDropdown
                                        item={filterField}
                                        setAPIParams={setAPIParams}
                                        checkShow={filterField.checkShow}
                                        setCheckShow={filterField.setCheckShow}
                                        key={'dropdown_' + filterField.field}>
                                    </NormalDropdown>
                                );
                            }
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