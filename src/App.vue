<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import Home from './views/Home.vue';

import { supabase } from "./supabase";
import { useStore } from "vuex";
</script>

<template>
  <SiteHeader />
  <main>
    <!-- <Home /> -->
    <router-view />
  </main>
</template>