import styled from "styled-components";

export const BlueLink = styled.a`
  color: #00ace2;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #5c5c5c;
    text-decoration: underline;
  }

  & up {
    ${"" /* text-transform: uppercase; */};
  }
`;

export const GrayLink = styled.a`
  color: #5b5b5c;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const H2Center = styled.h2`
  color: #4a4a4a;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  margin-bottom: 56px;
  margin-top: 20px;
  text-align: center;
`;

export const Img = styled.img``;

export const FontBold = styled.span`
  font-weight: bold;
`;

export const DivMaxW296 = styled.div`
  margin: 0 auto;
  max-width: 296px;
`;

export const CommonFlag = styled.img``;
export const CommonCity = styled.div`
  color: #5b5b5c;
  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
`;
export const CommonCountry = styled.div`
  color: #a0b0b9;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
`;

export const PCenter = styled.p`
  font-size: 16px;
  line-height: 26px;
  text-align: center;
`;
