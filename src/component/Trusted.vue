<script setup>
import { reactive, ref, onMounted, computed, provide, shallowRef } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from("#Trusted", {
    scrollTrigger: "#Trusted",
    opacity: 0,
    x: -300,
    ease: "power3",
    duration: 2,
  });
});
</script>
<template>
  <div class="container mx-auto px-[10.3em] font-['Inter']">
    <svg
      width="1760"
      height="518"
      class="absolute -ms-[16em] -mt-[12em]"
      viewBox="0 0 1760 518"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="illustration-02"
        >
          <stop stop-color="#FFF" offset="0%"></stop>
          <stop stop-color="#EAEAEA" offset="77.402%"></stop>
          <stop stop-color="#DFDFDF" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        transform="translate(0 -3)"
        fill="url(#illustration-02)"
        fill-rule="evenodd"
      >
        <circle cx="1630" cy="128" r="128"></circle>
        <circle cx="178" cy="481" r="40"></circle>
      </g>
    </svg>
    <div
      class="text-[42px] font-[800] text-center -mt-[5em] leading-none tracking-tight"
    >
      Trusted by over 1,600 servers all <br />
      over the world
    </div>
    <div
      id="Trusted"
      class="bg-[#191919] text-white mt-[96px] flex justify-between rounded-lg"
    >
      <div class="ps-[48px] pt-[48px]">
        <div class="text-[32px] font-[800]">Start for free today!</div>
        <div class="text-[18px] pt-[8px]">
          Invite the bot to your Discord and start for free today.
        </div>
        <button
          class="bg-gradient-to-r from-purple-400 mt-[8px] to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
        >
          Invite the Bot for Free
        </button>
        <div class="text-[18px] pt-[20px]">Already using ours bots?</div>
        <button
          class="bg-black px-[1.4rem] py-3 flex mt-[8px] items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
        >
          Manage your Discord Bots
        </button>
      </div>
      <div class="">
        <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient
              cx="35.542%"
              cy="34.553%"
              fx="35.542%"
              fy="34.553%"
              r="96.031%"
              id="ni-a"
            >
              <stop stop-color="#DFDFDF" offset="0%"></stop>
              <stop stop-color="#4C4C4C" offset="44.317%"></stop>
              <stop stop-color="#333" offset="100%"></stop>
            </radialGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <g fill="#FFF">
              <ellipse
                fill-opacity=".04"
                cx="185"
                cy="15.576"
                rx="16"
                ry="15.576"
              ></ellipse>
              <ellipse
                fill-opacity=".24"
                cx="100"
                cy="68.402"
                rx="24"
                ry="23.364"
              ></ellipse>
              <ellipse
                fill-opacity=".12"
                cx="29"
                cy="251.231"
                rx="29"
                ry="28.231"
              ></ellipse>
              <ellipse
                fill-opacity=".64"
                cx="29"
                cy="251.231"
                rx="8"
                ry="7.788"
              ></ellipse>
              <ellipse
                fill-opacity=".12"
                cx="342"
                cy="31.303"
                rx="8"
                ry="7.788"
              ></ellipse>
              <ellipse
                fill-opacity=".48"
                cx="62"
                cy="126.811"
                rx="2"
                ry="1.947"
              ></ellipse>
              <ellipse
                fill-opacity=".12"
                cx="78"
                cy="7.072"
                rx="2"
                ry="1.947"
              ></ellipse>
              <ellipse
                fill-opacity=".64"
                cx="185"
                cy="15.576"
                rx="6"
                ry="5.841"
              ></ellipse>
            </g>
            <circle fill="url(#ni-a)" cx="276" cy="237" r="200"></circle>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>
