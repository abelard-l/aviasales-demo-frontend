import nord from "./images/nord.png";
import nordAir from "./images/nord-air.png";
import russia from "./images/rus.png";
import russiaShrt from "./images/rus-shrt.png";
import red from "./images/red.png";
import redShrt from "./images/red-shrt.png";
import namelessCmp from "./images/nameless.png";
import fly from "./images/fly.png";

export const cardsData = [
  {
    general: {
      airline: [russia],
      isCharter: true,
      price: 7712,
      company: "Clickavia",
      mark: "cheapest",
      ticketsRemain: false
    },
    specSugg: [],
    thingsRule1: {
      hands: 5,
      baggage: 12,
      text: ""
    },
    thingsRule2: {
      showRule: false,
      hands: 5,
      baggage: "red",
      discount: 136
    },
    flightForward: {
      type: "Прямой",
      departureTime: "00:05",
      departureCity: "Москва",
      departureDate: "24 фев 2018, Сб",
      departureAirport: "VKO",
      arrivalTime: "03:05",
      arrivalCity: "Барселона",
      arrivalDate: "24 фев 2018, Сб",
      arrivalAirport: "BCN",
      duration: "5ч"
    },
    flightBack: {
      type: "Прямой",
      departureTime: "10:35",
      departureCity: "Барселона",
      departureDate: "3 мар 2018, Сб",
      departureAirport: "BCN",
      arrivalTime: "17:10",
      arrivalCity: "Москва",
      arrivalDate: "3 мар 2018, Сб",
      arrivalAirport: "SVO",
      duration: "4ч 35 м"
    }
  },
  {
    general: {
      airline: [nord],
      isCharter: false,
      price: 8029,
      company: "Билетик Аэро",
      mark: "fastest",
      ticketsRemain: false
    },
    specSugg: [],
    thingsRule1: {
      hands: 5,
      baggage: "red",
      text: ""
    },
    thingsRule2: {
      showRule: false,
      hands: 5,
      baggage: "red",
      discount: 136
    },
    flightForward: {
      type: "Прямой",
      departureTime: "00:15",
      departureCity: "Москва",
      departureDate: "24 фев 2018, Сб",
      departureAirport: "VKO",
      arrivalTime: "03:10",
      arrivalCity: "Барселона",
      arrivalDate: "24 фев 2018, Сб",
      arrivalAirport: "BCN",
      duration: "4ч 55м"
    },
    flightBack: {
      type: "CDG",
      departureTime: "10:45",
      departureCity: "Барселона",
      departureDate: "3 мар 2018, Сб",
      departureAirport: "BCN",
      arrivalTime: "17:15 ",
      arrivalCity: "Москва",
      arrivalDate: "3 мар 2018, Сб",
      arrivalAirport: "SVO",
      duration: "4ч 30 м"
    }
  },
  {
    general: {
      airline: [nordAir],
      isCharter: true,
      price: 8164,
      company: "Aviakassa",
      mark: "thebest",
      ticketsRemain: false
    },
    specSugg: [],
    thingsRule1: {
      hands: 5,
      baggage: "none",
      text: ""
    },
    thingsRule2: {
      showRule: true,
      hands: 5,
      baggage: 12,
      discount: 136
    },
    flightForward: {
      type: "Прямой",
      departureTime: "00:15",
      departureCity: "Москва",
      departureDate: "24 фев 2018, Сб",
      departureAirport: "VKO",
      arrivalTime: "03:10",
      arrivalCity: "Барселона",
      arrivalDate: "24 фев 2018, Сб",
      arrivalAirport: "BCN",
      duration: "4ч 55м"
    },
    flightBack: {
      type: "Прямой",
      departureTime: "10:45",
      departureCity: "Барселона",
      departureDate: "3 мар 2018, Сб",
      departureAirport: "BCN",
      arrivalTime: "17:15",
      arrivalCity: "Москва",
      arrivalDate: "3 мар 2018, Сб",
      arrivalAirport: "SVO",
      duration: "4ч 30 м"
    }
  },
  {
    general: {
      airline: [red],
      isCharter: true,
      price: 8240,
      company: "Билетик Аэро",
      mark: "none",
      ticketsRemain: false
    },
    specSugg: [
      {
        name: "Clickavia",
        price: 8302
      },
      {
        name: "Aviakassa",
        price: 8376
      },
      {
        name: "Aviakassa",
        price: 8376
      },
      {
        name: "Aviakassa",
        price: 8376
      },
      {
        name: "Aviakassa",
        price: 8376
      }
    ],
    thingsRule1: {
      hands: 10,
      baggage: "none",
      text: "Нет багажа"
    },
    thingsRule2: {
      showRule: true,
      hands: 10,
      baggage: 20,
      discount: 267
    },
    flightForward: {
      type: "Прямой",
      departureTime: "07:00",
      departureCity: "Москва",
      departureDate: "24 фев 2018, Сб",
      departureAirport: "VKO",
      arrivalTime: "09:30",
      arrivalCity: "Барселона",
      arrivalDate: "24 фев 2018, Сб",
      arrivalAirport: "BCN",
      duration: "4ч 30м"
    },
    flightBack: {
      type: "Прямой",
      departureTime: "11:00",
      departureCity: "Барселона",
      departureDate: "3 мар 2018, Сб",
      departureAirport: "BCN",
      arrivalTime: "17:10",
      arrivalCity: "Москва",
      arrivalDate: "3 мар 2018, Сб",
      arrivalAirport: "SVO",
      duration: "4ч 10 м"
    }
  },
  {
    general: {
      airline: [redShrt, russiaShrt],
      isCharter: true,
      price: 9108,
      company: "Clickavia",
      mark: "none",
      ticketsRemain: false
    },
    specSugg: [],
    thingsRule1: {
      hands: 10,
      baggage: 15,
      text: ""
    },
    thingsRule2: {
      showRule: false,
      hands: 5,
      baggage: 12,
      discount: 136
    },
    flightForward: {
      type: "Прямой",
      departureTime: "00:05",
      departureCity: "Москва",
      departureDate: "24 фев 2018, Сб",
      departureAirport: "VKO",
      arrivalTime: "03:05",
      arrivalCity: "Барселона",
      arrivalDate: "24 фев 2018, Сб",
      arrivalAirport: "BCN",
      duration: "5ч"
    },
    flightBack: {
      type: "Прямой",
      departureTime: "11:00",
      departureCity: "Барселона",
      departureDate: "3 мар 2018, Сб",
      departureAirport: "BCN",
      arrivalTime: "17:10",
      arrivalCity: "Москва",
      arrivalDate: "3 мар 2018, Сб",
      arrivalAirport: "SVO",
      duration: "4ч 10 м"
    }
  },
  {
    general: {
      airline: [fly],
      isCharter: true,
      price: 9269,
      company: "Biletix",
      mark: "none",
      ticketsRemain: 4
    },
    specSugg: [
      {
        name: "Svyaznoy Travel",
        price: 9275
      },
      {
        name: "Билетик Аэро",
        price: 9587
      },
      {
        name: "Aviakassa",
        price: 8376
      },
      {
        name: "Aviakassa",
        price: 8376
      },
      {
        name: "Aviakassa",
        price: 8376
      }
    ],
    thingsRule1: {
      hands: "none",
      baggage: 20,
      text: "Нет багажа"
    },
    thingsRule2: {
      showRule: false,
      hands: 10,
      baggage: 20,
      discount: 267
    },
    flightForward: {
      type: "Прямой",
      departureTime: "07:30",
      departureCity: "Москва",
      departureDate: "24 фев 2018, Сб",
      departureAirport: "VKO",
      arrivalTime: "09:50",
      arrivalCity: "Барселона",
      arrivalDate: "24 фев 2018, Сб",
      arrivalAirport: "BCN",
      duration: "4ч 20м"
    },
    flightBack: {
      type: "Прямой",
      departureTime: "11:20",
      departureCity: "Барселона",
      departureDate: "3 мар 2018, Сб",
      departureAirport: "BCN",
      arrivalTime: "17:35",
      arrivalCity: "Москва",
      arrivalDate: "3 мар 2018, Сб",
      arrivalAirport: "SVO",
      duration: "4ч 15 м"
    }
  },
  {
    general: {
      airline: [russiaShrt, namelessCmp],
      isCharter: true,
      price: 9485,
      company: "Clickavia",
      mark: "none",
      ticketsRemain: false
    },
    specSugg: [],
    thingsRule1: {
      hands: "none",
      baggage: 15,
      text: ""
    },
    thingsRule2: {
      showRule: false,
      hands: 5,
      baggage: 12,
      discount: 136
    },
    flightForward: {
      type: "Прямой",
      departureTime: "00:05",
      departureCity: "Москва",
      departureDate: "24 фев 2018, Сб",
      departureAirport: "VKO",
      arrivalTime: "03:05",
      arrivalCity: "Барселона",
      arrivalDate: "24 фев 2018, Сб",
      arrivalAirport: "BCN",
      duration: "5ч"
    },
    flightBack: {
      type: "Прямой",
      departureTime: "11:20",
      departureCity: "Барселона",
      departureDate: "3 мар 2018, Сб",
      departureAirport: "BCN",
      arrivalTime: "17:35",
      arrivalCity: "Москва",
      arrivalDate: "3 мар 2018, Сб",
      arrivalAirport: "SVO",
      duration: "4ч 15 м"
    }
  }
];