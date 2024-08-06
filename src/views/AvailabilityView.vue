<template>
    <v-container>
        <h1>Disponibilidad</h1>
        <div v-if="loading" class="text-center">
            <v-progress-circular indeterminate></v-progress-circular>
        </div>
        <div v-for="days in data.days" :key="days.id">
            <v-container class="text-center">
                <h2 class="text-left">{{ days.label }}</h2>
                <v-row class="text-center">
                    <v-col></v-col>
                    <v-col v-for="(engineer, index) in days.blocks[0].engineers" :key="index">
                        <p>{{ engineer.name }}</p>
                    </v-col>
                </v-row>
                <div v-for="(block, index) in days.blocks" :key="index">
                    <v-row>
                        <v-col class="border">{{ block.start_time.split('T')[1].split('.')[0] }} - {{
                            block.end_time.split('T')[1].split('.')[0] }}</v-col>
                        <v-col class="border" v-for="(engineer, idx) in block.engineers" :key="idx">
                            <p v-if="engineer.available">1
                            </p>
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
const loading = ref(true);

const fetchAvailability = async (weekId) => {
    try {
        const response = await fetch(`http://localhost:3000/weeks/${weekId}/show_blocks_with_availability`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        data.value = result;
        loading.value = false;
    } catch (error) {
        console.error('Error fetching availability:', error);
        loading.value = false;
    }
};

onMounted(() => {
    const weekId = route.params.weekId;
    fetchAvailability(weekId);
});
</script>

<style scoped>
.border {
    border-color: black !important;
    border-width: 1px !important;
    border-style: solid;
    margin-bottom: 11px;
    margin-right: -1px;
}
</style>
