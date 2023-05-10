<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { Repository } from "../types/Response/GitHub"

interface Project {
  title: string
  description: string
  href?: string
  to?: string
  icon?: string
}

interface Experience {
  title: string
  url: string
  position: string
  date: string
  isHidden?: boolean
}

interface ExperienceObject {
  jobs: Experience[]
  education: Experience[]
}

let firstLoad = true

export default Vue.extend({
  data() {
    return {
      loading: true,
      showModal: false,
      showExtra: {
        jobs: false,
        education: false,
      },
      repos: [] as Repository[],
      experiences: {
        jobs: [
          {
            title: "Coriolis Service",
            url: "https://gdsc.community.dev/mus-alparslan-universitesi",
            position: "Core Team Member",
            date: "2022-",
          },
        ],
        education: [
          {
            title: "Self-taught",
            position: "A blend of passion, curiosity and fascination.",
            date: "For life",
          },
          {
            title: "Technological degree in Baccalaureate in STI2D",
            url: "https://edouard-branly.ac-amiens.fr/",
            position: "Edouard Branly / France, Amiens",
            date: "2016-2018",
          },
          {
            title: "Two-year technical degree in Computer Science",
            url: "https://www.la-providence.net/fr/",
            position: "La Providence / France, Amiens",
            date: "2020-2022",
          },
          {
            title: "Bachelor's in Web and Mobile Development",
            url: "http://www.insset.u-picardie.fr/",
            position: "INSSET / France, Saint-Quentin",
            date: "2022-2023",
          },
        ],
      } as ExperienceObject,
      cards: {
        me: [
          {
            title: "Repositories",
            description:
              "Want to see and/or contribute to my code and public repositories?",
            href: "/me/repos",
          },
          {
            title: "Anime",
            description:
              "Trust your taste? Compare your favourite anime with mine!",
            href: "/me/anime",
          },
          {
            title: "Contact",
            description:
              "Need help with anything? Want to get in touch? Send me a message!",
            href: "/me/contact",
          },
        ],
        pages: [
          {
            title: "Blog",
            description:
              "My personal blog where I write about development, technology and non-sense stuff.",
            href: "/blog",
          },
          {
            title: "Projects",
            description:
              "My projects and contributions to the open-source community.",
            href: "/projects",
          },
          {
            title: "Donate",
            description:
              "Want to support me and my projects so that I can create better stuff in the future?",
            href: "/donate",
          },
        ],
      },
      skills: [

        {
          title: "Development",
          items: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Vite.js",
            "React.js",
            "PHP",
            "Symfony",
            "Python",
            "Tailwind CSS",
            "C",
            "C++",
          ],
        },
        {
          title: "Apps",
          items: [
            "WebStorm",
            "DataGrip",
            "PhpStorm",
            "PyCharm",
            "Visual Studio 2022",
            "VS Code",
            "Sketch",
            "Figma",
          ],
        },
        {
          title: "Services",
          items: [
            {
              title: "GitHub",
              iconPack: "IconBrand",
            },
            {
              title: "Railway",
            },
            {
              title: "Netlify",
              iconPack: "IconBrand",
            }, {
              title: "Vercel",
            }
          ],
        }, {
          title: "Database",
          items: [
            "MySQL",
            "SQLite",
            "Redis",
            "MongoDB",
          ],
        }
      ],
    }
  },
  head: {
    title: "Home",
  },
  methods: {
    async scrollToSection(id: string) {
      if (this.$route.hash === id)
        await this.$router.replace({
          hash: "",
        })

      await this.$router.replace({
        hash: id,
      })
    },
  },

  mounted() {

    if ( document?.styleSheets[0]?.cssRules?.length > 0 ) {
      this.loading = false
    } else {
      window.addEventListener( "load", () => {
        this.loading = false
      })
    }
  }

})

</script>

<template>

  <div v-if="loading"></div>
  <div v-else class="space-y-24 mb-10" id="loading">
    <header
      class="rounded-md flex flex-col-reverse my-16 py-10 md:(flex-row items-center justify-between) justify-center"
    >
      <div class="md:w-8/12">
        <div class="space-y-6">
          <Status class="mt-4 flex justify-center md:justify-start" />

          <h1 class="font-semibold text-center text-1xl md:(text-1xl text-left) text-black/90 leading-normal dark:text-white/90" >
            Hi, my name is
          </h1>

          <h1 class="font-semibold text-center text-4xl md:(text-6xl text-left) text-black/90 leading-normal dark:text-white/90" >
            Jérémy Caruelle
          </h1>

          <h2 class="font-normal text-center text-2xl md:(text-2xl text-left) text-black/60 leading-normal dark:text-white/60" >
            I'm a {{ (( ) => {

            const today = new Date()
                , bday  = new Date( 2000, 11, 14 )
                , m     = today.getMonth() - bday.getMonth();

              let age     = today.getFullYear() - bday.getFullYear();

              if ( m < 0 || ( m === 0 && today.getDate() < bday.getDate() ) )
                age--;

              return age;

          })() }} years old French fullstack developer
          </h2>

          <div
            class="flex items-center justify-center md:justify-start gap-x-3 gap-y-2 flex-wrap"
          >
            <Button
              v-for="item in ['JavaScript', 'React.js', 'Node.js' ]"
              :key="item"
              class="inline-block"
            >
              <IconDev :brand="item" class="h-5 w-5 filter grayscale" />
            </Button>

            <Button
              v-tippy="{ content: 'More', placement: 'bottom' }"
              @click.native="scrollToSection('#technologies')"
            >
              <IconEllipsis class="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div class="rounded-full mx-auto mb-4 md:mb-0">
        <SmartImage
          src="/assets/images/memoji.png"
          class="rounded-full h-64 w-64"
          width="600px"
          height="600px"
        />
      </div>
    </header>

    <section id="pages">
      <Title>Pages</Title>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          v-for="(card, index) in cards.pages"
          :key="`card-p-${index}`"
          :title="card.title"
          :href="card.href"
        >
          {{ card.description }}
        </Card>
      </div>
    </section>

    <section id="me">
      <Title>Me</Title>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          v-for="(card, index) in cards.me"
          :key="`card-m-${index}`"
          :title="card.title"
          :href="card.href"
        >
          {{ card.description }}
        </Card>
      </div>
    </section>

    <section id="experiences" class="grid gap-x-4 gap-y-24 md:grid-cols-2">
      <div>
        <div class="flex items-center gap-4 justify-between">
          <Title>Experience</Title>
          <button
            type="button"
            class="text-black/50 text-sm hover:underline dark:text-white/30"
            @click="showExtra.jobs = !showExtra.jobs"
          >
<!--            {{ showExtra.jobs ? "show less" : "show more" }}-->
          </button>
        </div>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.jobs"
            v-show="experience.isHidden ? showExtra.jobs : true"
            :key="`experience-job-${index}`"
            :title="experience.title"
            :url="experience.url"
            :hidden-badge="experience.isHidden"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>

      <div>
        <div class="flex items-center gap-4 justify-between">
          <Title>Education</Title>
          <button
            type="button"
            class="text-black/50 text-sm hover:underline dark:text-white/30"
            @click="showExtra.education = !showExtra.education"
          >
<!--            {{ showExtra.education ? "show less" : "show more" }}-->
          </button>
        </div>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.education"
            v-show="experience.isHidden ? showExtra.education : true"
            :key="`experience-education-${index}`"
            :title="experience.title"
            :url="experience.url"
            :hidden-badge="experience.isHidden"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>
    </section>

    <section id="technologies">
      <Title>Technologies I use</Title>

      <div class="flex flex-col space-y-6 mt-8">
        <section v-for="category in skills" :key="category.title">
          <h5
            class="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:(text-white/30 border-white/5)"
          >
            {{ category.title }}
          </h5>

          <div
            class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2"
          >
            <CardSkill
              v-for="(skill, index) in category.items"
              :key="`skill-${index}`"
              v-bind="typeof skill === 'object' ? skill : { title: skill }"
            />
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.description-link {
  @apply border-neutral-500 border-b-2 border-opacity-50 hover:border-opacity-75;
}
</style>
