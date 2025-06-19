<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/TheNavbar.vue' // <-- Tambahkan import ini
</script>

<template>
  <TheNavbar />
  <RouterView />
</template>

<style scoped>
/* Anda bisa menghapus style default di sini jika ada */
</style>
