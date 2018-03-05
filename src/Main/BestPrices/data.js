import rusflag from "../../res/images/flag-russia.png";
import armflag from "../../res/images/flag-armenia.png";
import molflag from "../../res/images/flag-moldavia.png";

export const bestPricesData = [
  {
    flag: rusflag,
    city: "Simferopol_Crimea",
    country: "Russia",
    fromCities: [
      {
        name: "From_Moscow",
        price: 4813
      },
      {
        name: "From_St_Petersburg",
        price: 7857
      },
      {
        name: "From_Novosibirsk",
        price: 15127
      },
      {
        name: "From_Ekaterinburg",
        price: 9275
      },
      {
        name: "From_Chelyabinsk",
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
        name: "From_Moscow",
        price: 6758
      },
      {
        name: "From_St_Petersburg",
        price: 9932
      },
      {
        name: "From_Sochi",
        price: 11951
      },
      {
        name: "From_Krasnodar",
        price: 11741
      },
      {
        name: "From_Rostov_on_Don",
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
        name: "From_Moscow",
        price: 8319
      },
      {
        name: "From_St_Petersburg",
        price: 10800
      },
      {
        name: "From_Krasnodar",
        price: 12098
      },
      {
        name: "From_Surgut",
        price: 16277
      },
      {
        name: "From_New_Urengoy",
        price: 15987
      }
    ]
  }
];
