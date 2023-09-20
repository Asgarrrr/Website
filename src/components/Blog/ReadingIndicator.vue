<script lang="ts">

import { Toc } from "@/types/Post"
import Vue, { PropType } from "vue"

export default Vue.extend({

  props: {

    toc: {
      type: Array as PropType<Toc[]>,
      required: true,
      default: () => [],
    },

    selector: {
      type: String,
      required: true,
      default: null
    }
  },

  data() {
    return {
      el: null as Element | null,
      scrollY: 0,
      rect: {
        top: 0,
        bottom: 0,
      },
      window: {
        height: 0,
        width: 0,
      },
    }
  },

  computed: {




    // —— Calculates the position of the element and returns percentage value.
    getPercentLeftBottom(): number {
      const { top, bottom } = this.rect
      const percent = ~~( ( ( top - this.window.height ) / ( top - bottom ) ) * 100 )

      return percent > 100 ? 100 : percent
    },

    // —— Checks if the position is higher than a specific number and returns a boolean value.
    isElementVisible(): boolean {
      return this.scrollY > 175
    },

  },

  mounted( ) {

    const observer = new IntersectionObserver( ( entries ) => {
      entries.forEach( ( entry ) => {
        // —— If the element in table of contents is visible, add a class to it
        if ( entry.isIntersecting ) {
          const id = entry.target.getAttribute( "id" )
          const tocElement = document.querySelector( `#toc-${ id }` );
          [ "!font-bold", "!text-dark-700", "!dark:text-white" ].forEach( ( className ) => tocElement?.classList.add( className ) )
        } else {
          // —— If the element in table of contents is not visible, remove a class from it
          const id = entry.target.getAttribute( "id" )
          const tocElement = document.querySelector( `#toc-${ id }` );
          [ "!font-bold", "!text-dark-700", "!dark:text-white" ].forEach( ( className ) => tocElement?.classList.remove( className ) )
        }
      } )
    }, {
      rootMargin: "0px 0px 0px 0px",
      threshold: 0,
    } )

    document.querySelectorAll( "h2 , h3 , h4 , h5 , h6" ).forEach( ( heading ) => {
      observer.observe( heading )
    } )





    // —— Find element in the document and set if exists
    const element = document.querySelector( this.selector )

    if ( !element )
      return;

    this.el = element

    // —— Set window dimensions
    const { innerHeight, innerWidth } = window
    this.window = { height: innerHeight, width: innerWidth }

    // —— Add scroll event to update positions
    window.addEventListener( "scroll", this.handleScroll )
  },

  beforeDestroy() {
    // —— Remove scroll event before changing the page
    window.removeEventListener( "scroll", this.handleScroll )
  },

  methods: {
    handleScroll() {
      // —— Set scroll position
      this.scrollY = window.scrollY

      // —— Set window height and width
      const { innerHeight, innerWidth } = window
      this.window = { height: innerHeight, width: innerWidth }

      // —— Get element's position
      const { top, bottom } = this.el?.getBoundingClientRect() || {}

      // —— Save element's position to Vue data
      if ( !top || !bottom )
        return

      this.rect = { top, bottom }

    },
  },
})

</script>

<template>
  <transition name="fade">
    <div class="flex" v-show="isElementVisible">
      <div v-tippy="{ content: getPercentLeftBottom === 100 ? '100% <3' : `${getPercentLeftBottom}% left ^^` }" >
        <div class="rounded-md bg-gray-200 h-100 w-1 hidden relative lg:block dark:bg-neutral-800" >
          <div class="rounded-md inset-x-0 transition top-0 absolute left-0 right-0" :class="{ 'bg-green-500': getPercentLeftBottom === 100, 'bg-gray-300 dark:bg-neutral-600': getPercentLeftBottom < 100, }" :style="{ height: `${getPercentLeftBottom}%` }" />
        </div>
      </div>
      <div class="xl:block hidden">
        <ul class="flex flex-wrap gap-2 items-center grid">
          <li v-for="link of toc || []" :id="`toc-${link.id}`" :key="link.id" class="text-sm transition-colors text-dark-400 dark:text-white/50 hover:text-dark-700 dark:hover:text-white/80" :style="`padding-left: ${ ( link.depth - 1 ) * 1.5 }rem`">
            <a v-if="link.id" :href="`#${link.id}`">
              {{ link.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>
