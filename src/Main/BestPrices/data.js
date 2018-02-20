import rusflag from "../../res/images/flag-russia.png";
import armflag from "../../res/images/flag-armenia.png";
import molflag from "../../res/images/flag-moldavia.png";

export const bestPricesData = [
  {
    flag: rusflag,
    city: "Симферополь (Крым)",
    country: "Россия",
    fromCities: [
      {
        name: "Из Москвы",
        price: 4813
      },
      {
        name: "Из Санкт-Петербурга",
        price: 7857
      },
      {
        name: "Из Новосибирска",
        price: 15127
      },
      {
        name: "Из Екатеринбурга",
        price: 9275
      },
      {
        name: "Из Челябинска",
        price: 9148
      }
    ]
  },
  {
    flag: armflag,
    city: "Ереван",
    country: "Армения",
    fromCities: [
      {
        name: "Из Москвы",
        price: 6758
      },
      {
        name: "Из Санкт-Петербурга",
        price: 9932
      },
      {
        name: "Из Сочи",
        price: 11951
      },
      {
        name: "Из Краснодара",
        price: 11741
      },
      {
        name: "Из Ростова-на-Дону",
        price: 11956
      }
    ]
  },
  {
    flag: molflag,
    city: "Кишинёв",
    country: "Молдавия",
    fromCities: [
      {
        name: "Из Москвы",
        price: 8319
      },
      {
        name: "Из Санкт-Петербурга",
        price: 10800
      },
      {
        name: "Из Краснодара",
        price: 12098
      },
      {
        name: "Из Сургута",
        price: 16277
      },
      {
        name: "Из Нового Уренгоя",
        price: 15987
      }
    ]
  }
];
