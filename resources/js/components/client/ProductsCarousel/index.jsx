import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProductCard from '../ProductCard';
import { chunk } from 'lodash';
import './style.scss';

function ProductsCarousel({ items, carouselName, perSlide }) {
    const booksPerSlide = chunk(items, perSlide);
    return (
        <Carousel>
            {booksPerSlide.map((books, index) => {
                return (
                    <Carousel.Item key={"product_carousel_" + carouselName + index}>
                        <div className='row carousel-item-row'>
                            {
                                books.map((book) => {
                                    return <ProductCard item={book} key={'product_expire' + book.id}></ProductCard>;
                                })
                            }
                        </div>
                    </Carousel.Item>
                );
            })}
        </Carousel >
    );
}

export default ProductsCarousel;