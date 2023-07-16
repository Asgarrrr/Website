<script lang="ts">

import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/components/prism-markup.js'
import 'prismjs/components/prism-css.js'
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-json.js'

import Vue from "vue"
/* Interfaces */
import type { Post } from "~/src/types/Post"

interface RelatedPost {
  title: string
  slug: string
}

export default Vue.extend({

  data() {
    return {
      post: {} as Post,
      related: [] as RelatedPost[],
    }
  },
  async fetch() {
    const post = (await this.$content(
      "blog",
      this.$route.params.slug
    ).fetch()) as Post

    if (!post) {
      this.$router.push("/blog")
      return
    }

    this.post = post

    if (post.related?.length) {
      const array = []

      for (const key of post.related) {
        const { title }: any = await this.$content("blog", key)
          .only(["title"])
          .fetch()

        array.push({
          title,
          slug: key,
        })
      }

      this.related = array
    }
  },

  head() {

    const post = this.post
    const { getTags } = this as {
      getTags: string[]
    }

    const title = post.title
    const description =
      post.description || "You were invited to read this post on Asgarrr's blog."

    const tags = getTags?.join(", ") || title
    const href = `https://jeremycaruelle.com${this.$route?.path}`
    const image = `/og-images/${post.slug}.png`

    return {
      bodyAttrs: {
        class: "overflow-x-hidden",
      },
      title,
      link: [
        {
          rel: "canonical",
          href,
        },
      ],
      meta: this.$prepareMeta(
        {
          title,
          description,
          image: `https://jeremycaruelle.com${ image }`,
          keywords: `${tags}, Asgarrrr blog`,
          url: href,
        },
        [
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
          {
            name: "article:published-time",
            content: post?.createdAt || null,
          },
          {
            name: "twitter:label1",
            content: "asgarrrr",
          },
          {
            name: "twitter:data1",
            content: post?.createdAt,
          },
          {
            name: "twitter:label2",
            content: "Jérémy Caruelle",
          },
          {
            name: "twitter:data2",
            content: `${this.getReadingTime} min read`,
          },
        ]
      ),
    }
  },
  watch: {
    $fetchState: {
      async handler(state) {
        if (state.pending === true || state.error !== null) return
        await this.$nextTick()
        this.$applyMediumZoom()
        Prism.highlightAll()

        document.querySelectorAll(".nuxt-content-highlight").forEach((el) => {
          // Add a copy button to each code block
          const button = document.createElement("button")
          button.className = "copy-button"
          button.textContent = "copy"

          button.addEventListener("click", () => {
            const pre = el.querySelector("pre")
            navigator.clipboard.writeText( pre?.textContent || "" )

            // Sparkle, firework, Flame, Heath emoji array

            button.textContent = [ "✨", "🍾", "🔥", "❤️", "🎉", "🎊" ][ ~~( Math.random() * 6 ) ];
            setTimeout(() => {
              button.textContent = "copy"
              button.classList.remove("decoration-green-500")
            }, 2000)


          })

          el.appendChild(button)


        })

      },
      deep: true,
    },
  },
  computed: {

    getTags(): string[] {
      return this.post?.tags || []
    },
    getReadingTime() {
      return this.$getReadingTime(JSON.stringify(this.post.body))
    },
    getReadableDate() {
      return this.$getReadableDate(new Date(this.post?.createdAt || Date.now()))
    },
    getRelatedPosts(): RelatedPost[] {
      return this.related || []
    },
  },
})

</script>

<template>
  <Transition name="fade">
    <LoadersContent
      v-if="$fetchState.pending === true || $fetchState.error !== null"
      :error="$fetchState.pending === false && $fetchState.error !== null"
    />

    <div v-else class="pt-4 mt-10">

      <article>

        <header class="space-y-8 leading-relaxed text-center mb-10">

          <div class="space-y-4">

            <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 dark:text-white/30 text-black/50 sm:text-sm">

              <div class="flex items-center space-x-2 mb-4" v-for="tag in getTags">
                <i class="">
                  # {{ tag }}
                </i>
              </div>

              <div class="space-y-8 mb-8">

                <h1 class="block mx-auto text-2xl font-bold text-black md:w-11/12 sm:text-4xl dark:text-white">
                  {{ post.title }}
                </h1>

                <p class="mx-auto text-black/50 md:w-9/12 dark:text-white/50">
                  {{ post.description }}
                </p>
              </div>

              <div class="flex items-center space-x-2">
                <IconCalendar class="w-4 h-4" />
                <span>{{ getReadableDate }}</span>
              </div>

              <div class="flex items-center space-x-2">
                <IconEye class="w-4 h-4" />
                <span>{{ getReadingTime }} minute reading</span>
              </div>
            </div>

          </div>

          <SmartFigure
            v-if="post.header"
            :src="post.header"
            class="object-cover object-top w-full transition-all rounded-lg"  alt="Post header"
          />

        </header>

        <div class="mt-4">
          <template v-if="!post.indicatorsHidden">

            <div class="sticky z-10 hidden float-right text-left -mr-14 top-4 md:block" >
              <BlogReadingIndicator selector=".nuxt-content" />
            </div>

          </template>

<!--          <BlogTableOfContents :toc="post.toc" />-->

          <NuxtContent :document="post" class="max-w-full prose prose-black dark:prose-light" />
        </div>
      </article>

      <hr class="my-10 border-black/10 dark:border-white/10" />

      <script src="https://giscus.app/client.js"
        data-repo="Asgarrrr/blog_comments"
        data-repo-id="R_kgDOJd9fSg"
        data-category="Announcements"
        data-category-id="DIC_kwDOJd9fSs4CWNQy"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="dark"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
      </script>

      <div class="mt-16 space-y-10">
        <div v-if="getRelatedPosts.length > 0" class="space-y-2">
          <h3 class="text-sm dark:text-white/30 text-black/50">
            Similar Posts
          </h3>

          <div v-if="getRelatedPosts.length" class="grid gap-4 sm:grid-cols-2">
            <NuxtLink
              v-for="(relatedPost, index) in getRelatedPosts"
              :key="`related-${index}`"
              :to="`/blog/${relatedPost.slug}`"
              class="rounded-lg border-[0.1px] p-4 bg-opacity-25 bg-neutral-300 border-neutral-200 dark:(bg-neutral-800/30 border-neutral-800) flex items-center space-x-2 hover:bg-opacity-40 transition-colors dark:text-white/80 dark:hover:text-white transition-colors"
            >
              <IconDocument class="w-4 h-4" />
              <span class="truncate">{{ relatedPost.title }}</span>
            </NuxtLink>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-sm dark:text-white/30 text-black/50">
            Continue Reading
          </h3>

          <BlogPrevNext :current-slug="post.slug" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">

.nuxt-content {
  .nuxt-content-highlight {

    @apply relative;

    .filename {
      @apply font-light mt-3 mr-14 text-xs right-0 text-white/50 z-10 absolute;
    }

    pre {
      @apply rounded-lg border-[0.1px] my-5 p-4 bg-opacity-25 bg-neutral-300 border-neutral-200 dark:(bg-neutral-800/30 border-neutral-800) max-h-35rem overflow-auto;
    }

    ::-webkit-scrollbar {
      width: 0.5rem;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 0.5rem;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    ::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }

    code {
      @apply bg-blue-100 py-px px-1 text-blue-600 dark:bg-white/5 rounded-sm;
    }

}

.prose code::before,
.prose code::after {
  content: none !important;
}

code[class*="language-"], pre[class*="language-"] {
  @apply text-shadow-none;
}

.copy-button {
  @apply font-light mt-3 mr-3 text-xs top-0 right-0 text-white/50 z-10 absolute opacity-0 transition-opacity duration-200;
}

.nuxt-content-highlight:hover .copy-button {
  @apply opacity-100;
}

.gsc-reactions-count {
  @apply text-xs text-white/50 font-light ml-2 flex items-center space-x-1 transition-colors duration-200 hover:text-white dark:hover:text-white/80 dark:text-white/30;
  display: none !important;
}


//.dark .prose .nuxt-content-highlight {
//  box-shadow: 0 0 0 100vmax #262626;
//
//  pre {
//    @apply bg-neutral-800;
//  }
//}

//// hide the copy button
//
//.copy-button {
//  @apply font-light mt-3 mr-3 text-xs top-0 right-0 text-white/50 z-10 absolute opacity-0 transition-opacity duration-200;
//}
//
//.nuxt-content-highlight:hover .copy-button {
//  @apply opacity-100;
//}
//
//.light .nuxt-content-highlight {
//  box-shadow: 0 0 0 100vmax #282c34;
//}
//
//.nuxt-content {
//  .nuxt-content-highlight {
//    clip-path: inset(0 -100vmax);
//
//    @apply mb-5 relative;
//

//
//    pre {
//      @apply rounded-none py-4 px-0;
//    }
//  }
//
//  ol {
//    @apply pl-0;
//  }
//
//  video {
//    @apply rounded-lg;
//  }
//
//  kbd {
//    @apply rounded-lg bg-black/10 dark:(bg-white/10 border-white/30) px-2 py-1 text-sm border-b-2 border-black/30 cursor-default;
//  }
//
//  code {
//    @apply bg-blue-100 py-px px-1 text-blue-600 dark:bg-white/5;
//  }
//}
//
// Line numbers
pre[class*="language-"].line-numbers {
  position: relative;
  padding-left: 3.8em;
  counter-reset: linenumber;
}

pre[class*="language-"].line-numbers > code {
  position: relative;
  white-space: inherit;
}

.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  top: 0;
  font-size: 100%;
  left: -3.8em;
  width: 3em; /* works for line-numbers below 1000 lines */
  letter-spacing: -1px;
  border-right: 1px solid #999;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.line-numbers-rows > span {
  display: block;
  counter-increment: linenumber;
}

.line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}
pre[class*="language-"].line-numbers {
  position: relative;
  padding-left: 3.8em;
  counter-reset: linenumber;
}

pre[class*="language-"].line-numbers > code {
  position: relative;
  white-space: inherit;
}

.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  top: 0;
  font-size: 100%;
  left: -3.8em;
  width: 3em; /* works for line-numbers below 1000 lines */
  letter-spacing: -1px;
  border-right: 1px solid #999;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.line-numbers-rows > span {
  display: block;
  counter-increment: linenumber;
}

.line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}

</style>
