<script setup>

const config = useRuntimeConfig().public.enpointAPI

const info = ref({
  name: "",
  detail: "",
  say: ""
})

async function hbd() {
  const { data } = await useFetch(config + "/api/hbd", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: info.value.name,
      detail: info.value.detail,
      say: info.value.say
    })
  })
  
  if(data.value && data.value.code === 1) {
    alert("ส่งสำเร็จแล้ว")
    return window.location.replace("https://www.youtube.com/channel/UC1s5T_9sfGrRxHJhjEceVSg?sub_confirmation=1");
  }
  else return alert(data?.msg)
}


</script>

<template>
  <div class="fixed w-screen flex min-h-screen pointer-events-none -z-10">
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="fixed w-screen flex justify-end min-h-screen items-end pointer-events-none -z-10">
    <div class="relative">
      <div class="absolute border-white/10 border-4 rounded-full w-[350px] h-[350px] bottom-[-50px] right-[-140px]"></div>
      <div
        class="absolute border-white/10 border-2 border-dashed rotate-custom rounded-full w-[370px] h-[370px] bottom-[-60px] right-[-150px]">
      </div>
      <img src="/10.png" class="pointer-events-none w-[250px]">
    </div>
  </div>
  <div class="mx-auto container max-w-8xl">
    <div class="flex justify-center items-center min-h-screen">
      <div class="grid lg:flex lg:gap-x-3 gap-y-3 ">
        <div>
          <img src="/avatar.png" class="max-h-[600px] hidden lg:block">
          <div class="-mb-[11px]">
            <img src="/avatar_half.png" class="h-[250px] sm:h-full max-h-[300px] block lg:hidden">
          </div>
        </div>
        <div class="flex items-center justify-center lg:justify-start">
          <div class="bg-black/40 p-5 rounded-2xl drop-shadow-custom">
            <h1 class="text-4xl font-bold">
              <span>อวย</span><span class="text-yellow-300">พร</span>
            </h1>
            <span class="opacity-50">
              วันคล้ายวันเกิด
            </span>
            <div class="grid gap-y-2.5 mt-5">
              <input maxlength="20" v-model="info.name" placeholder="ชื่อ"
                class="text-white p-2 rounded-md outline-none bg-white/10 transition-all duration-200 hover:scale-105"
                type="text">
              <textarea maxlength="400" v-model="info.detail" placeholder="คำอวยพร"
                class="text-white p-2 rounded-md outline-none bg-white/10 transition-all duration-200 hover:scale-105"
                type="text"></textarea>
              <input maxlength="400" v-model="info.say" placeholder="อยากบอกอะไร"
                class="text-white p-2 rounded-md outline-none bg-white/10 transition-all duration-200 hover:scale-105"
                type="text">
              <div class="flex justify-center mt-2">
                <button @click="hbd"
                  class="bg-yellow-400 px-2 py-1 text-black rounded-xl font-bold transition-all duration-200 hover:scale-105">
                  ส่งคำอวยพร
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
  min-height: 100vh;
  font-family: 'Kanit', sans-serif;
  color: #fff;
  background-color: rgb(35, 31, 40);
}

.drop-shadow-custom {
  box-shadow: 6px 7px 0px 1px rgba(0, 0, 0, 0.60);
  -webkit-box-shadow: 6px 7px 0px 1px rgba(0, 0, 0, 0.60);
  -moz-box-shadow: 6px 7px 0px 1px rgba(0, 0, 0, 0.60);
}

.circles {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.circles li {
  position: fixed;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;

}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}



@keyframes animate {

  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}

.rotate-custom {
  animation: rotate 40s linear infinite;
}

@keyframes rotate {

  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }

}
</style>