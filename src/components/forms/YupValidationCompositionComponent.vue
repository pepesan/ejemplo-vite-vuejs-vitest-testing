<template>
  <form @submit.prevent="handleSubmit">
    <!-- v-model= form.name  asocia el campo con el reactive -->
    <input type="text" v-model="form.name" :class="{ 'is-invalid': errors.name }" />
    <!--v-if="errors.name"  asocia el div con los errores del campo -->
    <div v-if="errors.name" class="invalid-feedback">{{ errors.name[0] }}</div>
    <button type="submit">Enviar</button>
    <p id="resultado">{{mensaje}}</p>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue';
import * as yup from 'yup';

const schema = yup.object({
  // campo: validaciones asociadas al campo
  // string define que debe ser una string
  // min: define que debe tener un número mínimo de caracteres
  name: yup.string().required("El campo es obligatorio").min(3, 'El nombre debe tener al menos 3 caracteres'),

});
// definición del valor incial de los campos
const form = reactive({
  // nombre de campo: valor del inicial del campo
  name: '',
});

// mensajes a mostrar (errores y mensaje)
const errors = ref({});
const mensaje = ref("");

const handleSubmit = async () => {
  try {
    await schema.validate(form, { abortEarly: false });
    // Si la validación pasa, puedes enviar el formulario
    console.log('Formulario enviado:', form);
    mensaje.value = JSON.stringify(form);
  } catch (err) {
    // toma todos los errores que encontró el formulario
    errors.value = err.inner.reduce((prev, curr) => {
      if (!prev[curr.path]) {
        prev[curr.path] = [];
      }
      prev[curr.path].push(curr.message);
      return prev;
    }, {});
    console.log(errors.value);
  }
};
</script>