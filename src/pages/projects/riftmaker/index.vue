<script lang="ts">
import Vue from "vue"
import Title from "@/components/Title.vue";
import LastFm from "@/components/Card/LastFm.vue";
import Image from "@/components/Smart/Image.vue";

export default Vue.extend({
  components: {Image, LastFm, Title},

  data() {
    return {
      languages: [ "Rust", "Tauri", "JavaScript", "Node.js", "HTML", "CSS", "Python" ],
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
        keywords: "League of Legends, AI, Riftmaker, Rift, Maker",
        url: "https://jeremycaruelle.com/projects/riftmaker",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://jeremycaruelle.com/projects/riftmaker",
        },
      ],
    }
  },
})
</script>

<template>

  <PageLayout
    title="Riftmaker"
    description="A real-time League of Legends AI companion, delivering game insights and assisting players with up-to-date information"
    class="space-y-12"
  >

  <SmartFigure src="https://cdn.discordapp.com/attachments/864261615402876948/1106130034277765181/Riftmaker.png" border/>

    <section class="space-y-4">

      <Title size="2" > Technologies used </Title>
      <div class="flex flex-wrap gap-2">
        <span v-for="( l, i ) in languages" :key="`language-${ i }`" class="px-2 py-1 text-sm font-medium text-white rounded bg-neutral-900">
          {{ l }}
        </span>
      </div>

      <Title size="2" class="mt-24"> Role </Title>
      <p class="dark:text-white/70 ml-2">
        Developer, Researcher and Designer <span class="mx-2">—</span> All the code, design and research was done by me.
      </p>

      <Title size="2" class="mt-24"> Context </Title>
      <div class="dark:text-white/70 ml-2">
        <p>
          As an avid League of Legends player, I have always been frustrated with the lack of reliable and up-to-date information available during matches.
          This led me to create Riftmaker as a solution to my own needs and the needs of the League of Legends community.
        </p>
        <p class="mt-4">
          I believe that having access to real-time insights and personalized recommendations will not only improve my own
          gameplay but also enhance the overall gaming experience for players worldwide.
        </p>
        <p class="mt-4">
          Artificial intelligence and machine learning allow us to analyze millions of data points in real-time, providing
          players with personalized recommendations and insights that are tailored to their unique playstyle.
        </p>
        <p class="mt-4">
          — <i>By creating Riftmaker, I aim to revolutionize how players approach the game, empowering them with knowledge
          and strategic advantages to dominate the Rift.</i>
        </p>
      </div>

    </section>

    <hr class="dark:border-white/10 border-2 rounded-full">

    <section class="space-y-4">
      <Title size="1" uppercase> In detail explanation</Title>
      <Title size="2" class="!mt-12"> What is League of Legends? </Title>
      <p class="dark:text-white/70 ml-2">
        League of Legends is a highly popular competitive online game set in a fantasy universe. In this game, two teams face off against each other to destroy the enemy's base while defending their own. Each player controls a unique champion with special abilities and must work together as a team to conquer objectives such as killing neutral monsters, destroying towers, and eliminating enemy champions. League of Legends combines strategy, individual skills, and team coordination to provide an engaging and competitive gaming experience. The game features a wide variety of champions with different playstyles, allowing players to find one that best suits their preferred style of play.
      </p>
      <p class="dark:text-white/70 ml-2">
        League of Legends is a highly competitive game with a large player base. The game has <b class="underline underline-offset-6 hover:decoration-3">over 100 million monthly active players</b> and is <span class="underline underline-offset-6 hover:decoration-3">one of the most popular esports titles in the world</span>. The game is free-to-play and generates revenue through the sale of in-game cosmetics such as skins and emotes.
      </p>

      <Title size="2" class="!mt-12"> Existing solutions </Title>
      <p class="dark:text-white/70 ml-2">
        There are many websites and apps that provide information about League of Legends, like
        <a href="https://porofessor.gg/" target="_blank" class="underline underline-offset-6 hover:decoration-3">Porofessor</a>,
        <a href="https://blitz.gg/" target="_blank" class="underline underline-offset-6 hover:decoration-3">Blitz</a>,
        <a href="https://app.mobalytics.gg/" target="_blank" class="underline underline-offset-6 hover:decoration-3">Mobalytics</a>,
        and more. However, these solutions are limited in their scope and do not provide real-time insights or personalized recommendations based on a player's unique playstyle and opponent's champion / item builds.
      </p>

      <Title size="2" class="!mt-12"> Why is Riftmaker different? </Title>
      <p class="dark:text-white/70 ml-2">
        Riftmaker stands out as a unique and superior choice compared to other League of Legends companion tools due to the following reasons:
        <ol class="list-decimal list-inside mt-4">

          <li>
            <b>Real-time Insights and Assistance</b>
            <p class="ml-4 border-l-3 border-transparent mb-4">
              Riftmaker offers real-time game insights and assistance to players. It continuously analyzes the current
              game state, providing up-to-date information and strategic advice to help players make informed decisions.
              This dynamic and immediate feedback sets Riftmaker apart, ensuring players stay ahead of the competition.
            </p>
          </li>

          <li>
            <b>Personalized recommendations</b>
            <p class="ml-4 border-l-3 border-transparent mb-4">
              Riftmaker goes beyond generic recommendations by offering personalized suggestions tailored to each player's unique playstyle and preferences.
              By analyzing individual gameplay patterns and historical performance data, Riftmaker provides targeted recommendations that
              enhance the player's strengths and improve their weaknesses.
            </p>
            <p class="ml-4 border-l-3 border-transparent mb-4">
              Customized objectives and challenges are also generated to improve the player's weaknesses in a more playful way
            </p>
          </li>

          <li>
            <b>Extensive Champion and Item Database</b>
            <p class="ml-4 border-l-3 border-transparent mb-4">
              Riftmaker features an extensive champion and item database, regularly updated with the latest League of Legends patches.
              Players can access comprehensive information about champions, including abilities, scaling ratios, and recommended playstyles.
              In-depth item descriptions, statistics, and situational recommendations empower players to make the best choices for each game scenario
            </p>
          </li>

          <li>
            <b>Patch Notes and Meta Analysis</b>
            <p class="ml-4 border-l-3 border-transparent mb-4">
              Riftmaker keeps players informed about the latest patch notes and provides insightful analysis on the current meta,
              popular strategies, and emerging trends. This comprehensive understanding of the game's evolving landscape
              allows players to adapt their gameplay accordingly and stay competitive.
            </p>
          </li>

          <li>
            <b>In-Game Overlay</b>
            <p class="ml-4 border-l-3 border-transparent mb-4">
              Riftmaker features an in-game overlay that provides real-time information and recommendations without interrupting gameplay.
              This seamless integration ensures players can focus on the game while still benefiting from Riftmaker's insights and assistance.
          </li>

          <li>
            <b>Ongoing Development and Future Features</b>
            <p class="ml-4 border-l-3 border-transparent mb-4">
              Riftmaker is an ongoing project with many exciting features planned for the future. I am committed to continuously improving Riftmaker
              and providing players with the best possible experience. I welcome feedback from the community and encourage players to share their ideas
              on how Riftmaker can be improved.
            </p>

        </ol>
      </p>

      <Title size="2" class="!mt-12"> Electron VS Tauri </Title>
      <p class="dark:text-white/70 ml-2">
        Initially, I was inclined to choose Electron as the framework for our client application. Electron has gained
        ignificant popularity and has a well-established ecosystem, making it a seemingly obvious choice.
        However, after seeking feedback from the developer community and considering our performance goals,
        I made the decision to switch to Tauri.
      </p>

      <p class="dark:text-white/70 ml-2">
        Tauri is a new framework that offers many advantages over Electron. It is lightweight, fast, and easy to use.
        It also has a smaller footprint than Electron, making it ideal for our performance-sensitive application.
        Tauri is still in its early stages of development, but it has already proven itself as a viable alternative to Electron.
      </p>

      <p class="dark:text-white/70 ml-2">
        I am confident that Tauri will continue to improve and become the de facto standard for building cross-platform desktop applications.
        Switching to Tauri was a difficult decision, especially since I had no prior experience with the framework and Rust programming language.
        However, I am glad I made the switch because it has allowed me to build a better product faster than I could have with Electron.
      </p>


      <Title size="2" class="!mt-12"> Challenges & Conclusion </Title>
      <p class="dark:text-white/70 ml-2">
        The biggest challenge I faced while developing Riftmaker was finding a way to analyze the game state in real-time.
        League of Legends is a complex game with many variables that change constantly throughout the match. It was difficult to
        find a solution that could handle this complexity and provide accurate insights in real-time.
      </p>
      <p class="dark:text-white/70 ml-2">
        Without any knowledge in AI, I had to learn the basics of AI and machine learning to be able to create a model capable of predicting the actions of the opposing players.
        I also had to learn how to use the Riot Games API / LCU to retrieve data about the current game state.

      </p>
    </section>


  </PageLayout>
</template>
