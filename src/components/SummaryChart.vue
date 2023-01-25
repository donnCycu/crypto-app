<template>
  <canvas id="chart" width="100%" height="100%"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
import {onMounted, ref} from "vue";

export default {
  setup() {
    let myChart = ref(null);
    const chartDataThisMonth = [0, 2000, 11000, 13000, 15000, 22000, 17000, 20000, 23000];
    const chartDataLastMonth = [0, 2000, 15000, 17000, 15000, 13000, 11000, 10000, 5000, 9000];
    onMounted(() => {
      const chart = document.getElementById('chart');
      myChart = new Chart(chart, {
        type: 'line',
        data: {
          labels: [0, 5, 10, 15, 20, 25, 30],
          datasets: [{
            label: 'This month',
            data: chartDataThisMonth,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: '#7445FB',
            borderWidth: 1,
            pointRadius: 0,
            pointHoverRadius: 10,
            borderRadius: 100,
            tension: .4
          },
            {
              label: 'Last month',
              data: chartDataLastMonth,
              backgroundColor: 'rgba(10, 4, 28, 0.4)',
              borderColor: 'rgba(10, 4, 28, 0.2)',
              borderWidth: 1,
              pointRadius: 0,
              pointHoverRadius: 10,
              borderRadius: 100,
              tension: .4
            }]
        },
        options: {
          tooltips: {
            enabled: true,
          },
          scales: {
            xAxes: [{
              ticks: {
                min: 1,
                max: 12
              }
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 100
              }
            }]
          },
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              align: 'start',
              labels: {
                boxWidth: 8,
                boxHeight: 8,
                pointStyle: '#7445FB',
                font: {
                  size: 11
                }
              }
            },
          }
        }
      })
    })
    return {chartDataThisMonth, chartDataLastMonth, myChart,}
  },

}
</script>
<style scoped>
.canvas {
  width: 100px;
  height: 100px;
}
</style>
