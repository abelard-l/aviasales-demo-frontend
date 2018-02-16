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

  @media (max-width: 575px) {
    padding: 0px 10px;
  }
`;

const H2 = styled.h2`
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 19px;

  @media (max-width: 991px) {
    padding-right: 72px;
  }

  @media (max-width: 575px) {
    font-size: 24px;
    margin-bottom: 20px;
    padding-right: 0px;
    text-align: center;
  }
`;

const IphoneImg = styled.img`
  bottom: 0px;
  position: absolute;

  @media (max-width: 575px) {
    max-width: 162px;
    left: -20px;
  }
`;

const Stars = styled.div`
  @media (max-width: 575px) {
    margin-bottom: 56px;
    text-align: center;
  }
`;

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
  @media (max-width: 575px) {
  }
`;

const Phone = styled.span`
  display: inline-block;
  margin-right: 21px;

  &:nth-child(1),
  &:nth-child(2) {
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    padding-right: 21px;

    @media (max-width: 575px) {
      border-right: 0px;
      padding-right: 0px;
    }
  }

  @media (max-width: 991px) {
    font-size: 14px;
  }

  @media (max-width: 575px) {
    display: block;
    margin-bottom: 20px;
    margin-left: 180px;
    text-align: left;
  }

  @media (max-width: 480px) {
    margin-left: 130px;
    margin-right: 0px;
  }
`;

const PhoneImg = styled.img`
  margin-right: 8px;
`;

export default () => (
  <DownloadMobApp>
    <div className="row">
      <div className="col-lg-3 col-sm-5 col-xs-0 col-lg-offset-1 col-xs-offset-0">
        <IphoneImg src={bgIphone} />
      </div>
      <div className="col-lg-7 col-sm-7 col-xs-12">
        <H2>Скачай мобильное приложение Aviasales.ru</H2>

        <Stars>
          <Star src={star} />
          <Star src={star} />
          <Star src={star} />
          <Star src={star} />
          <Star src={halfStar} />
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
        </Stars>
      </div>
    </div>
  </DownloadMobApp>
);
