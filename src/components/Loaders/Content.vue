<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    error: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>

<template>
  <!-- Loader -->
  <div v-if="!error" class="w-full mx-auto !max-w-screen-md pt-20">
    <section class="space-y-8">

      <div class="space-y-4">
        <div class="flex space-x-2">
          <div class="bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5" />
        </div>
      </div>

      <!-- Title -->
      <div class="bg-black/10 h-10 w-full animate-pulse sm:w-8/12 dark:bg-white/5" />

      <!-- Reading time & date  -->
      <div class="flex space-x-2">
        <div class="bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5" />
        <div class="bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5" />
      </div>


      <!-- Header -->
      <div class="bg-black/10 h-xl rounded-lg animate-pulse w-full dark:bg-white/5" />

    </section>

    <!-- Content -->
    <div class="space-y-10 mt-10 w-full">
      <div class="space-y-1">
        <div
          v-for="_ in 6"
          :key="_"
          class="bg-black/10 h-4 animate-pulse dark:bg-white/5"
          :class="_ !== 6 ? 'w-full' : 'w-8/12'"
        />
      </div>

      <div class="space-y-1">
        <div
          v-for="_ in 4"
          :key="_"
          class="bg-black/10 h-4 animate-pulse dark:bg-white/5"
          :class="_ !== 4 ? 'w-full' : 'w-1/2'"
        />
      </div>

      <div class="space-y-1">
        <div
          v-for="_ in 24"
          :key="_"
          class="bg-black/10 h-4 animate-pulse dark:bg-white/5"
          :class="_ !== 24 ? 'w-full' : 'w-1/2'"
        />
      </div>
    </div>
  </div>

  <div v-else class="space-y-6 pt-14">
    <h1 class="font-semibold text-2xl text-black/90 dark:text-white/90">
      Failed to load post...
    </h1>

    <p class="text-black/50 dark:text-white/30">
      ;(
    </p>

    <Button icon="IconBack" @click.native="$router.back()">Go Back</Button>
  </div>
</template>
