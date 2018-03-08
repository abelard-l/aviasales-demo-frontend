import React from 'react';
import styled from 'styled-components';
import { GrayLink } from '../../commonComponents';
import vk from './vk.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import viber from './viber.svg';
import apple from './applestore.png';
import google from './googleplay.png';
import winphone from './windowsphone.png';

const SocialAndStores = styled.section`
  font-size: 12px;
  line-height: 16px;
  padding-top: 40px;
`;

const Menu = styled.div`
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 17px;
`;

const ToPage = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 10px;

  @media (min-width: 768px) {
    margin-right: 5px;
  }
`;

const SocLinks = styled.div`
  margin-bottom: 32px;
`;

const SocImg = styled.img`
  margin-right: 6px;
`;

const SocLink = styled.a`
  color: #4a4a4a;
  display: inline-block;

  margin-bottom: 15px;
  margin-right: 24px;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    margin-right: 12px;
  }
`;

const Download = styled.div`
  margin-top: 20px;
  text-align: left;

  @media (min-width: 1200px) {
    text-align: right;
  }
`;

const DownloadImg = styled.img`
  cursor: pointer;
  display: block;
  margin: 20px auto;

  @media (min-width: 768px) {
    display: inline-block;
    margin: 0px 10px 24px 0px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 34px;
    margin-left: 10px;
    margin-right: 0px;
  }
`;

const CopyLeft = styled.div`
  color: #5b5b5c;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const CopyRight = styled.div`
  color: #5b5b5c;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  @media (min-width: 1200px) {
    text-align: right;
  }
`;

export default () => (
  <SocialAndStores>
    <div className="row">
      <div className="col-lg-7 col-xs-12">
        <Menu>
          <ToPage>
            <GrayLink src="#">О компании</GrayLink>
          </ToPage>
          <ToPage>
            <GrayLink src="#">Партнёрская программа</GrayLink>
          </ToPage>
          <ToPage>
            <GrayLink src="#">Реклама</GrayLink>
          </ToPage>
          <ToPage>
            <GrayLink src="#">Вакансии</GrayLink>
          </ToPage>
          <ToPage>
            <GrayLink src="#">Помощь</GrayLink>
          </ToPage>
          <ToPage>
            <GrayLink src="#">Правила</GrayLink>
          </ToPage>
          <ToPage>
            <GrayLink src="#">White Label авиабилеты</GrayLink>
          </ToPage>
        </Menu>
        <SocLinks>
          <SocImg src={vk} />
          <SocLink href="#">Вконтакте</SocLink>
          <SocImg src={facebook} />
          <SocLink href="#">Фейсбук</SocLink>
          <SocImg src={instagram} />
          <SocLink href="#">Инстаграм</SocLink>
          <SocImg src={twitter} />
          <SocLink href="#">Твиттер</SocLink>
          <SocImg src={viber} />
          <SocLink href="#">Вайбер</SocLink>
        </SocLinks>
        <CopyLeft>Поиск и бронирование отелей</CopyLeft>
      </div>
      <div className="col-lg-5 col-xs-12">
        <Download>
          <DownloadImg src={apple} />
          <DownloadImg src={google} />
          <DownloadImg src={winphone} />
        </Download>
        <CopyRight>© 2007–2018, Aviasales — дешевые авиабилеты</CopyRight>
      </div>
    </div>
  </SocialAndStores>
);
