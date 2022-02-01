

const data = {
  labels: [
    'HP',
    'Attack',
    'Defense',
    'Special-Attack',
    'Special-Defense',
    'Speed'
  ],
  datasets: [{
    label: 'Base-Stats',
    data: [65, 59, 90, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)',
    //von hier von mir hinzugefügt zum rumspielen
    //   radius: '6'
  }]
};

const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      },
      point: {
        radius: 6
      }
    }
  },
};


/* function renderChart() {
  console.log('renderChartfunction')
  const myChart = new Chart(
    document.getElementById('myChart'),
    config);
} */


/* function destroyOldChart() {
  if (myChart instanceof Chart) {
      myChart.destroy();
      console.log('chart destroyed')
    };
} */

/* if (myChart instanceof Chart) {
  myChart.destroy();
  console.log('chart destroyed')
} */

