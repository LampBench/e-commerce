import React from "react";
import { MenuBook, Home, Phone, Email } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import images from "../../../../../assets/images";
import './style.scss';

function Footer() {
    return (
        <div className="row footer">
            <div className="col-lg-3 col-md-4 col-sm-12 brand-logo-name">
                <div>
                    <MenuBook sx={{ display: { xs: 'none', md: 'flex' }, height: 50, width: 50, color: 'white', mr: 1 }} />
                    <Typography
                        variant="h3"
                        component="h3"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        BOOKSTORE
                    </Typography>
                </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12 other-information">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 row contact-information">
                        <div>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                            >
                                CONTACT US
                            </Typography>
                        </div>
                        <div>
                            <Home sx={{ display: { xs: 'none', md: 'flex' }, color: 'white', mr: 1 }} />
                            <Typography
                                variant="h6"
                                component="h6"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                            >
                                123 Cong Hoa Street, Tan Binh District, Ho Chi Minh City
                            </Typography>
                        </div>
                        <div>
                            <Phone sx={{ display: { xs: 'none', md: 'flex' }, color: 'white', mr: 1 }} />
                            <Typography
                                variant="h6"
                                component="h6"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                            >
                                {`(028) 12345678`}
                            </Typography>
                        </div>
                        <div>
                            <Email sx={{ display: { xs: 'none', md: 'flex' }, color: 'white', mr: 1 }} />
                            <Typography
                                variant="h6"
                                component="h6"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                            >
                                eCommerce@email.com
                            </Typography>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 row follow-information">
                        <div>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                            >
                                FOLLOW US
                            </Typography>
                        </div>
                        <div>
                            <Link to="https://vi-vn.facebook.com/">
                                <Image src={images['facebook_icon']}></Image>
                            </Link>
                            <Link to="https://twitter.com/?lang=vi">
                                <Image src={images['twitter_icon']}></Image>
                            </Link>
                            <Link to="https://www.instagram.com/">
                                <Image src={images['instagram_icon']}></Image>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;