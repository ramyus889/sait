<script setup>
import { reactive, ref, onMounted, computed, provide, shallowRef } from "vue";
import gsap from "gsap";

onMounted(() => {
  gsap.from("#box2", {
    opacity: 0,
    y: 100,
    ease: "power3",
    duration: 1,
  });
});
</script>
<template>
  <div id="box2"><img src="/img/custompfp.webp" class="mt-4" alt="" /></div>
</template>
