import React, { Component } from "react";
import styled, { css } from "styled-components";

import circle from "./icons/circle.svg";
import pin from "./icons/pin.svg";
import planeTakingOff from "./icons/plane-taking-off.svg";
import routeLine from "./icons/route-line.svg";

import clock from "./icons/clock.svg";
import planeTo from "./icons/plane-to.svg";
import planeReturn from "./icons/plane-return.svg";

const FlightRoute = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 25px;
`;

const Departure = styled.div`
  flex-basis: 28%;
  max-width: 28%;
  padding-left: 16px;
  text-align: left;

  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  line-height: 40px;
  font-size: 28px;
  color: #323333;

  ${props =>
    props.alignLeft &&
    css`
      justify-content: flex-start;
    `};

  ${props =>
    props.alignRight &&
    css`
      justify-content: flex-end;
    `};
`;

const City = styled.div`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
`;

const TimeAndDay = styled.div`
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
`;

const Pin = styled.img`
  margin-right: 8px;
`;

const Route = styled.div`
  flex-basis: 48%;
  max-width: 48%;

  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Duration = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const PlaneUp = styled.img``;

const Overall = styled.div`
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
`;

const PlaneDown = styled.img`
  transform: rotate(45deg);
`;

const RouteLine = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 12px;
`;

const Circle = styled.img``;

const Line = styled.div`
  background: url(${routeLine}) repeat-x center center;
  flex-basis: 95%;
`;

const Airports = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-weight: 500;
  line-height: 18px;
  font-size: 10px;
  color: #4a4a4a;
  margin-top: 18px;
`;

const AirportFrom = styled.div`
  flex-basis: 50%;
  text-align: left;
`;

const AirportTo = styled.div`
  flex-basis: 50%;
  text-align: right;
`;

const Arrival = styled.div`
  flex-basis: 24%;
  max-width: 24%;
  padding-right: 16px;
  text-align: right;

  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Mob = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const DepartureAndArriving = styled.div`
  display: block;
  flex-basis: 40%;
  max-width: 40%;
  padding-left: 8px;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  color: #4a4a4a;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Timing = styled.div`
  flex-basis: 36%;
  max-width: 36%;
  display: block;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  color: #4a4a4a;
  padding-left: 8px;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Direction = styled.div`
  flex-basis: 24%;
  max-width: 24%;
  display: block;
  padding-right: 6px;
  text-align: right;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  color: #4a4a4a;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Icons = styled.img`
  margin-right: 8px;
`;

export default props => (
  <FlightRoute>
    <Departure>
      <Time alignLeft>
        <Pin src={pin} /> {props.flight.departureTime}
      </Time>
      <City>{props.flight.departureCity}</City>
      <TimeAndDay>{props.flight.departureDate}</TimeAndDay>
    </Departure>
    <Route>
      <Duration>
        <PlaneUp src={planeTakingOff} />
        <Overall>Всего: {props.flight.duration}</Overall>
        <PlaneDown src={planeTakingOff} />
      </Duration>
      <RouteLine>
        <Circle src={circle} />
        <Line />
        <Circle src={circle} />
      </RouteLine>
      <Airports>
        <AirportFrom>{props.flight.departureAirport}</AirportFrom>
        <AirportTo>{props.flight.arrivalAirport}</AirportTo>
      </Airports>
    </Route>
    <Arrival>
      <Time alignRight>{props.flight.arrivalTime}</Time>
      <City>{props.flight.arrivalCity}</City>
      <TimeAndDay>{props.flight.arrivalDate}</TimeAndDay>
    </Arrival>
    <DepartureAndArriving>
      {props.direction === "to" ? (
        <Icons src={planeTo} />
      ) : (
        <Icons src={planeReturn} />
      )}
      {props.flight.departureTime} - {props.flight.arrivalTime}
    </DepartureAndArriving>
    <Timing>
      <Icons src={clock} /> {props.flight.duration}
    </Timing>
    <Direction>{props.flight.type}</Direction>
  </FlightRoute>
);
