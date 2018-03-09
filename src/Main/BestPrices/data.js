import rusflag from '../../res/images/flag-russia.png';
import armflag from '../../res/images/flag-armenia.png';
import molflag from '../../res/images/flag-moldavia.png';

const bestPricesData = [
  {
    flag: rusflag,
    city: 'SimferopolCrimea',
    country: 'Russia',
    cities: [
      {
        name: 'FromMoscow',
        price: 4813,
      },
      {
        name: 'FromStPetersburg',
        price: 7857,
      },
      {
        name: 'FromNovosibirsk',
        price: 15127,
      },
      {
        name: 'FromEkaterinburg',
        price: 9275,
      },
      {
        name: 'FromChelyabinsk',
        price: 9148,
      },
    ],
  },
  {
    flag: armflag,
    city: 'Yerevan',
    country: 'Armenia',
    cities: [
      {
        name: 'FromMoscow',
        price: 6758,
      },
      {
        name: 'FromStPetersburg',
        price: 9932,
      },
      {
        name: 'FromSochi',
        price: 11951,
      },
      {
        name: 'FromKrasnodar',
        price: 11741,
      },
      {
        name: 'FromRostovOnDon',
        price: 11956,
      },
    ],
  },
  {
    flag: molflag,
    city: 'Kishinev',
    country: 'Moldova',
    cities: [
      {
        name: 'FromMoscow',
        price: 8319,
      },
      {
        name: 'FromStPetersburg',
        price: 10800,
      },
      {
        name: 'FromKrasnodar',
        price: 12098,
      },
      {
        name: 'FromSurgut',
        price: 16277,
      },
      {
        name: 'FromNewUrengoy',
        price: 15987,
      },
    ],
  },
];

export default bestPricesData;
