/*// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Wallet Pie Chart 
var ctx = document.getElementById("myWalletPie");
var myWalletPie = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});


function addLabels(obj) {
  for(var k in obj) {
    myWalletPie.config.data.labels.push(obj[k]['asset']);
    console.log(obj[k]['asset']);
    console.log(myWalletPie.config.data.labels);
  }
};

function addData(obj) {
  for(var k in obj) {
    myWalletPie.config.data.datasets[0].data.push(parseFloat(obj[k]['free']));
    console.log(parseFloat(obj[k]['free']));
    console.log(myWalletPie.config.data.datasets[0].data);
  }
};

addData(myjson);
addLabels(myjson);
setTimeout(() => { myWalletPie.update(); }, 500);

console.log(myWalletPie.config.data.datasets[0].data);*/
