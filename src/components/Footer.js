import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div>
      <FooterWrapper>
        <FooterContainer>
          <FooterTop>
            <ContactInfo>
              <Title>Need Help</Title>
              <ContactList>
                <ContactItem> <Clickable1 to="#">Contact Us</Clickable1> </ContactItem>
                <ContactItem> <Clickable1 to="#">Track Order</Clickable1> </ContactItem>
                <ContactItem> <Clickable1 to="#">Returns & Refunds</Clickable1> </ContactItem>
                <ContactItem> <Clickable1 to="#">FAQ's</Clickable1> </ContactItem>
                <ContactItem> <Clickable1 to="#">Career</Clickable1> </ContactItem>
              </ContactList>
            </ContactInfo>

            <CompanyInfo>
              <Title>Company</Title>
              <CompanyList>
                <CompanyItem> <Clickable2 to="#">About Us</Clickable2> </CompanyItem>
                <CompanyItem> <Clickable2 to="#">euphoria Blog</Clickable2> </CompanyItem>
                <CompanyItem> <Clickable2 to="#">euphoriastan</Clickable2> </CompanyItem>
                <CompanyItem> <Clickable2 to="#">Collaboration</Clickable2> </CompanyItem>
                <CompanyItem> <Clickable2 to="#">Media</Clickable2> </CompanyItem>
              </CompanyList>
            </CompanyInfo>

            <MoreInfo>
              <Title>More Info</Title>
              <MoreList>
                <MoreItem> <Clickable3 to="#">Terms and Conditions</Clickable3> </MoreItem>
                <MoreItem> <Clickable3 to="#">Privacy Policy</Clickable3> </MoreItem>
                <MoreItem> <Clickable3 to="#">Shipping Policy</Clickable3> </MoreItem>
                <MoreItem> <Clickable3 to="#">Sitemap</Clickable3> </MoreItem>
              </MoreList>
            </MoreInfo>

            <LocationInfo>
              <Title>Location</Title>
              <LocationList>
                <LocationItem> <Clickable4 to="#">support@euphoria.in</Clickable4> </LocationItem>
                <LocationItem> <Clickable4 to="#">Eklingpura Chouraha, Ahmedabad Main Road</Clickable4> </LocationItem>
                <LocationItem> <Clickable4 to="#">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</Clickable4> </LocationItem>
              </LocationList>
            </LocationInfo>
          </FooterTop>
          <FooterBottom>
            <LogoList>
              <Ref>
                <Logo src={require("../assets/icons/facebook.svg").default} />
                <Logo src={require("../assets/icons/instagram.svg").default} />
                <Logo src={require("../assets/icons/twitter.svg").default} />
                <Logo src={require("../assets/icons/linkedln.svg").default} />
              </Ref>
            </LogoList>
            <Downloads>
              <Text>Download The App</Text>
              <Bottom>
                <Group1>
                  <Option src={require("../assets/play.png")} />
                </Group1>
                <Group2>
                  <Option src={require("../assets/appstore.png")} />
                </Group2>
              </Bottom>

            </Downloads>
          </FooterBottom>
          <CategoryBox>
            <LineTag></LineTag>
            <Category>
              <Popular>Popular Categories</Popular>
              <Arrow src={require("../assets/icons/arrow-down.svg").default} />
            </Category>
            <LineTag></LineTag>
          </CategoryBox>
          <ParaBox>
            <Para>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</Para>
          </ParaBox>
        </FooterContainer>
      </FooterWrapper>
    </div>
  )
}


const FooterWrapper = styled.div`
    margin: 0 auto;
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #3c4242;
    padding: 20px 90px 10px 90px;
    margin-top: 20px;
    gap: 50px;
    @media screen and (max-width: 1380px) {
        padding: 20px 70px 10px 70px;
    }
    @media screen and (max-width: 1280px) {
        padding: 20px 60px 10px 60px;
    }
    @media screen and (max-width: 600px) {
        padding: 30px 40px 10px 40px;
    }
`
const FooterTop = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    padding: 0px 40px;
    @media screen and (max-width: 1220px) {
      gap: 60px;
      padding: 0px 20px;
      flex-wrap: wrap;
      row-gap: 40px;
    }
    @media screen and (max-width: 845px) {
      flex-wrap: wrap;
      row-gap: 50px;
    }
    @media screen and (max-width: 600px) {
      flex-wrap: wrap;
      column-gap: 40px;
      row-gap: 30px;
    }
    @media screen and (max-width: 440px) {
      row-gap: 20px;
      justify-content: flex-start;
    }
`

const ContactInfo = styled.div`
`

const Title = styled.h4`
    font-size: 28px;
    color: #f5f5f5;
    margin-bottom: 22px;
    @media screen and (max-width: 845px) {
      margin-top: 15px;
    }
    @media screen and (max-width: 522px) {
      margin-bottom: 7px;
    }
    @media screen and (max-width: 400px) {
      font-size: 24px;
    }
`

const ContactList = styled.ul`
    list-style: none;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left : 0px;
    @media screen and (max-width: 400px) {
      font-size: 16px;
    }
`

const ContactItem = styled.li`

`

const Clickable1 = styled(Link)`
    text-decoration: none;
    color: #f5f5f5;
    font-weight: 300;
`


const CompanyInfo = styled.div`

`

const CompanyList = styled.ul`
    list-style: none;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left : 0px;
    @media screen and (max-width: 400px) {
      font-size: 16px;
    }
`

const CompanyItem = styled.li`

`

const Clickable2 = styled(Link)`
    text-decoration: none;
    color: #f5f5f5;
    font-weight: 300;
`

const MoreInfo = styled.div`

`

const MoreList = styled.ul`
    list-style: none;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left : 0px;
    @media screen and (max-width: 400px) {
      font-size: 16px;
    }
`

const MoreItem = styled.li`

`

const Clickable3 = styled(Link)`
    text-decoration: none;
    color: #f5f5f5;
    font-weight: 300;
`

const LocationInfo = styled.div`
    
`


const LocationList = styled.ul`
    list-style: none;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left : 0px;
    @media screen and (max-width: 400px) {
      font-size: 16px;
    }
`;

const LocationItem = styled.li`

`;

const Clickable4 = styled(Link)`
    text-decoration: none;
    color: #f5f5f5;
    font-weight: 300;
`

const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px 30px 30px;
    padding: 0px 40px;
    align-items: end;
    @media screen and (max-width: 1100px) {
      padding: 10px 20px;
    }
    @media screen and (max-width: 820px) {
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
    }
    @media screen and (max-width: 480px) {
      margin: 0px;
    }
`

const LogoList = styled.div`
    display: flex;
    flex: 1;
    gap: 15px;
    margin-bottom: 10px;
    @media screen and (max-width: 845px) {
      padding-top: 20px;
    }
`

const Ref = styled(Link)`
    @media screen and (max-width: 331px) {
      display: flex;
    }
`

const Logo = styled.img`
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 10px;
    margin-left:10px;
    height: 20px;
`

const Downloads = styled.div`
    display: flex;
    flex: 0.5;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (max-width: 820px) {
      align-items: center;
    }
`
const Text = styled.h4`
    font-size: 28px;
    text-align: right;
    color: #f5f5f5;
    @media screen and (max-width: 420px) {
      text-align: center;
    }
`

const Bottom = styled.div`
    display: flex;
    gap: 20px;
    @media screen and (max-width: 430px) {
      flex-direction: column;
    }
`

const Group1 = styled(Link)`
`
const Group2 = styled(Link)`
`

const Option = styled.img`
`

const CategoryBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const LineTag = styled.div`
    background-color: #6E7374;
    width: 100%;
    height: 0.2px;
    margin: 6px 0px;
`
const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0rem 4rem 0rem 5rem;
    @media screen and (max-width: 600px) {
        margin: 0rem 3rem;
        gap: 40px;
    }
    @media screen and (max-width: 380px) {
        justify-content: center;
    }
`

const Popular = styled.h4`
    font-size: 28px;
    color: #f5f5f5;
    margin: 15px 0px;
    @media screen and (max-width: 768px) {
      margin: 8px 0px;
    }
    @media screen and (max-width: 400px) {
      font-size: 22px;
    }
`

const Arrow = styled.img`
`
const ParaBox = styled.div`
    padding-bottom: 50px;
`

const Para = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: #f5f5f5;
    @media screen and (max-width: 480px) {
      margin: 0px;
    }
    @media screen and (max-width: 400px) {
      font-size: 15px;
    }
`
