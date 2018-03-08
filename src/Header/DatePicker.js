import React from 'react';
import styled from 'styled-components';
import { withClickOutside } from 'react-clickoutside';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const DAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const DAYS_LONG = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

export const prices = {
  24: { value: '43606', isBest: false },
  25: { value: '43606', isBest: false },
  26: { value: '41920', isBest: true },
  27: { value: '42140', isBest: true },
  28: { value: '42130', isBest: true },
};

const WrapDayPicker = withClickOutside()(styled.div`
  background-color: #ffffff;
  left: 0;
  margin-top: 1px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 500;
  padding-bottom: 20px;
`);

const ShowPricesText = styled.span`
  color: #4a4a4a;
  display: inline-block;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  margin-left: 5px;

  &:hover {
    color: #02abdb;
  }
`;

const TogglePrices = styled.input`
  visibility: hidden;
`;

const TogglePricesGraphic = styled.span`
  height: 1px;
  top: 0px;
  left: 0px;
  position: absolute;
  width: 1px;
  :before {
    background: #cdd1da;
    border-radius: 11px;
    content: '';
    height: 24px;
    left: 0;
    position: absolute;
    top: -4px;
    transition: transform 0.32s ease-out;
    width: 48px;
  }
  :after {
    background: white;
    border-radius: 10px;
    content: '';
    height: 20px;
    left: 2px;
    position: absolute;
    top: -2px;
    transition: transform 0.32s ease-out;
    width: 20px;
  }
`;

const ShowPrices = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding-left: 60px;
  position: relative;
  margin-left: 28px;
  margin-top: 10px;

  & ${TogglePrices}:checked ~ ${TogglePricesGraphic}:before {
    background: #02abdb;
  }

  & ${TogglePrices}:checked ~ ${TogglePricesGraphic}:after {
    transform: translateX(23px);
  }
`;

export default props => (
  <WrapDayPicker onClickOutside={props.onClickOutside}>
    <DayPicker
      months={MONTHS}
      weekdaysLong={DAYS_LONG}
      weekdaysShort={DAYS_SHORT}
      firstDayOfWeek={1}
      locale="ru"
      disabledDays={{ before: new Date() }}
      onDayClick={props.onDayClick}
      selectedDays={props.selectedDays}
      renderDay={props.renderDay}
    />
    <ShowPrices>
      <ShowPricesText>Показать цены в одну сторону</ShowPricesText>
      <TogglePrices type="checkbox" />
      <TogglePricesGraphic />
    </ShowPrices>
  </WrapDayPicker>
);
