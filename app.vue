<script setup lang="ts">
const prompt = ref('ping')
const computedPrompt = computed(() => prompt.value)
const { data, refresh } = await useFetch('/api/ping', { method: 'post', body: { prompt: computedPrompt }, watch: [prompt] })

async function toggle() {
  if (prompt.value === 'ping')
    prompt.value = 'pong'

  else
    prompt.value = 'ping'
}
</script>

<template>
  <div>
    <button @click="toggle()">
      Toggle
    </button>
    <p>Prompt to Server: {{ prompt }}</p>
    <p id="response">
      Response from Server: {{ data }}
    </p>
  </div>
</template>
