// @ts-ignore
import { supabase } from '@/lib/supabase'
import { onMounted, ref } from 'vue'
import type { list } from 'postcss'

export interface Message {
  text: string
  sender: 'user' | 'ai'
}
interface Chat {
  title: string
  [key: string]: any
}

export async function createConv(
  userId: string | undefined,
  idChat: string,
  message: Message[]
): Promise<void> {
  try {
    const { data, error }: any = await supabase.from('chat').upsert([
      {
        userId: userId,
        chatId: idChat,
        title: message[0].text,
        messages: message,
      },
    ])

    if (error) {
      console.error('Error creating new row:', error)
    } else {
      console.log('New row created successfully:', data)
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error)
  }
}

export async function updateConv(
  idChat: string,
  listMsg: Message[]
): Promise<void> {
  try {
    const { data, error }: any = await supabase
      .from('chat')
      .update({
        messages: listMsg,
      })
      .eq('chatId', idChat)
    if (error) {
      console.error('Error updating row:', error)
    } else {
      console.log('Row updated successfully:', data)
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error)
  }
}

export async function getUserConv(
  userId: string | undefined
): Promise<Chat[] | undefined> {
  try {
    const { data, error }: any = await supabase
      .from('chat')
      .select('*')
      .eq('userId', userId)

    if (error) {
      console.error('Error updating row:', error)
    } else {
      console.log('Row fetch successfully:', data)

      const chatArray: Chat[] = await data.map((chat: any) => ({
        title: chat.title,
        chatId: chat.chatId,
        messages: chat.messages,
      }))

      return chatArray
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error)
  }
}
