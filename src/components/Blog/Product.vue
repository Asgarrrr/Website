<script lang="ts">
import Vue from "vue"

export default Vue.extend({

  props: {
    vertical: {
      type   : Boolean,
      default: false,
    },
    product: {
      type    : String,
      required: true,
      default : "",
    },
    url: {
      type    : String,
      required: true,
      default : "",
    },
    image: {
      type    : String,
      required: true,
      default : "",
    },
    price: {
      type    : String,
      required: true,
      default : "",
    },
    figclass: {
      type    : String,
      required: false,
      default : "",
    },
  },
})

</script>

<template>
    <div class="notification flex flex-col md:(items-left flex-row) gap-x-4 gap-y-2 justify-between min-w-[190px] relative">
      <div class="flex flex-row gap-x-6" :class="vertical ? 'flex-col' : ''">
        <div class="hidden md:block">
          <smart-figure
            :src="image"
            :imageClass="[ figclass, vertical ? 'h-[200px] object-scale-down' : '' ]"
            :class="vertical ? '' : 'max-w-[230px] m-0 p-0'"
            :alt="product"
            :title="product"
          ></smart-figure>
        </div>

        <div>

          <div class="flex flex-row items-center gap-x-2 justify-between">

            <!-- If url is empty, don't render the link -->
            <SmartLink v-if="url" :href="url" blank style="text-decoration: none;">
              <div class="flex space-x-2 items-center decoration-wavy decoration-1 decoration-gray-500">
                <h1 class="hover:underline decoration-wavy decoration-1 decoration-gray-500">{{ product }}</h1>
                <IconLink class="h-4 w-4" />
              </div>
            </SmartLink>

            <div v-else>
              <h1 class="hover:underline decoration-wavy decoration-1 decoration-gray-500">{{ product }}</h1>
            </div>

          </div>

          <div class="flex flex-col gap-y-2">

            <p class="text-black/60 dark:text-white/40 w-full !mt-1" :class="vertical ? '' : 'md:w-11/12'">
              <slot />
            </p>

            <span class="text-black/50 dark:text-white/30 text-sm absolute bottom-5 right-5">
              {{ price }}
            </span>

          </div>

        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

  .notification,
  .nuxt-content .notification {
    @apply rounded-lg border-[0.1px] my-3 p-4 bg-opacity-25 bg-neutral-300 border-neutral-200 dark:(bg-neutral-800/30 border-neutral-800);

    h1 {
      @apply font-medium text-lg m-0 hover:no-underline;
    }

    p,
    p strong,
    a {
      //@apply m-0 dark:text-white/70;
    }

    figure {
      @apply m-0 p-0;
    }

  }
</style>
