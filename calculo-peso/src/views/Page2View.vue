<template>
  <h1 class="title">{{ nome }} com {{ idade }} anos você pode perder <strong class="green">{{ resultado }}</strong> Kg em <strong class="green">3 dias</strong> com o  <strong class="green">ozempicNatural</strong></h1>
  <p class="green-light-bg white-text">Assista o vídeo abaixo e descubra como</p>
  <main>
      <iframe class="video" width="800" height="400" src="https://www.youtube.com/embed/Il3UZXPrZlw?si=yy4OwduQaqWo-rTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const nome = route.query.nome;
const idade = route.query.idade;
const resultado = route.query.resultado;
const showScroll = true; 
</script>

<style scoped>
h1, p, main {
  margin: 0;
  padding: 0;
  width: 100%;
}

h1, p {
  background-color: black;
  color: white;
  padding: 15px;
  text-align: center;
}

main {
  background-color: rgb(6, 58, 10);
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.video {
  display: block;
  margin-top: -100px;
}

.green-light-bg {
  background-color:  rgb(6, 130, 118);
  color: white;
  padding: 5px;
  text-align: center;
}

.green {
  color:  rgb(6, 130, 118);
}

.white-text {
  color: white;
}

* {
  box-sizing: border-box;
}

html, body {
  overflow: hidden;
}
</style>









