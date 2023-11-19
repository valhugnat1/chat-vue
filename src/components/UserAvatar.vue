<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from './ui/button'
import { User2 } from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
// @ts-ignore
import { supabase } from '@/lib/supabase'
</script>
<script lang="ts">
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
  },
  methods: {
    async signOut() {
      try {
        this.session = ''
        await supabase.auth.signOut()
      } catch (error) {
        console.error('Error signing out:', error)
      }
    },
  },
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant="ghost">
        <User2 class="h-5 w-5" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent v-if="session">
      <!--  <router-link to="/account">
        <DropdownMenuItem > Account </DropdownMenuItem>
      </router-link> -->
      <router-link to="/signin">
        <DropdownMenuItem @click="signOut"> Logout </DropdownMenuItem>
      </router-link>
    </DropdownMenuContent>
    <DropdownMenuContent v-else>
      <router-link to="/signin">
        <DropdownMenuItem> Sign in </DropdownMenuItem>
      </router-link>

      <router-link to="/signup">
        <DropdownMenuItem> Sign up </DropdownMenuItem>
      </router-link>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
