<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="username" placeholder="Nombre de usuario" />
    <input type="password" v-model="password" placeholder="Contraseña" />
    <button type="submit">Iniciar sesión</button>
    <p id="form-error" v-if="error">{{ error }}</p>
    <p id="form-message" v-if="!error">Success: {{message}}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const error = ref(null);
const message = ref(null);

const handleSubmit = () => {
  if (username.value === 'admin' && password.value === 'password') {
    // Simulación de inicio de sesión exitoso
    console.log('Inicio de sesión exitoso');
    message.value = 'Inicio de sesión exitoso';
  } else {
    error.value = 'Credenciales incorrectas';
  }
};
</script>