<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import HomeForm from '@/components/HomeForm.vue';
import { ref } from 'vue';
const router = useRouter();

const selectedWeek = ref(null);

const handleSelectedWeek = (weekId) => {
  selectedWeek.value = weekId;
};

const goToAvailability = () => {
  if (selectedWeek.value) {
    router.push({ name: 'availability', params: { weekId: selectedWeek.value } });
  }
};
</script>

<template>
  <h1>Turnos App</h1>
  <HomeForm @update:selectedWeek="handleSelectedWeek"></HomeForm>
  <div v-if="selectedWeek">
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="goToAvailability" :disabled="!selectedWeek">Disponibilidad</v-btn>
      </v-col>
      <v-col>
        <v-btn to="/availability">
          Disponibilidad
        </v-btn>
      </v-col>
      <v-col>
        <v-btn to="/availability">
          Availavility
        </v-btn>
      </v-col>
    </v-row>
    <RouterView />
  </v-container>
  </div>
</template>

<style scoped>
</style>
