import React, { Component } from "react";
import styled from "styled-components";
import twitter from "./twitter.png";
import facebook from "./facebook.png";
import vk from "./vk.png";
import rss from "./rss.png";
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

const Caption = styled.span`
  font-weight: bold;
`;

const Input = styled.input`
  border: 1px solid #a0b0b9;
  border-radius: 2px;
  box-sizing: border-box;
  color: #a0b0b9;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  max-width: 171px;
  padding: 7px;
`;

const Subscribe = styled.button`
  color: white;
  background-color: #ff8e41;
  border: none;
  box-sizing: border-box;
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
              <Caption>Хотите знать всё о скидках на авиабилеты?</Caption>
              <br />
              Вы можете подписаться на нашу рассылку через соцсети или по
              электронной почте.
            </WannaDiscount>
            <SocialMedias>
              <SocialMedia src={twitter} />
              <SocialMedia src={facebook} />
              <SocialMedia src={vk} />
              <SocialMedia src={rss} />
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
