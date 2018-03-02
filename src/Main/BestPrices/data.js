import rusflag from "../../res/images/flag-russia.png";
import armflag from "../../res/images/flag-armenia.png";
import molflag from "../../res/images/flag-moldavia.png";

export const bestPricesData = [
  {
    flag: rusflag,
    city: "Simferopol (Crimea)",
    country: "Russia",
    fromCities: [
      {
        name: "From Moscow",
        price: 4813
      },
      {
        name: "From St. Petersburg",
        price: 7857
      },
      {
        name: "From Novosibirsk",
        price: 15127
      },
      {
        name: "From Ekaterinburg",
        price: 9275
      },
      {
        name: "From Chelyabinsk",
        price: 9148
      }
    ]
  },
  {
    flag: armflag,
    city: "Yerevan",
    country: "Armenia",
    fromCities: [
      {
        name: "From Moscow",
        price: 6758
      },
      {
        name: "From St. Petersburg",
        price: 9932
      },
      {
        name: "From Sochi",
        price: 11951
      },
      {
        name: "From Krasnodar",
        price: 11741
      },
      {
        name: "From Rostov-on-Don",
        price: 11956
      }
    ]
  },
  {
    flag: molflag,
    city: "Kishinev",
    country: "Moldova",
    fromCities: [
      {
        name: "From Moscow",
        price: 8319
      },
      {
        name: "From St. Petersburg",
        price: 10800
      },
      {
        name: "From Krasnodar",
        price: 12098
      },
      {
        name: "From Surgut",
        price: 16277
      },
      {
        name: "From New Urengoy",
        price: 15987
      }
    ]
  }
];
