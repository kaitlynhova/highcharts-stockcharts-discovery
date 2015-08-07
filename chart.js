$(function() {
    var chart = new Highcharts.StockChart({

        chart: {
            renderTo: 'container'
        },

        rangeSelector: {
            selected: 4,
            inputEnabled: false,
            buttonTheme: {
                visibility: 'hidden'
            },
            labelStyle: {
                visibility: 'hidden'
            }
        },
        plotOptions:{
             series:{
                 allowPointSelect: true,
                 marker: {
                     states: {
                         select: {
                             fillColor: 'black',
                             lineWidth: 0
                         }
                     }
                 },
                 point: {
                     events:{
                         click: function () {
                           document.getElementById("dat-data").innerHTML = 'Category: ' + this.category + ', value: ' + this.y;
                           alert(this.y + '+' + (this.x +1) + this.name );
                         }
                     }
                 }
             }
         },
        series: [{
            name: 'USD to EUR',
            id: 'dataseries',
            data: usdeur,
            events: {
                click: function(event) {

                    this.chart.series[1].addPoint({
                        x: event.point.x,
                        title: ''
                    });
                }

            }},
        {
            type: 'flags',
            data: [],
            onSeries: 'dataseries',
            shape: 'circlepin',
            shape: 'url(kitty.png)',
            width: 12,
            }]
    });
    $('#clearit').click(function() {
      var chart = $('#container').highcharts();
      var series = chart.series;
       for (i = 0; i < series.length; i++){
         series[i].hide();
       }
     });
});
