<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { sendPrompt } from '@/api/ai'
import { createConv, updateConv } from '@/api/messageHistory'
import { type User } from '@/api/user'
import Message from './Message.vue'
import Input from './Input.vue'
import WelcomeMessage from './WelcomeMessage.vue'
import ChatHistory from './ChatHistory.vue'
// @ts-ignore
import { supabase } from '@/lib/supabase'

export interface Message {
  text: string
  sender: 'user' | 'ai'
}

const messages = ref<Message[]>([])
const user = ref<User | null>(null)
const chatId = ref<string | null>(null)
const aiThinking = ref(false)

onMounted(async () => {
  const userSession = await supabase.auth.getSession()

  user.value = {
    id: userSession.data.session.user.id,
    email: userSession.data.session.user.email,
  }

  console.log(user)
})

async function handleSend(text: string) {
  messages.value.push({ text, sender: 'user' })

  aiThinking.value = true
  const aiMessage = await sendPrompt(text)
  aiThinking.value = false

  messages.value.push({ text: aiMessage, sender: 'ai' })

  if (user.value) {
    if (!chatId.value) {
      chatId.value = `${user.value.id}_${Date.now()}`

      await createConv(user.value.id, chatId.value, messages.value)
    } else {
      await updateConv(chatId.value, messages.value)
    }
  }
}

const onChatSelected = (selectedChat: { messages: Message[]; id: string }) => {
  console.log(selectedChat)

  messages.value = selectedChat.messages
  chatId.value = selectedChat.id
}

function handleClearChat() {
  messages.value = []
}

function formatMessage(message: string) {
  if (typeof message !== 'string' || message === undefined) {
    return ''
  }

  let formattedMessage = message
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br />')

  return formattedMessage
}
</script>

<template>
  <div class="flex flex-col gap-4 mx-4 mb-32">
    <WelcomeMessage @send-prompt="handleSend" v-if="messages.length === 0" />
    <div
      v-for="(message, index) in messages"
      :key="index"
      :class="[
        'p-2 rounded-md',
        message.sender === 'user'
          ? 'bg-primary text-white dark:text-black'
          : 'bg-secondary',
        message.sender === 'user' ? 'self-end' : 'self-start',
      ]"
    >
      <div v-html="formatMessage(message.text)"></div>
    </div>
    <div v-if="aiThinking" class="self-start p-2 rounded-md bg-secondary">
      <span class="animate-ping">.</span>
      <span class="animate-ping delay-150">.</span>
      <span class="animate-ping delay-300">.</span>
    </div>
    <ChatHistory @chat-selected="onChatSelected" />
    <Input @send="handleSend" @clear-chat="handleClearChat" />
  </div>
</template>
@/lib/supabase
