import React, { Component } from "react";
import styled from "styled-components";

const FilterWrap = styled.div`
  background: #eaeaea;
  padding-bottom: 16px;
`;

const ShowTickets = styled.div`
  display: none;
  cursor: pointer;
  font-weight: 500;
  line-height: 18px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  background: #00acde;
  border-radius: 4px;
  padding: 18px 0px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Filter = styled.div`
  font-weight: 900;
  cursor: pointer;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  max-width: 150px;
  margin: 0 auto;
  padding: 10px 24px;
  background: #00ace2;
  border-radius: 100px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default () => (
  <FilterWrap>
    <ShowTickets>показать еще 10 билетов!</ShowTickets>
    <Filter>Фильтровать</Filter>
  </FilterWrap>
);
