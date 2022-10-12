import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './bannerStyle.css';
import { GrFormNext, GrPrevious, GrFormPrevious } from 'react-icons/gr';
import Slider from "react-slick";
import { Img, Box } from '@chakra-ui/react';
function FinalBanner() {

    const PreviousBtn = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <h1 style={{ color: "black", fontSize: "45px" }}> <GrFormPrevious /> </h1>
            </div>
        );
    };
    const NextBtn = (props) => {
        const { className, onClick } = props;
        return (
            <Box className={className} onClick={onClick} display="none">
                <h1 style={{ fontWeight: "bolder", fontSize: "45px" }}> <GrFormNext />  </h1>
            </Box>

        );
    };

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <PreviousBtn />,
        autoplaySpeed: 3000,
        nextArrow: <NextBtn />,
        dots: true
    };
    return (

        <Box className="fiximg" style={{ marginTop: "20px" }} height={{ base: '130px', md: '220px', lg: '300px' }} width={{ base: '100%', md: '100%', lg: '100%' }}>
            <Slider  {...settings}
            >
                <div>
                    <Img height={{ base: '130px', md: '220px', lg: '300px' }} src="https://raw.githubusercontent.com/jigar-sable/flipkart-mern/master/frontend/src/assets/images/Banners/fashion-sale.webp" alt="" />
                </div>
                <div>
                    <Img height={{ base: '130px', md: '220px', lg: '300px' }} src="https://github.com/jigar-sable/flipkart-mern/blob/master/frontend/src/assets/images/Banners/fashionsale.jpg?raw=true" alt="" />
                </div>
                <div>
                    <Img height={{ base: '130px', md: '220px', lg: '300px' }} src="https://github.com/jigar-sable/flipkart-mern/blob/master/frontend/src/assets/images/Banners/gadget-sale.jpg?raw=true" alt="" />
                </div>
                <div>
                    <Img height={{ base: '130px', md: '220px', lg: '300px' }} src="https://github.com/jigar-sable/flipkart-mern/blob/master/frontend/src/assets/images/Banners/kitchen-sale.jpg?raw=true" alt="" />
                </div>

            </Slider>
        </Box>
    );
}

export default FinalBanner;