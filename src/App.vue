<template>
  <div class="flex-center h-screen bg-white-bgc lg:bg-black">
    <div class="flex-start flex-col lg:flex-row h-full w-full lg:h-[900px] lg:w-[1440px] lg:bg-white-bgc lg:rounded-3xl relative">
      <BurgerMenu/>
      <div class="flex-start lg:justify-between flex-col px-2.5 w-full lg:h-full lg:w-16.5 pt-28">
        <div class="flex flex-col w-full">
          <div class="flex items-center lg:items-start justify-between lg:flex-col w-full">
            <button class="sidebar-button" v-for="menu in sidebar" :key="menu">
              <div class="flex items-center">
                <img :src="menu.icon" class="lg:mr-4 w-8 lg:w-[18px] lg:h-[18px]"/>
                <span class="hidden lg:flex">{{ menu.name }}</span>
              </div>
              <div class="flex-center w-6 h-4 bg-red-500 rounded-3xl text-xs hidden lg:flex" v-if="menu.notification">
                {{ menu.valueNotification }}</div>
            </button>
          </div>
          <div class="flex-start flex-col mt-6 w-full lg:ml-6">
            <div class="flex items-center justify-start lg:justify-between w-full text-grey-text">
              <p class="font-medium">Favorites</p>
              <button class="flex-center ml-2">
                <span class="dots"></span>
                <span class="mx-1 dots"></span>
                <span class="dots"></span>
              </button>
            </div>
            <div class="flex my-4 w-full">
              <div class="flex w-1/2">
                <img src="@/assets/btc.svg" class="w-8 lg:w-6 h-8"/>
                <div class="flex flex-col items-start justify-center ml-2 text-xs">
                  <span class="text-grey-text">BTC</span>
                  <p class="leading-3 font-medium">Bitcoin</p>
                </div>
              </div>
              <div class="w-1/2">
                <img src="@/assets/Vector.png"/>
              </div>
            </div>
            <div class="flex my-2 w-full">
              <div class="flex w-1/2">
                <img src="@/assets/cr.svg" class="w-8 lg:w-6 h-8"/>
                <div class="flex flex-col items-start justify-center ml-2 text-xs">
                  <span class="text-grey-text">XRP</span>
                  <p class="leading-3 font-medium">Ripple</p>
                </div>
              </div>
              <div class="w-1/2">
                <img src="@/assets/Vector.png"/>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <div class="flex items-center justify-between w-full mb-8">
            <div class="flex">
              <img src="@/assets/user.png" class="w-11 h-10 rounded-full bg-white"/>
              <div class="flex flex-col items-start ml-4">
                <p class="text-black-text font-medium">Marc Webber</p>
                <span class="text-grey-text">marc@riot.com</span>
              </div>
              <button class="flex-center ml-10">
                <span class="dots"></span>
                <span class="mx-1 dots"></span>
                <span class="dots"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-start flex-col px-2.5 lg:px-[38px] lg:pt-28 w-full">
        <div class="flex items-center lg:justify-between flex-col lg:flex-row">
          <div class="flex flex-col items-start justify-between lg:mt-6 lg:mr-9 lg:p-9 w-full lg:w-[509px] lg:h-[336px] rounded-2xl">
            <div class="flex flex-col items-start justify-center w-full">
              <div class="flex items-center lg:justify-between mb-4 lg:mb-10 w-full">
                <p class="text-black-text font-medium lg:text-xl">Current Balance</p>
                <button class="flex-center ml-2">
                  <span class="dots"></span>
                  <span class="mx-1 dots"></span>
                  <span class="dots"></span>
                </button>
              </div>
              <div class="flex items-center lg:items-start justify-between lg:flex-col w-full">
                <p class="text-black-text font-medium text-2xl lg:text-[56px]"><span class="text-grey-text">$</span>21 432.23</p>
                <p class="lg:mt-4 ml-10 lg:ml-0 text-green-text text-sm lg:text-lg"><span class= "lg:mr-2">↗</span>12% vs last month</p>
              </div>
            </div>
            <div class="mt-4 lg:mt-0">
              <button class="px-2 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm bg-purple-elements rounded text-white">Quick Invest</button>
              <button class="px-2 lg:px-4 py-2 lg:py-3 ml-4 text-xs lg:text-sm rounded bg-white text-purple-elements">Show Report</button>
            </div>
          </div>
          <div class="flex flex-col items-start justify-between mt-10 lg:mt-6 lg:mr-9 lg:p-9 w-full lg:w-[509px] h-[336px] rounded-2xl">
            <div class="flex items-center justify-between mb-6 lg:mb-2 lg:w-full">
              <p class="text-black-text font-medium lg:text-xl">Summary</p>
              <button class="flex-center ml-2">
                <span class="dots"></span>
                <span class="mx-1 dots"></span>
                <span class="dots"></span>
              </button>
            </div>
            <div class="w-full h-full">
              <SummaryChart/>
            </div>
          </div>
        </div>
        <CryptoValueApi/>
      </div>
    </div>

  </div>
</template>

<script>
import BurgerMenu from "@/components/BurgerMenu";
import SummaryChart from "@/components/SummaryChart";
import CryptoValueApi from "@/components/CryptoValueApi";
import {reactive, ref} from "vue";
export default {
  name: 'App',
  components: {
    BurgerMenu,SummaryChart,CryptoValueApi
  },
  setup(){
    const summary = ref(false);
    const sidebar = reactive([
      {
        id:0,
        name:'Overview',
        icon:require('@/assets/home.svg'),
        notification:true,
        valueNotification:'+' + 9,
        component:'',
      },
      {
        id:1,
        name:'Buy / Sell',
        icon:require('@/assets/buy.svg'),
        notification:false,
        valueNotification:'+',
        component:'',
      },
      {
        id:2,
        name:'Wallets',
        icon:require('@/assets/wallets.svg'),
        notification:false,
        valueNotification:'+',
        component:'',
      },
      {
        id:3,
        name:'Bundles',
        icon:require('@/assets/bundles.svg'),
        notification:false,
        valueNotification:'+',
        component:'',
      },
      {
        id:4,
        name:'Reporting',
        icon:require('@/assets/report.svg'),
        notification:false,
        valueNotification:'+',
        component:'',
      },
      {
        id:5,
        name:'Community',
        icon:require('@/assets/commu.svg'),
        notification:false,
        valueNotification:'+',
        component:'',
      },

    ])
    return{
      summary,sidebar
    }
  }
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
body {
  margin:0 auto;
  padding:0;
}
#app {
  font-family: 'SF Pro Display', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.dashboard {
  height:900px;
  width:1440px;
  background-color:#F7F7F9;
  border-radius:24px;
}
</style>
