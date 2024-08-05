<!-- <template>
  <v-container>
    <div v-if=services.length>
      <v-select
        v-model="selectedService"
        label="Servicios"
        :items="services"
        item-title="name"
        item-value="id"
      ></v-select>
    </div>
    <div v-else class="text-center">
      <div class="spinner-border spinner-border-sm"></div>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const services = ref([]);
const selectedService = ref(null);

const fetchServices = async () => {
  try {
    const response = await fetch('http://localhost:3000/services');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    services.value = data;
  } catch (error) {
    console.error('Error fetching services:', error);
  }
};

onMounted(() => {
  fetchServices();
});
</script> -->
<template>
  <v-container>
    <div v-if="services.length">
      <v-select
        v-model="selectedService"
        label="Servicios"
        :items="services"
        item-title="name"
        item-value="id"
      ></v-select>
    </div>
    <div v-else class="text-center">
      <div class="spinner-border spinner-border-sm"></div>
    </div>
    <div v-if="selectedService">
      <v-select
        v-model="selectedWeek"
        label="Semanas"
        :items="weeks"
        item-title="label"
        item-value="id"
      ></v-select>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted, defineEmits, watch } from 'vue';

const emit = defineEmits(['update:selectedWeek']);

const services = ref([]);
const weeks = ref([]);
const selectedService = ref(null);
const selectedWeek = ref(null);

const fetchServices = async () => {
  try {
    const response = await fetch('http://localhost:3000/services');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    services.value = data;
  } catch (error) {
    console.error('Error fetching services:', error);
  }
};

const fetchWeeks = async () => {
  try {
    const response = await fetch('http://localhost:3000/services/'+selectedService+'/weeks');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    weeks.value = data;
  } catch (error) {
    console.error('Error fetching services:', error);
  }
};

onMounted(() => {
  fetchServices();
});

watch(selectedService, (newValue) => {
  if (newValue !== null) {
    fetchWeeks();
  }
  emit('update:selectedService', newValue);
});

watch(selectedWeek, (newValue) => {
  emit('update:selectedWeek', newValue);
});
</script>