<template>
    <v-container>
      <v-row>
        <v-col><h1>Turnos Asignados</h1></v-col>
        <v-col><v-btn @click="assign_shifts">Asignar Turnos</v-btn></v-col>
      </v-row>  
      <div v-for="days in data.days" :key="days.id">
        <v-container>
          <h2>{{ days.label }}</h2>
          <v-row>
            <v-col></v-col>
            <v-col v-for="(engineer, index) in days.blocks[0].engineers" :key="index">
              <p>{{ engineer.name }}</p>
            </v-col>
          </v-row>
          <div v-for="(block, index) in days.blocks" :key="index">
            <v-row  :class="{'bg-red': block.engineer_id == null}">
              <v-col>{{ block.start_time.split('T')[1].split('.')[0] }} - {{ block.end_time.split('T')[1].split('.')[0] }}</v-col>
              <v-col v-for="(engineer, idx) in block.engineers" :key="idx">
                <p v-if="block.engineer_id==engineer.id">1</p>
                <p v-else></p>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const data = ref({});
  const route = useRoute();
  
  const assign_shifts = async () => {
     try {
      const weekId = route.params.weekId;
      const response = await fetch(`http://localhost:3000/weeks/${weekId}/assign_shifts`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      data.value = result;
    } catch (error) {
      console.error('Error fetching blocks:', error);
    }
  }
  
  const fetchBlocksWithEngineer = async (weekId) => {
    try {
      const response = await fetch(`http://localhost:3000/weeks/${weekId}/show_blocks_with_engineer`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      data.value = result;
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  };
  
  onMounted(() => {
    const weekId = route.params.weekId;
    fetchBlocksWithEngineer(weekId);
  });
  </script>
  