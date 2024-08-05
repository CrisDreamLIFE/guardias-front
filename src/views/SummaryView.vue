<template>
  <v-container>
    <h1>Resumen semanal</h1>
    <v-row>
      <v-col lg="4">
        <v-container>
          <div v-for="summary in data.summary" :key="summary.id">
            <v-row>
              <v-col :style="{ backgroundColor: summary.color }">
                <p>{{ summary.name }}</p>
              </v-col>
              <v-col>
                <p>{{ summary.shift_count }}</p>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-col>
      <v-col lg="8">
        <div v-for="days in data.days" :key="days.id">
          <v-container>
            <h2>{{ days.label }}</h2>
            <v-row>
              <v-col></v-col>
              <v-col v-for="(engineer, index) in days.blocks[0].engineers" :key="index">
                <p>{{ engineer.name }}</p>
              </v-col>
            </v-row>
            <div v-for="(block, index) in days.blocks" :key="block.id">
              <v-row>
                <v-col :class="{ 'bg-red': block.engineer == null, 'bg-green': block.engineer != null }">{{
                  block.start_time.split('T')[1].split('.')[0] }} - {{
                    block.end_time.split('T')[1].split('.')[0]
                  }}</v-col>
                <v-col :style="block.engineer ? { backgroundColor: block.engineer.color } : {}">
                  <div v-if="block.engineer != null">
                    {{ block.engineer.name }}
                  </div>
                  <div v-else>
                    Sin asignar
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-container>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const data = ref({});
const route = useRoute();

const fetchBlocksWithSummary = async (weekId) => {
  try {
    const response = await fetch(`http://localhost:3000/weeks/${weekId}/show_blocks_with_summary`);
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
  fetchBlocksWithSummary(weekId);
});
</script>