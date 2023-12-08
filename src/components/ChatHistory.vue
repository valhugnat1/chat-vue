<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { History } from 'lucide-vue-next'
import { X } from 'lucide-vue-next'
import { getUserConv } from '@/api/messageHistory'
// @ts-ignore
import { supabase } from '@/lib/supabase'
import type { User } from '@/api/user'

const user = ref<User | null>(null)
interface Chat {
  title: string
  [key: string]: any
}
const chats = ref<Chat[]>([])
const emit = defineEmits(['chat-selected'])

const sheetOpened = ref(false)

onMounted(async () => {
  const userSession = await supabase.auth.getSession()

  if (userSession) {
    user.value = {
      id: userSession.data?.session?.user?.id,
      email: userSession.data?.session?.user?.email,
    }

    console.log(user)
    if (user.value != undefined) {
      let value = await getUserConv(user.value.id)
      if (value !== undefined) {
        chats.value = value
        console.log(chats.value)
      }
    }
  }
})

function handleSelectChat(chat: Chat) {
  console.log(chat)

  emit('chat-selected', { messages: chat.messages, id: chat.chatId })
}

async function deleteChat(chat: Chat) {
  try {
    // await deleteDoc(doc(db, 'chats', chat.id))
    chats.value = chats.value.filter(c => c.id !== chat.id)
  } catch (error) {
    console.error('Error deleting chat:', error)
  }
}
</script>

<template>
  <Sheet>
    <SheetTrigger>
      <Button variant="ghost" class="mr-4">
        <History class="w-5 h-5" />
      </Button>
    </SheetTrigger>
    <SheetContent :side="'left'">
      <SheetHeader>
        <SheetTitle class="my-4">Chat History</SheetTitle>
      </SheetHeader>
      <hr />
      <div class="my-4">
        <div v-for="(chat, index) in chats" :key="index">
          <div class="flex items-center justify-between mb-2">
            <Button
              variant="ghost"
              @click="handleSelectChat(chat)"
              class="w-full"
              ><SheetClose>
                {{ chat.title }}
              </SheetClose>
            </Button>
            <Button variant="ghost" @click="deleteChat(chat)">
              <X class="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
