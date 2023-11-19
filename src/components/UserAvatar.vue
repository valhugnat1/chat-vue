<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { Button } from './ui/button'
import { User2 } from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
// import { signInWithGoogle } from '@/api/user'

// import { signOut } from 'firebase/auth'
// import supabase from '@/supabase'
/* 
const user = ref<User | null>(null)

onMounted(() => {
  const unsubscribe = onAuthStateChanged(auth, userState => {
    user.value = userState
  })
  return unsubscribe
})

async function handleSignInWithGoogle() {
  try {
    await signInWithGoogle()
    user.value = auth.currentUser
  } catch (error) {
    console.error(error)
  }
}

async function handleSignOut() {
  try {
    await signOut(auth)
    user.value = null
  } catch (error) {
    console.error(error)
  }
}

function handleClick() {
  if (user.value) {
    handleSignOut()
  } else {
    handleSignInWithGoogle()
  }
} */
</script>
<script lang="ts">
export default {
  data() {
    return {
      session: '' as string,
    }
  },
  async mounted() {
    /* try {
      const { data }: any = await supabase.auth.getSession()
      if (data) {
        this.session = data.session.user.email
        console.log(this.session)
      }
    } catch (error) {
      console.error('Error fetching session:', error)
    } */
  },
  methods: {
    async signOut() {
      /* 
      try {
        this.session = ''
        await supabase.auth.signOut()
      } catch (error) {
        console.error('Error signing out:', error)
      }
      */
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
      <!--  <router-link to="/signup">
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
