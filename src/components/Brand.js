import React from 'react'
import styled from 'styled-components'

import img1 from "../assets/images/nike.jpg"
import img2 from "../assets/images/H&M.jpg"
import img3 from "../assets/images/levis.jpg"
import img4 from "../assets/images/USPA.jpg"
import img5 from "../assets/images/puma.jpg"


export default function Brand() {
  return (
    <div>
      <BrandWrapper>
        <BrandBox>
          <TextBox>Top Brands Deal</TextBox>
          <Para>Up To <Span>60%</Span> off on brands</Para>
          <LogoBox>
            <LogoDiv><Logo src={img1} alt="no-image" /></LogoDiv>
            <LogoDiv><Logo src={img2} alt="no-image" /></LogoDiv>
            <LogoDiv><Logo src={img3} alt="no-image" /></LogoDiv>
            <LogoDiv><Logo src={img4} alt="no-image" /></LogoDiv>
            <LogoDiv><Logo src={img5} alt="no-image" /></LogoDiv>
          </LogoBox>
        </BrandBox>
      </BrandWrapper>
    </div>
  )
}


const BrandWrapper = styled.div`
  margin: 50px;
  position: relative;
  padding: 0 15px;
  @media screen and (max-width: 900px) {
      margin: 50px 40px;
  }
  @media screen and (max-width: 700px) {
      margin: 40px 30px;
  }
`
const BrandBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background-color: #3C4242;
    border-radius: 10px;
    padding: 35px 25px 50px 25px;
    margin: 10px;
    @media screen and (max-width: 1080px) {
      padding: 35px 25px;
    }
    @media screen and (max-width: 480px) {
      padding:15px 10px 20px 10px;
    }
`
const TextBox = styled.h1`
    font-size: 50px;
    font-weight:800;
    color: #fff;
    margin: 0px;
    @media screen and (max-width: 700px) {
      font-size: 45px;
    }
    @media screen and (max-width: 540px) {
      text-align: center;
    }
    @media screen and (max-width: 480px) {
      font-size: 30px;
    }
`
const Para = styled.p`
    font-size: 22px;
    font-weight: 400;
    color: #fff;
    @media screen and (max-width: 700px) {
      font-size: 19px;
    }
    @media screen and (max-width: 480px) {
      font-size: 15px;
    }

`
const Span = styled.span`
    color:#FBD103 ;
`
const LogoBox = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;
    padding: 35px 5px 5px 5px;
    @media screen and (max-width: 1300px) {
      flex-wrap: wrap;
      justify-content: center;
      padding-top: 14px;
    }
    @media screen and (max-width: 900px) {
      padding:10px 10px ;
    }
    @media screen and (max-width: 575px) {
      flex-wrap: wrap;
      justify-content: center;
    }
    @media screen and (max-width: 430px) {
      row-gap: 30px;
    }
`
const LogoDiv = styled.div`
    background-color: #fff;
    padding: 8px;
    border-radius: 10px;
`

const Logo = styled.img`
    width:150px ;
    height: 70px;
    @media screen and (max-width: 1100px) {
      width: 130px;
    }
    @media screen and (max-width: 1080px) {
      width: 110px;
      height: 60px;
    }
`