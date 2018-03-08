import React from 'react';
import styled from 'styled-components';

import smile from './icons/smile.png';
import light from './icons/light.png';
import love from './icons/love.png';

const Mark = styled.div`
  font-weight: 900;
  line-height: 18px;
  font-size: 14px;
  color: #ffffff;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Cheapest = styled.div`
  background: #83d40b;
  padding: 8px;
`;

const Fastest = styled.div`
  background: #af7542;
  padding: 8px;
`;

const TheBest = styled.div`
  background: #c279d1;
  padding: 8px;
`;

const MarkImage = styled.img`
  margin-left: 8px;
`;

export default props => (
  <Mark>
    {props.type === 'cheapest' ? (
      <Cheapest>
        Самый дешевый <MarkImage src={smile} />
      </Cheapest>
    ) : props.type === 'fastest' ? (
      <Fastest>
        Самый быстрый <MarkImage src={light} />
      </Fastest>
    ) : (
      <TheBest>
        Лучший билет <MarkImage src={love} />
      </TheBest>
    )}
  </Mark>
);
