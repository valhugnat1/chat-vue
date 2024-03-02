<script setup lang="ts">
import ThemeToggler from './ThemeToggler.vue'
import UserAvatar from './UserAvatar.vue'
import { Bot } from 'lucide-vue-next'
// @ts-ignore
import { supabase } from '@/lib/supabase'
</script>

<script lang="ts">
import logoImage from '@/assets/logo-horizontal-white-1.png'
export default {
  data() {
    return {
      session: '' as string,
    }
  },
  async mounted() {
    try {
      const { data }: any = await supabase.auth.getSession()
      if (data) {
        this.session = data.session.user.email
        console.log(this.session)
      }
    } catch (error) {
      console.error('Error fetching session:', error)
    }

    supabase.auth.onAuthStateChange((event: any, session: any) => {
      console.log(event)
      if (event == 'SIGNED_OUT') {
        this.session = ''
      } else if (event != 'INITIAL_SESSION') {
        console.log(session)

        this.session = session.user.email
      }
    })
  },
  computed: {
    currentURL() {
      return window.location.pathname
    },
  },
}
</script>

<template>
  <header class="bg-background sticky top-0 z-40 w-full border-b">
    <div class="container flex h-16 items-center justify-between">
      <router-link to="/">
        <nav class="flex items-center space-x-2 ml-3">
          <!-- <Bot class="w-6 h-6 mr-2" /> -->
          <div class="w-24">
            <img
              :src="logoImage"
              alt="Logo"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- <span class="font-bold">ChatBot</span> -->
        </nav>
      </router-link>
      <div class="flex flex-1 items-center justify-end space-x-2">
        <nav class="md:flex items-center space-x-2">
          <ThemeToggler />
        </nav>
        <nav class="md:flex items-center space-x-2">
          <UserAvatar />
        </nav>
        {{ session }}
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #000e5c; /* Set the desired background color */
  color: white;
}
</style>
