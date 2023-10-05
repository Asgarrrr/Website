<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  computed: {
    routeIsBlog() {
      return this.$route.name?.includes("blog")
    },

    routeIsBlogPost() {
      return this.$route.params?.slug
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
        <div class="flex-shrink-0 flex items-center space-x-4" >

          <Transition name="fade" mode="out-in">
              <Back v-if="!routeIsIndex && !routeIsBlogPost" key="home" class="text-black/90 text-sm font-medium dark:text-white/90 flex items-center space-x-2">Back</Back>
          </Transition>

        </div>

        <div class="flex space-x-2 items-center">
          <OmnibarButton />
          <ColorSwitcher />
        </div>
      </div>
    </div>
  </nav>
</template>
