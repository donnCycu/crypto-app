<template>
  <div class="flex flex-col w-full lg:px-[38px] mt-10 lg:mt-16 h-max-[500px] overflow-hidden">
    <div class="flex items-center justify-between lg:justify-start h-10 text-sm lg:text-base">
      <button
          class="py-2 text-grey-text hover:text-black-text hover:border-b-4 hover:border-purple-elements hover:font-medium focus:font-medium focus:border-b-4 focus:border-purple-elements focus:text-black-text h-full lg:w-20"
          @click="display = 'summary'">
        Summary
      </button>
      <button
          class="py-2 text-grey-text hover:text-black-text hover:border-b-4 hover:border-purple-elements hover:font-medium focus:font-medium focus:border-b-4 focus:border-purple-elements focus:text-black-text h-full lg:w-14 lg:mx-4"
          @click="display = 'table'">
        Table
      </button>
      <button
          class="py-2 text-grey-text hover:text-black-text hover:border-b-4 hover:border-purple-elements hover:font-medium focus:font-medium focus:border-b-4 focus:border-purple-elements focus:text-black-text h-full lg:w-16 lg:mx-4"
          @click="display = 'charts'">
        Charts
      </button>
      <button
          class="py-2 text-grey-text hover:text-black-text hover:border-b-4 hover:border-purple-elements hover:font-medium focus:font-medium focus:border-b-4 focus:border-purple-elements focus:text-black-text h-full lg:w-20 lg:mx-4"
          @click="display = 'reporting'">
        Reporting
      </button>
      <button
          class="py-2 text-grey-text hover:text-black-text hover:border-b-4 hover:border-purple-elements hover:font-medium focus:font-medium focus:border-b-4 focus:border-purple-elements focus:text-black-text h-full lg:w-20 lg:mx-4"
          @click="display = 'analysis'">
        Analysis
      </button>
    </div>
    <div v-if="display === 'summary'" class="flex flex-col mt-4 h-[280px] overflow-auto scroll-container">
      <div v-for="currency in cryptoCurrencies" :key="currency.id"
           class="flex items-center justify-between h-[80px] mb-4">
        <div class="flex w-1/2">
          <img :src="currency.logo" alt="Currency Icon" class="w-8 h-8"/>
          <div class="flex flex-col items-start justify-center ml-6 text-xs lg:text-sm">
            <span class="text-grey-text">{{ currency.symbol }}</span>
            <p class=" font-medium pt-1.5">{{ currency.name }}</p>
          </div>
        </div>
        <div class="flex flex-col items-start justify-start w-1/2">
          <div class="flex items-start flex-col ml-6 text-xs lg:text-sm">
            <span class="text-grey-text">Price</span>
            <p class="font-medium pt-1.5">{{ currency.quote.USD.price.toFixed(3) }}</p>
          </div>
        </div>
        <div class="flex flex-col items-start justify-start w-1/2">
          <div class="flex items-start flex-col ml-6 text-xs lg:text-sm">
            <span class="text-grey-text">Change</span>
            <p class="text-green-text font-medium pt-1.5">+ {{ currency.quote.USD.percent_change_24h.toFixed(2) }}%
              ↗</p>
          </div>
        </div>
        <div class="w-1/2 hidden lg:flex max-h-12">
          <canvas :id="'chart_' +currency.symbol"></canvas>
        </div>
        <div class="flex flex-col lg:flex-row">
          <button class="px-1.5 py-2 font-semibold text-xs lg:text-sm text-purple-elements rounded">Sell</button>
          <button class="px-2 py-2 lg:ml-2 font-semibold text-xs lg:text-sm text-white bg-purple-elements rounded">Buy
          </button>
        </div>
      </div>
    </div>
    <div v-if="display === 'table'">
      <!-- content -->
      <p>Content 1</p>
    </div>
    <div v-if="display === 'charts'">
      <!-- content -->
      <p>Content 2</p>
    </div>
    <div v-if="display === 'reporting'">
      <!-- content -->
      <p>Content 3</p>
    </div>
    <div v-if="display === 'analysis'">
      <!-- content -->
      <p>Content 4</p>
    </div>
  </div>

</template>

<script>
import {useStore} from 'vuex'
import {onMounted, ref} from "vue";
import Chart from 'chart.js/auto';

export default {
  setup() {
    const display = ref('summary');
    const store = useStore();
    const cryptoCurrencies = ref([]);

    function fetchData() {
      store.dispatch("api/getData").then(data => {
        cryptoCurrencies.value = data.data;


        const ids = cryptoCurrencies.value.map(u => u.id).join(',')
        const imgs = getImage(ids);
        imgs.then(data => {
          const mdArray = data.data;
          cryptoCurrencies.value.forEach(i => {
            const d = mdArray[i.id];
            if (d) {
              i.logo = d.logo;
            }
          })
          prepareCharts();
        }, err => {
          console.log("FETCH ERROR: ", err)
        })
      });
    }

    function prepareCharts() {
      cryptoCurrencies.value.forEach(i => {
        const price = i.quote.USD.price;
        const lastChange1H = i.quote.USD.percent_change_1h;
        const lastChange24H = i.quote.USD.percent_change_24h;
        const lastChange7D = i.quote.USD.percent_change_7d;
        const lastChange30D = i.quote.USD.percent_change_30d;
        const last1H = price * (1 - lastChange1H / 100);
        const last24H = price * (1 - lastChange24H / 100);
        const last7D = price * (1 - lastChange7D / 100);
        const last30D = price * (1 - lastChange30D / 100);
        const chart = document.getElementById("chart_" + i.symbol).getContext('2d');
        let gradient = chart.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(247,147,26,.5)');
        gradient.addColorStop(.425, 'rgba(255,193,119,0)');
        new Chart(chart, {
          type: 'line',
          data: {
            labels: ["30D", "7D", "24h", "1h", "Now"],
            datasets: [{
              label: '$',
              data: [last30D.toFixed(2), last7D.toFixed(2), last24H.toFixed(2), last1H.toFixed(2), price.toFixed(2)],
              backgroundColor: gradient,
              borderColor: 'rgba(247,147,26,1)',
              borderJoinStyle: 'round',
              borderCapStyle: 'round',
              borderWidth: 3,
              pointRadius: 0,
              pointHitRadius: 10,
              lineTension: .2,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: false
            },
            scales: {
              y: {
                display: false
              },
              x: {
                display: false
              }
            }
          }
        });
      });
    }

    function getImage(id) {
      return store.dispatch("api/getMetadata", id).then(md => {
        return md;
      });
    }

    onMounted(() => {
      fetchData();
    });

    return {
      display, fetchData, prepareCharts, cryptoCurrencies, getImage
    }
  }
}
</script>

<style scoped>
.scroll-container::-webkit-scrollbar {
  width: 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
}


</style>
