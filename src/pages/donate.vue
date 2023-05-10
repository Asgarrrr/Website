<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { SponsorLinks } from "~/@types/runtimeConfig"
import type { ISponsor } from "@/types/Response/Sponsors"

export default Vue.extend({
  data() {
    return {
      sponsors: [] as ISponsor[],
      accounts: [
        {
          image: "/assets/images/N26_App_Icon.png",
          name: "N26",
          iban: "DE28 1001 1001 2628 2807 55",
          revealed: false,
        },
      ],
    }
  },
  fetchOnServer: false,
  async fetch() {
    const { data } = await this.$axios.get(
      "https://raw.githubusercontent.com/asgarrrr/.github/main/sponsors.json"
    )

    this.sponsors = data
  },
  head() {
    const title = "Donate"
    const description =
      "Like my projects? You can donate to me to boost my performance and help me create more, better projects in the future!"

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "donate",
        url: "https://jeremycaruelle.fr/donate",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://jeremycaruelle.fr/donate",
        },
      ],
    }
  },
  computed: {
    /**
     * Returns the Sponsor object in runtime config.
     * @returns {SponsorLinks}
     */
    getSponsorLinks(): SponsorLinks {
      return this.$config.sponsor as SponsorLinks
    },

    getSortedSponsors(): { oneTime: ISponsor[]; monthly: ISponsor[] } {
      const sponsors = this.sponsors

      const sortByPrice = (a: ISponsor, b: ISponsor) =>
        b.monthlyDollars - a.monthlyDollars

      return {
        oneTime: sponsors
          .filter((sponsor) => sponsor.isOneTime)
          .sort(sortByPrice),
        monthly: sponsors
          .filter((sponsor) => !sponsor.isOneTime)
          .sort(sortByPrice),
      }
    },
  },
})
</script>

<template>
  <PageLayout
    title="Donate"
    :description="[
      'If you are interested in my projects or actions and would like to support me, you have the option to make a donation using the information provided on this page. Your contribution would be greatly appreciated. Thank you ♥'
    ]"
    class="space-y-12"
  >
    <section class="space-y-4">
      <Title>Support Me On</Title>

      <div class="flex gap-x-4">

        <div class="flex flex-wrap gap-x-4 gap-y-2">
          <Button :href="getSponsorLinks.github" blank>
            <template #icon>
              <IconBrand brand="github" class="h-5 w-5" />
            </template>

            GitHub Sponsors
          </Button>
        </div>

        <div class="flex flex-wrap gap-x-4 gap-y-2">
          <Button :href="getSponsorLinks.buymeacoffee" blank>
            <template #icon>
              <IconBrand brand="BuyMeACoffee" class="h-5 w-5" />
            </template>

            Buy me a coffee
          </Button>
        </div>

      </div>

    </section>

    <section class="space-y-4">
      <Title :padding="false">Sponsors</Title>

      <div>
        <transition name="fade" mode="out-in">
          <SkeletonLoader
            v-if="$fetchState.pending"
            type="spinner"
            class="w-full py-4"
          />

          <p v-else-if="$fetchState.error !== null">An error occured.</p>
          <p
            v-else-if="
              !$fetchState.pending &&
              !$fetchState.error &&
              sponsors.length === 0
            "
          >
            No sponsors yet :(
          </p>

          <div v-else class="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <CardSponsor
              v-for="(item, index) in getSortedSponsors.monthly"
              :key="`sponsor-monthly-${index}`"
              :sponsor="item.sponsor"
              monthly
            />

            <CardSponsor
              v-for="(item, index) in getSortedSponsors.oneTime"
              :key="`sponsor-oneTime-${index}`"
              :sponsor="item.sponsor"
            />
          </div>
        </transition>
      </div>
    </section>

    <section class="space-y-4">
      <Title>Bank Accounts</Title>

      <div class="grid gap-4">
        <div
          v-for="(account, index) in accounts"
          :key="`account-${index}`"
          class="flex h-full space-x-4 items-center rounded-lg card-base"
        >
          <div class="rounded-lg">
            <SmartImage :src="account.image" class="rounded-lg h-12 w-12" />
          </div>

          <div class="rounded-tr rounded-br flex h-full">
            <div>
              <h3 class="font-medium text-lg">
                {{ account.name }}
              </h3>

              <span
                class="text-black/30 dark:text-white/30"
                :class="
                  !account.revealed &&
                  'hover:underline cursor-pointer select-none'
                "
                @click="account.revealed = true"
              >
                {{ account.revealed ? account.iban : "Click to Reveal" }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
</template>
