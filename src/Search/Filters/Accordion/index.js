import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import clear from './clear.svg';
import arrow from './arrow.svg';

const Container = styled.div`
  border-bottom: 1px solid #eaeaea;
`;

const Caption = styled.div`
  align-items: center;
  display: flex;
  padding: 16px;
`;

const Arrow = styled.img`
  margin-right: 8px;
  position: relative;
  top: 1px;
  transform: rotate(${props => (props.opened ? '90deg' : '0deg')});
  transition: 0.25s ease;
`;

const Title = styled.span`
  color: #5b5b5c;
  cursor: pointer;
  flex-grow: 1;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-transform: uppercase;
`;

const Amount = styled.span`
  color: #a0b0b9;
  font-weight: 500;
  line-height: 18px;
  margin-left: 8px;
  font-size: 12px;
  text-transform: uppercase;
`;

const Close = styled.button`
  background: url(${clear}) no-repeat center center;
  border: none;
  height: 16px;
  padding: 0;
  width: 16px;
`;

const Content = styled.div`
  padding: 0 0 16px;
`;

const Accordion = class extends Component {
  state = {
    opened: this.props.opened,
  };

  toggleState = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };

  render() {
    return (
      <Container>
        <Caption>
          <Title onClick={this.toggleState}>
            <Arrow src={arrow} opened={this.state.opened} />
            {this.props.caption} <Amount>{this.props.amount}</Amount>
          </Title>
          {this.props.canClear && <Close />}
        </Caption>
        {this.state.opened && <Content>{this.props.children}</Content>}
      </Container>
    );
  }
};

Accordion.defaultProps = {
  amount: null,
  canClear: false,
  opened: false,
};

Accordion.propTypes = {
  caption: PropTypes.string.isRequired,
  amount: PropTypes.number,
  canClear: PropTypes.bool,
  opened: PropTypes.bool,
};

export default Accordion;
