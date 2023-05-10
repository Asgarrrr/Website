<script lang="ts">
import Vue from "vue"
import Title from "@/components/Title.vue";
import LastFm from "@/components/Card/LastFm.vue";
import Image from "@/components/Smart/Image.vue";

export default Vue.extend({
  components: {Image, LastFm, Title},

  data() {
    return {
      images: [ "https://i.imgur.com/GVCH2f5.png", "https://cdn.discordapp.com/attachments/1071595350437134456/1104138416364470293/telechargement.png" ],
      languages: [ "HTML", "CSS", "JavaScript", "MongoDB", "Express", "Node.js", "Socket.io ( WebSockets )", "React.js", "Vite.js" ],
      pages: [
        {
          title: "Custom Status",
          url: "/projects/premid/custom-status",
          description:
            "Tool that allows you do display whatever you want on your Discord profile with PreMiD! Easy and free!",
        },
        {
          title: "Metadata Creator",
          url: "/projects/premid/mdcreator",
          description:
            "Easy and free to use tool to create PreMiD Presence metadata files easily, without even opening your code editor!",
        },
      ],
    }
  },
  head() {
    const title = "Rogue"
    const image = "https://i.imgur.com/CuVtvKW.png"
    const description =
      "Custom tools created for your PreMiD experience! Featuring Custom Status and Metadata Creator for free and fresh UI!"

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        image,
        keywords: "premid, custom, status",
        url: "https://eggsy.xyz/projects/premid",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://eggsy.xyz/projects/premid",
        },
      ],
    }
  },
})
</script>

<template>

  <PageLayout title="Rogue" description="A Javascript dungeon crawler and roguelike-style game where you explore a procedurally generated dungeon" class="space-y-12" >

    <SmartFigure :src="images[0]" border caption="Yep, currently the game is only a 2D dungeon crawler with a few enemies and items"/>

    <section class="space-y-4">

      <Title size="2" > Technologies used </Title>
      <div class="flex flex-wrap gap-2">
        <span v-for="( l, i ) in languages" :key="`language-${ i }`" class="px-2 py-1 text-sm font-medium text-white rounded bg-neutral-900">
          {{ l }}
        </span>
      </div>

      <Title size="2" class="mt-24"> Role </Title>
      <p class="dark:text-white/70 ml-2">
        Developer <span class="mx-2">—</span> I created the game from scratch, using the technologies listed above. Assets were created by
        <a href="https://twitter.com/pixel_poem" target="_blank" class="underline underline-offset-6 hover:decoration-3">@pixel_poem</a>, Thanks to him for letting me use them!
      </p>

      <Title size="2" class="mt-24"> Context </Title>
      <div class="dark:text-white/70 ml-2">
        <p>
          I created this game as part of my final year project for my Bachelor's degree in Computer Science. I wanted to create a game that I would enjoy playing, and I think I succeeded in that regard.
        </p>
        <p class="mt-4">
          <u>The game is still in development</u>, and I plan to add more features to it in the future. Beyond that, This project was a great learning experience for me, as I had never created a game before, and I learned a lot about game development and the challenges that come with it.
        </p>
      </div>

    </section>

    <hr class="dark:border-white/10 border-2 rounded-full">

    <section class="space-y-4">
      <Title size="1" uppercase> In detail explanation</Title>
      <Title size="2" class="!mt-12"> What is Rogue? </Title>
      <p class="dark:text-white/70 ml-2">
        Rogue is a roguelike-style game in which the player explores a dungeon infested with monsters that must be fought in order to gain experience and rewards. The dungeon is procedurally generated, meaning that each playthrough is different. Player death is permanent and inevitable. The goal of the game is to survive for as long as possible, using the treasures found and experience accumulated to improve the player's character.
      </p>
      <p class="dark:text-white/70 ml-2">
        Everytime you play, the dungeon is different. The layout of the dungeon is randomly generated, and the monsters and items are also randomly generated. The game is a mix between a dungeon crawler and a roguelike. The game is inspired by Rogue and Dungeon Crawl Stone Soup.
      </p>

      <p class="dark:text-white/70 ml-2">
        Unlike most roguelikes, Rogue is played in a browser, and is therefore accessible from any device. Using WebSockets, the game is synchronized across all devices, meaning that you can start a game on your computer, and continue it on your phone, or vice versa.
      </p>

      <Title size="2" class="!mt-12"> What is a roguelike / Dungeon Crawler? </Title>
      <p class="dark:text-white/70 ml-2">
        A roguelike is a subgenre of role-playing video games characterized by a dungeon crawl through procedurally generated levels, turn-based gameplay, tile-based graphics, and permanent death of the player character. Most roguelikes are based on a high fantasy narrative, reflecting their influence from tabletop role playing games such as Dungeons & Dragons
      </p>
      <p class="dark:text-white/70 ml-2">
        Dungeon crawler is also a subgenre of role-playing video games in which the player navigates a labyrinthine environment, battling various monsters, and looting any treasure they may find. The term usually implies that the dungeon is the main (or only) area of the game, and many dungeon crawlers lack a overworld. Dungeon crawlers are often associated with first-person perspective, real-time gameplay, grid-based movement, and permanent death.
      </p>

      <Title size="1" class="!mt-12"> Features </Title>
      <Title size="2" class="!mt-12"> Procedurally generated dungeon </Title>
      <p class="dark:text-white/70 ml-2">
        The dungeon is randomly generated each time you play, meaning that each playthrough is different.
      </p>
      <p class="dark:text-white/70 ml-2">
        Generation is based on the <a href="http://www.roguebasin.com/index.php/Dungeon-Building_Algorithm" target="_blank" class="underline underline-offset-6 hover:decoration-3">Tyrant algorithm</a>. This algorithm works by dividing the dungeon space into a 2D array of cells, where each cell can be either a wall or a floor tile. The algorithm then iteratively applies a set of rules to determine the state of each cell in the next generation, based on the state of its neighboring cells.
      </p>
      <p class="dark:text-white/70 ml-2">
        For example, one rule might be that if a floor cell is surrounded by at least three wall cells, it should become a wall cell in the next generation. Another rule might be that if a wall cell is surrounded by at least three floor cells, it should become a floor cell in the next generation. These rules, when applied iteratively, can create a randomized layout that resembles a dungeon.
      </p>
      <p class="dark:text-white/70 ml-2">
        The algorithm is deterministic, meaning that the same seed will always generate the same dungeon.
      </p>

      <p class="dark:text-white/70 ml-2">
        You can read more about the algorithm and its implementation in my article :
      </p>

      <LastFm class="ml-2" image="https://cdn.discordapp.com/attachments/1071595350437134456/1103355340407451698/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3835333535343334363135303436313435302f313038373937383538393932313735393236322f726f6775654368616d702e676966.gif" url="" name="Procedural generation in nodejs" artist="Jérémy Caruelle"></LastFm>

      <Title size="2" class="!mt-12"> 2D tile-based graphics </Title>
      <p class="dark:text-white/70 ml-2">
        The game uses a 2D tile-based graphics system. Each tile is represented by a single character, and the entire dungeon is represented by a 2D array of characters. The player and monsters are also represented by characters, and their position in the dungeon is represented by their position in the 2D array.
      </p>
      <p class="dark:text-white/70 ml-2">
        For example, the player might be represented by the character '@', and the monsters might be represented by the characters 'g' and 'o'. The player's position in the dungeon might be represented by the coordinates (x, y), where x is the column number and y is the row number.
      </p>

      <div class="dark:text-white/70 ml-2 text-xs card-base rounded-lg overflow-x-auto">
        <pre style="width: fit-content" class="mx-auto">
                                                                        ###############
#####                                                                   #.............#
#...#                                                                   #.............#
#...#                                                                   #.............#
#.?.#                                        ############################.............#
#...#                                        #======.....+............../.............#
#+###                                        #====...o...##########.#####.............#
#.#                                          #===........#        #.#   ####/##########
#.#                                          #############        #.#      #.#
#.#                                                               #.#      #.#
#.#                                                               #.#      #.#
#.#        ########################################################.#      #.#######
#.#        #$$$.........+...........................................#      #......^#
#.#        #............#############################################      #########
#.##########............#
#........../............#
#.#######################
#.#
#.#
#.#
#.#
#.##                                                        #########         #########
#..##                                                       #.......###########.......#
##.O#                                                       #......./........./.......#
##.#                                                #########.......###########.......#
##..#                                               #.......+.......#         #.......#
#..##                                               #.###############         #.......#
#.##                                                #.#              ##########.......#
#.#                                                 #.#              #......../.......#
#.#            ######################################.################.########.......#
#.#            #...........g..........................................@#      #.....k.#
#.#            #.#######################################################      #.......#
#.##############.#                                                            #..D>...#
#!...............#                                                            #.......#
##################                                                            #########</pre>
      </div>

      <p class="dark:text-white/70 ml-2">
        Now, we have an ASCII representation of the dungeon, but we need to convert it into a graphical representation. This is done by mapping each character to a tile image. For example, the character '@' might be mapped to a tile image of a player character, and the character 'g' might be mapped to a tile image of a goblin.
      </p>

      <SmartFigure
        :src="images[1]"
        border
        class="max-w-xl mx-auto p-4"
        caption="Example of entity tileset created by @pixel_poem"
      />



    </section>

  </PageLayout>
</template>
