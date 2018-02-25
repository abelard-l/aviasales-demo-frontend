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

const StringBlock = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 17px;

  ${props =>
    props.borderbottom &&
    css`
      border-bottom: 1px solid #dbdbdb;
      padding-bottom: 20px;
    `};
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

const ControllWrap = styled.div`
  flex-basis: 39%;
  max-width: 39%;
`;

const Controll = styled.div`
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

const MinusBtn = styled.div`
  background: url(${minus}) no-repeat center center;
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

const AddBtn = styled.div`
  background: url(${add}) no-repeat center center;
  padding: 15px 11px;
  flex-basis: 33%;
  max-width: 33%;
`;

const Checkbox = styled.div`
  background: url(${rectangle}) no-repeat 0px center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

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
  constructor() {
    super();
    this.state = {
      mature: 1,
      childUn12: 0,
      childUn2: 0
    };
  }

  change = (where, direction) => {
    let newMature = this.state.mature;
    let newun12 = this.state.childUn12;
    let newun2 = this.state.childUn2;

    let changer = 0;
    direction === "add" ? (changer = 1) : (changer = -1);

    switch (where) {
      case "mature":
        newMature = this.state.mature + changer;
        break;
      case "un12":
        newun12 = this.state.childUn12 + changer;
        break;
      case "un2":
        newun2 = this.state.childUn2 + changer;
        break;
      default:
    }

    if (newMature < 0) newMature = 0;
    if (newun12 < 0) newun12 = 0;
    if (newun2 < 0) newun2 = 0;

    this.setState({
      mature: newMature,
      childUn12: newun12,
      childUn2: newun2
    });
  };
  render() {
    return (
      <Form onClickOutside={this.props.onClickOutside}>
        <StringBlock>
          <Text>Взрослые</Text>
          <ControllWrap>
            <Controll>
              <MinusBtn onClick={() => this.change("mature", "minus")} />
              <Num>{this.state.mature}</Num>
              <AddBtn onClick={() => this.change("mature", "add")} />
            </Controll>
          </ControllWrap>
        </StringBlock>
        <StringBlock>
          <Text>Дети до 12 лет</Text>
          <ControllWrap>
            <Controll>
              <MinusBtn onClick={() => this.change("un12", "minus")} />
              <Num>{this.state.childUn12}</Num>
              <AddBtn onClick={() => this.change("un12", "add")} />
            </Controll>
          </ControllWrap>
        </StringBlock>
        <StringBlock borderbottom>
          <Text>
            Дети до 2 лет<br />
            <GrayText>Без места</GrayText>
          </Text>
          <ControllWrap>
            <Controll>
              <MinusBtn onClick={() => this.change("un2", "minus")} />
              <Num>{this.state.childUn2}</Num>
              <AddBtn onClick={() => this.change("un2", "add")} />
            </Controll>
          </ControllWrap>
        </StringBlock>
        <Checkbox>
          <Business>Бизнес-класс</Business>
        </Checkbox>
      </Form>
    );
  }
}

export default SelectPassengers;
