<template>
  <div class="flex items-center justify-between px-3 h-20 lg:px-6 fixed lg:absolute lg:rounded-tl-3xl lg:rounded-tr-3xl top-0 left-0 right-0 relative">
    <a href="#" class=""><img src="@/assets/payte-logo.png"/></a>
    <div class="flex items-center pr-4">
      <div class="flex-center relative mr-8 w-10 h-10 rounded">
        <div class="absolute top-0 right-0 border-notification border-4 rounded-full"></div>
        <img src="@/assets/noti.svg"/>
      </div>
      <nav class="flex items-center justify-between relative">
        <div class="flex" @click="showMenu = !showMenu">
          <button
              class="
                cursor-pointer
                text-grey-text
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
            "
              type="button"
          >
            <svg class="w-10 h-10 lg:w-6 lg:h-6 fill-current" viewBox="0 0 24 24">
              <path
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <ul
            :class="showMenu ? 'flex ' : 'hidden'"
            v-if="showMenu"
            class="
            flex-col
            space-y-4
            md:flex
            md:space-y-0
            md:items-center
            md:space-x-10
            md:mt-0
            h-1/2
            lg:h-96
            w-full
            lg:w-52
            bg-white-bgc
            fixed
            lg:absolute
            px-6 py-7
            top-0 right-0
            bottom-0
            z-30
            lg:rounded-xl
            lg:border-2
            border-solid
            border-purple-elements
          "
        >
          <div class="flex items-start justify-between lg:justify-end w-full">
            <a href="#" class="lg:hidden"><img src="@/assets/payte-logo.png"/></a>
            <button class="w-10 h-10 flex items-center justify-center  text-2xl" @click="showMenu = !showMenu"><span>x</span></button>
          </div>
          <div class="flex-start flex-col mt-10 w-full">
            <li class="py-4 text-xl font-bold text-font-two ">
              <a href="#" >Home.</a>
            </li>
            <li class="py-4 text-xl font-bold text-font-two ">
              <a href="#" >Home.</a>
            </li>
            <li class="py-4 text-xl font-bold text-font-two ">
              <a href="#" >Home.</a>
            </li>
          </div>

        </ul>
      </nav>
    </div>
  </div>

</template>
<script>
import { ref } from 'vue'
export default {
  name: 'BurgerMenu',
  components: {},
  setup () {
    return {
      showMenu:ref(false),
    }
  }
}
</script>
<style>

</style>

