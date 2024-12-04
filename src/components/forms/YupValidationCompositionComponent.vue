<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="form.name" :class="{ 'is-invalid': errors.name }" />
    <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
    <button type="submit">Enviar</button>
    <p id="resultado">{{mensaje}}</p>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
});

const form = reactive({
  name: '',
});

const errors = ref({});
const mensaje = ref("");

const handleSubmit = async () => {
  try {
    await schema.validate(form, { abortEarly: false });
    // Si la validación pasa, puedes enviar el formulario
    console.log('Formulario enviado:', form);
    mensaje.value = JSON.stringify(form);
  } catch (err) {
    // toma todos los errores que encontró el
    errors.value = err.inner.reduce((prev, curr) => {
      if (!prev[curr.path]) {
        prev[curr.path] = [];
      }
      prev[curr.path].push(curr.message);
      return prev;
    }, {});
  }
};
</script>