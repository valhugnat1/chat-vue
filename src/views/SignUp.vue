<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <main class="grow">
      <section class="relative">
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <div class="lg:flex lg:space-x-20">
              <!-- Left side -->
              <div
                class="grow lg:mt-20 mb-12 lg:mb-0 flex flex-col items-center lg:items-start"
              >
                <!-- Avatars -->
                <!-- <div class="flex -space-x-3 -ml-0.5 mb-6">
                  <img
                    class="rounded-full border-2 border-slate-900 box-content"
                    src="../images/avatar-01.jpg"
                    width="40"
                    height="40"
                    alt="Avatar 01"
                  />
                  <img
                    class="rounded-full border-2 border-slate-900 box-content"
                    src="../images/avatar-02.jpg"
                    width="40"
                    height="40"
                    alt="Avatar 02"
                  />
                  <img
                    class="rounded-full border-2 border-slate-900 box-content"
                    src="../images/avatar-03.jpg"
                    width="40"
                    height="40"
                    alt="Avatar 03"
                  />
                  <img
                    class="rounded-full border-2 border-slate-900 box-content"
                    src="../images/avatar-04.jpg"
                    width="40"
                    height="40"
                    alt="Avatar 04"
                  />
                </div> -->
                <!-- Headline -->
                <h1 class="h2 font-hkgrotesk mb-8 text-center lg:text-left">
                  Get a taste of the user-centric platform
                </h1>
                <!-- List -->
                <ul
                  class="inline-flex flex-col text-lg text-slate-500 space-y-3"
                >
                  <li class="flex items-center">
                    <svg
                      class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span
                      >Excepteur sint occaecat cupidatat non proident sunt in
                      culpa.</span
                    >
                  </li>
                  <li class="flex items-center">
                    <svg
                      class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span
                      >Duis aute irure dolor in reprehenderit in
                      voluptate.</span
                    >
                  </li>
                  <li class="flex items-center">
                    <svg
                      class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span
                      >Eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.</span
                    >
                  </li>
                </ul>
              </div>

              <!-- Right side -->
              <div class="relative w-full max-w-md mx-auto">
                <!-- Bg gradient -->
                <div
                  class="absolute inset-0 opacity-40 bg-gradient-to-t from-transparent to-slate-800 -z-10"
                  aria-hidden="true"
                ></div>

                <div class="p-6 md:p-8">
                  <div class="font-hkgrotesk text-xl font-bold mb-6">
                    Test our platform
                  </div>

                  <!-- Form -->
                  <form @submit.prevent="signup">
                    <div class="space-y-4">
                      <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <div class="sm:w-1/2">
                          <label
                            class="block text-sm text-slate-400 font-medium mb-1"
                            for="firstName"
                            >First Name
                            <span class="text-rose-500">*</span></label
                          >
                          <input
                            v-model="firstName"
                            id="firstName"
                            class="form-input text-sm py-2 w-full"
                            type="text"
                            required
                          />
                        </div>
                        <div class="sm:w-1/2">
                          <label
                            class="block text-sm text-slate-400 font-medium mb-1"
                            for="lastName"
                            >Last Name
                            <span class="text-rose-500">*</span></label
                          >
                          <input
                            v-model="lastName"
                            id="lastName"
                            class="form-input text-sm py-2 w-full"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          class="block text-sm text-slate-400 font-medium mb-1"
                          for="email"
                          >Email <span class="text-rose-500">*</span></label
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
                        <label
                          class="block text-sm text-slate-400 font-medium mb-1"
                          for="password"
                          >Password <span class="text-rose-500">*</span></label
                        >
                        <input
                          v-model="password"
                          id="password"
                          class="form-input text-sm py-2 w-full"
                          type="password"
                          required
                        />
                      </div>
                      <div>
                        <label
                          class="block text-sm text-slate-400 font-medium mb-1"
                          for="password"
                          >Confirm password
                          <span class="text-rose-500">*</span></label
                        >
                        <input
                          v-model="confirmPassword"
                          id="password"
                          class="form-input text-sm py-2 w-full"
                          type="password"
                          required
                        />
                      </div>
                      <!-- <div>
                        <label class="block text-sm text-slate-400 font-medium mb-1" for="phone">Phone <span class="text-rose-500">*</span></label>
                        <input id="phone" class="form-input text-sm py-2 w-full" type="text" required />
                      </div> -->
                      <!-- <div>
                        <label class="block text-sm text-slate-400 font-medium mb-1" for="referrer">How did you hear about us? <span class="text-rose-500">*</span></label>
                        <select id="referrer" class="form-select py-2 w-full" required>
                          <option>Twitter</option>
                          <option>Medium</option>
                          <option>GitHub</option>
                        </select>
                      </div> -->
                      <!-- <div>
                        <label class="block text-sm text-slate-400 font-medium mb-1" for="message">How can we help with? <span class="text-rose-500">*</span></label>
                        <textarea id="message" class="form-textarea text-sm py-2 w-full" rows="4" required></textarea>
                      </div> -->
                    </div>
                    <div class="mt-6">
                      <button
                        class="btn-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group"
                      >
                        Let's go
                        <span
                          class="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                          >-&gt;</span
                        >
                      </button>
                    </div>
                  </form>

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
import { supabase } from '../supabase'

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
    }
  },
  methods: {
    async signup() {
      if (this.password == this.confirmPassword) {
        try {
          // Use the Supabase provided method to handle the signup
          const { user, error } = await supabase.auth.signUp({
            email: this.email,
            password: this.password,
            options: {
              data: {
                name: this.firstName + ' ' + this.lastName,
              },
            },
          })
          if (error) throw error
          else {
            alert(
              'You have received an email in your inbox confirming your account creation.'
            )
            this.$router.push('/')
          }
        } catch (error) {
          alert(error.error_description || error.message)
        }
      } else {
        alert('Password should be the same as confirm password.')
      }
    },
    async signupWithGoogle() {
      try {
        const { user, session, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
        })

        if (error) throw error
        else {
          this.$router.push('/dashboards')
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
