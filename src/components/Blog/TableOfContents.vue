<script lang="ts">
import Vue, { PropType } from "vue"

// Types
import { Toc } from "@/types/Post"

export default Vue.extend({
  props: {
    toc: {
      type: Array as PropType<Toc[]>,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      tocToggled: false,
    }
  },
})

</script>

<template>
  <div v-if="toc && toc.length > 0" class="flex flex-col space-y-2 mb-6 p-4 border-2 border-gray-200 dark:border-dark-200">
    <div class="cursor-pointer flex font-medium space-x-1 text-sm transition-colors text-gray-500 items-center dark:text-gray-200 hover:text-gray-700 dark:hover:text-white/40 select-none" @click="tocToggled = !tocToggled">
      <h1 class="uppercase">Table of Contents</h1>
      <transition name="fade" mode="out-in">
        <IconChevron v-if="!tocToggled" key="'tocToggled'" right class="h-4 w-4" />
        <IconChevron v-else key="'tocToggledFalse'" down class="h-4 w-4" />
      </transition>
    </div>

    <ul v-show="tocToggled === true" class="flex flex-wrap gap-2 items-center grid">
      <li v-for="link of toc || []" :key="link.id" class="text-sm transition-colors text-dark-400 dark:text-white/30 hover:text-dark-700 dark:hover:text-white/60" :style="`padding-left: ${ ( link.depth - 1 ) * 1.5 }rem`">
        <a v-if="link.id" :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>
