$(function () {
    var seriesOptions = [],
        seriesCounter = 0,
        names = ['MSFT', 'AAPL', 'GOOG'],
        // create the chart when all data is loaded
        createChart = function () {

            $('#container').highcharts('StockChart', {

                rangeSelector: {
                    selected: 4
                },

                yAxis: {
                    labels: {
                        formatter: function () {
                            return (this.value > 0 ? ' + ' : '') + this.value + '%';
                        }
                    },
                    plotLines: [{
                        value: 0,
                        width: 2,
                        color: 'silver'
                    }]
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

                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                    valueDecimals: 2
                },

                series: seriesOptions
            });
        };

    $.each(names, function (i, name) {

        $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=' + name.toLowerCase() + '-c.json&callback=?',    function (data) {

            seriesOptions[i] = {
                name: name,
                data: data,
                visible: false
              }

            // As we're loading the data asynchronously, we don't know what order it will arrive. So
            // we keep a counter and create the chart when all the data is loaded.
            seriesCounter += 1;

            if (seriesCounter === names.length) {
                createChart();
            }
        });
    });

    $('#clearit').click(function() {
      var chart = $('#container').highcharts();
      var series = chart.series;
       for (i = 0; i < series.length; i++){
         series[i].hide();
       }
     });

    // plot buttons
    $('#aapl').click(function() {
       var chart = $('#container').highcharts();
       var series = chart.series;
       var seriesIndex = 1
       if(series[seriesIndex].visible) {
           series[seriesIndex].hide();
       } else {
           series[seriesIndex].show();
       }
   });

   $('#msft').click(function() {
      var chart = $('#container').highcharts();
      var series = chart.series;
      var seriesIndex = 0
      if(series[seriesIndex].visible) {
          series[seriesIndex].hide();
      } else {
          series[seriesIndex].show();
      }
  });

  $('#goog').click(function() {
     var chart = $('#container').highcharts();
     var series = chart.series;
     var seriesIndex = 2
     if(series[seriesIndex].visible) {
         series[seriesIndex].hide();
     } else {
         series[seriesIndex].show();
     }
   });

 $('#googandmsft').click(function() {
    var chart = $('#container').highcharts();
    var series = chart.series;
    var seriesIndex = [2,0]

    //Show just the group stuff
    for (i = 0; i < seriesIndex.length; i++) {

       if(series[seriesIndex[i]].visible) {
           series[seriesIndex[i]].hide();
       } else {
           series[seriesIndex[i]].show();
       }
     }

  });

});
