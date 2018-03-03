import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import DatePicker, { prices } from "./DatePicker";
import SelectPassengers from "./SelectPassengers";
import { headerNarrowGrid, headerLongGrid } from "../commonComponents";

import { format } from "date-fns";
import ruLocale from "date-fns/locale/ru";

import "./datePicker.css";

import Top from "./Top";
import arrows from "./arrow.svg";
import arrowdown from "./arrow-down.svg";
import calendar from "./calendar.svg";
import aero from "./aero.svg";

const Header = styled.header`
  background: linear-gradient(
    119.26deg,
    #00b0de -25.78%,
    #01aedc -22.1%,
    #02abdb -18.38%,
    #02abdb -14.68%,
    #02abdb -14.46%,
    #196ebd 73.68%
  );
  padding-bottom: ${props => (props.narrow ? "10px" : "88px")};

  @media (min-width: 768px) {
    padding-bottom: ${props => (props.narrow ? "30px" : "122px")};
  }

  @media (min-width: 1200px) {
    padding-bottom: ${props => (props.narrow ? "30px" : "250px")};
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: bold;
  line-height: 48px;
  margin-bottom: 8px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const SubTitle = styled.h2`
  color: white;
  display: none;
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 40px;
  margin-top: 8px;
  text-align: center;

  @media (min-width: 768px) {
    display: block;
  }
`;

const TicketParams = styled.form`
  display: ${props => (props.narrow ? "none" : "flex")};
  flex-wrap: wrap;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const DestFrom = styled.div`
  flex-basis: 100%;
  position: relative;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 1200px) {
    flex-basis: ${props => (props.narrow ? "17%" : "22%")};
  }
`;

const DestFromInput = styled.input`
  background: white;
  border: none;
  border-radius: 4px 4px 0px 0px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  margin: 1px;
  padding: 16px;
  width: calc(100% - 2px);

  @media (min-width: 768px) {
    border-radius: 4px 0px 0px 0px;
  }

  @media (min-width: 1200px) {
    border-radius: 4px 0px 0px 4px;
  }
`;

const Airport = styled.p`
  color: #a0b0b9;
  font-size: 16px;
  line-height: 20px;
  padding-right: 11px;
  text-align: center;
`;

const DestFromBtn = styled.button`
  background: url(${arrows}) no-repeat center center;
  border: none;
  cursor: pointer;
  height: 18px;
  width: 16px;
`;

const DestTo = styled.div`
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 1200px) {
    flex-basis: ${props => (props.narrow ? "17%" : "21%")};
  }
`;

const DestToInput = styled.input`
  background: white;
  border: none;
  border-radius: 0px 0px 0px 0px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  margin: 1px;
  padding: 16px;
  width: calc(100% - 2px);

  @media (min-width: 768px) {
    border-radius: 0px 4px 0px 0px;
  }

  @media (min-width: 1200px) {
    border-radius: 0px 0px 0px 0px;
  }
`;

const Dates = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-basis: 100%;
  position: relative;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 1200px) {
    flex-basis: ${props => (props.narrow ? "30%" : "36%")};
  }
`;

const DateFrom = styled.div`
  flex-basis: 50%;
  position: relative;
`;

const DateFromInput = styled.input`
  background: white;
  border: none;
  border-radius: 0px 0px 0px 0px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  margin: 1px;
  padding: 16px;
  width: calc(100% - 2px);

  @media (min-width: 768px) {
    border-radius: 0px 0px 0px 4px;
  }

  @media (min-width: 1200px) {
    border-radius: 0px 0px 0px 0px;
  }
`;

const DateTo = styled.div`
  flex-basis: 50%;
  position: relative;
`;

const DateBtn = styled.span`
  background: url(${calendar}) no-repeat center center;
  border: none;
  cursor: pointer;
  height: 20px;
  width: 17px;
`;

const FlightType = styled.div`
  cursor: pointer;
  flex-basis: 100%;
  position: relative;

  @media (min-width: 768px) {
    flex-basis: ${props => (props.narrow ? "25%" : "50%")};
  }

  @media (min-width: 1200px) {
    flex-basis: ${props => (props.narrow ? "19%" : "21%")};
  }
`;

const FlightTypeChoose = styled.div`
  background: url(${arrowdown}) no-repeat center center;
  border: none;
  cursor: pointer;
  height: 5px;
  width: 10px;
`;

const Passenger = styled.div`
  background: white;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  margin: 1px;
  padding: 16px;
  width: (100% - 2px);

  @media (min-width: 768px) {
    border-bottom-left-radius: 0px;
    font-size: ${props => (props.narrow ? "15px" : "16px")};
  }

  @media (min-width: 1200px) {
    border-radius: 0px 4px 4px 0px;
    font-size: 16px;
  }
`;

const GrayerText = styled.span`
  color: #a0b0b9;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: ${props => (props.narrow ? "15px" : "16px")};
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

const DateToInput = styled.input`
  background: white;
  border: none;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  margin: 1px;
  padding: 16px;
  width: calc(100% - 2px);
`;

const RightInputField = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  padding-right: 18px;
  position: absolute;
  right: 0;
  top: 0;
`;

const WrapFindTickets = styled(Link)`
  display: ${props => (props.narrow ? "block" : "flex")};
  justify-content: center;
  margin-top: 48px;
  flex-basis: 100%;
  max-width: 100%;

  @media (min-width: 768px) {
    margin-top: ${props => (props.narrow ? "0px" : "48px")};
    flex-basis: ${props => (props.narrow ? "25%" : "100%")};
    max-width: ${props => (props.narrow ? "25%" : "100%")};
  }

  @media (min-width: 1200px) {
    margin-left: ${props => (props.narrow ? "auto" : "0px")};
    margin-top: ${props => (props.narrow ? "0px" : "48px")};
    flex-basis: ${props => (props.narrow ? "16%" : "100%")};
    max-width: ${props => (props.narrow ? "16%" : "100%")};
  }
`;

const FindTickets = styled.button`
  color: #ffffff;
  background: #ff9241;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${props => (props.narrow ? "18px" : "24px")};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: ${props => (props.narrow ? "15px 18px" : "15px 74px 16px 45px")};
  position: relative;
  margin-left: ${props => (props.narrow ? "12px" : "0px")};
  width: ${props => (props.narrow ? "calc(100% - 1px)" : "inherit")};

  @media (min-width: 768px) {
    font-size: ${props => (props.narrow ? "18px" : "28px")};
    padding: ${props => (props.narrow ? "15px 12px" : "15px 74px 16px 45px")};
    margin-top: ${props => (props.narrow ? "1px" : "0px")};
    margin-left: 1px;
    width: ${props => (props.narrow ? "calc(100% - 1px)" : "inherit")};
  }

  @media (min-width: 1200px) {
    font-size: ${props => (props.narrow ? "18px" : "28px")};
  }
`;

const FindTicketsRight = styled.div`
  align-items: center;
  display: ${props => (props.narrow ? "none" : "flex")};
  height: 100%;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
`;

const Aero = styled.img`
  margin-right: 24px;
`;

const PriceDayPickerBest = styled.span`
  position: absolute;
  top: 19px;
  left: 2px;
  font-weight: 500;
  line-height: normal;
  font-size: 10px;
  text-align: center;
  color: #00c455;

  @media (min-width: 1200px) {
    left: 6px;
  }
`;

const PriceDayPicker = styled.span`
  position: absolute;
  top: 19px;
  left: 2px;
  font-weight: 500;
  line-height: normal;
  font-size: 10px;
  text-align: center;
  color: #a0b0b9;

  @media (min-width: 1200px) {
    left: 6px;
  }
`;

function formatDate(day) {
  return format(new Date(day), "DD MMMM, dd", {
    locale: ruLocale
  });
}

export default class MainForm extends Component {
  state = {
    showFrom: false,
    showTo: false,
    current: "from",
    fromDate: new Date(),
    toDate: new Date(),
    isShowSelectPassengers: false
  };

  showDatePicker = direction => {
    direction === "from"
      ? this.setState({
          showFrom: true,
          showTo: false,
          current: "from"
        })
      : this.setState({
          showFrom: false,
          showTo: true,
          current: "to"
        });
  };

  clickOutside = () => {
    this.setState({
      showFrom: false,
      showTo: false
    });
  };

  showSelectPassengers = () => {
    this.setState({
      isShowSelectPassengers: true
    });
  };

  clickOutsideSelectPassengers = () => {
    this.setState({
      isShowSelectPassengers: false
    });
  };

  dayClick = day => {
    this.state.current === "from"
      ? this.setState({ fromDate: day })
      : this.setState({ toDate: day });
    this.clickOutside();
  };

  renderDay = fullDay => {
    const day = fullDay.getDate();

    return (
      <div>
        {day}
        {prices[day] &&
          (prices[day].isBest ? (
            <PriceDayPickerBest>{prices[day].value}</PriceDayPickerBest>
          ) : (
            <PriceDayPicker>{prices[day].value}</PriceDayPicker>
          ))}
      </div>
    );
  };

  render(narrow) {
    return (
      <Header narrow={this.props.narrow}>
        <Top narrow={this.props.narrow} />
        {!this.props.narrow && (
          <React.Fragment>
            <Title>Поиск дешевых авиабилетов</Title>
            <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
          </React.Fragment>
        )}
        <div className="container">
          <div className="row">
            <div
              className={this.props.narrow ? headerNarrowGrid : headerLongGrid}
            >
              <TicketParams narrow={this.props.narrow}>
                <DestFrom narrow={this.props.narrow}>
                  <DestFromInput type="text" defaultValue="Москва" />
                  <RightInputField>
                    <Airport>MOW</Airport>
                    <DestFromBtn />
                  </RightInputField>
                </DestFrom>
                <DestTo narrow={this.props.narrow}>
                  <DestToInput type="text" placeholder="Город прибытия" />
                </DestTo>
                <Dates narrow={this.props.narrow}>
                  <DateFrom>
                    <DateFromInput
                      readOnly
                      value={formatDate(this.state.fromDate)}
                      type="text"
                      placeholder="Туда"
                      onClick={() => this.showDatePicker("from")}
                    />
                    <RightInputField
                      onClick={() => this.showDatePicker("from")}
                    >
                      <DateBtn />
                    </RightInputField>
                  </DateFrom>
                  <DateTo onClick={() => this.showDatePicker("to")}>
                    <DateToInput
                      readOnly
                      value={formatDate(this.state.toDate)}
                      type="text"
                      placeholder="Обратно"
                    />
                    <RightInputField onClick={() => this.showDatePicker("to")}>
                      <DateBtn />
                    </RightInputField>
                  </DateTo>
                  {this.state.showFrom && (
                    <DatePicker
                      onClickOutside={this.clickOutside}
                      onDayClick={this.dayClick}
                      selectedDays={this.state.fromDate}
                      renderDay={this.renderDay}
                    />
                  )}
                  {this.state.showTo && (
                    <DatePicker
                      onClickOutside={this.clickOutside}
                      onDayClick={this.dayClick}
                      selectedDays={this.state.toDate}
                      renderDay={this.renderDay}
                    />
                  )}
                </Dates>
                <FlightType
                  narrow={this.props.narrow}
                  onClick={() => this.showSelectPassengers()}
                >
                  <Passenger narrow={this.props.narrow}>
                    1 пассажир,
                    <GrayerText narrow={this.props.narrow}>эконом</GrayerText>
                  </Passenger>
                  <RightInputField>
                    <FlightTypeChoose />
                  </RightInputField>
                  {this.state.isShowSelectPassengers && (
                    <SelectPassengers
                      narrow={this.props.narrow}
                      onClickOutside={this.clickOutsideSelectPassengers}
                    />
                  )}
                </FlightType>
                <WrapFindTickets
                  narrow={this.props.narrow && this.props.narrow.toString()}
                  to="/search"
                >
                  <FindTickets narrow={this.props.narrow}>
                    Найти билеты
                    <FindTicketsRight narrow={this.props.narrow}>
                      <Aero src={aero} />
                    </FindTicketsRight>
                  </FindTickets>
                </WrapFindTickets>
              </TicketParams>
            </div>
          </div>
        </div>
      </Header>
    );
  }
}
