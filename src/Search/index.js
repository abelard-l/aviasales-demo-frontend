import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import Filters from './Filters';
import Hamburger from './Hamburger';
import ToTop from './ToTop';
import Cards from './Cards';
import Filter from './Filter';

const Search = styled.main`
  background-color: #eaeaea;

  @media (min-width: 1200px) {
    padding-top: 20px;
  }
`;

export default () => (
  <React.Fragment>
    <Header narrow />
    <Search>
      <div className="container">
        <Helmet>
          <title>Search</title>
        </Helmet>
        <ToTop />
        <Hamburger />
        <div className="row">
          <div className="col-xl-3 hidden-lg hidden-md hidden-sm hidden-xs">
            <Filters />
          </div>
          <div className="col-xl-7">
            <Cards />
            <Filter />
          </div>
        </div>
      </div>
    </Search>
  </React.Fragment>
);
