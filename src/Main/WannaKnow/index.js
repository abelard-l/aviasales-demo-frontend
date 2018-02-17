import React, { Component } from "react";
import styled from "styled-components";
import {} from "../../commonComponents";
import imgSocial1 from "./social-1.png";
import imgSocial2 from "./social-2.png";
import imgSocial3 from "./social-3.png";
import imgSocial4 from "./social-4.png";
import imgTopBorder from "./border-top.png";

const WannaKnowWrap = styled.section`
  background: url(${imgTopBorder}) repeat-x top center;
  display: none;
  padding-bottom: 24px;
  padding-top: 39px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const WannaKnow = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

const WannaDiscount = styled.p`
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 1200px) {
    flex-basis: 37%;
    margin: 0px;
    text-align: left;
  }
`;

const SocialMedias = styled.div`
  margin-bottom: 30px;
  text-align: center;

  @media (min-width: 1200px) {
    flex-basis: 25%;
    margin-bottom: 0px;
    text-align: right;
  }
`;
const SocialMedia = styled.img`
  margin-right: 6px;
`;

const SubscribeWrap = styled.div`
  text-align: center;

  @media (min-width: 1200px) {
    flex-basis: 35%;
    text-align: right;
  }
`;

const TextBold = styled.span`
  font-weight: bold;
`;

const Input = styled.input`
  border: 1px solid #a0b0b9;
  border-radius: 2px;
  color: #a0b0b9;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  max-width: 191x;
  padding: 7px;
`;
const Subscribe = styled.button`
  color: white;
  background-color: #ff8e41;
  border: none;
  font-size: 16px;
  line-height: 20px;
  max-width: 139px;
  text-align: center;
  padding: 8px 20px;
`;

export default () => (
  <WannaKnowWrap>
    <div className="container">
      <div className="row">
        <div className="col-lg-offset-1 col-lg-10 col-xs-offset-3 col-xs-6">
          <WannaKnow>
            <WannaDiscount>
              <TextBold>Хотите знать всё о скидках на авиабилеты?</TextBold>
              <br />
              Вы можете подписаться на нашу рассылку через соцсети или по
              электронной почте.
            </WannaDiscount>
            <SocialMedias>
              <SocialMedia src={imgSocial1} />
              <SocialMedia src={imgSocial2} />
              <SocialMedia src={imgSocial3} />
              <SocialMedia src={imgSocial4} />
            </SocialMedias>
            <SubscribeWrap>
              <Input type="text" placeholder="Ваш email" />
              <Subscribe>Подписаться</Subscribe>
            </SubscribeWrap>
          </WannaKnow>
        </div>
      </div>
    </div>
  </WannaKnowWrap>
);
