import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Rouble } from '../../../commonComponents';
import { makeDigits } from '../../../commonFunctions';
import checked from './checked.svg';
import unchecked from './rectangle.svg';

const Check = styled.input`
  opacity: 0;
  position: absolute;
`;

const Container = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 0 16px;
  position: relative;
`;

const Checkbox = styled.img`
  display: block;
  margin-right: 8px;
`;

const Caption = styled.p`
  color: #4a4a4a;
  flex-grow: 1;
  font-size: 12px;
  line-height: 36px;
  margin: 0;
`;

const Price = styled.span`
  color: #a0b0b9;
  font-size: 12px;
  line-height: 36px;
  margin-left: auto;
`;

const BlueCheckbox = class extends Component {
  state = {
    checked: this.props.checked,
  };

  toggleState = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    return (
      <Container>
        <Check type="checkbox" onChange={this.toggleState} />
        <Checkbox src={this.state.checked ? checked : unchecked} />
        <Caption>{this.props.caption}</Caption>
        {this.props.price && (
          <Price>
            {makeDigits(this.props.price)}
            <Rouble />
          </Price>
        )}
      </Container>
    );
  }
};

BlueCheckbox.defaultProps = {
  checked: false,
  caption: '',
  price: null,
};

BlueCheckbox.propTypes = {
  checked: PropTypes.bool,
  caption: PropTypes.string,
  price: PropTypes.number,
};

export default BlueCheckbox;
