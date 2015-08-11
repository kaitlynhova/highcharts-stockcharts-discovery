$(function() {
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
                         }
                     }
                 }
             }
         },
        series: [{
            name: 'Roll',
            id: 'dataseries',
            visible: false,
            data: roll,
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
            title: ' #',
            style: { // text style
                    color: 'white'
                },
            onSeries: 'dataseries',
            shape: 'circlepin',
            shape: 'url(pointer.png)',
            width: 12,
          },
          {
              name: 'Desiredroll',
              id: 'dataseries',
              visible: false,
              data: desiredroll,
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
              title: ' #',
              style: { // text style
                      color: 'white'
                  },
              onSeries: 'dataseries',
              shape: 'circlepin',
              shape: 'url(pointer.png)',
              width: 12,
            },
            {
                name: 'Pitch',
                id: 'dataseries',
                visible: false,
                data: pitch,
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
                title: ' #',
                style: { // text style
                        color: 'white'
                    },
                onSeries: 'dataseries',
                shape: 'circlepin',
                shape: 'url(pointer.png)',
                width: 12,
              },
              {
                  name: 'Desiredpitch',
                  id: 'dataseries',
                  visible: false,
                  data: desiredpitch,
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
                  title: ' #',
                  style: { // text style
                          color: 'white'
                      },
                  onSeries: 'dataseries',
                  shape: 'circlepin',
                  shape: 'url(pointer.png)',
                  width: 12,
                },
              ]
    });
    $('#clearit').click(function() {
      $('#checkboxes').find('input[type=checkbox]:checked').trigger( "click" );
     });

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
