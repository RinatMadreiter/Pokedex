

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
    animations: {
      y: {
        duration: 1000,
        delay: 450
      },
      x: {
        duration: 1000,
        delay: 450
      }
    },
    //von hier von mir hinzugefügt zum rumspielen
    //   radius: '6'
  }]
};

const config = {
  type: 'radar',
  data: data,
  options: {
/*     scales: {
      r: {
          suggestedMin: 0,
          suggestedMax: 250
      }
  }, */
    elements: {
      line: {
        borderWidth: 3
      },
      point: {
        radius: 4
      }
    }
  },
};






