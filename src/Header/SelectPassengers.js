import React, { Component } from "react";
import styled, { css } from "styled-components";
import { withClickOutside } from "react-clickoutside";

import add from "./add.svg";
import minus from "./minus.svg";
import rectangleChecked from "./checked.svg";
import rectangle from "./rectangle.svg";

const Form = withClickOutside()(styled.div`
  background: #ffffff;
  padding: 22px 16px 6px 16px;
  position: absolute;
  top: 1px;
  right: 0;
  z-index: 5000;
`);

const TicketsPicker = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 17px;
`;

const Text = styled.div`
  box-sizing: border-box;
  flex-basis: 61%;
  max-width: 61%;
  line-height: 18px;
  padding-right: 10px;
  font-size: 14px;
  color: #4a4a4a;
  min-width: 118px;
  white-space: nowrap;
`;

const GrayText = styled.span`
  line-height: 18px;
  font-size: 12px;
  color: #a0b0b9;
`;

const ControlWrap = styled.div`
  flex-basis: 39%;
  max-width: 39%;
`;

const Control = styled.div`
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

const MinusBtn = styled.button`
  background: url(${minus}) no-repeat center center;
  border: 0;
  padding: 15px 11px;
  flex-basis: 33%;
  max-width: 33%;
`;

const Num = styled.div`
  font-weight: 500;
  line-height: normal;
  font-size: 14px;
  color: #4a4a4a;
  flex-basis: 34%;
  max-width: 34%;
  align-self: center;
  padding: 8px;
`;

const PlusBtn = styled.button`
  background: url(${add}) no-repeat center center;
  border: 0;
  padding: 15px 11px;
  flex-basis: 33%;
  max-width: 33%;
`;

const Checkbox = styled.div`
  background: url(${rectangle}) no-repeat 0px center;
  border-top: 1px solid #eaeaea;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-top: 5px;

  ${props =>
    props.checked &&
    css`
      background: url(${rectangleChecked}) no-repeat 0px center;
    `};
`;

const Business = styled.span`
  display: inline-block;
  padding-left: 30px;
  line-height: 36px;
  font-size: 12px;
  color: #4a4a4a;
`;

class SelectPassengers extends Component {
  state = {
    mature: 1,
    сhildren: 0,
    infants: 0
  };

  change = (e, where, direction) => {
    e.preventDefault();

    let newMature = this.state.mature;
    let newChildren = this.state.сhildren;
    let newInfants = this.state.infants;

    let changer = 0;
    direction === "plus" ? (changer = 1) : (changer = -1);

    switch (where) {
      case "mature":
        newMature = this.state.mature + changer;
        break;
      case "children":
        newChildren = this.state.сhildren + changer;
        break;
      case "infants":
        newInfants = this.state.infants + changer;
        break;
      default:
    }

    if (newMature < 0) newMature = 0;
    if (newChildren < 0) newChildren = 0;
    if (newInfants < 0) newInfants = 0;

    this.setState({
      mature: newMature,
      сhildren: newChildren,
      infants: newInfants
    });
  };
  render() {
    return (
      <Form onClickOutside={this.props.onClickOutside}>
        <TicketsPicker>
          <Text>Взрослые</Text>
          <ControlWrap>
            <Control>
              <MinusBtn onClick={e => this.change(e, "mature", "minus")} />
              <Num>{this.state.mature}</Num>
              <PlusBtn onClick={e => this.change(e, "mature", "plus")} />
            </Control>
          </ControlWrap>
        </TicketsPicker>
        <TicketsPicker>
          <Text>Дети до 12 лет</Text>
          <ControlWrap>
            <Control>
              <MinusBtn onClick={e => this.change(e, "children", "minus")} />
              <Num>{this.state.сhildren}</Num>
              <PlusBtn onClick={e => this.change(e, "children", "plus")} />
            </Control>
          </ControlWrap>
        </TicketsPicker>
        <TicketsPicker>
          <Text>
            Дети до 2 лет<br />
            <GrayText>Без места</GrayText>
          </Text>
          <ControlWrap>
            <Control>
              <MinusBtn onClick={e => this.change(e, "infants", "minus")} />
              <Num>{this.state.infants}</Num>
              <PlusBtn onClick={e => this.change(e, "infants", "plus")} />
            </Control>
          </ControlWrap>
        </TicketsPicker>
        <Checkbox>
          <Business>Бизнес-класс</Business>
        </Checkbox>
      </Form>
    );
  }
}

export default SelectPassengers;
