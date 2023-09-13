<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: false,
      default: "",
    },
    title: {
      type: String,
      required: false,
      default: "",
    },
    icon: {
      type: String,
      required: false,
      default: "",
    },
  },
})
</script>

<template>
  <div
    class="notification flex flex-col md:(items-center flex-row) gap-x-4 gap-y-2"
    :class="type"
  >
    <span class="text-xl md:text-lg">{{ icon }}</span>

    <div>
      <h1 v-if="title">{{ title }}</h1>

      <p v-if="!!$slots.default">
        <slot />
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notification,
.nuxt-content .notification {
  @apply rounded-lg border-[0.1px] my-5 p-4 bg-opacity-25 bg-neutral-300 border-neutral-200 dark:(bg-neutral-800/30 border-neutral-800);

  h1 {
    @apply font-medium text-lg m-0 hover:no-underline;
  }

  p,
  p strong,
  a {
    @apply m-0 dark:text-white/70;
  }

  a {
    @apply font-medium text-current underline hover:underline;
  }


  &.information {
    @apply bg-blue-100 border-blue-200 dark:(bg-blue-800/30 border-blue-800);
  }

  &.warning {
    @apply bg-yellow-100 border-yellow-200 dark:(bg-yellow-800/30 border-yellow-800);
  }

  &.error {
    @apply bg-red-100 border-red-200 dark:(bg-red-800/30 border-red-800);
  }

  &.success {
    @apply bg-green-100 border-green-200 dark:(bg-green-800/30 border-green-800);
  }

}



</style>
