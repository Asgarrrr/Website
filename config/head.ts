import { NuxtOptionsHead } from "@nuxt/types/config/head"

/* Define constants */
const image = "/icon.png"
const description = "A French developer, passionate about gaming and programming, who is eager to enhance their JavaScript skills."

const Head: NuxtOptionsHead = {
  title: "Jérémy Caruelle",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: description,
    },
    /* Twitter */
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@asgarrrr",
    },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@asgarrrr",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Jérémy Caruelle",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: image,
    },
    /* Open-Graph */
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "Jérémy Caruelle",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      name: "og:image",
      content: image,
    },
    /* Others */
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#171717",
    },
  ].map((i) => {
    // @ts-ignore-next-line
    if (i.name && !i.property) i.property = i.name
    return i
  }),
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/assets/icons/icon.ico",
    },
    {
      rel: "search",
      type: "application/opensearchdescription+xml",
      title: "Asgarrrr's Blog",
      href: "/opensearch.xml",
    },
  ],
}

export default Head
