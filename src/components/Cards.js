import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import bgImg1 from "../assets/images/bg-2.jpg"
import bgImg2 from "../assets/images/bg-3.jpg"


export default function Cards() {
  return (
    <div>
      <CardWrapper>
        <CardSection>

          <CardLeft>
            <Price>Low Price</Price>
            <TextBox>
              <Text>High Coziness</Text>
              <Off>UPTO 50% OFF</Off>
            </TextBox>
            <Explore to={'/women'}>Explore Items</Explore>
          </CardLeft>

          <CardRight>
            <Price>Beyoung Presents</Price>
            <TextBox>
              <Text>High Coziness</Text>
              <Off>UPTO 50% OFF</Off>
            </TextBox>
            <Explore to={'/women'}>Explore Items</Explore>
          </CardRight>

        </CardSection>
      </CardWrapper>
    </div>
  )
}


const CardWrapper = styled.div`
  margin: 50px auto;
  position: relative;
  padding: 0 15px;
`

const CardSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
    padding: 10px;
    @media screen and (max-width: 785px) {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    @media screen and (max-width: 400px) {
      padding: 0px;
    }
`

const CardLeft = styled.div`
    background-image: url(${bgImg1});
    background-size: 160%; 
    width: 40%;
    padding: 20px 15px 50px 30px ;
    border-radius: 15px;
    box-shadow: 6px 0 10px rgba(0, 0, 0, 0.3);
    @media screen and (max-width: 785px) {
      width:70%;
    }
    @media screen and (max-width: 400px) {
      background-size: cover;
      padding: 20px 15px 40px 30px ;
    }
`

const CardRight = styled.div`
    background-image: url(${bgImg2});
    background-size: 150%; 
    width: 44%;
    padding: 20px 15px 50px 30px ;
    border-radius: 15px;
    box-shadow: 6px 0 10px rgba(0, 0, 0, 0.3);
    @media screen and (max-width: 785px) {
      width:70%;
    }
    @media screen and (max-width: 400px) {
      background-size: cover;
      padding: 20px 15px 40px 30px ;
    }
`

const Price = styled.h5`
    font-size: 18px;
    font-weight: 800;
    color: #ffffff;
    @media screen and (max-width: 490px) {
      font-size: 15px;
    }
`

const TextBox = styled.div`
`

const Text = styled.h2`
    font-size: 34px;
    color: #ffffff;
    margin: 0;
    @media screen and (max-width: 490px) {
      font-size: 25px;
    }
`

const Off = styled.h3`
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    @media screen and (max-width: 490px) {
      font-size: 12px;
    }
`

const Explore = styled(Link)`
    color: #ffffff;
    font-size: 20px;
    font-weight: 800;
    line-height: 4;
    &:hover{
        color: black;
    }
    @media screen and (max-width: 490px) {
      font-size: 17px;
    }
`