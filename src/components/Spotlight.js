import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgImg1 from "../assets/images/bg-1.jpg";
import bgImg2 from "../assets/images/bg-3.jpg";
import leftArrow from "../assets/icons/vector-left.svg";
import rightArrow from "../assets/icons/vector-right.svg";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const slider = useRef(null);
  const navigate = useNavigate();

  const slides = [
    {
      title: "T-Shirts / Tops",
      subtitle: "Summer Value Pack",
      content: "Cool / Colorful / Comfy",
      bgImage: `${bgImg1}`
    },
    {
      title: "Sneakers / Accessories",
      subtitle: "Outdoor Essentials",
      content: "Durable / Stylish / Comfortable",
      bgImage: `${bgImg2}`
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next), // Update the current slide when it changes
  };

  const handleShop = () => {
    navigate("/women");
  };

  return (
    <CarouselContainer>
      <Slider {...settings} ref={slider}>
        {slides.map((slide, index) => (
          <Slide key={index} bgImage={slide.bgImage}>
            <ContentBox>
              <Heading1>{slide.title}</Heading1>
              <Heading2>{slide.subtitle}</Heading2>
              <Paragraph>{slide.content}</Paragraph>
              <Button onClick={handleShop}>Shop Now</Button>
            </ContentBox>
          </Slide>
        ))}
      </Slider>

      <Arrow left onClick={() => slider.current.slickPrev()}>
        <Image src={leftArrow} alt="Previous" />
      </Arrow>
      <Arrow onClick={() => slider.current.slickNext()}>
        <Image src={rightArrow} alt="Next" />
      </Arrow>

      {/* Carousel Indicator */}
      <IndicatorContainer>
        {slides.map((_, index) => (
          <IndicatorPortion
            key={index}
            active={currentSlide === index} // Active portion based on currentSlide
          />
        ))}
      </IndicatorContainer>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  width: 100%;
  margin: 0px auto;
  position: relative;
`;

const Slide = styled.div`
  padding: 120px 150px;
  text-align: center;
  box-sizing: border-box;
  height: 790px; 
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  color: white; 
  justify-items: left;
  background-position-x: center;

  @media screen and (max-width: 980px) {
    padding: 120px;
  }
  @media screen and (max-width: 768px) {
    height: 680px;
  }
  @media screen and (max-width: 640px) {
    height: 650px;
  }
  @media screen and (max-width: 540px) {
    /* height: 350px; */
    padding: 120px 80px;
  }
  @media screen and (max-width: 480px) {
    padding: 80px 80px 100px 80px;
    height: 600px;
  }
  @media screen and (max-width: 440px) {
    padding: 80px 80px 100px 80px;
    height: 540px;
  }
  @media screen and (max-width: 420px) {
    padding: 60px 80px;
    height: 500px;
  }
  @media screen and (max-width: 380px) {
    padding: 60px 60px;
  }
  @media screen and (max-width: 340px) {
    height: 420px;
  }
`;

const ContentBox = styled.div`
  justify-items: left;
`;

const Heading1 = styled.p`
  font-size: 32px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 440px) {
    font-size: 20px;
  }
  @media screen and (max-width: 340px) {
    font-size: 16px;
  }
`;

const Heading2 = styled.h1`
  font-size: 78px;
  max-width: 400px;
  text-align: left;
  @media screen and (max-width: 1100px) {
    font-size: 72px;
  }
  @media screen and (max-width: 768px) {
    font-size: 65px;
  }
  @media screen and (max-width: 640px) {
    font-size: 50px;
  }
  @media screen and (max-width: 440px) {
    font-size: 40px;
  }
  @media screen and (max-width: 340px) {
    font-size: 32px;
  }
`;

const Paragraph = styled.h4`
  font-size: 32px;
  font-weight: 500;
  @media screen and (max-width: 1100px) {
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
  @media screen and (max-width: 640px) {
    font-size: 20px;
  }
  @media screen and (max-width: 440px) {
    font-size: 16px;
  }
  @media screen and (max-width: 340px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  width: 240px;
  padding: 15px ;
  margin-top: 10px;
  background-color: #fff;
  color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  transition: background-color 0.3s;

  &:hover {
    background-color: black;
    color: #fff;
  }
  @media screen and (max-width: 640px) {
    font-size: 20px;
    width: 180px;
  }
  @media screen and (max-width: 440px) {
    font-size: 18px;
    width: 150px;
  }
  @media screen and (max-width: 420px) {
    font-size: 15px;
    width: 120px;
    padding: 12px;
  }
  @media screen and (max-width: 340px) {
    font-size: 12px;
    width: 100px;
    padding: 10px;
  }
`;

const Image = styled.img`
  @media screen and (max-width: 540px) {
    height: 35px;
  }
  @media screen and (max-width: 360px) {
    height: 30px;
  }
`;

const Arrow = styled.button`
  position: absolute;
  top: 23rem;
  ${(props) => (props.left ? "left: 15px;" : "right: 15px;")}
  transform: translateY(-50%);
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 32px;
  z-index: 1;

  @media screen and (max-width: 480px) {
    top: 20rem;
  }
  @media screen and (max-width: 440px) {
    top: 16rem;
  }
  @media screen and (max-width: 380px) {
    ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
  }
  @media screen and (max-width: 340px) {
    top: 12rem;
  }
`;

const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

const IndicatorPortion = styled.div`
  width: 60px;
  height: 10px;
  border-radius: 3px;
  background-color: ${(props) => (props.active ? "white" : "gray")};
  transition: background-color 0.3s;
  @media screen and (max-width: 540px) {
    width: 50px;
  }
  @media screen and (max-width: 360px) {
    width: 30px;
    height: 8px;
  }
`;

