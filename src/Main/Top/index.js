import React from 'react';
import styled from 'styled-components';
import compass from './compass.svg';
import pen from './edit.svg';
import { BlueLink, HeaderCenter } from '../../Common/commonComponents';
import anywhere from './anywhere.svg';
import sunandsea from './sunandsea.svg';
import shopping from './shopping.svg';
import culture from './culture.svg';
import nightlife from './night-life.svg';
import children from './children.svg';

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
      <Compass src={compass} />
      <HeaderCenter>
        Популярные направления перелетов<br />из города&nbsp;
        <BlueLink href="#">Москва</BlueLink>
        <Edit src={pen} />
      </HeaderCenter>
      <div className="row">
        <div className="col-xs-offset-1 col-xs-10">
          <Activities>
            <ActivityWrap>
              <Activity src={anywhere} />
              <Slogan>
                <BlueLink href="#">
                  Куда<br />угодно
                </BlueLink>
              </Slogan>
            </ActivityWrap>
            <ActivityWrap>
              <Activity src={sunandsea} />
              <Slogan>
                <BlueLink href="#">
                  Солнце<br />и море
                </BlueLink>
              </Slogan>
            </ActivityWrap>
            <ActivityWrap>
              <Activity src={shopping} />
              <Slogan>
                <BlueLink href="#">
                  Шопинг,<br />город
                </BlueLink>
              </Slogan>
            </ActivityWrap>
            <ActivityWrap>
              <Activity src={culture} />
              <Slogan>
                <BlueLink href="#">
                  Культура<br />и история
                </BlueLink>
              </Slogan>
            </ActivityWrap>
            <ActivityWrap>
              <Activity src={nightlife} />
              <Slogan>
                <BlueLink href="#">
                  Ночная<br />жизнь
                </BlueLink>
              </Slogan>
            </ActivityWrap>
            <ActivityWrap>
              <Activity src={children} />
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
