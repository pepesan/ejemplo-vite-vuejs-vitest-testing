<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">Título:</label>
      <input v-model="formData.title" id="title" type="text" />
      <div v-if="errors.title">{{ errors.title }}</div>
    </div>
    <div>
      <label for="body">Contenido:</label>
      <textarea v-model="formData.body" id="body"></textarea>
      <div v-if="errors.body">{{ errors.body }}</div>
    </div>
    <button type="submit">Enviar</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import axios from 'axios';
import * as yup from 'yup';

export default defineComponent({
  name: 'FormularioComponent',
  setup() {
    const formData = reactive({
      title: '',
      body: '',
    });

    const errors = reactive({
      title: '',
      body: '',
    });

    const schema = yup.object().shape({
      title: yup.string().required('El título es obligatorio'),
      body: yup.string().required('El contenido es obligatorio'),
    });

    const onSubmit = async () => {
      try {
        // Validar el formulario
        await schema.validate(formData, { abortEarly: false });
        // Limpiar errores si la validación es exitosa
        errors.title = '';
        errors.body = '';

        // Enviar petición POST
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
        console.log('Formulario enviado exitosamente', response.data);
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          // Manejar errores de validación
          err.inner.forEach((validationError) => {
            errors[validationError.path] = validationError.message;
          });
        } else {
          // Manejar otros errores
          console.error('Error al enviar el formulario', err);
        }
      }
    };

    return {
      formData,
      errors,
      onSubmit,
    };
  },
});
</script>
