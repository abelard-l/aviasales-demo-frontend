import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Top from './Top';
import Cards from './Cards';
import BestPrices from './BestPrices';
import PricelessTickets from './PricelessTickets';
import WannaKnow from './WannaKnow';
import SpecSugg from './SpecSugg';
import Information from './Information';
import DownloadMobApp from './DownloadMobApp';

const Main = styled.main`
  padding-top: 56px;
`;

export default () => (
  <React.Fragment>
    <Header />
    <Main>
      <Top />
      <Cards />
      <BestPrices />
      <PricelessTickets />
      <WannaKnow />
      <SpecSugg />
      <Information />
      <DownloadMobApp />
    </Main>
  </React.Fragment>
);
