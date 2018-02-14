import React, { Component } from "react";
import styled from "styled-components";
import bgIphone from "./iphone.png";
import apple from "./apple.png";
import android from "./android.png";
import wf from "./wf.png";
import star from "./star.png";
import halfStar from "./halfstar.png";

const DownloadMobApp = styled.section`
  border: 1px solid #ffffff;
  background: linear-gradient(101.04deg, #00b0de -46.33%, #196ebd 53.67%);
  margin-top: 50px;
  padding: 40px 0px;
  position: relative;
`;

const H2 = styled.h2`
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 19px;
`;

const IphoneImg = styled.img`
  bottom: 0px;
  position: absolute;
`;

const Stars = styled.span``;

const Star = styled.img`
  margin-left: 5px;
`;

const StarsText = styled.span`
  color: white;
  font-size: 14px;
  line-height: 20px;
  margin-left: 12px;
`;

const Phones = styled.div`
  color: white;
  margin-bottom: 25px;
  margin-top: 43px;
`;

const Phone = styled.span`
  display: inline-block;
  margin-right: 21px;

  &:nth-child(1),
  &:nth-child(2) {
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    padding-right: 21px;
  }
`;

const PhoneImg = styled.img`
  margin-right: 8px;
`;

export default () => (
  <DownloadMobApp>
    <div className="row">
      <div className="col-md-3 col-md-offset-1">
        <IphoneImg src={bgIphone} />
      </div>
      <div className="col-md-7">
        <H2>Скачай мобильное приложение Aviasales.ru</H2>
        <Stars>
          <Star src={star} />
          <Star src={star} />
          <Star src={star} />
          <Star src={star} />
          <Star src={halfStar} />
        </Stars>
        <StarsText>Более 103 000 оценок</StarsText>
        <Phones>
          <Phone>
            <PhoneImg src={apple} /> iPhone или iPad
          </Phone>
          <Phone>
            <PhoneImg src={android} /> Android
          </Phone>
          <Phone>
            <PhoneImg src={wf} /> Windows Phone
          </Phone>
        </Phones>
      </div>
    </div>
  </DownloadMobApp>
);
