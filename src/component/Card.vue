<script setup>
import { reactive, ref, onMounted, computed, provide, shallowRef } from "vue";
import gsap from "gsap";

onMounted(() => {
  gsap.from("#box4", {
    opacity: 0,
    x: -100,
    ease: "power3",
    duration: 1,
  });
});
</script>
<template>
  <div class="bg-[#fbfbfb] mt-[144px] font-['Inter']">
    <div class="container mx-auto px-[10.3em]">
      <div class="text-center">
        <div class="pt-[80px] text-[42px] font-[800]">
          Explore our solutions
        </div>
        <div class="text-[20px] text-[#666666]">
          We have a wide range of AI tools that users love to chat with, and you
          can train the bot <br />
          to help with customer service
        </div>
      </div>
      <div class="text-[32px] font-[600] mt-[88px]">
        Powerful suite of modules
      </div>
      <div class="flex gap-[64px] mt-[32px] pb-[25px]">
        <div id="box4" class="">
          <div>
            <router-link
              to="/image1"
              class="flex bg-white shadow-4 py-[21px] ps-[21px] my-4 pe-[21px] active:bg-[#eaeaea] focus:bg-[#eaeaea]"
            >
              <div class="text-[18px] text-[#666666]">
                <span class="font-[600] text-black"
                  >Train the bot on your data, helping customer service</span
                >
                <br />
                A customer service bot trained on your data; users <br />
                can converse with the bot to get fine tuned answers <br />
                on your data set (over Discord, or your website <br />
                via a chat plugin)
              </div>
            </router-link>
          </div>

          <div class="">
            <router-link
              to="/image2"
              class="flex bg-white shadow-4 py-[21px] ps-[21px] my-4 pe-[21px] focus:bg-[#eaeaea]"
            >
              <div class="text-[18px] text-[#666666]">
                <span class="font-[600] text-black"
                  >Talk with ChatGPT with your own PFP</span
                >
                <br />
                Reply by default to everyone in certain personalities <br />
                (such as being sarcastic), and have the bot use its <br />
                own avatar
              </div>
            </router-link>
          </div>

          <div class="">
            <router-link
              to="/image3"
              class="flex bg-white shadow-4 py-[21px] ps-[21px] my-4 pe-[21px] focus:bg-[#eaeaea]"
            >
              <div class="text-[18px] text-[#666666]">
                <span class="font-[600] text-black">Welcome new users</span>
                <br />
                If a new member gets a select role in your Discord <br />
                the bot will display a special welcome message
              </div>
            </router-link>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
