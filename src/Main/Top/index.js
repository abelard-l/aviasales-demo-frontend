import React, { Component } from "react";
import styled from "styled-components";
import imgCompass from "./compass.svg";
import imgEdit from "./edit.svg";
import { BlueLink, H2Center } from "../../commonComponents";
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

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const Item = styled.div`
  flex-basis: 33.33%;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-basis: 16.66%;
  }

  @media (min-width: 1200px) {
    flex-basis: 8.33%;
  }
`;

const TopImg = styled.img`
  display: block;
  margin: 0 auto;
`;

const TopText = styled.div`
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
      <H2Center>
        Популярные направления перелетов<br />из города&nbsp;
        <BlueLink href="#">Москва</BlueLink>
        <Edit src={imgEdit} />
      </H2Center>
      <div className="row">
        <div className="col-xs-offset-1 col-xs-10">
          <Items>
            <Item>
              <TopImg src={imgTop1} />
              <TopText>
                <BlueLink href="#">
                  Куда<br />угодно
                </BlueLink>
              </TopText>
            </Item>
            <Item>
              <TopImg src={imgTop2} />
              <TopText>
                <BlueLink href="#">
                  Солнце<br />и море
                </BlueLink>
              </TopText>
            </Item>
            <Item>
              <TopImg src={imgTop3} />
              <TopText>
                <BlueLink href="#">
                  Шопинг,<br />город
                </BlueLink>
              </TopText>
            </Item>
            <Item>
              <TopImg src={imgTop4} />
              <TopText>
                <BlueLink href="#">
                  Культура<br />и история
                </BlueLink>
              </TopText>
            </Item>
            <Item>
              <TopImg src={imgTop5} />
              <TopText>
                <BlueLink href="#">
                  Ночная<br />жизнь
                </BlueLink>
              </TopText>
            </Item>
            <Item>
              <TopImg src={imgTop6} />
              <TopText>
                <BlueLink href="#">
                  Отдых<br />с детьми
                </BlueLink>
              </TopText>
            </Item>
          </Items>
        </div>
      </div>
    </div>
  </Top>
);
