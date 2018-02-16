import React, { Component } from "react";
import styled from "styled-components";

import imgAgency1 from "./agencyLogo-1.png";
import imgAgency2 from "./agencyLogo-2.png";
import imgAgency3 from "./agencyLogo-3.png";
import imgAgency4 from "./agencyLogo-4.png";
import imgAgency5 from "./agencyLogo-5.png";

const Slider = styled.section`
  padding-bottom: 28px;

  @media (max-width: 575px) {
    display: none;
  }
`;
const SliderH2 = styled.h2`
  color: #5c5c5c;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
`;

const SliderImages = styled.div`
  text-align: center;
`;
const Agency = styled.img`
  margin-left: 25px;
`;

export default () => (
  <Slider>
    <SliderH2>
      Дешевые авиабилеты от крупнейших авиакомпаний и агентств
    </SliderH2>
    <SliderImages>
      <Agency src={imgAgency1} />
      <Agency src={imgAgency2} />
      <Agency src={imgAgency3} />
      <Agency src={imgAgency4} />
      <Agency src={imgAgency5} />
    </SliderImages>
  </Slider>
);
