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
`;

const WannaDiscount = styled.p``;

const SocialMedias = styled.div``;
const SocialMedia = styled.img``;

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
  font-size: 16px;
  line-height: 20px;
  max-width: 139px;
  text-align: center;
  padding: 8px 20px;
`;

export default () => (
  <WannaKnow>
    <div className="row">
      <div className="col-md-4 col-xs-offset-1">
        <WannaDiscount>
          <FontBold>Хотите знать всё о скидках на авиабилеты?</FontBold>
          <br />
          Вы можете подписаться на нашу рассылку через соцсети или по
          электронной почте.
        </WannaDiscount>
      </div>
      <div className="col-md-2">
        <SocialMedias>
          <SocialMedia src={imgSocial1} />
          <SocialMedia src={imgSocial2} />
          <SocialMedia src={imgSocial3} />
          <SocialMedia src={imgSocial4} />
        </SocialMedias>
      </div>
      <div className="col-md-4">
        <Input type="text" defaultValue="Ваш email" />
        <Button>Подписаться</Button>
      </div>
    </div>
  </WannaKnow>
);
