import React from "react";
import { Carousel, Button } from "react-bootstrap";
import images from "../../../../assets/images";
import { useDispatch } from "react-redux";
import { SET_CHOSEN_CATEGORY } from "../../../reducers/categorySlice";
import { useNavigate } from "react-router-dom";
import './style.scss';

function MultiItemsCarousel({ carouselMultiItems }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getColumnSize = (slide) => {
        return 12 / slide.length;
    }

    const handleClickSlide = (image) => {
        let value = image.fieldSelect ? image[image.fieldSelect] : "";
        dispatch(SET_CHOSEN_CATEGORY(value));
        navigate('/products');
    }

    return (
        <div className="multi-items-carousel">
            {carouselMultiItems.length > 0 &&
                <Carousel>
                    {carouselMultiItems.map((slide) => {
                        return (
                            <Carousel.Item key={'slide_' + slide.id}>
                                <div className="row">
                                    {slide.values.map((image) => {
                                        return (
                                            <div className={"col-lg-" + getColumnSize(slide.values) + " col-md-" + getColumnSize(slide.values) + " col-sm-12"
                                            } style={{
                                                backgroundColor: image.backgroundColor ? image.backgroundColor : 'transparent'
                                            }}
                                                key={"slide_" + slide.id + "_" + image.name}>
                                                <Button onClick={() => handleClickSlide(image)}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={images[image.name]}
                                                        style={{ height: 200 }}
                                                    />
                                                </Button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            }
        </div >
    );
}

export default MultiItemsCarousel;