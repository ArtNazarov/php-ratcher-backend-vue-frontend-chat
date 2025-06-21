<template>
  <div class="chat-container">
    <div v-for="(msg, index) in messages" :key="index">
      [{{ formatTime(msg.timestamp) }}] <b>{{ msg.nickname }}:</b> {{ msg.message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Message } from '../../types'

const props = defineProps<{
  messages: Message[]
}>()

const formatTime = (timestamp: number): string => {
  const ts = new Date(parseInt(timestamp.toString()))
  return ts.toLocaleTimeString()
}
</script>

<style scoped>
.chat-container {
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
  overflow-y: auto;
  padding: 10px;
  font-family: monospace;
  background-color: #f9f9f9;
}
</style>