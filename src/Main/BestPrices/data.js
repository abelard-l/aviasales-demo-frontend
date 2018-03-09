import rusflag from "../../res/images/flag-russia.png";
import armflag from "../../res/images/flag-armenia.png";
import molflag from "../../res/images/flag-moldavia.png";

export const bestPricesData = [
  {
    flag: rusflag,
    city: "simferopol_crimea",
    country: "russia",
    cities: [
      {
        name: "from_moscow",
        price: 4813
      },
      {
        name: "from_st_petersburg",
        price: 7857
      },
      {
        name: "from_novosibirsk",
        price: 15127
      },
      {
        name: "from_ekaterinburg",
        price: 9275
      },
      {
        name: "from_chelyabinsk",
        price: 9148
      }
    ]
  },
  {
    flag: armflag,
    city: "yerevan",
    country: "armenia",
    cities: [
      {
        name: "from_moscow",
        price: 6758
      },
      {
        name: "from_st_petersburg",
        price: 9932
      },
      {
        name: "from_sochi",
        price: 11951
      },
      {
        name: "from_krasnodar",
        price: 11741
      },
      {
        name: "from_rostov_on_don",
        price: 11956
      }
    ]
  },
  {
    flag: molflag,
    city: "kishinev",
    country: "moldova",
    cities: [
      {
        name: "from_moscow",
        price: 8319
      },
      {
        name: "from_st_petersburg",
        price: 10800
      },
      {
        name: "from_krasnodar",
        price: 12098
      },
      {
        name: "from_surgut",
        price: 16277
      },
      {
        name: "from_new_urengoy",
        price: 15987
      }
    ]
  }
];
