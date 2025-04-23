const data = {
  datasets: [{
    label: 'Pubs vs Home Wins (%)',
    data: [
      { x: 174, y: (98/200)*100, label: 'Newcastle' },
      { x: 50, y: (85/200)*100, label: 'Wolves' },
      { x: 33, y: (112/200)*100, label: 'Arsenal' },
      { x: 29, y: (90/200)*100, label: 'Ipswich' },
      { x: 27, y: (110/200)*100, label: 'Chelsea' },
      { x: 25, y: (130/200)*100, label: 'Liverpool' },
      { x: 23, y: (95/200)*100, label: 'Everton' },
      { x: 20, y: (105/200)*100, label: 'Spurs' },
      { x: 14, y: (88/200)*100, label: 'Forest' },
      { x: 12, y: (92/200)*100, label: 'West Ham' },
      { x: 8, y: (98/200)*100, label: 'Villa' },
      { x: 7, y: (85/200)*100, label: 'Bournemouth' },
      { x: 7, y: (90/200)*100, label: 'Palace' },
      { x: 7, y: (100/200)*100, label: 'Leicester' },
      { x: 7, y: (120/200)*100, label: 'Man Utd' },
      { x: 6, y: (95/200)*100, label: 'Brentford' },
      { x: 6, y: (88/200)*100, label: 'Fulham' },
      { x: 4, y: (90/200)*100, label: 'Southampton' },
      { x: 3, y: (85/200)*100, label: 'Brighton' },
      { x: 2, y: (151/200)*100, label: 'Man City' },
    ],
    backgroundColor: '#0077b6'
  }]
};

const config = {
  type: 'scatter',
  data: data,
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            const point = context.raw;
            return `${point.label}: ${point.x} pubs, ${point.y.toFixed(1)}% wins`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Pubs Within 1 Mile'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Home Win % (last 200 games)'
        },
        min: 0,
        max: 100
      }
    }
  }
};

new Chart(document.getElementById('homepubsplot'), config);
