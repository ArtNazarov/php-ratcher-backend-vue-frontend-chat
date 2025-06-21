<template>
  <div>
    <h1>WebSocket чат</h1>
    <Chat :messages="messages" />
    <MessageInput @send="handleSend" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Message } from './types'
import Chat from './components/Chat.vue'
import MessageInput from './components/MessageInput.vue'

const messages = ref<Message[]>([])
const socket = ref<WebSocket | null>(null)

onMounted(() => {
  const ws = new WebSocket('ws://127.0.0.1:8081')

  ws.onopen = () => {
    console.log('WebSocket connection established')
    ws.send(JSON.stringify({ action: 'history' }))
  }

  ws.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data)
      messages.value = [...messages.value, data]
    } catch (error) {
      console.error('Error parsing message:', error)
    }
  }

  ws.onerror = (error) => {
    console.error('WebSocket error:', error)
  }

  ws.onclose = () => {
    console.log('WebSocket connection closed')
  }

  socket.value = ws
})

onBeforeUnmount(() => {
  if (socket.value) {
    socket.value.close()
  }
})

const handleSend = (nickname: string, message: string) => {
  if (socket.value && socket.value.readyState === WebSocket.OPEN) {
    socket.value.send(JSON.stringify({
      action: 'send',
      nickname: nickname,
      message: message
    }))
  }
}
</script>