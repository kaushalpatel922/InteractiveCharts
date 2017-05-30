console.log('hide a year');

$(function () {
var data = [
  ['x', '2012', '2013', '2014', '2015', '2016', '2017'],
  ['Year vs Amount', 350, 390, 220, 450, 510, 700]
];

var chart = c3.generate({
  "bindto":"#chart",
  "data": {
    tye: "line",
    x: 'x',
    columns: data
  },
  "axis": {
    "x": {
      "type":"year"
    }
  }
});

//to hide the bad year
function hide(year) {
  var index = data[0].indexOf(year);
  var newData;

  if(index > -1) {
    newData = data.concat();
    newData.forEach(function(v) {
      v.splice(index,1)
    });

    chart.load({
      columns: newData,
      unload: true
    })
  }
}
});
