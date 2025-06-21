<template>
  <form @submit.prevent="handleSubmit" style="margin-top: 10px">
    <div>
      <label>
        Ник: 
        <input 
          type="text" 
          v-model="nickname" 
        />
      </label>
    </div>
    <div>
      <label>
        Сообщение: 
        <input 
          type="text" 
          v-model="message"
          style="width: 300px"
        />
      </label>
      <button type="submit">Отправить</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const nickname = ref('')
const message = ref('')

const emit = defineEmits<{
  (e: 'send', nickname: string, message: string): void
}>()

const handleSubmit = () => {
  if (nickname.value.trim() && message.value.trim()) {
    emit('send', nickname.value, message.value)
    message.value = ''
  }
}
</script>