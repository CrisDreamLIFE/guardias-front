<template>
  <v-container>
    <h1>Editar Disponibilidad de Ingenieros</h1>
    <div v-if="loading" class="text-center">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <v-form v-else>
      <v-row v-for="day in data.days" :key="day.id" class="mb-4">
        <v-col lg="12">
          <h3>{{ day.label }}</h3>
          <v-row v-for="block in day.blocks" :key="block.id">
            <v-col lg="3">
              {{ block.start_time.split('T')[1].split('.')[0] }} - {{ block.end_time.split('T')[1].split('.')[0] }}
            </v-col>
            <v-col lg="9">
              <v-row>
                <v-col v-for="engineer in block.engineers" :key="engineer.id">
                  <v-checkbox color="indigo-darken-3" v-model="engineer.available" :label="engineer.name"></v-checkbox>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-btn color="primary" @click="saveAvailability">Guardar Cambios</v-btn>
    </v-form>
  </v-container>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const data = ref({});
const route = useRoute();

const fetchAvailability = async (weekId) => {
  try {
    const response = await fetch(`http://localhost:3000/weeks/${weekId}/show_blocks_with_availability`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    data.value = result;
  } catch (error) {
    console.error('Error fetching availability:', error);
  }
};

const saveAvailability = async () => {
  try {
    console.log("fsdfouhsdjfsfl")
    const payload = {
      days: data.value.days.map(day => ({
        id: day.id,
        blocks: day.blocks.map(block => ({
          id: block.id,
          availabilities: block.engineers.filter(engineer => engineer.available).map(engineer => engineer.id)
        }))
      }))
    }
    const response = await fetch(`http://localhost:3000/weeks/${route.params.weekId}/availability`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    alert('Disponibilidad guardada con éxito')
  } catch (error) {
    console.error('Error saving availability:', error)
    alert('Error al guardar disponibilidad')
  }
}

onMounted(() => {
  const weekId = route.params.weekId;
  fetchAvailability(weekId);
});
</script>