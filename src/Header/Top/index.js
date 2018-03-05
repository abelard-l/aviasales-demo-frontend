import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import returnBack from "./return.svg";

const Top = styled.section`
  font-size: 20px;
  line-height: 25px;
  margin-bottom: ${props => (props.narrow ? "10px" : "47px")};
  padding-top: 12px;

  @media (min-width: 768px) {
    margin-bottom: ${props => (props.narrow ? "40px" : "81px")};
  }

  @media (min-width: 1200px) {
    margin-bottom: ${props => (props.narrow ? "40px" : "200px")};
  }
`;

const LogoWrap = styled.div`
  color: white;
`;

const Logo = styled.img`
  margin-right: 12px;
  vertical-align: center;
`;

const SiteName = styled(Link)`
  display: ${props => (props.narrow ? "none" : "flex")};
  align-items: center;
  color: white;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const TopInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ReturnBack = styled(Link)`
  border: none;
  display: block;
  margin: 0px 0px 0px 0px;
  padding: 12px 16px 12px 0;
  text-align: left;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Filter = styled.div`
  margin-left: 8px;
  magrin-right: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const UserRoute = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin: 0px 0px 5px 0px;
`;

const DateAndPassangers = styled.div`
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin: 0;
`;

const Money = styled.div`
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100px;
  font-weight: 500;
  line-height: normal;
  padding: 6px 22px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;

export const headerNarrowGrid = "col-xs-offset-0 col-xs-12";

export const headerLongGrid =
  "col-md-offset-1 col-md-10 col-xs-offset-0 col-xs-12";

export default ({ narrow }) => (
  <Top narrow={narrow}>
    <div className="container">
      <LogoWrap>
        <div className="row middle-xs">
          <div className={narrow ? headerNarrowGrid : headerLongGrid}>
            <TopInformation>
              <SiteName to="/" narrow={narrow && narrow.toString()}>
                <Logo src={logo} />aviasales
              </SiteName>
              {narrow && (
                <ReturnBack to="/">
                  <img src={returnBack} alt="Назад" />
                </ReturnBack>
              )}
              {narrow && (
                <Filter>
                  <UserRoute>Москва — Барселона</UserRoute>
                  <DateAndPassangers>
                    24 фев — 3 март, 1 пассажир
                  </DateAndPassangers>
                </Filter>
              )}
              {narrow && <Money>RUB</Money>}
            </TopInformation>
          </div>
        </div>
      </LogoWrap>
    </div>
  </Top>
);
