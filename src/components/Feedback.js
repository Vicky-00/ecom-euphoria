import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import userImg1 from "../assets/images/user1.png"
import userImg2 from "../assets/images/user2.png"
import userImg3 from "../assets/images/user3.png"


const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
    <FeedbackWrapper>
      <FeedbackContainer>
        <Top>
          <Span></Span>
          <Heading>Feedback</Heading>
        </Top>
        <Slider {...settings}>
          <DivBox>
            <FeedbackCard>
              <ProfileBox>
                <TopBox>
                  <UserImage src={userImg1} alt="John Doe's profile" />
                  <RatingContainer>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} active={i < 4}>★</Star>
                    ))}
                  </RatingContainer>
                </TopBox>
                <UserName>John Doe</UserName>
              </ProfileBox>

              <FeedbackText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</FeedbackText>
            </FeedbackCard>
          </DivBox>

          <DivBox>
            <FeedbackCard>
              <ProfileBox>
                <TopBox>
                  <UserImage src={userImg2} alt="Jane Smith's profile" />
                  <RatingContainer>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} active={i < 5}>★</Star>
                    ))}
                  </RatingContainer>
                </TopBox>
                <UserName>Jane Smith</UserName>
              </ProfileBox>

              <FeedbackText>ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</FeedbackText>
            </FeedbackCard>
          </DivBox>

          <DivBox>
            <FeedbackCard>
              <ProfileBox>
                <TopBox>
                  <UserImage src={userImg3} alt="Michael Brown's profile" />
                  <RatingContainer>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} active={i < 3}>★</Star>
                    ))}
                  </RatingContainer>
                </TopBox>
                <UserName>Michael Brown</UserName>
              </ProfileBox>

              <FeedbackText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</FeedbackText>
            </FeedbackCard>
          </DivBox>

          <DivBox>
            <FeedbackCard>
              <ProfileBox>
                <TopBox>
                  <UserImage src={userImg2} alt="Jane Smith's profile" />
                  <RatingContainer>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} active={i < 4}>★</Star>
                    ))}
                  </RatingContainer>
                </TopBox>
                <UserName>Jane Smith</UserName>
              </ProfileBox>

              <FeedbackText>ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</FeedbackText>
            </FeedbackCard>
          </DivBox>

          <DivBox>
            <FeedbackCard>
              <ProfileBox>
                <TopBox>
                  <UserImage src={userImg1} alt="John Doe's profile" />
                  <RatingContainer>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} active={i < 5}>★</Star>
                    ))}
                  </RatingContainer>
                </TopBox>
                <UserName>John Doe</UserName>
              </ProfileBox>

              <FeedbackText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</FeedbackText>
            </FeedbackCard>
          </DivBox>

          <DivBox>
            <FeedbackCard>
              <ProfileBox>
                <TopBox>
                  <UserImage src={userImg3} alt="Michael Brown's profile" />
                  <RatingContainer>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} active={i < 3}>★</Star>
                    ))}
                  </RatingContainer>
                </TopBox>
                <UserName>Michael Brown</UserName>
              </ProfileBox>

              <FeedbackText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</FeedbackText>
            </FeedbackCard>
          </DivBox>

        </Slider>
      </FeedbackContainer>
    </FeedbackWrapper>
  );
};




const Top = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

const Span = styled.div`
    background-color: #8A33FD;
    width: 6px;
    height: 30px;
    border-radius: 10px;
`

const Heading = styled.h1`
  font-size: 34px;
`

const DivBox = styled.div`
`
const FeedbackWrapper = styled.div`
  margin: 50px;
  @media screen and (max-width: 500px) {
    margin: 30px;
}
`

const FeedbackContainer = styled.div`
  position: relative;
  padding: 30px;
  @media screen and (max-width: 420px) {
    padding: 20px;
  }
`;

const FeedbackCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #BEBCBD;
  border-radius: 10px;
  padding: 20px 20px 30px 20px;
  background-color: #ffff;
  position: relative;
  height: 320px;
  margin: 25px 30px 20px 0px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 850px) {
    height: 270px;
  }
  @media screen and (max-width: 680px) {
    height: 230px;
  }
  @media screen and (max-width: 570px) {
    margin: 20px 10px;
}
  @media screen and (max-width: 470px) {
    height: 270px;
  }
  @media screen and (max-width: 408px) {
    height: 320px;
  }
`
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
`
const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 390px) {
    flex-direction: column;
    gap: 10px;
    justify-content: left;
  }
`

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const RatingContainer = styled.div`

`;

const Star = styled.span`
  color: ${(props) => (props.active ? "#FFD700" : "#e0e0e0")};
  font-size: 1.5rem;
  margin-left: 5px;
  @media screen and (max-width: 390px) {
    margin-left: 0px;
    margin-right: 5px;
  }
`;

const UserName = styled.h3`
  font-size: 22px;
  font-weight: 500;
  color: #3C4242;
  font-weight: bold;
  @media screen and (max-width: 700px) {
    margin: 15px 0px;
  }
`;

const FeedbackText = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #807D7E;
  line-height: 1.6;
  overflow: hidden;
`;


export default Feedback;
