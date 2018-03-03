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
      type: "Direct",
      departureTime: 5,
      departureCity: "Moscow",
      departureDate: "2-24-2018",
      departureAirport: "VKO",
      arrivalTime: 185,
      arrivalCity: "Barcelona",
      arrivalDate: "2-24-2018",
      arrivalAirport: "BCN",
      duration: 300
    },
    flightBack: {
      type: "Direct",
      departureTime: 635,
      departureCity: "Barcelona",
      departureDate: "3-3-2018",
      departureAirport: "BCN",
      arrivalTime: 1030,
      arrivalCity: "Moscow",
      arrivalDate: "3-3-2018",
      arrivalAirport: "SVO",
      duration: 275
    }
  },
  {
    general: {
      airline: [nord],
      isCharter: false,
      price: 8029,
      company: "Biletik Aero",
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
      type: "Direct",
      departureTime: 15,
      departureCity: "Moscow",
      departureDate: "2-24-2018",
      departureAirport: "VKO",
      arrivalTime: 190,
      arrivalCity: "Barcelona",
      arrivalDate: "2-24-2018",
      arrivalAirport: "BCN",
      duration: 295
    },
    flightBack: {
      type: "CDG",
      departureTime: 645,
      departureCity: "Barcelona",
      departureDate: "3-3-2018",
      departureAirport: "BCN",
      arrivalTime: 1035,
      arrivalCity: "Moscow",
      arrivalDate: "3-3-2018",
      arrivalAirport: "SVO",
      duration: 270
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
      type: "Direct",
      departureTime: 15,
      departureCity: "Moscow",
      departureDate: "2-24-2018",
      departureAirport: "VKO",
      arrivalTime: 190,
      arrivalCity: "Barcelona",
      arrivalDate: "2-24-2018",
      arrivalAirport: "BCN",
      duration: 295
    },
    flightBack: {
      type: "Direct",
      departureTime: 645,
      departureCity: "Barcelona",
      departureDate: "3-3-2018",
      departureAirport: "BCN",
      arrivalTime: 1035,
      arrivalCity: "Moscow",
      arrivalDate: "3-3-2018",
      arrivalAirport: "SVO",
      duration: 270
    }
  },
  {
    general: {
      airline: [red],
      isCharter: true,
      price: 8240,
      company: "Biletik Aero",
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
      type: "Direct",
      departureTime: 420,
      departureCity: "Moscow",
      departureDate: "2-24-2018",
      departureAirport: "VKO",
      arrivalTime: 570,
      arrivalCity: "Barcelona",
      arrivalDate: "2-24-2018",
      arrivalAirport: "BCN",
      duration: 270
    },
    flightBack: {
      type: "Direct",
      departureTime: 660,
      departureCity: "Barcelona",
      departureDate: "3-3-2018",
      departureAirport: "BCN",
      arrivalTime: 1030,
      arrivalCity: "Moscow",
      arrivalDate: "3-3-2018",
      arrivalAirport: "SVO",
      duration: 250
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
      type: "Direct",
      departureTime: 5,
      departureCity: "Moscow",
      departureDate: "2-24-2018",
      departureAirport: "VKO",
      arrivalTime: 185,
      arrivalCity: "Barcelona",
      arrivalDate: "2-24-2018",
      arrivalAirport: "BCN",
      duration: 300
    },
    flightBack: {
      type: "Direct",
      departureTime: 660,
      departureCity: "Barcelona",
      departureDate: "3-3-2018",
      departureAirport: "BCN",
      arrivalTime: 1030,
      arrivalCity: "Moscow",
      arrivalDate: "3-3-2018",
      arrivalAirport: "SVO",
      duration: 250
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
        name: "Biletik Aero",
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
      type: "Direct",
      departureTime: 450,
      departureCity: "Moscow",
      departureDate: "2-24-2018",
      departureAirport: "VKO",
      arrivalTime: 590,
      arrivalCity: "Barcelona",
      arrivalDate: "2-24-2018",
      arrivalAirport: "BCN",
      duration: 260
    },
    flightBack: {
      type: "Direct",
      departureTime: 680,
      departureCity: "Barcelona",
      departureDate: "3-3-2018",
      departureAirport: "BCN",
      arrivalTime: 1055,
      arrivalCity: "Moscow",
      arrivalDate: "3-3-2018",
      arrivalAirport: "SVO",
      duration: 255
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
      type: "Direct",
      departureTime: 5,
      departureCity: "Moscow",
      departureDate: "2-24-2018",
      departureAirport: "VKO",
      arrivalTime: 185,
      arrivalCity: "Barcelona",
      arrivalDate: "2-24-2018",
      arrivalAirport: "BCN",
      duration: 300
    },
    flightBack: {
      type: "Direct",
      departureTime: 680,
      departureCity: "Barcelona",
      departureDate: "3-3-2018",
      departureAirport: "BCN",
      arrivalTime: 1055,
      arrivalCity: "Moscow",
      arrivalDate: "3-3-2018",
      arrivalAirport: "SVO",
      duration: 255
    }
  }
];
