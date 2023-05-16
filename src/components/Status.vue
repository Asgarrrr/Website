<script lang="ts">
import Vue from "vue"

/* Import types */
import type {
  LanyardData,
  Activity,
} from "@eggsydev/vue-lanyard/@types/lanyard"

export default Vue.extend({
  data() {
    return {
      finished: false,
      newData: false,
      lanyard: {} as LanyardData,
      socket: null as WebSocket | null,
    }
  },
  computed: {
    /**
     * Returns status detail as string.
     * @returns {string}
     */
    getStatusDetails(): string {

      const lanyard = this.lanyard

      if ( !lanyard )
        return "Couldn't fetch data from Lanyard"

      if ( lanyard.discord_status === "offline" )
        return "Offline"

      const filtered: Activity | null =
        lanyard.activities?.filter( ( activity ) => activity.type !== 4 )?.pop() ||
        null

      if ( lanyard.spotify ) {

        const { song, artist } = lanyard.spotify || {}
        const firstArtist = artist?.split( "; " )?.[ 0 ]

        return `Listening to **${ song }** by **${ firstArtist || "someone" }**`

      } else {
        return "Online"
      }
    },
    /**
     * Replaces only markdown-like "**" and wraps content into HTML strong element.
     */
    getSafeHtml(): string {

      return this.getStatusDetails.replace(
        /\*\*(.*?)\*\*/gm,
        "<strong class='font-medium text-neutral-700 dark:text-neutral-200'>$1</strong>"
      )

    },
    /**
     * Returns Discord status colors.
     * @returns {string} Tailwind color classes
     */
    getDiscordStatus(): string {
      switch ( this.lanyard.discord_status ) {
        case "online":
          return "bg-green-500"
        case "idle":
          return "bg-yellow-500"
        case "dnd":
          return "bg-red-500"
        default:
          return "bg-gray-500 dark:bg-gray-200"
      }
    },
  },
  beforeDestroy() {
    this.socket?.close()
  },
  async mounted() {

    this.socket = ( await this.$lanyard({
      userId: "253951718423789571",
      socket: true,
    })) as WebSocket

    this.socket?.addEventListener("message", ({ data }) => {
      const { t: type, d: status } = JSON.parse(data) as {
        t: "INIT_STATE" | "PRESENCE_UPDATE"
        d: LanyardData
      }

      if ( [ "INIT_STATE", "PRESENCE_UPDATE" ].includes( type ) )
        this.lanyard = status || {}

      this.newData  = !this.newData
      this.finished = true

    })
  },
})
</script>

<template>

  <div
    v-if="!finished || !getStatusDetails || Object.keys( lanyard ).length === 0"
    class="flex items-center space-x-2"
  >
    <SkeletonLoader class="w-5 h-5" type="rounded" />
    <SkeletonLoader class="w-1/2 h-5" />
  </div>

  <div v-else class="flex items-center space-x-2 rounded-md text-neutral-500">

    <IconBrand v-if="lanyard.spotify" brand="spotify" class="w-5 h-5" />

    <div
      v-else
      v-tippy="{ content: 'Discord status', placement: 'bottom' }"
      :class="`h-5 w-5 rounded-full flex-shrink-0 ${ getDiscordStatus }`"
    />


    <transition name="fade" mode="out-in">
      <div
        v-if="newData === false"
        key="notNewData"
        class="text-sm leading-tight truncate"
        :title="getStatusDetails.replaceAll('**', '')"
        v-html="getSafeHtml"
      />

      <div
        v-else
        key="newData"
        class="text-sm leading-tight truncate"
        :title="getStatusDetails.replaceAll('**', '')"
        v-html="getSafeHtml"
      />
    </transition>
  </div>
</template>
