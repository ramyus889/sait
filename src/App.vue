<script setup>
import { reactive, ref, onMounted, computed, provide } from "vue";
import Header from "./component/Header.vue";
import Main from "./component/Main.vue";
import Card from "./component/Card.vue";
import Features from "./component/Features.vue";
import Trusted from "./component/Trusted.vue";
import Footer from "./component/Footer.vue";
</script>

<template>
  <Header />
  <Main />
  <Card />
  <Features />
  <Trusted />
  <Footer />
</template>
