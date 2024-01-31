<script setup>
import { reactive, ref, onMounted, computed, provide } from "vue";
</script>

<template>
  <header class="fixed top-0 w-full pb-2 z-10 bg-white shadow-3">
    <div
      class="container mx-auto pt-[16px] px-[12.3em] flex items-center justify-between"
    >
      <img class="w-[54px]" src="/img/logo.webp" alt="" />
      <button
        class="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
      >
        Dashboard →
      </button>
    </div>
  </header>
</template>
