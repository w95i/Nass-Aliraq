<template>
  <section class="charts-section">
    <h2 class="section-title">Our charts</h2>
    <div class="charts-container">
      <!-- Bar Chart -->
      <div class="chart-card bar-chart">
        <div class="chart-header">
          <div class="row">
            <h3>Net Profit</h3>
            <i class="info-icon">ℹ</i>
          </div>
          <span class="span">2024</span>
        </div>
        <hr style="border: 1px solid #4f4d4d" />
        <apexchart
          type="bar"
          height="250"
          :options="barChartOptions"
          :series="barChartSeries"
          class="chart_design"
        ></apexchart>
      </div>

      <!-- Doughnut Chart -->
      <div class="chart-card donut-chart">
        <div class="chart-header">
          <h3>Primary Text</h3>
          <span class="primary-value">5,987.34</span>
          <span class="secondary-text">Secondary text</span>
        </div>
        <hr style="border: 1px solid #4f4d4d" />
        <apexchart
          type="donut"
          height="250"
          :options="doughnutChartOptions"
          :series="doughnutChartSeries"
          class="chart_design"
        ></apexchart>
      </div>
    </div>
  </section>
</template>
  
  <script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      barChartSeries: [
        { name: "Product 1", data: [70, 0, 0] },
        { name: "Product 2", data: [0, 100, 0] },
        { name: "Product 3", data: [0, 0, 200] },
      ],
      barChartOptions: {
        chart: { type: "bar", background: "#1e1e1e" },
        theme: { mode: "dark" },
        colors: ["#7D4283", "#F3722C", "#F8961E"],
        plotOptions: {
          bar: { horizontal: false, columnWidth: "30%" },
        },
        dataLabels: { enabled: false },
        xaxis: {
          categories: ["XS", "S", "M"],
          labels: { style: { colors: "#fff" } },
        },
        yaxis: { labels: { style: { colors: "#fff" } } },
        legend: { labels: { colors: "#fff" } },
      },

      doughnutChartSeries: [50, 50],
      doughnutChartOptions: {
        labels: ["Product 1", "Product 2"],
        colors: ["#7D3C98", "#E67E22"],
        legend: { labels: { colors: "#fff" } },
        stroke: { show: false },
      },
    };
  },
});
</script>
  
  <style scoped>
.charts-section {
  padding: 88px;
  border-radius: 10px;
  color: #fff;
  font-family: var(--font-family);
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
}

.charts-container {
  display: flex;
  gap: 48px;
}

.chart-card {
  background: #1e1e1e;
}

.bar-chart {
  width: 50%;
}

.donut-chart {
  width: 30%;
}

.chart-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 22px 25px 5px;
}

.chart-header .row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chart-header h3 {
  font-size: 18px;
  font-weight: bold;
}

.chart-header .info-icon {
  cursor: pointer;
  background-color: #4f4d4d;
  color: #1e1e1e;
  padding: 8px 15px;
  border-radius: 50%;
}

.chart-header .span {
  padding-bottom: 16px;
}

.primary-value {
  font-size: 22px;
  font-weight: bold;
}

.secondary-text {
  font-size: 14px;
  color: #aaa;
}

.chart_design {
  padding: 15px;
}

@media (max-width: 768px) {
  .charts-section {
    padding: 38px 10px;
  }

  .section-title {
    text-align: center;
  }

  .charts-container {
    flex-direction: column;
  }

  .bar-chart {
    width: 100%;
  }

  .donut-chart {
    width: 100%;
  }
}
</style>
  