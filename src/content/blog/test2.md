---
title: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium a nulla nec rutrum.
description: Quisque suscipit mauris quis nisl cursus porttitor. Vivamus aliquam magna id semper semper. Aliquam a diam id nisi pretium consectetur.
header: https://cdn.discordapp.com/attachments/883739697665417247/1101934374133436456/image.png
tags:
  - tag1
  - tag2
  - tag3
createdAt: 2023-04-27T19:03:24.368Z
related:
special: true
---

> In a few moments he was barefoot, his stockings folded in his pockets and his canvas shoes dangling by their knotted laces over his shoulders and, picking a pointed salt-eaten stick out of the jetsam among the rocks, he clambered down the slope of the breakwater.\
> — Test

<blog-notification type="danger">Test</blog-notification>


```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```
# Main Heading

## Heading 2

### Heading 3

Here's a paragraph of text. You can make **words bold** by using double asterisks on either side or *words italic* by using a single asterisk on either side.

You can also create lists:
- First item
- Second item
- Third item

Or numbered lists:
1. First item
2. Second item
3. Third item

```js
// You can also add code blocks with syntax highlighting
const hello = 'world';
console.log(hello);

```


----



```js [file.js]{4-6,7} meta-info=val
export default () => {
  console.log('Code block')
}
```


## Blockquotes
`hsl(H,S,L)`

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
</picture>


- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

<details>

<summary>Tips for collapsed sections</summary>

### You can add a header

You can add text within a collapsed section.

You can add an image or a code block, too.

```ruby
   puts "Hello World"
```

</details>

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$

<iframe height="300" style="width: 100%;" scrolling="no" title="Aurora" src="https://codepen.io/Asgarrrr/embed/poxRRER?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Asgarrrr/pen/poxRRER">
  Aurora</a> by Jérémy Caruelle (<a href="https://codepen.io/Asgarrrr">@Asgarrrr</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

```json
{
  "id": 1,
  "name": "Annie",
  "alias": "Annie",
  "title": "the Dark Child",
  "shortBio": "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.",
  "tacticalInfo": {
    "style": 10,
    "difficulty": 1,
    "damageType": "kMagic"
  },
  "playstyleInfo": {
    "damage": 3,
    "durability": 1,
    "crowdControl": 3,
    "mobility": 1,
    "utility": 2
  },
  "squarePortraitPath": "/lol-game-data/assets/v1/champion-icons/1.png",
  "stingerSfxPath": "/lol-game-data/assets/v1/champion-sfx-audios/1.ogg",
  "chooseVoPath": "/lol-game-data/assets/v1/champion-choose-vo/1.ogg",
  "banVoPath": "/lol-game-data/assets/v1/champion-ban-vo/1.ogg",
  "roles": [
    "mage"
  ],
  "recommendedItemDefaults": [
    
  ],
  "skins": [
    {
      "id": 1000,
      "isBase": true,
      "name": "Annie",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1000.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1000.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1000.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Base/AnnieLoadScreen.jpg",
      "skinType": "",
      "rarity": "kNoRarity",
      "isLegacy": false,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": null,
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": null,
      "description": null
    },
    {
      "id": 1001,
      "isBase": false,
      "name": "Goth Annie",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1001.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1001.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1001.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin01/AnnieLoadScreen_1.jpg",
      "skinType": "",
      "rarity": "kNoRarity",
      "isLegacy": false,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": null,
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 110
        }
      ],
      "description": "Her mother is dead. Her father is dead. But Annie remains, seeing beauty in the dark."
    },
    {
      "id": 1002,
      "isBase": false,
      "name": "Red Riding Annie",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1002.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1002.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1002.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin02/AnnieLoadScreen_2.jpg",
      "skinType": "",
      "rarity": "kNoRarity",
      "isLegacy": true,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": null,
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 71
        }
      ],
      "description": "Over the river and through the woods, to grandmother's house Annie went—not once suspecting that Warwick the Wolf was waiting for her. Of course, Warwick didn't know Annie could shoot balls of magic flame or summon a fiery bear, so really this was a larger issue with communication."
    },
    {
      "id": 1003,
      "isBase": false,
      "name": "Annie in Wonderland",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1003.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1003.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1003.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin03/AnnieLoadScreen_3.jpg",
      "skinType": "",
      "rarity": "kLegendary",
      "isLegacy": true,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": null,
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 71
        }
      ],
      "description": "Down the rabbit hole Annie went, following the White Tibbers she had spied at the riverbank, until she emerged in a world much more curious than the one she had left. “Perhaps I shall stay,” she said to herself—and so she did."
    },
    {
      "id": 1004,
      "isBase": false,
      "name": "Prom Queen Annie",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1004.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1004.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1004.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin04/AnnieLoadScreen_4.jpg",
      "skinType": "",
      "rarity": "kNoRarity",
      "isLegacy": true,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": null,
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 100
        }
      ],
      "description": null
    },
    {
      "id": 1005,
      "isBase": false,
      "name": "Frostfire Annie",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1005.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1005.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1005.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin05/AnnieLoadScreen_5.jpg",
      "skinType": "",
      "rarity": "kNoRarity",
      "isLegacy": false,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": null,
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 47
        }
      ],
      "description": "Annie is a Winterlands prodigy—a child born with both innate magic and a spirit guardian, the first of her kind in many generations. Though still young, she has already become a joyous fixture in the halls of the Poro King."
    },
    {
      "id": 1006,
      "isBase": false,
      "name": "Reverse Annie",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1006.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1006.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1006.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin06/AnnieLoadScreen_6.jpg",
      "skinType": "",
      "rarity": "kNoRarity",
      "isLegacy": false,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": null,
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 167
        }
      ],
      "description": null
    },
    {
      "id": 1007,
      "isBase": false,
      "name": "FrankenTibbers Annie",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1007.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1007.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1007.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin07/AnnieLoadScreen_7.jpg",
      "loadScreenVintagePath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin07/AnnieLoadScreen_7_LE.jpg",
      "skinType": "",
      "rarity": "kNoRarity",
      "isLegacy": true,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": null,
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 88
        }
      ],
      "description": "He's a towering abomination of science and magic. She's an eight year old with a beehive hairdo, and undiagnosed pyromania. Name a more iconic duo. I'll wait."
    },
    {
      "id": 1008,
      "isBase": false,
      "name": "Panda Annie",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1008.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1008.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1008.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin08/AnnieLoadScreen_8.jpg",
      "skinType": "",
      "rarity": "kNoRarity",
      "isLegacy": false,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": null,
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 54
        }
      ],
      "description": "Annie is a big part of Lunar Revel festivities, using her pyromancy to set off scores of high powered fireworks. Her panda bear Tibbers hauls the rockets for her, mauling anyone who tries to make off with even the smallest sparkler."
    },
    {
      "id": 1009,
      "isBase": false,
      "name": "Sweetheart Annie",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1009.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1009.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1009.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin09/AnnieLoadScreen_9.jpg",
      "skinType": "",
      "rarity": "kNoRarity",
      "isLegacy": true,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": null,
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 64
        }
      ],
      "description": "Sugar, spice, and everything nice: that's what Sweetheart Annie is made of! Tibbers is made of fire-resistant cotton blend and the insatiable hunger of a shadow bear, but he's still good for a hug or two. Probably just one, actually."
    },
    {
      "id": 1010,
      "isBase": false,
      "name": "Hextech Annie",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1010.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1010.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1010.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin10/AnnieLoadScreen_10.jpg",
      "skinType": "",
      "rarity": "kMythic",
      "isLegacy": false,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": null,
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 40
        }
      ],
      "description": "A scientific prodigy even among the intellectuals of the Hextech renaissance, Annie's beautiful, living warbears are among the most prized innovations of the era. Her most mysterious creation, Tibbers, is always close at hand—her confidant, friend, and monstrous bodyguard."
    },
    {
      "id": 1011,
      "isBase": false,
      "name": "Super Galaxy Annie",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1011.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1011.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1011.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin11/AnnieLoadScreen_11.jpg",
      "skinType": "",
      "rarity": "kEpic",
      "isLegacy": false,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": null,
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 21
        }
      ],
      "description": "The youngest human ever to be named a Super Galaxy cadet, Annie proved her mettle the day she turned her teddy bear into a self-piloting mech. Despite serious concerns over her highly combustible designs and volatile programming, Annie's Mecha-Tibbers went into full production. Desperate times call for destructive measures."
    },
    {
      "id": 1012,
      "isBase": false,
      "name": "Annie-Versary",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1012.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1012.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1012.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin12/AnnieLoadScreen_12.jpg",
      "loadScreenVintagePath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin12/AnnieLoadscreen_12_LE.jpg",
      "skinType": "",
      "rarity": "kMythic",
      "isLegacy": false,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": null,
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 169
        }
      ],
      "description": "Ten years of epic outplays, last second turnarounds, and brutal throws - and we couldn't have done it without each and every one of you. Annie is ready to usher in the festivities, and Teemo… has been lifting, I see. Happy 10!"
    },
    {
      "id": 1013,
      "isBase": false,
      "name": "Lunar Beast Annie",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1013.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1013.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1013.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin13/AnnieLoadScreen_13.jpg",
      "loadScreenVintagePath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin13/AnnieLoadscreen_13_LE.jpg",
      "skinType": "",
      "rarity": "kEpic",
      "isLegacy": true,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1013.png",
      "chromas": [
        {
          "id": 1014,
          "name": "Lunar Beast Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1014.png",
          "colors": [
            "#D33528",
            "#D33528"
          ],
          "descriptions": [
            {
              "region": "riot",
              "description": "This chroma was released as a bundle exclusive in 2021."
            }
          ],
          "rarities": [
            {
              "region": "riot",
              "rarity": 2
            }
          ]
        },
        {
          "id": 1015,
          "name": "Lunar Beast Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1015.png",
          "colors": [
            "#88FF00",
            "#9B1520"
          ],
          "descriptions": [
            {
              "region": "riot",
              "description": "This chroma was released as a Loot exclusive in the Lunar Beast 2021 event."
            }
          ],
          "rarities": [
            {
              "region": "riot",
              "rarity": 2
            }
          ]
        },
        {
          "id": 1016,
          "name": "Lunar Beast Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1016.png",
          "colors": [
            "#DF9117",
            "#DF9117"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            {
              "region": "riot",
              "rarity": 1
            }
          ]
        },
        {
          "id": 1017,
          "name": "Lunar Beast Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1017.png",
          "colors": [
            "#9C68D7",
            "#9C68D7"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            {
              "region": "riot",
              "rarity": 1
            }
          ]
        },
        {
          "id": 1018,
          "name": "Lunar Beast Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1018.png",
          "colors": [
            "#2756CE",
            "#2756CE"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            {
              "region": "riot",
              "rarity": 1
            }
          ]
        },
        {
          "id": 1019,
          "name": "Lunar Beast Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1019.png",
          "colors": [
            "#27211C",
            "#27211C"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            {
              "region": "riot",
              "rarity": 1
            }
          ]
        },
        {
          "id": 1020,
          "name": "Lunar Beast Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1020.png",
          "colors": [
            "#E58BA5",
            "#E58BA5"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            {
              "region": "TENCENT",
              "rarity": 2
            },
            {
              "region": "riot",
              "rarity": 1
            }
          ]
        }
      ],
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 142
        }
      ],
      "description": "Everyone was shocked when Annie was chosen as Ox Clan's tech operative. A precocious prodigy, Annie serves as the team's recon strategist, making sure the parade route is clear of civilians."
    },
    {
      "id": 1022,
      "isBase": false,
      "name": "Cafe Cuties Annie",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1022.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1022.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1022.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin22/AnnieLoadScreen_22.jpg",
      "loadScreenVintagePath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin22/AnnieLoadscreen_22_LE.jpg",
      "skinType": "",
      "rarity": "kEpic",
      "isLegacy": false,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1022.png",
      "chromas": [
        {
          "id": 1023,
          "name": "Cafe Cuties Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1023.png",
          "colors": [
            "#D33528",
            "#D33528"
          ],
          "descriptions": [
            {
              "region": "riot",
              "description": "This chroma was released as a bundle exclusive in 2021."
            }
          ],
          "rarities": [
            {
              "region": "riot",
              "rarity": 1
            }
          ]
        },
        {
          "id": 1024,
          "name": "Cafe Cuties Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1024.png",
          "colors": [
            "#FFEE59",
            "#FFEE59"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            
          ]
        },
        {
          "id": 1025,
          "name": "Cafe Cuties Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1025.png",
          "colors": [
            "#2DA130",
            "#2DA130"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            
          ]
        },
        {
          "id": 1026,
          "name": "Cafe Cuties Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1026.png",
          "colors": [
            "#6ABBEE",
            "#6ABBEE"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            
          ]
        },
        {
          "id": 1027,
          "name": "Cafe Cuties Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1027.png",
          "colors": [
            "#54209B",
            "#54209B"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            
          ]
        },
        {
          "id": 1028,
          "name": "Cafe Cuties Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1028.png",
          "colors": [
            "#E58BA5",
            "#E58BA5"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            {
              "region": "TENCENT",
              "rarity": 1
            }
          ]
        },
        {
          "id": 1029,
          "name": "Cafe Cuties Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1029.png",
          "colors": [
            "#ECF9F8",
            "#ECF9F8"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            
          ]
        },
        {
          "id": 1030,
          "name": "Cafe Cuties Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1030.png",
          "colors": [
            "#27211C",
            "#27211C"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            
          ]
        }
      ],
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 153
        }
      ],
      "description": "Daughter of the cafe's owner and an accomplished pastry mage wunderkind, Annie has a sweet tooth to be reckoned with. Though her occasional hangry tantrums send her enchanted gummy bear scouring the cafe for any morsel of food fit for his master, with a full belly Annie is as sweet as sugar!"
    },
    {
      "id": 1031,
      "isBase": false,
      "name": "Fright Night Annie",
      "splashPath": "/lol-game-data/assets/v1/champion-splashes/1/1031.jpg",
      "uncenteredSplashPath": "/lol-game-data/assets/v1/champion-splashes/uncentered/1/1031.jpg",
      "tilePath": "/lol-game-data/assets/v1/champion-tiles/1/1031.jpg",
      "loadScreenPath": "/lol-game-data/assets/ASSETS/Characters/Annie/Skins/Skin31/AnnieLoadScreen_31.PIE_C_12_18.jpg",
      "skinType": "",
      "rarity": "kEpic",
      "isLegacy": false,
      "splashVideoPath": null,
      "collectionSplashVideoPath": null,
      "featuresText": null,
      "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1031.png",
      "chromas": [
        {
          "id": 1032,
          "name": "Fright Night Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1032.png",
          "colors": [
            "#D33528",
            "#D33528"
          ],
          "descriptions": [
            {
              "region": "riot",
              "description": "This chroma was released as a bundle exclusive in 2022."
            }
          ],
          "rarities": [
            {
              "region": "riot",
              "rarity": 1
            }
          ]
        },
        {
          "id": 1033,
          "name": "Fright Night Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1033.png",
          "colors": [
            "#FFEE59",
            "#FFEE59"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            
          ]
        },
        {
          "id": 1034,
          "name": "Fright Night Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1034.png",
          "colors": [
            "#2DA130",
            "#2DA130"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            
          ]
        },
        {
          "id": 1035,
          "name": "Fright Night Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1035.png",
          "colors": [
            "#6ABBEE",
            "#6ABBEE"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            
          ]
        },
        {
          "id": 1036,
          "name": "Fright Night Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1036.png",
          "colors": [
            "#E58BA5",
            "#E58BA5"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            {
              "region": "TENCENT",
              "rarity": 1
            }
          ]
        },
        {
          "id": 1037,
          "name": "Fright Night Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1037.png",
          "colors": [
            "#54209B",
            "#54209B"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            
          ]
        },
        {
          "id": 1038,
          "name": "Fright Night Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1038.png",
          "colors": [
            "#ECF9F8",
            "#ECF9F8"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            
          ]
        },
        {
          "id": 1039,
          "name": "Fright Night Annie",
          "chromaPath": "/lol-game-data/assets/v1/champion-chroma-images/1/1039.png",
          "colors": [
            "#27211C",
            "#27211C"
          ],
          "descriptions": [
            
          ],
          "rarities": [
            
          ]
        }
      ],
      "emblems": null,
      "regionRarityId": 0,
      "rarityGemPath": null,
      "skinLines": [
        {
          "id": 170
        }
      ],
      "description": "Awful Orphan Annie comes home from school each day<br>A lonely little lady with whom no one will play<br>Now all her family's fled (or dead or gone away)<br>She can depend on Mr. Tibbers to make her new friends stay!"
    }
  ],
  "passive": {
    "name": "Pyromania",
    "abilityIconPath": "/lol-game-data/assets/ASSETS/Characters/Annie/HUD/Icons2D/Annie_Passive.png",
    "abilityVideoPath": "champion-abilities/0001/ability_0001_P1.webm",
    "abilityVideoImagePath": "champion-abilities/0001/ability_0001_P1.jpg",
    "description": "After casting 4 spells, Annie's next offensive spell will stun the target.<br><br>Annie begins the game and respawns with Pyromania available."
  },
  "spells": [
    {
      "spellKey": "q",
      "name": "Disintegrate",
      "abilityIconPath": "/lol-game-data/assets/ASSETS/Characters/Annie/HUD/Icons2D/Annie_Q.png",
      "abilityVideoPath": "champion-abilities/0001/ability_0001_Q1.webm",
      "abilityVideoImagePath": "champion-abilities/0001/ability_0001_Q1.jpg",
      "cost": "@Cost@ @AbilityResourceName@",
      "cooldown": "@Cooldown@s %i:cooldown%",
      "description": "Annie hurls a Mana infused fireball, dealing damage and refunding the Mana cost if it destroys the target.",
      "dynamicDescription": "Annie hurls a fireball, dealing <magicDamage>@TotalDamage@ magic damage</magicDamage>. If the target dies, Annie refunds the Mana cost and reduces the Cooldown by 50%.@SpellModifierDescriptionAppend@",
      "range": [
        625.0000,
        625.0000,
        625.0000,
        625.0000,
        625.0000,
        625.0000
      ],
      "costCoefficients": [
        60.0000,
        65.0000,
        70.0000,
        75.0000,
        80.0000,
        85.0000
      ],
      "cooldownCoefficients": [
        4.0000,
        4.0000,
        4.0000,
        4.0000,
        4.0000,
        4.0000
      ],
      "coefficients": {
        "coefficient1": 0.8000,
        "coefficient2": 0.0000
      },
      "effectAmounts": {
        "Effect1Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect2Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect3Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect4Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect5Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect6Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect7Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect8Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect9Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect10Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ]
      },
      "ammo": {
        "ammoRechargeTime": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "maxAmmo": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "maxLevel": 0
    },
    {
      "spellKey": "w",
      "name": "Incinerate",
      "abilityIconPath": "/lol-game-data/assets/ASSETS/Characters/Annie/HUD/Icons2D/Annie_W.png",
      "abilityVideoPath": "champion-abilities/0001/ability_0001_W1.webm",
      "abilityVideoImagePath": "champion-abilities/0001/ability_0001_W1.jpg",
      "cost": "@Cost@ @AbilityResourceName@",
      "cooldown": "@Cooldown@s %i:cooldown%",
      "description": "Annie casts a blazing cone of fire, dealing damage to all enemies in the area.",
      "dynamicDescription": "Annie projects a wave of fire, dealing <magicDamage>@TotalDamage@ magic damage</magicDamage>.@SpellModifierDescriptionAppend@",
      "range": [
        600.0000,
        600.0000,
        600.0000,
        600.0000,
        600.0000,
        600.0000
      ],
      "costCoefficients": [
        90.0000,
        95.0000,
        100.0000,
        105.0000,
        110.0000,
        115.0000
      ],
      "cooldownCoefficients": [
        8.0000,
        8.0000,
        8.0000,
        8.0000,
        8.0000,
        8.0000
      ],
      "coefficients": {
        "coefficient1": 0.8500,
        "coefficient2": 0.0000
      },
      "effectAmounts": {
        "Effect1Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect2Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect3Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect4Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect5Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect6Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect7Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect8Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect9Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect10Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ]
      },
      "ammo": {
        "ammoRechargeTime": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "maxAmmo": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "maxLevel": 0
    },
    {
      "spellKey": "e",
      "name": "Molten Shield",
      "abilityIconPath": "/lol-game-data/assets/ASSETS/Characters/Annie/HUD/Icons2D/Annie_E.png",
      "abilityVideoPath": "champion-abilities/0001/ability_0001_E1.webm",
      "abilityVideoImagePath": "champion-abilities/0001/ability_0001_E1.jpg",
      "cost": "@Cost@ @AbilityResourceName@",
      "cooldown": "@Cooldown@s %i:cooldown%",
      "description": "Grants Annie or an ally a shield, a burst of Move Speed, and damages enemies who strike her with attacks or spells.",
      "dynamicDescription": "Annie grants an ally champion <shield>@ShieldBlockTotal@ Shield</shield> for @ShieldDuration@ seconds and <speed>@MoveSpeedCalc@ Decaying Move Speed</speed> for @MovementSpeedDuration@ seconds. While the shield holds, enemies who hit the shielded ally with an Attack or Ability receive <magicDamage>@DamageReturn@ magic damage</magicDamage> once per shield.<br><br>Tibbers always gains the effects of <spellName>Molten Shield</spellName> when summoned.@SpellModifierDescriptionAppend@",
      "range": [
        800.0000,
        800.0000,
        800.0000,
        800.0000,
        800.0000,
        800.0000
      ],
      "costCoefficients": [
        60.0000,
        65.0000,
        70.0000,
        75.0000,
        80.0000,
        85.0000
      ],
      "cooldownCoefficients": [
        12.0000,
        11.5000,
        11.0000,
        10.5000,
        10.0000,
        10.0000
      ],
      "coefficients": {
        "coefficient1": 0.2000,
        "coefficient2": 0.0000
      },
      "effectAmounts": {
        "Effect1Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect2Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect3Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect4Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect5Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect6Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect7Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect8Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect9Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect10Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ]
      },
      "ammo": {
        "ammoRechargeTime": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "maxAmmo": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "maxLevel": 0
    },
    {
      "spellKey": "r",
      "name": "Summon: Tibbers",
      "abilityIconPath": "/lol-game-data/assets/ASSETS/Characters/Annie/HUD/Icons2D/Annie_R1.png",
      "abilityVideoPath": "champion-abilities/0001/ability_0001_R1.webm",
      "abilityVideoImagePath": "champion-abilities/0001/ability_0001_R1.jpg",
      "cost": "@Cost@ @AbilityResourceName@",
      "cooldown": "@Cooldown@s %i:cooldown%",
      "description": "Annie wills her bear Tibbers to life, dealing damage to units in the area. Tibbers can attack and also burns enemies that stand near him.",
      "dynamicDescription": "Annie summons her bear Tibbers, dealing <magicDamage>@InitialBurstDamage@ magic damage</magicDamage>. For the next @TibbersLifetime@ seconds, Tibbers burns nearby enemies for <magicDamage>@TibbersAuraDamage@ magic damage per second</magicDamage>.<br><br>Tibbers becomes enraged when summoned, if Annie stuns an enemy champion, and if Annie dies. When enraged, Tibbers gains <attackSpeed>275% Attack Speed</attackSpeed> and <speed>100% Move Speed</speed> decaying over 3 seconds.<br><br><recast>Recast:</recast> Manually issue orders to Tibbers.@SpellModifierDescriptionAppend@",
      "range": [
        600.0000,
        600.0000,
        600.0000,
        600.0000,
        600.0000,
        600.0000
      ],
      "costCoefficients": [
        100.0000,
        100.0000,
        100.0000,
        0.0000,
        0.0000,
        0.0000
      ],
      "cooldownCoefficients": [
        130.0000,
        115.0000,
        100.0000,
        100.0000,
        100.0000,
        100.0000
      ],
      "coefficients": {
        "coefficient1": 0.0000,
        "coefficient2": 0.0000
      },
      "effectAmounts": {
        "Effect1Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect2Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect3Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect4Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect5Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect6Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect7Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect8Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect9Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "Effect10Amount": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ]
      },
      "ammo": {
        "ammoRechargeTime": [
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000,
          0.0000
        ],
        "maxAmmo": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      "maxLevel": 0
    }
  ]
}
```