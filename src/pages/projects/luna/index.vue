<script lang="ts">
import Vue from "vue"
import Title from "@/components/Title.vue";
import LastFm from "@/components/Card/LastFm.vue";
import Image from "@/components/Smart/Image.vue";
import Fire from "@/components/Fire.vue";

export default Vue.extend({
  components: {Fire, Image, Title},

  data() {
    return {
      languages: [ "Node.js" ],
    }
  },
  head() {
    const title = "Luna"
    const image = "https://cdn.discordapp.com/attachments/883057183128969216/1111626523171110963/luna.png"
    const description =
      "A multi-purpose Discord bot helping you build your community by providing a wide range of features."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        image,
        keywords: "Luna, Discord, Bot, Discord bot, Discord.js, Node.js, JavaScript",
        url: "https://jeremycaruelle.com/projects/luna",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://jeremycaruelle.com/projects/luna",
        },
      ],
    }
  },
})
</script>

<template>

  <PageLayout
    title="Luna"
    description="An intuitive and user-friendly Discord bot providing a wide range of features, like moderation, music, and more serving over 150k users across 2,000+ servers."
    class="space-y-12"
  >

    <SmartFigure
      src="https://cdn.discordapp.com/attachments/883057183128969216/1111626523171110963/luna.png"
      class="max-w-xl mx-auto p-4"
    />

    <section class="space-y-4">

      <Title size="2" > Technologies used </Title>
      <div class="flex flex-wrap gap-2">
        <span v-for="( l, i ) in languages" :key="`language-${ i }`" class="px-2 py-1 text-sm font-medium text-white rounded bg-neutral-900">
          {{ l }}
        </span>
      </div>

      <Title size="2" class="mt-24"> Role </Title>
      <p class="dark:text-white/70 ml-2">
        Developer
      </p>

      <Title size="2" class="mt-24"> Context </Title>
      <div class="dark:text-white/70 ml-2">
        <p>
          Luna is born from the idea of creating a multi-purpose Discord bot that would be easy to use and intuitive,
        </p>
        <p class="mt-2"></p>

      </div>

    </section>

    <hr class="dark:border-white/10 border-2 rounded-full">

    <section class="space-y-4">
      <Title size="2"> Features </Title>
    </section>


  </PageLayout>
</template>
