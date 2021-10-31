import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// @TODO Terminar a implementação com o highchart e colocar drilldown quando estiver no mobile, no desktop será usada a versão completa do grafico.
const options = {
  chart: {
    type: 'column',
  },

  xAxis: {
    type: 'category',
  },

  series: [
    {
      colorByPoint: true,
      data: [
        {
          name: 'Chrome',
          y: 62.74,
          drilldown: 'Chrome',
        },
        {
          name: 'Firefox',
          y: 10.57,
          drilldown: 'Firefox',
        },
      ],
    },
  ],
  drilldown: {
    series: [
      {
        name: 'Chrome',
        id: 'Chrome',
        data: [
          ['v65.0', 0.1],
          ['v64.0', 1.3],
          ['v63.0', 53.02],
        ],
      },
      {
        name: 'Firefox',
        id: 'Firefox',
        data: [
          ['v58.0', 1.02],
          ['v57.0', 7.36],
          ['v56.0', 0.35],
          ['v55.0', 0.11],
        ],
      },
    ],
  },
};

const RatingChart: React.FC = (props: HighchartsReact.Props) => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} {...props} />
    </div>
  );
};

export default RatingChart;
