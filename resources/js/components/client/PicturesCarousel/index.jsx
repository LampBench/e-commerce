import React from "react";
import { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_CHOSEN_CATEGORY } from "../../../reducers/categorySlice";
import images from "../../../../assets/images";
import './style.scss';

function PicturesCarousel({ carouselImage }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleClickSlide = (image) => {
        let value = image.fieldSelect ? image[image.fieldSelect] : "";
        dispatch(SET_CHOSEN_CATEGORY(value));
        navigate('/products');
    }

    return (
        <div className="picture-carousel">
            {carouselImage.length > 0 &&
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {carouselImage.map((image) => {
                        return (
                            <Carousel.Item key={"carousel_" + image.name} style={{
                                backgroundColor: image.backgroundColor ? image.backgroundColor : 'transparent'
                            }}>
                                <Button onClick={() => handleClickSlide(image)}>
                                    <img
                                        className="d-block w-100"
                                        src={images[image.name]}
                                        style={{ height: 350 }}
                                    />
                                    <Carousel.Caption>
                                        {image.title && <h3 style={{ color: image.color ? image.color : 'black' }}>{image.title}</h3>}
                                        {image.describe && <p style={{ color: image.color ? image.color : 'black' }}>{image.describe}</p>}
                                    </Carousel.Caption>
                                </Button>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            }
        </div>
    );
}

export default PicturesCarousel;