<!-- src/components/BarChart.vue -->
<template>
    <div>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  /* eslint-disable */  // Disable all ESLint warnings/errors
  
  import { ref, onMounted } from "vue";
  import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
  
  Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  export default {
    props: {
      chartData: Object,
      chartOptions: Object,
    },
    setup(props) {
      const chartCanvas = ref(null);
      let chartInstance = null;
  
      onMounted(() => {
        if (chartCanvas.value) {
          chartInstance = new Chart(chartCanvas.value, {
            type: "bar",
            data: props.chartData,
            options: props.chartOptions,
          });
        }
      });
  
      return { chartCanvas };
    },
  };
  </script>
  
  <style scoped>
  canvas {
    width: 100% !important;
    height: 100% !important;
  }
  </style>
  