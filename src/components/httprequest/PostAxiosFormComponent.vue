<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="title">Título:</label>
      <input v-model="formData.title" id="title" type="text" />
      <div id="errors-title" v-if="errors.title" class="error">{{ errors.title }}</div>
    </div>
    <div class="form-group">
      <label for="body">Contenido:</label>
      <textarea v-model="formData.body" id="body"></textarea>
      <div id="errors-body" v-if="errors.body" class="error">{{ errors.body }}</div>
    </div>
    <button type="submit">Enviar</button>
  </form>

  <div v-if="successMessage" class="success">
    <p>{{ successMessage }}</p>
    <pre>{{ responseData }}</pre>
  </div>

  <div v-if="submitError" class="submit-error">
    <p>{{ submitError }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
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

    const successMessage = ref('');
    const submitError = ref('');
    const responseData = ref(null);

    const schema = yup.object().shape({
      title: yup.string().required('El título es obligatorio'),
      body: yup.string().required('El contenido es obligatorio'),
    });

    const onSubmit = async () => {
      try {
        // Validar el formulario
        await schema.validate(formData, { abortEarly: false });
        // Limpiar errores previos
        errors.title = '';
        errors.body = '';
        successMessage.value = '';
        submitError.value = '';
        responseData.value = null;

        // Enviar petición POST
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
        console.log('Formulario enviado exitosamente', response.data);

        // Mostrar mensaje de éxito y datos de respuesta
        successMessage.value = '¡Formulario enviado exitosamente!';
        responseData.value = response.data;
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          // Manejar errores de validación
          err.inner.forEach((validationError) => {
            errors[validationError.path] = validationError.message;
          });
        } else {
          // Manejar otros errores
          console.error('Error al enviar el formulario', err);
          submitError.value = 'Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.';
        }
      }
    };

    return {
      formData,
      errors,
      onSubmit,
      successMessage,
      submitError,
      responseData,
    };
  },
});
</script>

<style scoped>
form {
  max-width: 500px;
  margin: 2em auto;
  padding: 1.5em;
  background: #f7f7f7;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1.5em;
}

label {
  margin-bottom: 0.5em;
  color: #333;
  display: block;
  font-weight: bold;
}

input,
textarea {
  border: 1px solid #ccc;
  padding: 0.75em;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 1em;
}

input:focus,
textarea:focus {
  border-color: #007BFF;
  outline: none;
}

button {
  padding: 0.75em;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 4px;
  width: 100%;
  font-size: 1em;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: #e74c3c;
  font-size: 0.9em;
  margin-top: 0.5em;
}

.success {
  max-width: 500px;
  margin: 2em auto;
  padding: 1.5em;
  background: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  color: #155724;
}

.submit-error {
  max-width: 500px;
  margin: 2em auto;
  padding: 1.5em;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  color: #721c24;
}

pre {
  background: #e9ecef;
  padding: 1em;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
