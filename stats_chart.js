/**
 * this script creates the dataset and the configuration of the animated radar-chart used for pokemons base-stats
 */


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
    font: '20',
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


/**
 * configuration of chart
 */
const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      },
      point: {
        radius: 4
      },
      font: {
        size: 20
      }
    },
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 15
          }
        }
      }
    },
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 12
          }
        },
        grid: {
          color: 'lightgrey'
        },
        angleLines: {
          color: 'lightgrey'
        }
      }
    }
  }
};






