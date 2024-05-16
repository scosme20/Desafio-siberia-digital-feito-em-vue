<template>
  <main :class="{ 'no-scroll': !showScroll, 'main-scroll': showScroll }">
    <h1 class="title">Você ganhou um teste gratuito</h1>
    <h3 class="sub">
      <strong class="font">Responda as questões abaixo e veja quantos <strong class="subtitle">kg</strong> pode perder com <span class="green-text">ozempicNatural</span></strong>
    </h3>
    
    <div class="container">
      <form class="form" @submit.prevent="calculateAndNavigate">
        <p>Digite as informações precisas para fazer o cálculo:</p>
        <br>
        <div class="form-group">
          <input class="input" v-model="text" placeholder="Nome">
        </div>

        <div class="form-group">
          <input class="input" type="number" v-model.number="idade" placeholder="Idade">
        </div>

        <div class="form-group">
          <input class="input" type="number" v-model.number="altura" placeholder="Altura (em cm)">
        </div>

        <div class="form-group">
          <input class="input" type="number" v-model.number="pesoAtual" placeholder="Peso atual (KG)">
        </div>

        <div class="form-group">
          <input class="input" type="number" v-model.number="pesoDesejado" placeholder="Peso desejado (KG)">
        </div>

        <div class="form-group">
          <div class="input" style="text-align: center;">Qual o seu gênero</div>
          <div class="radio-group">
            <label class="radio" for="male">
              <input type="radio" id="male" value="Masculino" v-model="picked" />
              Masculino
            </label>
            <label class="radio" for="female">
              <input type="radio" id="female" value="Feminino" v-model="picked" />
              Feminino
            </label>
          </div>
        </div>

        <div class="form-group">
          <div class="input" style="text-align: center;">Qual o seu nível de atividade física diária</div>
          <select class="select" v-model="selected">
            <option disabled value="">Por favor, selecione uma opção</option>
            <option>Leve</option>
            <option>Moderada</option>
            <option>Intensa</option>
          </select>
        </div>

        <button class="button" type="submit">Realizar cálculo agora !</button>
        <a class="link" href="#">Clique aqui para descobrir em quanto tempo chegará no seu peso ideal com ozempicNatural</a>
      </form>
    </div>
  
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const text = ref('');
const idade = ref('');
const altura = ref('');
const pesoAtual = ref('');
const pesoDesejado = ref('');
const picked = ref('');
const selected = ref('');
const router = useRouter();
let errorMessage = '';
const showScroll = ref(false);

function calculateAndNavigate() {
  if (!text.value || !idade.value || !altura.value || !pesoAtual.value || !pesoDesejado.value || !picked.value || !selected.value) {
    errorMessage = 'Por favor, preencha todos os campos.';
    return;
  }
  
  const resultado = pesoAtual.value - pesoDesejado.value;
  router.push({
    path: '/result',
    query: {
      nome: text.value,
      idade: idade.value,
      resultado: resultado
    }
  });

  showScroll.value = true;
}
</script>

<style scoped>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
  overflow: hidden;
}

main {
  height: 100%;
}

.title {
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
}

.font {
  font-weight: 2000;
}

.subtitle {
  color: rgb(6, 130, 118);
  padding: 5px;
  text-align: center;
}

.sub {
  padding: 5px;
  text-align: center;
  font-weight: bold; 
}

.green-text {
  background-color: rgb(6, 130, 118);
  color: white; 
  padding: 2px 5px; 
  border-radius: 3px; 
}

.container {
  display: flex;
  justify-content: center;
}

.form {
  background-color: rgb(6, 130, 118);
  color: white;
  text-align: left;
  padding: 20px;
  border: none; 
  border-radius: 5px;
  margin-top: 20px;
  width: 400px; 
}

.form-group {
  margin-bottom: 5px;
}

.input, .radio, .select, .button {
  margin-bottom: 10px;
  width: 100%; 
}

.radio-group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.radio-group label {
  margin-right: 20px; 
}

.link {
  display: block;
  margin-top: 10px;
  text-align: center;
  color: white;
}

.button {
  background-color: #002f61; 
  color: white;
  padding: 10px 20px; 
  border: 2px solid rgb(4, 215, 243); /* Adicionando borda sólida branca */
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3; 
}
  
.error {
  color: red;
}

.no-scroll {
  overflow: hidden;
}

.main-scroll {
  overflow-y: auto;
  max-height: 100vh;
}

.radio-group {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 80px;
}

</style>









