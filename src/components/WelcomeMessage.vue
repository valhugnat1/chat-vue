<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
const emit = defineEmits(['send-prompt'])

// const user = ref<User | null>(null)

const examplePrompts = [
  'Explain quantum physics in a pirate voice.',
  'Imagine you are a time traveler. Narrate your adventures using song lyrics.',
  'Write a haiku about the color blue in a language of your choice.',
]

function handlePromptClick(prompt: string) {
  if (true /* user.value */) {
    emit('send-prompt', prompt)
  } else {
    toast.error('Please sign in to send a message.')
  }
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Hello, I'm Craft GPT !</CardTitle>
      <CardDescription
        >Start a conversation with me by sending a message.</CardDescription
      >
    </CardHeader>
    <CardContent class="flex flex-col gap-4 my-3">
      <Button
        v-for="(prompt, index) in examplePrompts"
        :key="index"
        variant="outline"
        :example="true"
        @click="handlePromptClick(prompt)"
      >
        {{ prompt }}
      </Button>
    </CardContent>
  </Card>
</template>
