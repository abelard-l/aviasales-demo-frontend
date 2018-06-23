import React from 'react';
import styled, { css } from 'styled-components';
import { Rouble } from '../../commonComponents';

import arrow from './icons/arrow.svg';
import arrowDown from './icons/arrow-down.svg';
import disk from './icons/disk.svg';
import plane from './icons/plane.svg';
import rectangleChecked from './icons/checked.svg';
import rectangle from './icons/rectangle.svg';
import clear from './icons/clear.svg';
import blueline from './icons/blueline.png';

const Filters = styled.section`
  background: white;
  border-radius: 4px;
  padding: 0px 16px;
`;

const FilterBlock = styled.div``;

const Accordeon = styled.div`
  align-items: center;
  background: url(${arrow}) no-repeat 0px 19px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  padding: 17px 0px 17px 15px;
  position: relative;

  ${props =>
    props.open &&
    css`
      background: url(${arrowDown}) no-repeat 0px 22px;
    `};
`;

const UpText = styled.span`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;
  color: #5b5b5c;
`;

const Close = styled.img``;

const Checkbox = styled.div`
  background: url(${rectangle}) no-repeat 0px center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${props =>
    props.checked &&
    css`
      background: url(${rectangleChecked}) no-repeat 0px center;
    `};
`;

const GrayText = styled.div`
  color: #4a4a4a;
  font-size: 12px;
  line-height: 36px;
  padding-left: 23px;
`;

const Price = styled.div`
  color: #a0b0b9;
  font-size: 12px;
  line-height: 36px;
  text-align: right;
`;

const SubHeader = styled.div`
  display: flex;
  color: #323333;
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 8px;
`;

const Plane = styled.img`
  margin: 0 5px;
`;

const FlightCity = styled.div`
  color: #323333;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 4px;
`;

const Times = styled.div`
  color: #323333;
  display: flex;
  font-size: 12px;
  line-height: 18px;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const TimeFrom = styled.span``;

const TimeTo = styled.span``;

const RouteLine = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 12px;
  margin-bottom: 8px;
`;

const Circle = styled.img``;

const Line = styled.div`
  background: url(${blueline}) repeat-x center center;
  flex-basis: 95%;
`;

const InfoText = styled.div`
  color: #4a4a4a;
  line-height: 16px;
  font-size: 12px;
`;

const BlueLink = styled.a`
  color: #00bde4;
  font-size: 12px;
`;

const Amount = styled.span`
  color: #a0b0b9;
  font-weight: 500;
  line-height: 18px;
  margin-left: 8px;
  font-size: 12px;
  text-transform: uppercase;
`;

export default () => (
  <Filters>
    <FilterBlock>
      <Accordeon open>
        <UpText>пересадки</UpText>
        <Close src={clear} />
      </Accordeon>
      <Checkbox>
        <GrayText>Все</GrayText>
      </Checkbox>
      <Checkbox checked>
        <GrayText>Без пересадок</GrayText>
        <Price>
          7 712 <Rouble />
        </Price>
      </Checkbox>
      <Checkbox>
        <GrayText>1 пересадка</GrayText>
        <Price>
          11 150 <Rouble />
        </Price>
      </Checkbox>
      <Checkbox>
        <GrayText>2 пересадки</GrayText>
        <Price>
          16 821 <Rouble />
        </Price>
      </Checkbox>
      <Checkbox>
        <GrayText>3 пересадки</GrayText>
        <Price>
          23 986 <Rouble />
        </Price>
      </Checkbox>
    </FilterBlock>

    <FilterBlock>
      <Accordeon open>
        <UpText>время вылета и прибытия</UpText>
      </Accordeon>
      <SubHeader>
        Москва <Plane src={plane} /> Барселона
      </SubHeader>
      <FlightCity>Вылет из Москвы:</FlightCity>
      <Times>
        <TimeFrom>c 00:05, 24 фев</TimeFrom>
        <TimeTo>до 23:45, 24 фев</TimeTo>
      </Times>
      <RouteLine>
        <Circle src={disk} />
        <Line />
        <Circle src={disk} />
      </RouteLine>
      <FlightCity>Прибытие в Барселону:</FlightCity>
      <Times>
        <TimeFrom>c 03:05, 24 фев</TimeFrom>
        <TimeTo>до 13:50, 26 фев</TimeTo>
      </Times>
      <RouteLine>
        <Circle src={disk} />
        <Line />
        <Circle src={disk} />
      </RouteLine>
      <SubHeader>
        Барселона <Plane src={plane} /> Москва
      </SubHeader>
      <FlightCity>Вылет из Барселоны:</FlightCity>
      <Times>
        <TimeFrom>c 06:00, 3 мар</TimeFrom>
        <TimeTo>до 23:45, 3 мар</TimeTo>
      </Times>
      <RouteLine>
        <Circle src={disk} />
        <Line />
        <Circle src={disk} />
      </RouteLine>
      <FlightCity>Прибытие в Москву:</FlightCity>
      <Times>
        <TimeFrom>c 15:00, 3 мар</TimeFrom>
        <TimeTo>до 09:55, 5 мар</TimeTo>
      </Times>
      <RouteLine>
        <Circle src={disk} />
        <Line />
        <Circle src={disk} />
      </RouteLine>
    </FilterBlock>

    <FilterBlock>
      <Accordeon>
        <UpText>Багаж</UpText>
      </Accordeon>
    </FilterBlock>

    <FilterBlock>
      <Accordeon>
        <UpText>Длительность пересадки</UpText>
      </Accordeon>
    </FilterBlock>

    <FilterBlock>
      <Accordeon open>
        <UpText>Время в пути</UpText>
      </Accordeon>
      <SubHeader>
        Москва <Plane src={plane} /> Барселона
      </SubHeader>
      <Times>
        <TimeFrom>от 04ч 20м</TimeFrom>
        <TimeTo>до 48ч 50м</TimeTo>
      </Times>
      <RouteLine>
        <Circle src={disk} />
        <Line />
        <Circle src={disk} />
      </RouteLine>
      <SubHeader>
        Барселона <Plane src={plane} /> Москва
      </SubHeader>
      <Times>
        <TimeFrom>от 04ч 10м</TimeFrom>
        <TimeTo>до 41ч 20м</TimeTo>
      </Times>
      <RouteLine>
        <Circle src={disk} />
        <Line />
        <Circle src={disk} />
      </RouteLine>
    </FilterBlock>

    <FilterBlock>
      <Accordeon>
        <UpText>
          Авиакомпании <Amount>43</Amount>
        </UpText>
      </Accordeon>
    </FilterBlock>

    <Checkbox>
      <GrayText>Несколько авиакомпаний</GrayText>
    </Checkbox>

    <InfoText>
      Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную
    </InfoText>

    <SubHeader>Альянсы</SubHeader>
    <Checkbox checked>
      <GrayText>Все</GrayText>
    </Checkbox>
    <Checkbox checked>
      <GrayText>Star Alliance</GrayText>
      <Price>
        11 150 <Rouble />
      </Price>
    </Checkbox>
    <Checkbox checked>
      <GrayText>OneWorld</GrayText>
      <Price>
        12 370 <Rouble />
      </Price>
    </Checkbox>
    <Checkbox checked>
      <GrayText>SkyTeam</GrayText>
      <Price>
        16 290 <Rouble />
      </Price>
    </Checkbox>

    <SubHeader>Авиакомпании</SubHeader>
    <Checkbox checked>
      <GrayText>Все</GrayText>
    </Checkbox>
    <Checkbox checked>
      <GrayText>Aegean Airlines</GrayText>
      <Price>
        20 357 <Rouble />
      </Price>
    </Checkbox>
    <Checkbox checked>
      <GrayText>Air Algerie</GrayText>
      <Price>
        29 105 <Rouble />
      </Price>
    </Checkbox>
    <Checkbox checked>
      <GrayText>Air Europa</GrayText>
      <Price>
        22 202 <Rouble />
      </Price>
    </Checkbox>
    <Checkbox checked>
      <GrayText>Air France</GrayText>
      <Price>
        17 050 <Rouble />
      </Price>
    </Checkbox>
    <Checkbox checked>
      <GrayText>Air Moldova</GrayText>
      <Price>
        22 613 <Rouble />
      </Price>
    </Checkbox>
    <Checkbox checked>
      <GrayText>Alitalia</GrayText>
      <Price>
        22 717 <Rouble />
      </Price>
    </Checkbox>
    <Checkbox checked>
      <GrayText>Alitalia CityLiner</GrayText>
      <Price>
        20 271 <Rouble />
      </Price>
    </Checkbox>
    <Checkbox checked>
      <GrayText>Belle Air</GrayText>
      <Price>
        18 371 <Rouble />
      </Price>
    </Checkbox>
    <Checkbox checked>
      <GrayText>British Airways</GrayText>
      <Price>
        23 839 <Rouble />
      </Price>
    </Checkbox>
    <Checkbox checked>
      <GrayText>Brussels Airlines</GrayText>
      <Price>
        11 150 <Rouble />
      </Price>
    </Checkbox>
    <Checkbox checked>
      <GrayText>Bulgaria Air</GrayText>
      <Price>
        20 114 <Rouble />
      </Price>
    </Checkbox>

    <FilterBlock>
      <Accordeon>
        <UpText>аэропорты</UpText>
      </Accordeon>
    </FilterBlock>

    <FilterBlock>
      <Accordeon>
        <UpText>
          аэропорт пересадки <Amount>71</Amount>
        </UpText>
      </Accordeon>
    </FilterBlock>

    <FilterBlock>
      <Accordeon>
        <UpText>
          агенства <Amount>26</Amount>
        </UpText>
      </Accordeon>
    </FilterBlock>

    <FilterBlock>
      <Accordeon>
        <UpText>
          <BlueLink>Сбросить все фильтры</BlueLink>
        </UpText>
        <Close src={clear} />
      </Accordeon>
    </FilterBlock>
  </Filters>
);
