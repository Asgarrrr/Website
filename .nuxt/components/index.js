export { default as Button } from '../..\\src\\components\\Button.vue'
export { default as ColorSwitcher } from '../..\\src\\components\\ColorSwitcher.vue'
export { default as GoTop } from '../..\\src\\components\\GoTop.vue'
export { default as Kbd } from '../..\\src\\components\\Kbd.vue'
export { default as Navbar } from '../..\\src\\components\\Navbar.vue'
export { default as OmnibarButton } from '../..\\src\\components\\OmnibarButton.vue'
export { default as PageLayout } from '../..\\src\\components\\PageLayout.vue'
export { default as SponsorPopup } from '../..\\src\\components\\SponsorPopup.vue'
export { default as Status } from '../..\\src\\components\\Status.vue'
export { default as Title } from '../..\\src\\components\\Title.vue'
export { default as BlogImageContainer } from '../..\\src\\components\\Blog\\ImageContainer.vue'
export { default as BlogNotification } from '../..\\src\\components\\Blog\\Notification.vue'
export { default as BlogPrevNext } from '../..\\src\\components\\Blog\\PrevNext.vue'
export { default as BlogRating } from '../..\\src\\components\\Blog\\Rating.vue'
export { default as BlogReadingIndicator } from '../..\\src\\components\\Blog\\ReadingIndicator.vue'
export { default as BlogShare } from '../..\\src\\components\\Blog\\Share.vue'
export { default as BlogTableOfContents } from '../..\\src\\components\\Blog\\TableOfContents.vue'
export { default as CardDiscord } from '../..\\src\\components\\Card\\Discord.vue'
export { default as CardExperience } from '../..\\src\\components\\Card\\Experience.vue'
export { default as Card } from '../..\\src\\components\\Card\\Index.vue'
export { default as CardLastFm } from '../..\\src\\components\\Card\\LastFm.vue'
export { default as CardRepository } from '../..\\src\\components\\Card\\Repository.vue'
export { default as CardSkill } from '../..\\src\\components\\Card\\Skill.vue'
export { default as CardSong } from '../..\\src\\components\\Card\\Song.vue'
export { default as CardSponsor } from '../..\\src\\components\\Card\\Sponsor.vue'
export { default as IconAcademicHat } from '../..\\src\\components\\Icon\\AcademicHat.vue'
export { default as IconAt } from '../..\\src\\components\\Icon\\At.vue'
export { default as IconBranch } from '../..\\src\\components\\Icon\\Branch.vue'
export { default as IconBrand } from '../..\\src\\components\\Icon\\Brand.vue'
export { default as IconCalendar } from '../..\\src\\components\\Icon\\Calendar.vue'
export { default as IconChannel } from '../..\\src\\components\\Icon\\Channel.vue'
export { default as IconCheck } from '../..\\src\\components\\Icon\\Check.vue'
export { default as IconChevron } from '../..\\src\\components\\Icon\\Chevron.vue'
export { default as IconClock } from '../..\\src\\components\\Icon\\Clock.vue'
export { default as IconCog } from '../..\\src\\components\\Icon\\Cog.vue'
export { default as IconDev } from '../..\\src\\components\\Icon\\Dev.vue'
export { default as IconDocument } from '../..\\src\\components\\Icon\\Document.vue'
export { default as IconDollar } from '../..\\src\\components\\Icon\\Dollar.vue'
export { default as IconEllipsis } from '../..\\src\\components\\Icon\\Ellipsis.vue'
export { default as IconExclamation } from '../..\\src\\components\\Icon\\Exclamation.vue'
export { default as IconEye } from '../..\\src\\components\\Icon\\Eye.vue'
export { default as IconFire } from '../..\\src\\components\\Icon\\Fire.vue'
export { default as IconFork } from '../..\\src\\components\\Icon\\Fork.vue'
export { default as IconHome } from '../..\\src\\components\\Icon\\Home.vue'
export { default as IconBack } from '../..\\src\\components\\Icon\\IconBack.vue'
export { default as IconInbox } from '../..\\src\\components\\Icon\\Inbox.vue'
export { default as IconLink } from '../..\\src\\components\\Icon\\Link.vue'
export { default as IconMenu } from '../..\\src\\components\\Icon\\Menu.vue'
export { default as IconMoon } from '../..\\src\\components\\Icon\\Moon.vue'
export { default as IconMusicNote } from '../..\\src\\components\\Icon\\MusicNote.vue'
export { default as IconPlay } from '../..\\src\\components\\Icon\\Play.vue'
export { default as IconPlus } from '../..\\src\\components\\Icon\\Plus.vue'
export { default as IconQuestion } from '../..\\src\\components\\Icon\\Question.vue'
export { default as IconSearch } from '../..\\src\\components\\Icon\\Search.vue'
export { default as IconStar } from '../..\\src\\components\\Icon\\Star.vue'
export { default as IconStop } from '../..\\src\\components\\Icon\\Stop.vue'
export { default as IconSun } from '../..\\src\\components\\Icon\\Sun.vue'
export { default as IconSync } from '../..\\src\\components\\Icon\\Sync.vue'
export { default as IconTag } from '../..\\src\\components\\Icon\\Tag.vue'
export { default as IconTimes } from '../..\\src\\components\\Icon\\Times.vue'
export { default as IconX } from '../..\\src\\components\\Icon\\X.vue'
export { default as LoadersBlog } from '../..\\src\\components\\Loaders\\Blog.vue'
export { default as LoadersContent } from '../..\\src\\components\\Loaders\\Content.vue'
export { default as LoadersGoals } from '../..\\src\\components\\Loaders\\Goals.vue'
export { default as LoadersSongs } from '../..\\src\\components\\Loaders\\Songs.vue'
export { default as SkeletonLoaderIframe } from '../..\\src\\components\\SkeletonLoader\\Iframe.vue'
export { default as SkeletonLoader } from '../..\\src\\components\\SkeletonLoader\\Index.vue'
export { default as SkeletonLoaderLastfm } from '../..\\src\\components\\SkeletonLoader\\Lastfm.vue'
export { default as SkeletonLoaderRepository } from '../..\\src\\components\\SkeletonLoader\\Repository.vue'
export { default as SkeletonLoaderSong } from '../..\\src\\components\\SkeletonLoader\\Song.vue'
export { default as SkeletonLoaderSpinner } from '../..\\src\\components\\SkeletonLoader\\Spinner.vue'
export { default as SmartFigure } from '../..\\src\\components\\Smart\\Figure.vue'
export { default as SmartImage } from '../..\\src\\components\\Smart\\Image.vue'
export { default as SmartLink } from '../..\\src\\components\\Smart\\Link.vue'
export { default as BlogSectionsRatings } from '../..\\src\\components\\Blog\\Sections\\Ratings.vue'
export { default as CardPost } from '../..\\src\\components\\Card\\Post\\Index.vue'
export { default as CardPostNormal } from '../..\\src\\components\\Card\\Post\\Normal.vue'
export { default as CardPostText } from '../..\\src\\components\\Card\\Post\\Text.vue'
export { default as CardPostTextTitle } from '../..\\src\\components\\Card\\Post\\TextTitle.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
