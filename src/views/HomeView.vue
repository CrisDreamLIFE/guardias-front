<!-- <template>
    <h1>Turnos App</h1>
    <HomeForm ></HomeForm>
</template>

<script setup>
  import HomeForm from '@/components/HomeForm.vue';
  const data = () => ({ value: 0 });
</script>

<style scoped>
  .home {
    text-align: center;
  }
</style> -->

<template>
  <h1>Turnos App</h1>
  <HomeForm @update:selectedService="handleSelectedService"></HomeForm>
  <p>Selected Service ID: {{ selectedService }}</p>
</template>

<script setup>
import HomeForm from '@/components/HomeForm.vue';
import { ref } from 'vue';

const selectedService = ref(null);

const handleSelectedService = (serviceId) => {
  selectedService.value = serviceId;
};
</script>

<style scoped>
  .home {
    text-align: center;
  }
</style>

<!-- <v-container>
    
    <v-row align="center" justify="center">
  <v-col cols="auto">
    <v-btn density="compact">Compact Button</v-btn>
  </v-col>

  <v-col cols="auto">
    <v-btn density="comfortable">Comfortable Button</v-btn>
  </v-col>

  <v-col cols="auto">
    <v-btn density="default">Default Button</v-btn>
  </v-col>
</v-row>
</v-container> -->
