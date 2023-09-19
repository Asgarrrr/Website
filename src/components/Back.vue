<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    to: {
      type: String,
      required: false,
    },
  },
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

      if ( path.match( /\/projects\/.*/ ) )
        return "/projects"

      if ( this.routeIsBlog && this.$route.params?.slug )
        return "/blog"

      return "/"

    },
  },
})
</script>


<template>
  <NuxtLink :to="to || getTargetLink" id="BackBlog">
    <span><slot /></span>
  </NuxtLink>
</template>


<style lang="scss" scoped>

  #BackBlog {
    @apply flex items-center space-x-2 w-max text-black/50 dark:text-white/50;
    --size: 1.2em;
    --arrow-direction: -1;
    --arrow-translation: -0.5em;
    --icon: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSJ2YXIoLS1zaXplLCAxLjA1ZW0pIiBoZWlnaHQ9InZhcigtLXNpemUsIDEuMDVlbSkiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48bGluZSB4MT0iNSIgeTE9IjEyIiB4Mj0iMTkiIHkyPSIxMiI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9IjEyIDUgMTkgMTIgMTIgMTkiPjwvcG9seWxpbmU+PC9zdmc+)
  }

  #BackBlog:hover {
    --hover-translation-distance: var(--arrow-translation, 0);
    @apply transition-all duration-300 ease-in-out dark:text-white/90 text-black/90;
  }

  #BackBlog:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: var(--size, 1.05em);
    height: var(--size, 1.05em);
    -webkit-mask-image: var(--icon);
    mask-image: var(--icon);
    -webkit-mask-repeat: no-repeat;
    background-color: currentColor;
    margin-right: 0.18em;
    transition: transform 0.4s ease;
    transform: translateY(-1px) translateX(var(--hover-translation-distance, 0px)) scaleX(var(--arrow-direction, 1));
  }

</style>
