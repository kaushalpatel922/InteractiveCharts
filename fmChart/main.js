console.log('showing a chart and select chart type');

var chart = c3.generate({
  padding: {
        top: 10,
        right: 30,
        bottom: 10,
        left: 30,
    },
    size: {
      height: 350,
      width: 980
    },
    data: {
        x: 'x',
       xFormat: '%Y', // 'xFormat' can be used as custom format of 'x'
        columns: [
            // ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
            ['x', '2009','2010','2011','2012','2013', '2014', '2015', '2016', '2017', '2018'],
          //  ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['Foreclosure alternatives', 20, 30, 80, 85, 88, 85, 76, 62, 46, 39],
            ['Home Rentention solutions', 70, 90, 440, 240, 200, 180, 170, 150, 125, 112],
            ['Refi Plus refinancings', 180, 240, 650, 720, 1040, 940, 350, 200, 160, 145]
        ],
        regions: {
          'Foreclosure alternatives': [{'start': '2016'}],
          'Home Rentention solutions': [{'start': '2016'}],
          'Refi Plus refinancings': [{'start': '2016'}]
        }
    },
    grid: {
      x: {
        lines: [
          {value: '2017', text: 'Forecast for FY17', position: 'middle'},
          {value: '2018', text: 'Forecast for FY18', position: 'middle'}

        ]
      }
    },
    color: {
      pattern: ['#C0540F', '#007697', 'black']
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    },
});
//
// setTimeout(function () {
//     chart.load({
//         columns: [
//             ['data3', 400, 500, 450, 700, 600, 500]
//         ]
//     });
// }, 1000);
