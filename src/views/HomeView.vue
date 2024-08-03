<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->
<template>
  <div class="home">
    <h1>Turno Manager</h1>
    <nav>
      <RouterLink to="/availability">Disponibilidad</RouterLink>
      <RouterLink to="/turnos-confirmados">Turnos Confirmados</RouterLink>
    </nav>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  text-align: center;
}

/* nav a {
  margin: 0 10px;
  text-decoration: none;
  color: blue;
} */
</style>
