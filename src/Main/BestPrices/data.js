import rusflag from '../../res/images/flag-russia.png';
import armflag from '../../res/images/flag-armenia.png';
import molflag from '../../res/images/flag-moldavia.png';

const bestPricesData = [
  {
    flag: rusflag,
    city: 'simferopol_crimea',
    country: 'russia',
    cities: [
      {
        id: 1,
        name: 'from_moscow',
        price: 4813,
      },
      {
        id: 2,
        name: 'from_st_petersburg',
        price: 7857,
      },
      {
        id: 3,
        name: 'from_novosibirsk',
        price: 15127,
      },
      {
        id: 4,
        name: 'from_ekaterinburg',
        price: 9275,
      },
      {
        id: 5,
        name: 'from_chelyabinsk',
        price: 9148,
      },
    ],
  },
  {
    flag: armflag,
    city: 'yerevan',
    country: 'armenia',
    cities: [
      {
        id: 1,
        name: 'from_moscow',
        price: 6758,
      },
      {
        id: 2,
        name: 'from_st_petersburg',
        price: 9932,
      },
      {
        id: 3,
        name: 'from_sochi',
        price: 11951,
      },
      {
        id: 4,
        name: 'from_krasnodar',
        price: 11741,
      },
      {
        id: 5,
        name: 'from_rostov_on_don',
        price: 11956,
      },
    ],
  },
  {
    flag: molflag,
    city: 'kishinev',
    country: 'moldova',
    cities: [
      {
        id: 1,
        name: 'from_moscow',
        price: 8319,
      },
      {
        id: 2,
        name: 'from_st_petersburg',
        price: 10800,
      },
      {
        id: 3,
        name: 'from_krasnodar',
        price: 12098,
      },
      {
        id: 4,
        name: 'from_surgut',
        price: 16277,
      },
      {
        id: 5,
        name: 'from_new_urengoy',
        price: 15987,
      },
    ],
  },
];

export default bestPricesData;
