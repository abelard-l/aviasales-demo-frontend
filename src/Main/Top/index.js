import React, { Component } from "react";
import styled from "styled-components";
import imgCompass from "./compass.svg";
import imgEdit from "./edit.svg";
import { BlueLink, HeaderCenter } from "../../commonComponents";
import imgTop1 from "./top-1.svg";
import imgTop2 from "./top-2.svg";
import imgTop3 from "./top-3.svg";
import imgTop4 from "./top-4.svg";
import imgTop5 from "./top-5.svg";
import imgTop6 from "./top-6.svg";

const Top = styled.section`
  margin-bottom: 55px;
`;

const Compass = styled.img`
  display: block;
  height: 64px;
  margin: 0 auto;
`;

const Edit = styled.img`
  margin-left: 10px;
`;

const Activities = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const ActivityWrap = styled.div`
  flex-basis: 33.33%;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-basis: 16.66%;
  }

  @media (min-width: 1200px) {
    flex-basis: 8.33%;
  }
`;

const Activity = styled.img`
  display: block;
  margin: 0 auto;
`;

const Slogan = styled.div`
  font-size: 12px;
  line-height: 20px;
  margin-top: 12px;
  text-align: center;
  text-transform: uppercase;
`;

export default () => (
  <Top>
    <div className="container">
      <Compass src={imgCompass} />
      <HeaderCenter>
        Популярные направления перелетов<br />из города&nbsp;
        <BlueLink href="#">Москва</BlueLink>
        <Edit src={imgEdit} />
      </HeaderCenter>
      <div className="row">
        <div className="col-xs-offset-1 col-xs-10">
          <Activities>
            <ActivityWrap>
              <Activity src={imgTop1} />
              <Slogan>
                <BlueLink href="#">
                  Куда<br />угодно
                </BlueLink>
              </Slogan>
            </ActivityWrap>
            <ActivityWrap>
              <Activity src={imgTop2} />
              <Slogan>
                <BlueLink href="#">
                  Солнце<br />и море
                </BlueLink>
              </Slogan>
            </ActivityWrap>
            <ActivityWrap>
              <Activity src={imgTop3} />
              <Slogan>
                <BlueLink href="#">
                  Шопинг,<br />город
                </BlueLink>
              </Slogan>
            </ActivityWrap>
            <ActivityWrap>
              <Activity src={imgTop4} />
              <Slogan>
                <BlueLink href="#">
                  Культура<br />и история
                </BlueLink>
              </Slogan>
            </ActivityWrap>
            <ActivityWrap>
              <Activity src={imgTop5} />
              <Slogan>
                <BlueLink href="#">
                  Ночная<br />жизнь
                </BlueLink>
              </Slogan>
            </ActivityWrap>
            <ActivityWrap>
              <Activity src={imgTop6} />
              <Slogan>
                <BlueLink href="#">
                  Отдых<br />с детьми
                </BlueLink>
              </Slogan>
            </ActivityWrap>
          </Activities>
        </div>
      </div>
    </div>
  </Top>
);
