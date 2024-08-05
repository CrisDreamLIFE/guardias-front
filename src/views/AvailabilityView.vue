<!-- <template>
  <v-container>
    <H1>Availability</H1>
    <div v-for="(days) in data.days">
      <v-container>
        <h2>{{ days.label }}</h2>
        <v-row>
          <v-col></v-col>
          <v-col v-for="(engineer) in days.blocks[0].engineers">
              <p>{{ engineer.name }}</p>
            </v-col>
        </v-row>
        <div  v-for="(block, index) in days.blocks">
          <v-row>
            <v-col>{{ block.start_time.split("T")[1].split(".")[0] }} - {{ block.end_time.split("T")[1].split(".")[0]  }}</v-col>
            <v-col v-for="(engineer) in block.engineers">
              <p v-if="engineer.available">1</p>
              <p v-else></p>
            </v-col>
          </v-row>
        </div>
      </v-container>
      
    </div>
    <v-row>
      <v-col>
      </v-col>
    </v-row>
  </v-container>  
</template>

<script setup>
    const data = {};
//   const data = {
//     "days": [{
//         "id": 155,
//         "label": "Lunes",
//         "week_id": 23,
//         "blocks": [{
//             "id": 617,
//             "start_time": "2024-07-29T08:00:00.000Z",
//             "end_time": "2024-07-29T09:00:00.000Z",
//             "day_id": 155,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 618,
//             "start_time": "2024-07-29T10:00:00.000Z",
//             "end_time": "2024-07-29T11:00:00.000Z",
//             "day_id": 155,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 619,
//             "start_time": "2024-07-29T12:00:00.000Z",
//             "end_time": "2024-07-29T13:00:00.000Z",
//             "day_id": 155,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 620,
//             "start_time": "2024-07-29T14:00:00.000Z",
//             "end_time": "2024-07-29T15:00:00.000Z",
//             "day_id": 155,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }]
//     }, {
//         "id": 156,
//         "label": "Martes",
//         "week_id": 23,
//         "blocks": [{
//             "id": 621,
//             "start_time": "2024-07-29T08:00:00.000Z",
//             "end_time": "2024-07-29T09:00:00.000Z",
//             "day_id": 156,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 622,
//             "start_time": "2024-07-29T10:00:00.000Z",
//             "end_time": "2024-07-29T11:00:00.000Z",
//             "day_id": 156,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 623,
//             "start_time": "2024-07-29T12:00:00.000Z",
//             "end_time": "2024-07-29T13:00:00.000Z",
//             "day_id": 156,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 624,
//             "start_time": "2024-07-29T14:00:00.000Z",
//             "end_time": "2024-07-29T15:00:00.000Z",
//             "day_id": 156,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }]
//     }, {
//         "id": 157,
//         "label": "Miércoles",
//         "week_id": 23,
//         "blocks": [{
//             "id": 625,
//             "start_time": "2024-07-29T08:00:00.000Z",
//             "end_time": "2024-07-29T09:00:00.000Z",
//             "day_id": 157,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 626,
//             "start_time": "2024-07-29T10:00:00.000Z",
//             "end_time": "2024-07-29T11:00:00.000Z",
//             "day_id": 157,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 627,
//             "start_time": "2024-07-29T12:00:00.000Z",
//             "end_time": "2024-07-29T13:00:00.000Z",
//             "day_id": 157,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 628,
//             "start_time": "2024-07-29T14:00:00.000Z",
//             "end_time": "2024-07-29T15:00:00.000Z",
//             "day_id": 157,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }]
//     }, {
//         "id": 158,
//         "label": "Jueves",
//         "week_id": 23,
//         "blocks": [{
//             "id": 629,
//             "start_time": "2024-07-29T08:00:00.000Z",
//             "end_time": "2024-07-29T09:00:00.000Z",
//             "day_id": 158,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 630,
//             "start_time": "2024-07-29T10:00:00.000Z",
//             "end_time": "2024-07-29T11:00:00.000Z",
//             "day_id": 158,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 631,
//             "start_time": "2024-07-29T12:00:00.000Z",
//             "end_time": "2024-07-29T13:00:00.000Z",
//             "day_id": 158,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 632,
//             "start_time": "2024-07-29T14:00:00.000Z",
//             "end_time": "2024-07-29T15:00:00.000Z",
//             "day_id": 158,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }]
//     }, {
//         "id": 159,
//         "label": "Viernes",
//         "week_id": 23,
//         "blocks": [{
//             "id": 633,
//             "start_time": "2024-07-29T08:00:00.000Z",
//             "end_time": "2024-07-29T09:00:00.000Z",
//             "day_id": 159,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 634,
//             "start_time": "2024-07-29T10:00:00.000Z",
//             "end_time": "2024-07-29T11:00:00.000Z",
//             "day_id": 159,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 635,
//             "start_time": "2024-07-29T12:00:00.000Z",
//             "end_time": "2024-07-29T13:00:00.000Z",
//             "day_id": 159,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 636,
//             "start_time": "2024-07-29T14:00:00.000Z",
//             "end_time": "2024-07-29T15:00:00.000Z",
//             "day_id": 159,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }]
//     }, {
//         "id": 160,
//         "label": "Sábado",
//         "week_id": 23,
//         "blocks": [{
//             "id": 637,
//             "start_time": "2024-07-29T08:00:00.000Z",
//             "end_time": "2024-07-29T09:00:00.000Z",
//             "day_id": 160,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 638,
//             "start_time": "2024-07-29T10:00:00.000Z",
//             "end_time": "2024-07-29T11:00:00.000Z",
//             "day_id": 160,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 639,
//             "start_time": "2024-07-29T12:00:00.000Z",
//             "end_time": "2024-07-29T13:00:00.000Z",
//             "day_id": 160,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 640,
//             "start_time": "2024-07-29T14:00:00.000Z",
//             "end_time": "2024-07-29T15:00:00.000Z",
//             "day_id": 160,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }]
//     }, {
//         "id": 161,
//         "label": "Domingo",
//         "week_id": 23,
//         "blocks": [{
//             "id": 641,
//             "start_time": "2024-07-29T08:00:00.000Z",
//             "end_time": "2024-07-29T09:00:00.000Z",
//             "day_id": 161,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 642,
//             "start_time": "2024-07-29T10:00:00.000Z",
//             "end_time": "2024-07-29T11:00:00.000Z",
//             "day_id": 161,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 643,
//             "start_time": "2024-07-29T12:00:00.000Z",
//             "end_time": "2024-07-29T13:00:00.000Z",
//             "day_id": 161,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }, {
//             "id": 644,
//             "start_time": "2024-07-29T14:00:00.000Z",
//             "end_time": "2024-07-29T15:00:00.000Z",
//             "day_id": 161,
//             "engineers": [{
//                 "name": "Ernesto",
//                 "available": true
//             }, {
//                 "name": "Bárbara",
//                 "available": false
//             }, {
//                 "name": "Benjamín",
//                 "available": false
//             }, {
//                 "name": "Cristian",
//                 "available": true
//             }]
//         }]
//     }]
// }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->

<template>
    <v-container>
      <h1>Disponibilidad</h1>
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
            <v-row>
              <v-col>{{ block.start_time.split('T')[1].split('.')[0] }} - {{ block.end_time.split('T')[1].split('.')[0] }}</v-col>
              <v-col v-for="(engineer, idx) in block.engineers" :key="idx">
                <p v-if="engineer.available">1</p>
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
  
  onMounted(() => {
    const weekId = route.params.weekId;
    fetchAvailability(weekId);
  });
  </script>
  