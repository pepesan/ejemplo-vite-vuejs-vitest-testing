<template>
  <div class="form-container">
    <form id="miform" @submit.prevent="handleSubmit">
      <h2>Iniciar Sesión</h2>

      <!-- Campo de usuario -->
      <div class="form-group">
        <label for="username">Usuario</label>
        <input
            type="text"
            id="username"
            v-model="form.username"
            :class="{ 'is-invalid': errors.username }"
            placeholder="Ingresa tu usuario"
        />
        <div v-if="errors.username" class="invalid-feedback">
          {{ errors.username[0] }}
        </div>
      </div>

      <!-- Campo de contraseña -->
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input
            type="password"
            id="password"
            v-model="form.password"
            :class="{ 'is-invalid': errors.password }"
            placeholder="Ingresa tu contraseña"
        />
        <div v-if="errors.password" class="invalid-feedback">
          {{ errors.password[0] }}
        </div>
      </div>

      <button type="submit">Enviar</button>
      <p id="resultado">{{ mensaje }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import * as yup from 'yup';

const schema = yup.object({
  // Validación para el campo de usuario
  username: yup
      .string()
      .required('El campo es obligatorio')
      .min(3, 'El usuario debe tener al menos 3 caracteres'),
  // Validación para el campo de contraseña
  password: yup
      .string()
      .required('El campo es obligatorio')
      .min(12, 'La contraseña debe tener al menos 12 caracteres'),
});

// Definición del valor inicial de los campos
const form = reactive({
  username: '',
  password: '',
});

// Mensajes a mostrar (errores y mensaje)
const errors = ref({});
const mensaje = ref('');

// Función para manejar el envío del formulario
const handleSubmit = async () => {
  try {
    await schema.validate(form, { abortEarly: false });
    // Si la validación pasa, puedes enviar el formulario
    console.log('Formulario enviado:', form);
    mensaje.value = 'Formulario enviado exitosamente';
    // Limpiar errores si la validación es exitosa
    errors.value = {};
  } catch (err) {
    // Toma todos los errores que encontró el formulario
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

<style>
/* Contenedor principal del formulario */
.form-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Título del formulario */
form h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

/* Grupo de cada campo */
.form-group {
  margin-bottom: 20px;
}

/* Etiquetas de los campos */
.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

/* Estilos de los campos de entrada */
.form-group input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

/* Estilos al enfocar los campos */
.form-group input:focus {
  border-color: #007bff;
  outline: none;
}

/* Estilos para campos inválidos */
.is-invalid {
  border-color: red;
}

/* Mensajes de error */
.invalid-feedback {
  color: red;
  margin-top: 5px;
  font-size: 14px;
}

/* Botón de envío */
button[type="submit"] {
  width: 100%;
  padding: 12px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Efecto hover en el botón */
button[type="submit"]:hover {
  background-color: #0056b3;
}

/* Mensaje de resultado */
#resultado {
  margin-top: 25px;
  text-align: center;
  color: green;
  font-weight: bold;
  font-size: 16px;
}
</style>
