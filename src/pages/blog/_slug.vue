<script lang="ts">

import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/components/prism-markup.js'
import 'prismjs/components/prism-css.js'
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-json.js'
import 'prismjs/components/prism-csharp.js'

import 'giscus';

import Vue from "vue"
/* Interfaces */
import type { Post } from "~/src/types/Post"
import Back from "@/components/Back.vue";

interface RelatedPost {
  title: string
  slug: string
}

export default Vue.extend({
  components: {
    Back,
  },

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
      await this.$router.push("/blog")
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

        if ( window.isSecureContext ) {

          document.querySelectorAll(".nuxt-content-highlight").forEach( ( el ) => {
            const button = document.createElement( "button" )
            button.className = "copy-button"
            button.textContent = "ctrl+c ?"
            el.appendChild( button )

            button.addEventListener( "click", () => {

              if ( el.querySelector("pre")?.textContent ) {

                navigator.clipboard.writeText( el.querySelector("pre")?.textContent || "" ).then(() => {

                  button.textContent = "copied 🔥";
                  button.classList.add( "!text-green-500" )
                  el.querySelector("pre")?.classList.add( "!border-green-500" )

                  setTimeout( () => {
                    button.textContent = "ctrl+c ?"
                    button.classList.remove( "!text-green-500" )
                    el.querySelector("pre")?.classList.remove("!border-green-500" )
                  }, 2000 )

                }).catch( ( ) => {

                  button.textContent = "error";
                  button.classList.add( "!text-red-500" )
                  el.querySelector("pre")?.classList.add( "!border-red-500" )

                  setTimeout( () => {
                    button.textContent = "ctrl+c ?"
                    button.classList.remove( "!text-red-500" )
                    el.querySelector("pre")?.classList.remove("!border-red-500" )
                  }, 2000 )

                })

              }

            })

          });

        }

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
    }
  },
});



</script>

<template>
  <Transition name="fade">

    <LoadersContent v-if="$fetchState.pending || $fetchState.error !== null"
                    :error="!$fetchState.pending && $fetchState.error !== null" />

    <div v-else class="pt-4 mt-10">

      <article class="!max-w-screen-md mx-auto">

        <header class="space-y-8 leading-relaxed mb-10">

          <div class="space-y-4">

            <div
              class="flex flex-wrap flex-col justify-center gap-x-6 gap-y-2 dark:text-white/30 text-black/50 sm:text-sm">

              <div class="flex space-x-2 mb-4 mx-auto">
                <i class="" v-for="tag in getTags">
                  # {{ tag }}
                </i>
              </div>


              <div class="space-y-5 mb-8 min-w-full">

                <Back>Home</Back>

                <h1 class="block text-2xl font-bold text-black sm:text-4xl dark:text-white min-w-min min-w-full !leading-normal">
                  {{ post.title }}
                </h1>

                <div class="flex space-x-2 text-black/50 dark:text-white/50 items-center">
                  <span>{{ getReadableDate }}</span>
                  <span> / </span>
                  <span>{{ getReadingTime }} min read </span>
                  <span v-if="post.createdAt !== post.updatedAt">—</span>
                <span v-if="post.createdAt !== post.updatedAt" class="px-2 py-1 rounded-md bg-blue-100 text-blue-600 dark:bg-white/5 dark:text-white/50">
                      Updated {{ $getReadableDate(new Date(post.updatedAt || Date.now())) }}
                  </span>
                </div>

              </div>

            </div>

          </div>

          <SmartFigure v-if="post.header" :src="post.header" class="object-cover object-top w-full transition-all rounded-lg" alt="Post header" />

        </header>

        <div class="mt-4">

          <template v-if="!post.indicatorsHidden">

            <div class="fixed z-10 hidden text-left top-100px transform-gpu translate-y-1/2 md:block left-10 max-w-250px">
              <BlogReadingIndicator selector=".nuxt-content" :toc="post.toc" />
            </div>

          </template>

          <NuxtContent :document="post" class="max-w-full prose prose-black dark:prose-light" />

        </div>
      </article>

      <blog-separator class="max-w-screen-md mx-auto" />

      <div class="max-w-screen-md mx-auto">
        <giscus-widget id="comments" repo="Asgarrrr/blog_comments" repoid="R_kgDOJd9fSg" category="Announcements" categoryid="DIC_kwDOJd9fSs4CWNQy" mapping="pathname" term="Welcome to giscus!" reactionsenabled="1" emitmetadata="0" inputposition="top" :theme="$colorMode.value === 'dark' ? 'https://foregoing-chocolate-newt.glitch.me/dark.css' : 'https://foregoing-chocolate-newt.glitch.me/light.css'" lang="en" loading="lazy" />
      </div>

      <div class="mt-16 space-y-10 max-w-screen-md mx-auto">
        <div v-if="getRelatedPosts.length > 0" class="space-y-2">
          <h3 class="text-sm dark:text-white/30 text-black/50">
            Similar Posts
          </h3>

          <div v-if="getRelatedPosts.length" class="grid gap-4 sm:grid-cols-2">
            <NuxtLink v-for="(relatedPost, index) in getRelatedPosts" :key="`related-${index}`"
                      :to="`/blog/${relatedPost.slug}`"
                      class="rounded-lg border-[0.1px] p-4 bg-opacity-25 bg-neutral-300 border-neutral-200 dark:(bg-neutral-800/30 border-neutral-800) flex items-center space-x-2 hover:bg-opacity-40 transition-colors dark:text-white/80 dark:hover:text-white transition-colors">
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

::selection {
  @apply dark:(bg-white/10 text-white/90) bg-black/10 text-black/90;
}

::-moz-selection {
  @apply dark:(bg-white/10 text-white/90) bg-black/10 text-black/90;
}

.prose > p {
  @apply text-black/70 dark:text-white/50 md:text-18px text-16px;
  letter-spacing: 0px;
  line-height: 1.9 !important;
  font-weight: 400;
}

.prose > ul,
.prose > ol {
  @apply text-black/60 dark:text-white/50 md:text-18px text-16px;
  letter-spacing: 0px;
  line-height: 1.9 !important;
  font-weight: 400;
}

.prose > ol > li:before,
.prose > ul > li:before {
  @apply text-black/50 dark:(text-white/50);
}

.nuxt-content {

  a {
    @apply decoration-2 decoration-transparent transition-all duration-400 ease-in-out underline-offset-4;
    color: #5686f5 !important;
  }

  a:hover {
    text-decoration-color: #5686f5;
  }

  .nuxt-content-highlight {

    @apply relative;

    .filename {
      @apply font-light mt-3 mr-14 text-xs right-0 text-white/50 z-10 absolute;
    }

    pre {
      @apply rounded-lg border-[0.1px] my-5 p-4 bg-opacity-25 bg-neutral-300 border-neutral-200 dark:(bg-neutral-800/30 border-neutral-800) max-h-35rem overflow-auto transition-border-colors duration-500 ease-in-out;
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
  @apply font-light mt-3 mr-3 text-xs bottom-4 right-0 text-neutral-500 z-10 absolute opacity-0 transition-opacity duration-200 cursor-pointer hover:(text-neutral-600 opacity-100) dark:(text-white/50 hover:text-white/80);

}

.nuxt-content-highlight:hover .copy-button {
  @apply opacity-100;
}


//  @apply font-light mt-3 mr-3 text-xs bottom-4 right-0 text-white/50 z-10 absolute opacity-0 transition-opacity duration-200 cursor-pointer hover:(text-white/80 opacity-100);

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
