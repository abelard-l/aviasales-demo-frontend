import React, { Component } from "react";
import styled from "styled-components";
import info1 from "./info1.png";
import info2 from "./info2.png";
import info3 from "./info3.png";
import { BlueLink } from "../../commonComponents";

const Information = styled.section``;

const InfoTextreTitle = styled.img`
  padding-right: 4px;
`;

const InfoText = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

const Title = styled.h3``;

const InfoLink = styled.span`
  display: inline-block;
  padding-left: 3px;
`;

export default () => (
  <Information>
    <div className="container">
      <div className="row">
        <div className="col-lg-offset-1 col-lg-10 col-xs">
          <Title>
            <InfoTextreTitle src={info1} /> КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?
          </Title>
          <InfoText>
            Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на
            самолет по сотням авиакомпаний и находим за считанные минуты самые
            дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь
            нашим поиском, который совершенно бесплатно сравнивает цены на
            авиабилеты онлайн и находит самые дешевые перелеты. Больше нет
            смысла ходить в авиакассы, обзванивать агентства — дешевый билет
            находится на расстоянии клика. На нашем сайте вы можете подобрать
            дешевые билеты на самолет в Европу, Азию и на другие континенты. Мы
            написали для вас простую инструкцию о том, как пользоваться поиском
            и экономить на перелетах от 1000 до 20 000 руб в год.
            <InfoLink>
              <BlueLink>Подробнее</BlueLink>
            </InfoLink>
          </InfoText>
          <Title>
            <InfoTextreTitle src={info2} /> ЭЛЕКТРОННЫЙ АВИАБИЛЕТ
          </Title>
          <InfoText>
            Электронный авиабилет — это, по сути, обычный билет на самолет, но
            только в менее привычном для путешественника виде. Вся информация об
            авиаперелете (данные пассажира, маршрут следования) хранится в
            электронной базе, а пассажир получает на руки маршрут-квитанцию.
            Некоторые пассажиры, купив авиабилет онлайн и получив
            маршрут-квитанцию, удивлены ее видом — это обыкновенный лист формата
            А4, на котором распечатана вся информация о предстоящем перелете.
            Однако это действительно официальный документ, подтверждающий
            договор между авиаперевозчиком и пассажиром. При регистрации на рейс
            пассажир должен предъявить маршрут-квитанцию вместе с удостоверением
            личности точно так же, как предъявляют обыкновенный бумажный билет.
            Следует отметить, что электронный билет, приобретенный онлайн, стоит
            дешевле своего бумажного аналога.
            <InfoLink>
              <BlueLink>Подробнее</BlueLink>
            </InfoLink>
          </InfoText>
          <Title>
            <InfoTextreTitle src={info3} />20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ
          </Title>
          <InfoText>
            Есть масса путеводителей по странам, но ни одного о том, как
            провести время в самолете. Для того, чтобы сделать ваш перелет
            максимально комфортным, мы написали 20 советов. Ведь настоящее
            путешествие начинается со слов «Добро пожаловать на борт нашего
            самолета»!
            <InfoLink>
              <BlueLink>Подробнее</BlueLink>
            </InfoLink>
          </InfoText>
        </div>
      </div>
    </div>
  </Information>
);
