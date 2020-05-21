import {MyObj} from './app.model';

export let OBJ: Array<MyObj> = [
  {
      name: 'Object 1',
      band : '5.8 GHz FCC Integrated',
      series : 'Radwin 2000 C',
      channelBandwidth : 5,
      available: true,
      reviews: [{
            stars: 5,
            body: "I love it!",
            author: "something@something.com",
            createdOn: 1397490980837
          }, {
            stars: 1,
            body: "This sucks.",
            author: "something@something.com",
            createdOn: 1397490980837
          }]
  },
  {
      name: 'Object 2',
      band : '5.4 GHz FCC Integrated',
      series : 'Radwin 2000 D',
      channelBandwidth : 10,
      available: true,
      reviews: [{
            stars: 5,
            body: "I love it!",
            author: "something@something.com",
            createdOn: 1397490980837
          }, {
            stars: 1,
            body: "This sucks.",
            author: "something@something.com",
            createdOn: 1397490980837
          }]
  },
  {
      name: 'Object 3',
      band : '3.6 GHz FCC Integrated',
      series : 'Radwin 2000 C+',
      channelBandwidth : 20,
      available: true,
      reviews:[]
  },
  {
      name: 'Object 4',
      band : '4.9 GHz FCC Integrated',
      series : 'Radwin 2000 L',
      channelBandwidth : 40,
      available: true,
      reviews:[]
  }
];
