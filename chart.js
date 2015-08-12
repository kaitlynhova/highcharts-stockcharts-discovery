$(function() {
    var series = [],
    i = 0;

    for(i; i < list.length ;i++){
      if (i == 2){
        y = 1;
      }
      else {
        y = 0;
      };
        series.push(
        {
           name: list[i],
           yAxis: 0,
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

    $('#container').highcharts('StockChart',{

        xAxis:{
        },
        yAxis: [{
            height: 200,
            lineWidth: 2,
            offset:0
        }, {
            height: 200,
            top: 300,
            lineWidth: 2,

            offset:0
        }],
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
          area: {
            stacking: 'normal'
        },
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
