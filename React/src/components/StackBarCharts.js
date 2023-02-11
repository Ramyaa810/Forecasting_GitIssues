import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Refer the high charts "https://www.highcharts.com/demo/bar-basic" for more information

// Data retrieved from: https://www.uefa.com/uefachampionsleague/history/
// Highcharts.chart('container', {
//   chart: {
//       type: 'bar'
//   },
//   title: {
//       text: 'Created and closed'
//   },
//   xAxis: {
//       categories: categories
//   },
//   yAxis: {
//       min: 0,
//       title: {
//           text: 'Issues'
//       }
//   },
//   legend: {
//       reversed: true
//   },
//   plotOptions: {
//       series: {
//           stacking: 'normal'
//       }
//   },
//   series: [{
//       name: 'Created',
//       data: props.data
//   }, {
//       name: 'Closed',
//       data: props.data1
//   },]
// });


const StackedBarCharts = (props) => {
  const config = {

    chart: {
      type: 'bar'
  },
  title: {
      text: props.title
  },
  xAxis: {

    // min: 0,
    // title: {
    //     text: 'Issues'
    // }

    type: "category",
    labels: {
      rotation: -45,
      style: {
        fontSize: "13px",
        fontFamily: "Verdana, sans-serif",
      },
    },
  },
  yAxis: {

    // type: "category",
    // labels: {
    //   rotation: -45,
    //   style: {
    //     fontSize: "13px",
    //     fontFamily: "Verdana, sans-serif",
    //   },
    // },
      min: 0,
      title: {
          text: 'Issues'
      }
  },
  legend: {
      reversed: true
  },
  plotOptions: {
      series: {
          stacking: 'normal'
      }
  },
  series: [{
      name: 'Created',
      data: props.data
  }, {
      name: 'Closed',
      data: props.data1
  },]
    // chart: {
    //   type: "bar",
    // },
    // title: {
    //   text: props.title,
    // },
    // xAxis: {
    //   type: "category",
    //   labels: {
    //     rotation: -45,
    //     style: {
    //       fontSize: "13px",
    //       fontFamily: "Verdana, sans-serif",
    //     },
    //   },
    // },
    // yAxis: {
    //   min: 0,
    //   title: {
    //     text: "Issues",
    //   },
    // },
    // legend: {
    //   enabled: false,
    // },
    // tooltip: {
    //   pointFormat: "Issues : <b>{point.y} </b>",
    // },
    // plotOptions: {
    //   series: {
    //       stacking: 'normal'
    //   }
    // },
    // series: [
    //   {   
    //     [{
    //       name: 'Created',
    //     data: props.data,
    //   }, {
    //       name: 'Closed',
    //       data: props.data1,
    //   },]    
    //     name: props.title,
    //     data: props.data,
    //     dataLabels: {
    //       enabled: true,
    //       rotation: 0,
    //       color: "#FFFFFF",
    //       align: "center",
    //       format: "{point.y}", // one decimal
    //       y: 10, // 10 pixels down from the top
    //       style: {
    //         fontSize: "13px",
    //         fontFamily: "Verdana, sans-serif",
    //       },
    //     },
    //   },
    // ],
  };
  return (
    <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={config}
        ></HighchartsReact>
      </div>
  );
};

export default StackedBarCharts;
