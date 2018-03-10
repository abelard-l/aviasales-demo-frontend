import React from 'react';
import styled from 'styled-components';

import Accordion from './Accordion';
import BlueCheckbox from './BlueCheckbox';
import RangePicker from './RangePicker';

import plane from './icons/plane.svg';
import clear from './icons/clear.svg';

const Filters = styled.section`
  background: white;
  border-radius: 4px;
  padding: 0px;
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
  padding: 0 16px;
`;

const Plane = styled.img`
  margin: 0 5px;
`;

const InfoText = styled.div`
  color: #4a4a4a;
  line-height: 16px;
  font-size: 12px;
  margin-bottom: 12px;
  padding: 0 16px;
`;

const ResetFilters = styled.span`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;
  color: #5b5b5c;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Close = styled.img``;

const BlueLink = styled.a`
  color: #00bde4;
  font-size: 12px;
`;

export default () => (
  <Filters>
    <Accordion caption="пересадки" canClear opened>
      <BlueCheckbox caption="Все" checked />
      <BlueCheckbox caption="Без пересадок" price={7712} />
      <BlueCheckbox caption="1 пересадка" price={11150} />
      <BlueCheckbox caption="2 пересадки" price={16821} />
      <BlueCheckbox caption="3 пересадки" price={23986} />
    </Accordion>

    <Accordion caption="время вылета и прибытия" opened>
      <SubHeader>
        Москва <Plane src={plane} /> Барселона
      </SubHeader>
      <RangePicker caption="Вылет из Москвы:" from="c 00:05, 24 фев" to="до 23:45, 24 фев" />
      <RangePicker caption="Прибытие в Барселону:" from="c 03:05, 24 фев" to="до 13:50, 26 фев" />
      <SubHeader>
        Барселона <Plane src={plane} /> Москва
      </SubHeader>
      <RangePicker caption="Вылет из Барселоны" from="c 06:00, 3 мар" to="до 23:45, 3 мар" />
      <RangePicker caption="Прибытие в Москву:" from="c 15:00, 3 мар" to="до 09:55, 5 мар" />
    </Accordion>

    <Accordion caption="Багаж" />
    <Accordion caption="Длительность пересадки" />
    <Accordion caption="Время в пути" opened>
      <SubHeader>
        Москва <Plane src={plane} /> Барселона
      </SubHeader>
      <RangePicker from="от 04ч 20м" to="до 48ч 50м" />
      <SubHeader>
        Барселона <Plane src={plane} /> Москва
      </SubHeader>
      <RangePicker from="от 04ч 10м" to="до 41ч 20м" />
    </Accordion>

    <Accordion caption="Авиакомпании" amount={43} opened>
      <BlueCheckbox caption="Несколько авиакомпаний" />
      <InfoText>
        Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную
      </InfoText>
      <SubHeader>Альянсы</SubHeader>
      <BlueCheckbox caption="Все" checked />
      <BlueCheckbox caption="Star Alliance" checked price={11150} />
      <BlueCheckbox caption="OneWorld" checked price={12370} />
      <BlueCheckbox caption="SkyTeam" checked price={16290} />
      <SubHeader>Авиакомпании</SubHeader>
      <BlueCheckbox caption="Все" checked />
      <BlueCheckbox caption="Aegean Airlines" checked price={20357} />
      <BlueCheckbox caption="Air Algerie" checked price={29105} />
      <BlueCheckbox caption="Air Europa" checked price={22202} />
      <BlueCheckbox caption="Air France" checked price={17050} />
      <BlueCheckbox caption="Air Moldova" checked price={22613} />
      <BlueCheckbox caption="Alitalia" checked price={22717} />
      <BlueCheckbox caption="Alitalia CityLiner" checked price={20271} />
      <BlueCheckbox caption="Belle Air" checked price={18371} />
      <BlueCheckbox caption="British Airways" checked price={23839} />
      <BlueCheckbox caption="Brussels Airlines" checked price={11150} />
      <BlueCheckbox caption="Bulgaria Air" checked price={20114} />
    </Accordion>

    <Accordion caption="аэропорты" />
    <Accordion caption="аэропорт пересадки" amount={71} />
    <Accordion caption="агенства" amount={26} />

    <ResetFilters>
      <BlueLink>Сбросить все фильтры</BlueLink>
      <Close src={clear} />
    </ResetFilters>
  </Filters>
);
