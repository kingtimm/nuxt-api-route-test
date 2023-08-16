<script setup lang="ts">
const { data } = await useFetch('/api/ping')
</script>

<template>
  <div>
    <p>Response from server: {{ data }}</p>
  </div>
</template>
