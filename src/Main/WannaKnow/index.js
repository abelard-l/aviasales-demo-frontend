import React, { Component } from "react";
import styled from "styled-components";
import { FontBold } from "../../commonComponents";
import imgSocial1 from "./social-1.png";
import imgSocial2 from "./social-2.png";
import imgSocial3 from "./social-3.png";
import imgSocial4 from "./social-4.png";
import imgTopBorder from "./border-top.png";

const WannaKnow = styled.section`
  background: url(${imgTopBorder}) no-repeat top center;
  padding-bottom: 24px;
  padding-top: 39px;

  @media (max-width: 575px) {
    display: none;
  }
`;

const WannaDiscount = styled.p`
  @media (max-width: 991px) {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const SocialMedias = styled.div`
  @media (max-width: 991px) {
    margin-bottom: 30px;
    text-align: center;
  }
`;
const SocialMedia = styled.img`
  margin-right: 6px;
`;

const Subscribe = styled.div`
  text-align: right;

  @media (max-width: 991px) {
    text-align: center;
  }
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
const Button = styled.button`
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
  <WannaKnow>
    <div className="row">
      <div className="col-lg-4 col-md-10 col-sm-offset-1 col-xs-offset-0">
        <WannaDiscount>
          <FontBold>Хотите знать всё о скидках на авиабилеты?</FontBold>
          <br />
          Вы можете подписаться на нашу рассылку через соцсети или по
          электронной почте.
        </WannaDiscount>
      </div>
      <div className="col-lg-2 col-md-10 col-sm-offset-1 col-md-offset-0">
        <SocialMedias>
          <SocialMedia src={imgSocial1} />
          <SocialMedia src={imgSocial2} />
          <SocialMedia src={imgSocial3} />
          <SocialMedia src={imgSocial4} />
        </SocialMedias>
      </div>
      <div className="col-lg-4 col-md-10 col-sm-offset-1 col-md-offset-0">
        <Subscribe>
          <Input type="text" placeholder="Ваш email" />
          <Button>Подписаться</Button>
        </Subscribe>
      </div>
    </div>
  </WannaKnow>
);
