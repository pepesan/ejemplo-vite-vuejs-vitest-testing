<template>
  <div v-if="isLoading">Cargando resultados...</div>
  <div v-else-if="error">Error al cargar los datos: {{ error }}</div>
  <table v-else>
    <thead>
      <tr>
        <td>Logo</td>
        <td>Nombre</td>
        <td>Diputados</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="partido in partidos" :key="partido.nombre">
        <td>
          <img class="image-50x50"
             :src="`https://pactometro.cursosdedesarrollo.com/img/${partido.imagen}`"
             :alt="partido.nombre" />
        </td>
        <td>{{ partido.nombre }}</td><td> {{ partido.dipu }} diputados</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const partidos = ref([]);
    const isLoading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        const response = await axios.get('https://pactometro.cursosdedesarrollo.com/resultados.json');
        partidos.value = response.data;
      } catch (err) {
        error.value = err.message;
      } finally {
        isLoading.value = false;
      }
    });

    return { partidos, isLoading, error };
  },
};
</script>

<style scoped>
.image-50x50 {
  width: 50px;
  height: 50px;
}
</style>