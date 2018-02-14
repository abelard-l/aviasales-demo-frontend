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
`;

const MenuItem = styled.span`
  display: inline-block;
  margin-right: 5px;
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
        <CopyLeft>Поиск и бронирование отелей</CopyLeft>
      </div>
      <div className="col-md-5">
        <CopyRight>© 2007–2018, Aviasales — дешевые авиабилеты</CopyRight>
      </div>
    </div>
  </Second>
);
