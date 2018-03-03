import React, { Component } from "react";
import styled, { css } from "styled-components";
import { withClickOutside } from "react-clickoutside";

import add from "./add.svg";
import minus from "./minus.svg";
import rectangleChecked from "./checked.svg";
import rectangle from "./rectangle.svg";

const Form = withClickOutside()(styled.div`
  background: #ffffff;
  box-sizing: border-box;
  padding: 22px 20px 6px 20px;
  position: absolute;
  top: 55px;
  left: 1px;
  z-index: 5000;
  width: calc(100% - 2px);

  @media (min-width: 768px) {
    padding: ${props =>
      props.narrow ? "22px 8px 6px 8px" : "22px 20px 6px 20px"};
  }

  @media (min-width: 1200px) {
    padding: 22px 8px 6px 8px;
  }
`);

const TicketsPicker = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 17px;
`;

const Text = styled.div`
  box-sizing: border-box;
  flex-basis: 65%;
  max-width: 65%;
  line-height: 18px;
  padding-right: 10px;
  font-size: 14px;
  color: #4a4a4a;
  min-width: 111px;
  white-space: nowrap;

  @media (min-width: 768px) {
    flex-basis: ${props => (props.narrow ? "55%" : "70%")};
    max-width: ${props => (props.narrow ? "55%" : "70%")};
  }

  @media (min-width: 1200px) {
    flex-basis: 65%;
    max-width: 65%;
  }
`;

const GrayText = styled.span`
  line-height: 18px;
  font-size: 12px;
  color: #a0b0b9;
`;

const ControlWrap = styled.div`
  flex-basis: 45%;
  max-width: 45%;

  @media (min-width: 768px) {
    flex-basis: ${props => (props.narrow ? "45%" : "30%")};
    max-width: ${props => (props.narrow ? "45%" : "30%")};
  }

  @media (min-width: 1200px) {
    flex-basis: 35%;
    max-width: 35%;
  }
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

  @media (min-width: 768px) {
    padding: ${props => (props.narrow ? "15px 3px;" : "15px 11px;")};
  }

  @media (min-width: 1200px) {
    padding: 15px 11px;
  }
`;

const Num = styled.div`
  font-weight: 500;
  line-height: normal;
  font-size: 14px;
  color: #4a4a4a;
  flex-basis: 34%;
  max-width: 34%;
  align-self: center;
  text-align: center;
  padding: 8px;

  @media (min-width: 768px) {
    padding: ${props => (props.narrow ? "2px" : "8px")};
  }

  @media (min-width: 1200px) {
    padding: 8px;
  }
`;

const PlusBtn = styled.button`
  background: url(${add}) no-repeat center center;
  border: 0;
  padding: 15px 11px;
  flex-basis: 33%;
  max-width: 33%;

  @media (min-width: 768px) {
    padding: ${props => (props.narrow ? "15px 3px;" : "15px 11px;")};
  }

  @media (min-width: 1200px) {
    padding: 15px 11px;
  }
`;

const Checkbox = styled.div`
  background: url(${rectangle}) no-repeat 0px 14px;
  border-top: 1px solid #eaeaea;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-top: 5px;
  display: flex;
  align-items: center;

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
        newMature =
          this.state.mature + changer >= 0 ? this.state.mature + changer : 0;
        break;
      case "children":
        newChildren =
          this.state.сhildren + changer >= 0
            ? this.state.сhildren + changer
            : 0;
        break;
      case "infants":
        newInfants =
          this.state.infants + changer >= 0 ? this.state.infants + changer : 0;
        break;
      default:
    }

    this.setState({
      mature: newMature,
      сhildren: newChildren,
      infants: newInfants
    });
  };
  render() {
    return (
      <Form
        onClickOutside={this.props.onClickOutside}
        narrow={this.props.narrow}
      >
        <TicketsPicker>
          <Text narrow={this.props.narrow}>Взрослые</Text>
          <ControlWrap narrow={this.props.narrow}>
            <Control>
              <MinusBtn
                narrow={this.props.narrow}
                onClick={e => this.change(e, "mature", "minus")}
              />
              <Num narrow={this.props.narrow}>{this.state.mature}</Num>
              <PlusBtn
                narrow={this.props.narrow}
                onClick={e => this.change(e, "mature", "plus")}
              />
            </Control>
          </ControlWrap>
        </TicketsPicker>
        <TicketsPicker>
          <Text narrow={this.props.narrow}>Дети до 12 лет</Text>
          <ControlWrap narrow={this.props.narrow}>
            <Control>
              <MinusBtn
                narrow={this.props.narrow}
                onClick={e => this.change(e, "children", "minus")}
              />
              <Num narrow={this.props.narrow}>{this.state.сhildren}</Num>
              <PlusBtn
                narrow={this.props.narrow}
                onClick={e => this.change(e, "children", "plus")}
              />
            </Control>
          </ControlWrap>
        </TicketsPicker>
        <TicketsPicker>
          <Text narrow={this.props.narrow}>
            Дети до 2 лет<br />
            <GrayText>Без места</GrayText>
          </Text>
          <ControlWrap narrow={this.props.narrow}>
            <Control>
              <MinusBtn
                narrow={this.props.narrow}
                onClick={e => this.change(e, "infants", "minus")}
              />
              <Num narrow={this.props.narrow}>{this.state.infants}</Num>
              <PlusBtn
                narrow={this.props.narrow}
                onClick={e => this.change(e, "infants", "plus")}
              />
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
