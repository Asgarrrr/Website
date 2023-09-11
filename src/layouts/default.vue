<script lang="ts">
import Vue from "vue"

// Types
import type { Post } from "~/src/types/Post"
import type { FetchReturn } from "@nuxt/content/types/query-builder"

export default Vue.extend({
  data() {
    return {
      posts: [] as (Post[] & FetchReturn) | (Post[] & FetchReturn)[],
    }
  },
  fetchOnServer: false,
  async fetch() {
    const posts = await this.$content("blog")
      .sortBy("createdAt", "desc")
      .only(["title", "slug"])
      .fetch<Post[]>()

    this.posts = posts
  },
  head() {
    let string = "Jérémy Caruelle";
    if (this.routeIsBlog) string = "Jérémy Caruelle - blog"

    return {
      titleTemplate: `%s - ${string}`,
      htmlAttrs: {
        class: `min-h-screen ${this.$colorMode.value}`,
      },
      meta: [
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: string,
        },
      ],
    }
  },
  computed: {
    menuActions() {
      return [
        /* Navigation */
        {
          section: "Navigation",
          text: "Home",
          icon: "IconHome",
          action: () => {
            this.$router.push("/")
          },
        },
        {
          section: "Navigation",
          text: "Blog",
          tag: "Search a blog post",
          icon: "IconDocument",
          keybindings: ["b"],
          childActions: [
            {
              text: "All Posts",
              icon: "IconEye",
              action: () => {
                this.$router.push("/blog")
              },
            },
            ...this.posts.map((post: Post) => ({
              text: post.title,
              icon: "IconDocument",
              action: () => {
                this.$router.push(`/blog/${post.slug}`)
              },
            })),
          ],
        },
        {
          section: "Navigation",
          text: "Projects",
          icon: "IconCog",
          action: () => {
            this.$router.push("/projects")
          },
        },
        {
          section: "Navigation",
          text: "Donate",
          icon: "IconDollar",
          action: () => {
            this.$router.push("/donate")
          },
        },

        /* Me */
        {
          section: "Me",
          text: "Repositories",
          icon: "IconBranch",
          action: () => {
            this.$router.push("/me/repos")
          },
        },
        {
          section: "Me",
          text: "Contact",
          icon: "IconInbox",
          action: () => {
            this.$router.push("/me/contact")
          },
        },

        /* Quick Links */
        {
          section: "Quick Links",
          text: "GitHub",
          icon: "IconBrand:github",
          action: () => {
            window.open(this.$config.social.github, "_blank")?.focus()
          },
        },
        {
          section: "Quick Links",
          text: "Twitter",
          icon: "IconBrand:twitter",
          action: () => {
            window.open(this.$config.social.twitter, "_blank")?.focus()
          },
        },

        /* Controls */
        {
          section: "Controls",
          text: "Toggle Color Mode",
          icon: "IconSun",
          action: () => {
            this.$colorMode.preference =
              this.$colorMode.value === "dark" ? "light" : "dark"
          },
        },
      ]
    },
  },
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-neutral-900">
    <Navbar class="pt-10" />


<!--    If blog article -->

    <div v-if="routeIsBlog" class="max-w-3xl mx-auto">
      <div class="flex flex-col items-center">
        <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>

        <div class="flex flex-row items-center gap-x-2">
          <span class="text-black/50 dark:text-white/30 text-sm">
            {{ post.readingTime.text }}
          </span>

          <span class="text-black/50 dark:text-white/30 text-sm">
            {{ post.createdAt }}
          </span>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <smart-figure
          :src="post.cover"
          imageClass="w-full"
          style="max-width: 1000px;"
        ></smart-figure>
      </div>

      <div class="flex flex-col items-center">
        <nuxt-content :document="post" />
      </div>


    <!-- Nuxt component -->
    <main class="responsive-screen min-h-screen pb-8">
      <Nuxt />
    </main>

    <!-- Command Palette -->
    <CommandMenu :actions="menuActions" :theme="$colorMode.value">
      <template v-slot:icon="{ icon }">
        <component
          :is="icon.split(':')[0]"
          :brand="icon.split(':')[1]"
          class="w-4 h-4"
        />
      </template>
    </CommandMenu>

    <!-- Go to top button -->
    <GoTop />

  </div>
</template>
