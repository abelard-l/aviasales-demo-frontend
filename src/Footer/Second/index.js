import React, { Component } from "react";
import styled from "styled-components";
import { GrayLink } from "../../commonComponents";
import soc1 from "./soc-1.png";
import soc2 from "./soc-2.png";
import soc3 from "./soc-3.png";
import soc4 from "./soc-4.png";
import soc5 from "./soc-5.png";
import apple from "./applestore.png";
import google from "./googleplay.png";
import winphone from "./windowsphone.png";

const Second = styled.section`
  font-size: 12px;
  line-height: 16px;
  padding-top: 40px;
`;

const Menu = styled.div`
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 17px;
`;

const MenuItem = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

const SocLinks = styled.div`
  margin-bottom: 32px;
`;

const SocImg = styled.img`
  margin-right: 6px;
`;

const SocLink = styled.a`
  color: #4a4a4a;
  margin-right: 12px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Download = styled.div`
  text-align: right;
`;

const DownloadImg = styled.img`
  margin-bottom: 34px;
  margin-left: 10px;
`;

const CopyLeft = styled.div`
  color: #5b5b5c;
`;

const CopyRight = styled.div`
  color: #5b5b5c;
  text-align: right;
`;

export default () => (
  <Second>
    <div className="row">
      <div className="col-md-7">
        <Menu>
          <MenuItem>
            <GrayLink src="#">О компании</GrayLink>
          </MenuItem>
          <MenuItem>
            <GrayLink src="#">Партнёрская программа</GrayLink>
          </MenuItem>
          <MenuItem>
            <GrayLink src="#">Реклама</GrayLink>
          </MenuItem>
          <MenuItem>
            <GrayLink src="#">Вакансии</GrayLink>
          </MenuItem>
          <MenuItem>
            <GrayLink src="#">Помощь</GrayLink>
          </MenuItem>
          <MenuItem>
            <GrayLink src="#">Правила</GrayLink>
          </MenuItem>
          <MenuItem>
            <GrayLink src="#">White Label авиабилеты</GrayLink>>
          </MenuItem>
        </Menu>
        <SocLinks>
          <SocImg src={soc1} />
          <SocLink href="#">Вконтакте</SocLink>
          <SocImg src={soc2} />
          <SocLink href="#">Фейсбук</SocLink>
          <SocImg src={soc3} />
          <SocLink href="#">Инстаграм</SocLink>
          <SocImg src={soc4} />
          <SocLink href="#">Твиттер</SocLink>
          <SocImg src={soc5} />
          <SocLink href="#">Вайбер</SocLink>
        </SocLinks>
        <CopyLeft>Поиск и бронирование отелей</CopyLeft>
      </div>
      <div className="col-md-5">
        <Download>
          <DownloadImg src={apple} />
          <DownloadImg src={google} />
          <DownloadImg src={winphone} />
        </Download>
        <CopyRight>© 2007–2018, Aviasales — дешевые авиабилеты</CopyRight>
      </div>
    </div>
  </Second>
);
