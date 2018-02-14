import React, { Component } from "react";
import styled from "styled-components";
import { FontBold } from "../../commonComponents";
import imgSocial1 from "social-1.png";
import imgSocial2 from "social-2.png";
import imgSocial3 from "social-3.png";
import imgSocial4 from "social-4.png";

const WannaKnow = styled.section``;
const WannaDiscount = styled.p``;
const SocialMedias = styled.div``;

const SocialMedia = styled.img``;

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
      <div className="col-md-3" />
      <div className="col-md-3" />
    </div>
  </WannaKnow>
);
