import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { cardsData } from "./data";

const Cards = styled.section``;

export default () => (
  <Cards>
    <Card wholeCard={cardsData[0]} />
    <Card wholeCard={cardsData[1]} />
    <Card wholeCard={cardsData[2]} />
    <Card wholeCard={cardsData[3]} />
    <Card wholeCard={cardsData[4]} />
    <Card wholeCard={cardsData[5]} />
    <Card wholeCard={cardsData[6]} />
  </Cards>
);
