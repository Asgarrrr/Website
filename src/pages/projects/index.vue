<script>
export default {
  head() {
    const title = "Projects"
    const description =
      "Check out my projects and see what I can build for you!"

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
      }),
    }
  },
  data: () => ({
    projects: [
      {
        client: "Personal",
        name: "Rogue",
        description:
          "A procedurally generated roguelike-style game where players explore a dungeon filled with monsters and treasures.",
        image: "https://i.imgur.com/GVCH2f5.png",
        buttons: [
          {
            text: "Read more",
            link: "/projects/rogue",
            icon: "IconLink",
          }, {
            text: "Play now",
            link: "https://rogue-ii-production.up.railway.app/login",
            icon: "IconPlay",
          }
        ],
      },{
        client: "Personal",
        name: "Riftmaker",
        description:
        "A real-time League of Legends AI companion, delivering game insights and assisting players with up-to-date information.",
        image: "https://cdn.discordapp.com/attachments/864261615402876948/1106130034277765181/Riftmaker.png",
        buttons: [
          {
            text: "Read more",
            link: "/projects/riftmaker",
            icon: "IconLink",
          },
        ],
      }, {
        client: "Personal",
        name: "Luna",
        note: "This project is currently on hold",
        description:
        "An intuitive and user-friendly Discord bot providing a wide range of features, like moderation, music, and more serving over 150k users across 2,000+ servers.",
        image: "https://cdn.discordapp.com/attachments/883739697665417247/1113640056016609300/MacBook_Pro_16__-_3.png",
      },
      ],
    }),
  mounted() {
    this.$applyMediumZoom()
  },
}
</script>

<template>

  <PageLayout
    title="My Projects"
    description="Check out the projects I worked on!"
  >

    <blog-notification type="danger">
      <p>
        <strong>Notice:</strong> This page is still under construction. Some projects may be missing, and projects pages may be incomplete.
      </p>
    </blog-notification>

    <section class="flex items-center flex-wrap gap-2">
      <span class="text-sm">Jump to:</span>
      <Button
        v-for="(project, index) in projects"
        :key="`skipto-button-${index}`"
        :href="`#${project.name.toLowerCase().split(' ').join('-')}`"
      >
        {{ project.name }}
      </Button>
    </section>

    <section
      v-for="(project, index) in projects"
      :key="`project-${index}`"
      :id="project.name.toLowerCase().split(' ').join('-')"
      class="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
      :class="index === 0 ? 'mt-24 mb-42' : 'my-42'"
    >
      <div class="space-y-4">

        <div class="flex">

          <span
            v-if="project.client"
            class="bg-blue-600/10 block w-max text-sm rounded-lg px-4 text-blue-600 py-1.5 dark:(bg-white/5 text-white/30)"
          >
            {{ project.client }}

          </span>

          <span
            v-if="project.note"
            class="ml-3 bg-orange-600/10 block w-max text-sm rounded-lg px-4 text-orange-600 py-1.5 dark:(bg-white/5 text-white/30)"
          >
            {{ project.note }}
          </span>

        </div>

        <h2 class="text-4xl text-black/90 font-bold dark:text-white/90">
          {{ project.name }}
        </h2>

        <p>
          {{ project.description }}
        </p>

        <div v-if="project.buttons" class="flex flex-wrap gap-2">
          <Button
            v-for="(button, index) in project.buttons"
            :key="`button-${index}`"
            :href="button.link"
            :blank="!button.link.startsWith('/')"
          >
            <template #icon>
              <component
                v-if="button.icon"
                :is="button.icon.split(':')[0]"
                v-bind="{
                  brand: button.icon.split(':')[1],
                }"
                class="h-4 w-4"
              />
            </template>

            {{ button.text }}
          </Button>
        </div>
      </div>

      <SmartFigure
        v-if="project.image"
        :src="project.image"
        border
        :class="index % 2 === 0 && 'md:order-first'"
      />
    </section>
  </PageLayout>
</template>
