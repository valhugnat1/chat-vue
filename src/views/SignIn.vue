<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <main class="grow">
      <section class="relative">
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <!-- Page header -->
            <div class="max-w-3xl mx-auto text-center pb-12">
              <h1 class="h2 font-hkgrotesk">Welcome back!</h1>
            </div>

            <!-- Form -->
            <div class="max-w-sm mx-auto">
              <!-- <form> -->
              <div class="space-y-4">
                <div>
                  <label
                    class="block text-sm text-slate-400 font-medium mb-1"
                    for="email"
                    >Email</label
                  >
                  <input
                    v-model="email"
                    id="email"
                    class="form-input text-sm py-2 w-full"
                    type="email"
                    required
                  />
                </div>
                <div>
                  <div class="flex justify-between">
                    <label
                      class="block text-sm text-slate-400 font-medium mb-1"
                      for="password"
                      >Password</label
                    >
                    <router-link
                      class="text-sm font-medium text-indigo-500 ml-2"
                      to="/reset-password"
                      >Forgot?</router-link
                    >
                  </div>
                  <input
                    v-model="password"
                    id="password"
                    class="form-input text-sm py-2 w-full"
                    type="password"
                    autocomplete="on"
                    required
                  />
                </div>
              </div>
              <div class="mt-6">
                <button
                  @click="login()"
                  class="btn-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group"
                >
                  Sign In
                  <span
                    class="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                    >-&gt;</span
                  >
                </button>
              </div>

              <div class="mt-4 border-t border-gray-600"></div>

              <div class="mt-4">
                <button
                  @click="signupWithGoogle()"
                  class="w-full login-with-google-btn py-2 px-4"
                >
                  Login with Google
                  <span
                    class="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                    style="color: black"
                    >-&gt;</span
                  >
                </button>
              </div>
              <!-- </form> -->

              <!-- Divider -->
              <!-- <div class="flex items-center my-6">
                <div class="border-t border-slate-800 grow mr-3" aria-hidden="true"></div>
                <div class="text-sm text-slate-500 italic">Or</div>
                <div class="border-t border-slate-800 grow ml-3" aria-hidden="true"></div>
              </div> -->

              <!-- Social login -->
              <!-- <button class="btn-sm text-sm text-white bg-rose-500 w-full relative flex after:flex-1">
                <div class="flex-1 flex items-center">
                  <svg class="w-4 h-4 fill-current text-rose-200 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.679 6.545H8.043v3.273h4.328c-.692 2.182-2.401 2.91-4.363 2.91a4.727 4.727 0 1 1 3.035-8.347l2.378-2.265A8 8 0 1 0 8.008 16c4.41 0 8.4-2.909 7.67-9.455Z" />
                  </svg>
                </div>
                <span class="flex-auto text-rose-50 pl-3">Continue With Google</span>
              </button>
 -->
              <div class="text-center mt-6">
                <div class="text-sm text-slate-500">
                  Don't you have an account?
                  <router-link class="font-medium text-indigo-500" to="/signup"
                    >Sign Up</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { ref } from 'vue'
import { supabase } from '@/lib/supabase' // Path to your supabase.js file

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      console.log('run')
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value,
        })
        if (error) {
          console.log(error)
        } else {
          console.log(data)
          this.$router.push('/dashboard')
        }
      } catch (error) {
        console.log(error)
      }
    },
    async signupWithGoogle() {
      try {
        const { user, session, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
        })

        if (error) throw error
        else {
          this.$router.push('/dashboard')
        }
      } catch (error) {
        alert(error.error_description || error.message)
      }
    },
  },
}
</script>

<style scoped>
.login-with-google-btn {
  transition: background-color 0.3s, box-shadow 0.3s;

  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);

  color: black; /* #757575;*/
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
}

.login-with-google-btn:hover {
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
}

.login-with-google-btn:active {
  background-color: #eeeeee;
}

.login-with-google-btn:focus {
  outline: none;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
    0 0 0 3px #c8dafc;
}

.login-with-google-btn:disabled {
  filter: grayscale(100%);
  background-color: #ebebeb;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}

.btn-sm {
  height: 2.5rem;
}

input {
  color: black;
  padding-left: 0.25rem;
}
</style>
