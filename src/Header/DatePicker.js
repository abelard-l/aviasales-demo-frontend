import React from "react";
import styled from "styled-components";
import { withClickOutside } from "react-clickoutside";

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const DAYS_SHORT = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

const DAYS_LONG = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];

const WrapDayPicker = withClickOutside()(styled.div`
  background-color: #ffffff;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 500;
`);

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
    />
  </WrapDayPicker>
);
