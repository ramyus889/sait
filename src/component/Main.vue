<script setup>
import { reactive, ref, onMounted, computed, provide, shallowRef } from "vue";
import gsap from "gsap";

onMounted(() => {
  gsap.from("#box", {
    opacity: 0,
    y: -100,
    ease: "power3",
    duration: 1,
  });
});
</script>
<template>
  <div class="container mx-auto px-[5.3em]">
    <svg
      width="1360"
      height="578"
      viewBox="0 0 1360 578"
      class="absolute top-[3em]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="illustration-01"
        >
          <stop stop-color="#FFF" offset="0%"></stop>
          <stop stop-color="#EAEAEA" offset="77.402%"></stop>
          <stop stop-color="#DFDFDF" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g fill="url(#illustration-01)" fill-rule="evenodd">
        <circle cx="1232" cy="128" r="128"></circle>
        <circle cx="155" cy="443" r="64"></circle>
      </g>
    </svg>
    <div id="box">
      <div
        class="text-center tracking-[1.04px] mt-[160px] leading-[58.5px] font-[900] font-['Inter'] text-[52px]"
      >
        <div class="">Enhance your</div>
        <div
          class="bg-clip-text text-transparent bg-gradient-to-r from-[#388ff4] to-[#4fd0c5]"
        >
          website & Discord community
        </div>
        <div class="">
          with
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-[#388ff4] to-[#4fd0c5]"
            >AI</span
          >
        </div>
      </div>
      <div class="text-center font-['Inter'] text-[20px] text-[#666666]">
        Invite the bot to chat with it for FREE below
      </div>
      <div class="flex items-center gap-6 mt-[32px] justify-center">
        <button
          class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
        >
          Invite the Bot for Free
        </button>

        <button
          class="bg-black px-[1.4rem] py-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
        >
          Read the Docs
        </button>
      </div>
    </div>
  </div>
</template>
