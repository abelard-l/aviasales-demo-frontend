import React, { Component } from "react";
import styled from "styled-components";
import bgIphone from "./iphone.png";
import apple from "./apple.svg";
import android from "./android.svg";
import wf from "./wf.svg";
import star from "./star.svg";
import halfStar from "./halfstar.svg";

const DownloadMobApp = styled.section`
  border: 1px solid #ffffff;
  background: linear-gradient(101.04deg, #00b0de -46.33%, #196ebd 53.67%);
  margin-top: 50px;
  padding: 0px 10px;
  position: relative;
`;

const Title = styled.h2`
  color: #ffffff;
  font-weight: 500;
  line-height: 40px;
  font-size: 24px;
  margin-bottom: 20px;
  padding-right: 0px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 32px;
    padding-right: 72px;
    text-align: left;
  }

  @media (min-width: 1200px) {
    margin-bottom: 19px;
    margin-top: 36px;
  }
`;

const IphoneWrap = styled.div`
  height: 100%;
  position: static;

  @media (min-width: 768px) {
    position: relative;
  }
`;

const IphoneImg = styled.img`
  bottom: 0px;
  position: absolute;
  max-width: 162px;
  left: -20px;

  @media (min-width: 768px) {
    max-width: 100%;
    left: 0px;
  }
`;

const Stars = styled.div`
  margin-bottom: 76px;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    text-align: left;
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

  @media (min-width: 768px) {
    margin-bottom: 53px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 64px;
  }
`;

const PhoneApple = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 20px;
  margin-left: 140px;
  text-align: left;

  @media (min-width: 768px) {
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    display: inline-block;
    margin: 0px 21px 0px 0px;
    padding-right: 21px;
  }
`;

const PhoneAndroid = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 20px;
  margin-left: 140px;
  text-align: left;

  @media (min-width: 768px) {
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    display: inline-block;
    margin: 0px 21px 0px 0px;
    padding-right: 21px;
  }
`;

const PhoneWf = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 20px;
  margin-left: 140px;
  text-align: left;

  @media (min-width: 768px) {
    display: inline-block;
    margin: 0;
    padding-right: 21px;
  }
`;

const PhoneImg = styled.img`
  margin-right: 5px;
  vertical-align: middle;
`;

export default () => (
  <DownloadMobApp>
    <div className="container">
      <div className="row">
        <div className="col-lg-offset-1 col-lg-3 col-md-4 col-xs-offset-0 col-xs-0">
          <IphoneWrap>
            <IphoneImg src={bgIphone} />
          </IphoneWrap>
        </div>
        <div className="col-lg-7 col-md-8 col-xs-12">
          <Title>Скачай мобильное приложение Aviasales.ru</Title>
          <Stars>
            <Star src={star} />
            <Star src={star} />
            <Star src={star} />
            <Star src={star} />
            <Star src={halfStar} />
            <StarsText>Более 103 000 оценок</StarsText>
            <Phones>
              <PhoneApple>
                <PhoneImg src={apple} /> iPhone или iPad
              </PhoneApple>
              <PhoneAndroid>
                <PhoneImg src={android} /> Android
              </PhoneAndroid>
              <PhoneWf>
                <PhoneImg src={wf} /> Windows Phone
              </PhoneWf>
            </Phones>
          </Stars>
        </div>
      </div>
    </div>
  </DownloadMobApp>
);
