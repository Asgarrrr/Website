<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  computed: {
    routeIsBlog() {
      return this.$route.name?.includes("blog")
    },

    routeIsIndex() {
      return this.$route.name === "index"
    },

    getTargetLink() {
      const path = this.$route.path

      if (path !== "/projects/rogue" && path.startsWith("/projects/rogue"))
        return "/projects/rogue"
      else if (this.routeIsBlog && this.$route.params?.slug) return "/blog"
      else return "/"
    },
  },
})
</script>

<template>
  <nav class="w-full">
    <div class="responsive-screen relative">
      <div class="flex items-center gap-6 justify-between">
        <SmartLink
          :href="getTargetLink"
          class="flex-shrink-0 flex items-center space-x-4"
        >

          <Transition name="fade" mode="out-in">

            <span v-if="!routeIsIndex"  class="text-black/90 text-sm uppercase font-medium dark:text-white/90" >
              < Back
            </span>

          </Transition>

        </SmartLink>

        <div class="flex space-x-2 items-center">
          <OmnibarButton />
          <ColorSwitcher />
        </div>
      </div>
    </div>
  </nav>
</template>
