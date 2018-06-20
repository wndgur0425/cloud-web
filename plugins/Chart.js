export default function (elementName) {
    var container = document.getElementById(elementName);
    var data = {
      categories: ['2013', '2014', '2015', '2016', '2017'],
      series: [{
          name: '그림 수요량(부)',
          data: [60, 12, 20, 80, 70]
        }]
    };
      tui.chart.barChart(container, data);
};