<template>
  <h1 class="text-center">Turnos App</h1>
  <HomeForm @update:selectedWeek="handleSelectedWeek"></HomeForm>
  <div v-if="selectedWeek">
    <v-container>
      <v-row>
        <v-col>
          <v-btn @click="goToAvailability" :disabled="!selectedWeek">Disponibilidad</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="goToAssignedShifts" :disabled="!selectedWeek">Turnos Asignados </v-btn>
        </v-col>
        <v-col>
          <v-btn @click="goToSummary" :disabled="!selectedWeek">Resumen </v-btn>
        </v-col>
        <v-col>
          <v-btn @click="goToEditAbailability" :disabled="!selectedWeek">Editar Disponibilidad </v-btn>
        </v-col>
      </v-row>
      <RouterView />
    </v-container>
  </div>
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router'
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

const goToAssignedShifts = () => {
  if (selectedWeek.value) {
    router.push({ name: 'assignedShifts', params: { weekId: selectedWeek.value } });
  }
};

const goToSummary = () => {
  if (selectedWeek.value) {
    router.push({ name: 'summary', params: { weekId: selectedWeek.value } });
  }
}

const goToEditAbailability = () => {
  if (selectedWeek.value) {
    router.push({ name: 'editAvailability', params: { weekId: selectedWeek.value } });
  }
}
</script>
