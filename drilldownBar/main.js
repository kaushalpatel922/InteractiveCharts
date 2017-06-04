console.log('loading');

$(function () {
  Highcharts.chart('container', {
    chart: {
      type: 'column',
      zoomType: 'xy'
    },
    title: {
      text: 'Oracle Corporation Financial Data'
    },
    subtitle: {
      text: 'Revenue by Quarter'
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
        pointPadding: 0.2,
        dataLabels: {
          enabled: true,
          format: '${point.y:.0f}m'
        },
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:13px">{series.name}</span>',
      pointFormat: '<span style="font-size:13px" "color:{point.color}">{point.name}</span>: <b>${point.y:.0f}m</b><br />'
    },
    series: [{
      name: 'Financials',
      colorByPoint: true,
      data: [{
        name: 'Q317',
        y: 9205,
        drilldown: 'Q317'
      }, {
        name: 'Q217',
        y: 9035,
        drilldown: 'Q217'
      }, {
        name: 'Q117',
        y: 8595,
        drilldown: 'Q117'
      }, {
        name: 'Q416',
        y: 10594,
        drilldown: 'Q416'
      }, {
        name: 'Q316',
        y: 9012,
        drilldown: 'Q316'
      }, {
        name: 'Q216',
        y: 8993,
        drilldown: 'Q216'
      }, {
        name: 'Q116',
        y: 8448,
        drilldown: 'Q116'
      }, {
        name: 'Q415',
        y: 10706,
        drilldown: 'Q415'
      }]
    }],
    drilldown: {
      series: [{
        name: 'Q317',
        id: 'Q317',
        data: [{
          name: 'SaaS & PaaS',
          y: 1011,
          drilldown: 'SaaSPaaSdata'
        }, {
          name: 'Infrastructure',
          y: 178,
          drilldown: 'Infrastructuredata'
        }, {
          name: 'New Software Lic.',
          y: 1414,
          drilldown: 'NewSoftwaredata'
        }, {
          name: 'Software lic. updates & support',
          y: 4762,
          drilldown: 'licupdatesupportdata'
        }, {
          name: 'HW Products',
          y: 520,
          drilldown: 'HWProductsdata'
        }, {
          name: 'HW Support',
          y: 508,
          drilldown: 'HWSupportdata'
        }, {
          name: 'Service',
          y: 812,
          drilldown: 'ServiceData'
        }]
      }, {
        name: 'SaaS & PaaS',
        id: 'SaaSPaaSdata',
        data: [
          ['Q317', 1011],
          ['Q217', 878],
          ['Q117', 798],
          ['Q416', 690],
          ['Q316', 583],
          ['Q216', 484],
          ['Q116', 451],
          ['Q415', 416]
        ]
      }, {
        name: 'Infrastructure',
        id: 'Infrastructuredata',
        data: [
          ['Q317', 178],
          ['Q217', 175],
          ['Q117', 171],
          ['Q416', 169],
          ['Q316', 152],
          ['Q216', 165],
          ['Q116', 160],
          ['Q415', 160]
        ]
      }, {
        name: 'New Software Licenses',
        id: 'NewSoftwaredata',
        data: [
          ['Q317', 1414],
          ['Q217', 1347],
          ['Q117', 1030],
          ['Q416', 2766],
          ['Q316', 1680],
          ['Q216', 1677],
          ['Q116', 1151],
          ['Q415', 3138]
        ]
      },{
          name: 'Lic. Updates & Support',
          id: 'licupdatesupportdata',
          data: [
            ['Q317', 4762],
            ['Q217', 4777],
            ['Q117', 4792],
            ['Q416', 4814],
            ['Q316', 4669],
            ['Q216', 4683],
            ['Q116', 4696],
            ['Q415', 4686]
          ]
      },{
          name: 'HW Products',
          id: 'HWProductsdata',
          data: [
            ['Q317', 520],
            ['Q217', 497],
            ['Q117', 462],
            ['Q416', 725],
            ['Q316', 604],
            ['Q216', 573],
            ['Q116', 570],
            ['Q415', 818]
          ]
      },{
          name: 'HW Support',
          id: 'HWSupportdata',
          data: [
            ['Q317', 508],
            ['Q217', 517],
            ['Q117', 534],
            ['Q416', 558],
            ['Q316', 531],
            ['Q216', 550],
            ['Q116', 558],
            ['Q415', 589]
          ]
      },{
          name: 'ServiceData',
          id: 'ServiceData',
          data: [
            ['Q317', 812],
            ['Q217', 844],
            ['Q117', 808],
            ['Q416', 872],
            ['Q316', 793],
            ['Q216', 861],
            ['Q116', 862],
            ['Q415', 809]
          ]
      },{
        name: 'Q217',
        id: 'Q217',
        data: [{
            name: 'SaaS & PaaS',
            y: 878,
            drilldown: 'SaaSPaaSdata'
          }, {
            name: 'Infrastructure',
            y: 175,
            drilldown: 'Infrastructuredata'
          }, {
            name: 'New Software Lic.',
            y: 1347,
            drilldown: 'NewSoftwaredata'
          }, {
            name: 'Software lic. updates & support',
            y: 4777,
            drilldown: 'licupdatesupportdata'
          }, {
            name: 'HW Products',
            y: 497,
            drilldown: 'HWProductsdata'
          }, {
            name: 'HW Support',
            y: 517,
            drilldown: 'HWSupportdata'
          }, {
            name: 'Service',
            y: 844,
            drilldown: 'ServiceData'
          }]
        }, {
          name: 'Q117',
          id: 'Q117',
          data: [{
              name: 'SaaS & PaaS',
              y: 798,
              drilldown: 'SaaSPaaSdata'
            }, {
              name: 'Infrastructure',
              y: 171,
              drilldown: 'Infrastructuredata'
            }, {
              name: 'New Software Lic.',
              y: 1030,
              drilldown: 'NewSoftwaredata'
            }, {
              name: 'Software lic. updates & support',
              y: 4792,
              drilldown: 'licupdatesupportdata'
            }, {
              name: 'HW Products',
              y: 462,
              drilldown: 'HWProductsdata'
            }, {
              name: 'HW Support',
              y: 534,
              drilldown: 'HWSupportdata'
            }, {
              name: 'Service',
              y: 808,
              drilldown: 'ServiceData'
            }]
        },{
          name: 'Q416',
          id: 'Q416',
          data: [{
              name: 'SaaS & PaaS',
              y: 690,
              drilldown: 'SaaSPaaSdata'
            }, {
              name: 'Infrastructure',
              y: 169,
              drilldown: 'Infrastructuredata'
            }, {
              name: 'New Software Lic.',
              y: 2766,
              drilldown: 'NewSoftwaredata'
            }, {
              name: 'Software lic. updates & support',
              y: 4814,
              drilldown: 'licupdatesupportdata'
            }, {
              name: 'HW Products',
              y: 725,
              drilldown: 'HWProductsdata'
            }, {
              name: 'HW Support',
              y: 558,
              drilldown: 'HWSupportdata'
            }, {
              name: 'Service',
              y: 872,
              drilldown: 'ServiceData'
            }]
          }, {
          name: 'Q316',
          id: 'Q316',
          data: [{
              name: 'SaaS & PaaS',
              y: 583,
              drilldown: 'SaaSPaaSdata'
            }, {
              name: 'Infrastructure',
              y: 152,
              drilldown: 'Infrastructuredata'
            }, {
              name: 'New Software Lic.',
              y: 1680,
              drilldown: 'NewSoftwaredata'
            }, {
              name: 'Software lic. updates & support',
              y: 4669,
              drilldown: 'licupdatesupportdata'
            }, {
              name: 'HW Products',
              y: 604,
              drilldown: 'HWProductsdata'
            }, {
              name: 'HW Support',
              y: 531,
              drilldown: 'HWSupportdata'
            }, {
              name: 'Service',
              y: 793,
              drilldown: 'ServiceData'
            }]
          },


          {
            name: 'Q216',
            id: 'Q216',
            data: [{
              name: 'SaaS & PaaS',
              y: 484,
              drilldown: 'SaaSPaaSdata'
            }, {
              name: 'Infrastructure',
              y: 165,
              drilldown: 'Infrastructuredata'
            }, {
              name: 'New Software Lic.',
              y: 1677,
              drilldown: 'NewSoftwaredata'
            }, {
              name: 'Software lic. updates & support',
              y: 4683,
              drilldown: 'licupdatesupportdata'
            }, {
              name: 'HW Products',
              y: 573,
              drilldown: 'HWProductsdata'
            }, {
              name: 'HW Support',
              y: 550,
              drilldown: 'HWSupportdata'
            }, {
              name: 'Service',
              y: 861,
              drilldown: 'ServiceData'
            }]
          },{
            name: 'Q116',
            id: 'Q116',
            data: [{
              name: 'SaaS & PaaS',
              y: 451,
              drilldown: 'SaaSPaaSdata'
            }, {
              name: 'Infrastructure',
              y: 160,
              drilldown: 'Infrastructuredata'
            }, {
              name: 'New Software Lic.',
              y: 1151,
              drilldown: 'NewSoftwaredata'
            }, {
              name: 'Software lic. updates & support',
              y: 4696,
              drilldown: 'licupdatesupportdata'
            }, {
              name: 'HW Products',
              y: 570,
              drilldown: 'HWProductsdata'
            }, {
              name: 'HW Support',
              y: 558,
              drilldown: 'HWSupportdata'
            }, {
              name: 'Service',
              y: 862,
              drilldown: 'ServiceData'
            }]
          },{
            name: 'Q415',
            id: 'Q415',
            data: [{
              name: 'SaaS & PaaS',
              y: 416,
              drilldown: 'SaaSPaaSdata'
            }, {
              name: 'Infrastructure',
              y: 160,
              drilldown: 'Infrastructuredata'
            }, {
              name: 'New Software Lic.',
              y: 3138,
              drilldown: 'NewSoftwaredata'
            }, {
              name: 'Software lic. updates & support',
              y: 4686,
              drilldown: 'licupdatesupportdata'
            }, {
              name: 'HW Products',
              y: 818,
              drilldown: 'HWProductsdata'
            }, {
              name: 'HW Support',
              y: 589,
              drilldown: 'HWSupportdata'
            }, {
              name: 'Service',
              y: 809,
              drilldown: 'ServiceData'
            }]
          }
      ]
    }
  })
})
