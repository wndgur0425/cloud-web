export default function(elementName) {
    var container = document.getElementById(elementName);
    var data = {
      categories: ['2012', '2014', '2016', '2018', '2018'],
      series: [{
        name: '비율',
        data: [2000, 4000, 6000, 8000, 10000]
      }]
    };
    tui.chart.barChart(container, data);
};