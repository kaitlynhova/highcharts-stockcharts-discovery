$(function() {
    var series = [],
    i = 0;

    for(i; i < list.length ;i++){
        series.push(
        {
           name: list[i],
           id: 'dataseries',
           visible: false,
           data: datalist[i],
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
         title: [i],
         style: { // text style
                 color: 'white'
             },
         onSeries: 'dataseries',
         shape: 'circlepin',
         shape: 'url(pointer.png)',
         width: 12,
       }
      );
    }

    var chart = new Highcharts.StockChart({

        chart: {
            renderTo: 'container'
        },

        credits: {
            enabled: false
        },

        tooltip: {
            shared: true,
            crosshairs: true
        },

        rangeSelector: {
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
                         }
                     }
                 }
             }
         },
        series: series
    });

  // CLEAR GRAPH BUTTON
  $('#clearit').click(function() {
    $('#checkboxes').find('input[type=checkbox]:checked').trigger( "click" );
   });
 // CHECKBOX CLICK LOOP
 $('#checkboxes input').click(function(){
   var chart = $('#container').highcharts();
   var series = chart.series;
   var seriesIndex = this.value;
   if(series[seriesIndex].visible) {
     series[seriesIndex].hide();
   } else {
     series[seriesIndex].show();
   }
 });

});
