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
      departureTime: "00:05",
      departureCity: "Moscow",
      departureDate: "2-24-2018",
      departureAirport: "VKO",
      arrivalTime: "03:05",
      arrivalCity: "Barcelona",
      arrivalDate: "2-24-2018",
      arrivalAirport: "BCN",
      duration: { hour: 5 }
    },
    flightBack: {
      type: "Direct",
      departureTime: "10:35",
      departureCity: "Barcelona",
      departureDate: "3-3-2018",
      departureAirport: "BCN",
      arrivalTime: "17:10",
      arrivalCity: "Moscow",
      arrivalDate: "3-3-2018",
      arrivalAirport: "SVO",
      duration: { hour: 4, minute: 35 }
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
      departureTime: "00:15",
      departureCity: "Moscow",
      departureDate: "2-24-2018",
      departureAirport: "VKO",
      arrivalTime: "03:10",
      arrivalCity: "Barcelona",
      arrivalDate: "2-24-2018",
      arrivalAirport: "BCN",
      duration: { hour: 4, minute: 55 }
    },
    flightBack: {
      type: "CDG",
      departureTime: "10:45",
      departureCity: "Barcelona",
      departureDate: "3-3-2018",
      departureAirport: "BCN",
      arrivalTime: "17:15 ",
      arrivalCity: "Moscow",
      arrivalDate: "3-3-2018",
      arrivalAirport: "SVO",
      duration: { hour: 4, minute: 30 }
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
      departureTime: "00:15",
      departureCity: "Moscow",
      departureDate: "2-24-2018",
      departureAirport: "VKO",
      arrivalTime: "03:10",
      arrivalCity: "Barcelona",
      arrivalDate: "2-24-2018",
      arrivalAirport: "BCN",
      duration: { hour: 4, minute: 55 }
    },
    flightBack: {
      type: "Direct",
      departureTime: "10:45",
      departureCity: "Barcelona",
      departureDate: "3-3-2018",
      departureAirport: "BCN",
      arrivalTime: "17:15",
      arrivalCity: "Moscow",
      arrivalDate: "3-3-2018",
      arrivalAirport: "SVO",
      duration: { hour: 4, minute: 30 }
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
      departureTime: "07:00",
      departureCity: "Moscow",
      departureDate: "2-24-2018",
      departureAirport: "VKO",
      arrivalTime: "09:30",
      arrivalCity: "Barcelona",
      arrivalDate: "2-24-2018",
      arrivalAirport: "BCN",
      duration: { hour: 4, minute: 30 }
    },
    flightBack: {
      type: "Direct",
      departureTime: "11:00",
      departureCity: "Barcelona",
      departureDate: "3-3-2018",
      departureAirport: "BCN",
      arrivalTime: "17:10",
      arrivalCity: "Moscow",
      arrivalDate: "3-3-2018",
      arrivalAirport: "SVO",
      duration: { hour: 4, minute: 10 }
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
      departureTime: "00:05",
      departureCity: "Moscow",
      departureDate: "2-24-2018",
      departureAirport: "VKO",
      arrivalTime: "03:05",
      arrivalCity: "Barcelona",
      arrivalDate: "2-24-2018",
      arrivalAirport: "BCN",
      duration: { hour: 5 }
    },
    flightBack: {
      type: "Direct",
      departureTime: "11:00",
      departureCity: "Barcelona",
      departureDate: "3-3-2018",
      departureAirport: "BCN",
      arrivalTime: "17:10",
      arrivalCity: "Moscow",
      arrivalDate: "3-3-2018",
      arrivalAirport: "SVO",
      duration: { hour: 4, minute: 10 }
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
      departureTime: "07:30",
      departureCity: "Moscow",
      departureDate: "2-24-2018",
      departureAirport: "VKO",
      arrivalTime: "09:50",
      arrivalCity: "Barcelona",
      arrivalDate: "2-24-2018",
      arrivalAirport: "BCN",
      duration: { hour: 4, minute: 20 }
    },
    flightBack: {
      type: "Direct",
      departureTime: "11:20",
      departureCity: "Barcelona",
      departureDate: "3-3-2018",
      departureAirport: "BCN",
      arrivalTime: "17:35",
      arrivalCity: "Moscow",
      arrivalDate: "3-3-2018",
      arrivalAirport: "SVO",
      duration: { hour: 4, minute: 15 }
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
      departureTime: "00:05",
      departureCity: "Moscow",
      departureDate: "2-24-2018",
      departureAirport: "VKO",
      arrivalTime: "03:05",
      arrivalCity: "Barcelona",
      arrivalDate: "2-24-2018",
      arrivalAirport: "BCN",
      duration: { hour: 5 }
    },
    flightBack: {
      type: "Direct",
      departureTime: "11:20",
      departureCity: "Barcelona",
      departureDate: "3-3-2018",
      departureAirport: "BCN",
      arrivalTime: "17:35",
      arrivalCity: "Moscow",
      arrivalDate: "3-3-2018",
      arrivalAirport: "SVO",
      duration: { hour: 4, minute: 15 }
    }
  }
];
