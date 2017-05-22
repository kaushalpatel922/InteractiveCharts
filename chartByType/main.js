console.log('showing a chart and select chart type');

//Defining the data
var data = [
  ['Product A', 'Product B', 'Product C'],
  [90, 120, 200],
  [70, 185, 162],
  [95, 150, 220],
  [105, 180, 230],
  [120, 202, 265]
];

$(function() {

  // Initial Chart
  var chart = c3.generate({
    data: {
      rows: data,
      type: 'bar'
    }
  });

  //Redraw chart depending on which option is selected.
  $("#chartType").change(function(evt) {
    var chartSelection = $("#chartType").val();
    var chart = c3.generate({
      data: {
        rows: data,
        type: chartSelection
      },
      donut: {
        title: 'Product Chart'
      }
    });
  });

})
