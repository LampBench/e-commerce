import { Card, CardContent, CardMedia, IconButton, Rating, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from "react";
import { productStatusColorList, unit } from "../../../constants/shared/product.constant";
import { productStatusNameList } from "../../../constants/shared/columns/products.columns.constant";
import images from "../../../../assets/images";
import "./style.scss";

function ProductCard({ item }) {
    const roundFloat = (num) => {
        return Math.round(num * 100) / 100;
    }

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 product-item">
            <Card className="product-card">
                <CardMedia sx={{ height: 200 }}
                    image={images['default_product_image']}
                />
                <CardContent>
                    <div className="product-card-name">
                        {item.name}
                    </div>
                    <div>
                        <Typography gutterBottom variant={"h5"} color={"red"} component={"span"}>
                            {roundFloat(item.final_price) + unit}
                        </Typography>
                        {parseInt(item.discount_amount) > 0 && <Typography className="previous-price" gutterBottom variant={"body2"} color={"grey"} component={"span"}>
                            {roundFloat(item.price) + unit}
                        </Typography>}
                    </div>
                    <div className="row">
                        <div className="col-8 rating-star-status">
                            <div>
                                <Rating value={item.rating_star} readOnly></Rating>
                            </div>
                            <div>
                                <Typography gutterBottom variant={"body2"} color={productStatusColorList[item.status]} component={"span"}>
                                    {productStatusNameList[item.status]}
                                </Typography>
                            </div>
                        </div>
                        <div className="col-4 action">
                            <IconButton color="primary" aria-label="add to shopping cart" size="large">
                                <AddShoppingCartIcon />
                            </IconButton>
                        </div>
                    </div>
                </CardContent>
            </Card >
        </div>
    );
}

export default ProductCard;