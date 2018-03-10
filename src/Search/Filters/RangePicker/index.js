import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  margin: 16px 16px 24px;
  padding-bottom: 4px;
`;

const Caption = styled.span`
  color: #323333;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin: 12px 0 0 0;
`;

const FromAndTo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const From = styled.span`
  color: #323333;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const To = styled.span`
  color: #323333;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const handleStyle = {
  background: '#fff',
  border: '1px solid #d6d9da',
  borderRadius: 50,
};

const trackStyle = {
  position: 'relative',
  top: 3,
  height: 2,
  background: '#00acde',
};

const railStyle = {
  position: 'relative',
  top: 5,
  height: 2,
  background: '#dddddd',
};

const RangePicker = ({ caption, from, to }) => (
  <Container>
    <Caption>{caption}</Caption>
    <FromAndTo>
      <From>{from}</From>
      <To>{to}</To>
    </FromAndTo>
    <Range
      defaultValue={[0, 100]}
      handleStyle={[handleStyle, handleStyle]}
      allowCross={false}
      trackStyle={[trackStyle]}
      railStyle={railStyle}
    />
  </Container>
);

RangePicker.defaultProps = {
  from: '',
  to: '',
  caption: '',
};

RangePicker.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  caption: PropTypes.string,
};

export default RangePicker;
