console.log('loading');

$(function () {
  Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Financial Data'
    },
    subtitle: {
      text: 'Revenue by Year'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Revenue in millions'
      },
      labels: {
        formatter: function() {
          return '$' + this.value + 'm';
        }
      },
      gridLineWidth: 0.5,
      maxPadding: 0.1
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '${point.y:.1f}m'
        },
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:13px">{series.name}</span><br>',
      pointFormat: '<span style="font-size:13px" "color:{point.color}">{point.namae}</span>: <b>${point.y:.1f}m</b><br />'
    },
    series: [{
      
    }]
  })
})
