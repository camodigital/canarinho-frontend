import breackpoints from '../props/_breackpoints'

const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`

const landscapeMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)  and (max-aspect-ratio: 3/2)`

const portraitMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)  and (max-aspect-ratio: 2/3)`

const media = {
  custom: customMediaQuery,
  xphone: customMediaQuery(breackpoints.xphone),
  phone: customMediaQuery(breackpoints.phone),
  tablet: customMediaQuery(breackpoints.tablet),
  desktop: customMediaQuery(breackpoints.desk),
  wide: customMediaQuery(breackpoints.wide),
  superwide: customMediaQuery(breackpoints.superWide),
  ultrawide: customMediaQuery(breackpoints.ultraWide),
  r4k: customMediaQuery(breackpoints.r4k),
  r8k: customMediaQuery(breackpoints.r8k),
  // landscape
  customLandscape: landscapeMediaQuery,
  xphoneLandscape: landscapeMediaQuery(breackpoints.xphone),
  phoneLandscape: landscapeMediaQuery(breackpoints.phone),
  tabletLandscape: landscapeMediaQuery(breackpoints.tablet),
  desktopLandscape: landscapeMediaQuery(breackpoints.desk),
  wideLandscape: landscapeMediaQuery(breackpoints.wide),
  superwideLandscape: landscapeMediaQuery(breackpoints.superWide),
  ultrawideLandscape: landscapeMediaQuery(breackpoints.ultraWide),
  r4kLandscape: landscapeMediaQuery(breackpoints.r4k),
  r8kLandscape: landscapeMediaQuery(breackpoints.r8k),
  // portrait
  customPortrait: portraitMediaQuery,
  xphonePortrait: portraitMediaQuery(breackpoints.xphone),
  phonePortrait: portraitMediaQuery(breackpoints.phone),
  tabletPortrait: portraitMediaQuery(breackpoints.tablet),
  desktopPortrait: portraitMediaQuery(breackpoints.desk),
  widePortrait: portraitMediaQuery(breackpoints.wide),
  superwidePortrait: portraitMediaQuery(breackpoints.superWide),
  ultrawidePortrait: portraitMediaQuery(breackpoints.ultraWide),
  r4kPortrait: portraitMediaQuery(breackpoints.r4k),
  r8kPortrait: portraitMediaQuery(breackpoints.r8k)
}

export default media
