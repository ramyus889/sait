<script setup>
import { reactive, ref, onMounted, computed, provide, shallowRef } from "vue";
import gsap from "gsap";

onMounted(() => {
  gsap.from("#box1", {
    opacity: 0,
    y: 100,
    ease: "power3",
    duration: 1,
  });
});
</script>
<template>
  <div id="box1">
    <img src="/img/customdata.webp" class="w-[57%] mt-4" alt="" />
  </div>
</template>
