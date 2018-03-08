import React from 'react';
import styled from 'styled-components';
import { specData } from './data';
import Card from './Card';

const SpecSugg = styled.section`
  background: linear-gradient(106.41deg, #00b0de -42.02%, #196ebd 57.98%);
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  line-height: 42px;
  padding-left: 10px;
  padding-top: 24px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

const AdditionalInfo = styled.div`
  color: white;
  padding: 25px 0px 23px 0px;
`;

const LookAllSuggWrap = styled.p`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const LookAllSugg = styled.a`
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const MediumPrice = styled.p`
  text-align: center;

  @media (min-width: 768px) {
    text-align: right;
  }
`;

export default () => (
  <SpecSugg>
    <div className="container">
      <div className="row">
        <div className="col-lg-offset-1 col-lg-10 col-xs">
          <Title>Спецпредложения на авиабилеты</Title>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-offset-1 col-md-offset-0 col-lg-10 col-md-12">
          <Cards>
            <Card specData={specData[0]} />
            <Card specData={specData[1]} />
            <Card specData={specData[2]} />
          </Cards>
        </div>
      </div>
      <AdditionalInfo>
        <div className="row">
          <div className="col-lg-offset-1 col-lg-5 col-md-6 col-xs-12">
            <LookAllSuggWrap>
              <LookAllSugg>Смотреть все спецпредложения</LookAllSugg>
            </LookAllSuggWrap>
          </div>
          <div className="col-lg-5 col-md-6 col-xs-12">
            <MediumPrice>* средняя цена по направлению</MediumPrice>
          </div>
        </div>
      </AdditionalInfo>
    </div>
  </SpecSugg>
);
