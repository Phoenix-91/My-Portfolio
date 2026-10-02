export type Asset = { src: string; w: number; h: number };

export const A = {
  banner: { src: '/assets/images/banner.gif', w: 768, h: 432 },
  cuLogo: { src: '/assets/images/cu-logo.png', w: 100, h: 160 },
  forest: { src: '/assets/images/forest.png', w: 540, h: 304 },
  me: { src: '/assets/images/me.png', w: 240, h: 240 },
  tom: { src: '/assets/images/tom.jpg', w: 160, h: 160 },
  tenLogo: { src: '/assets/images/ten-logo.png', w: 200, h: 200 },
  bmo: { src: '/assets/pixel/bmo.png', w: 260, h: 282 },
  cap: { src: '/assets/pixel/cap.png', w: 703, h: 701 },
  cat: { src: '/assets/pixel/cat.png', w: 280, h: 162 },
  hangPlant: { src: '/assets/pixel/hang-plant.png', w: 280, h: 381 },
  long: { src: '/assets/pixel/long.png', w: 605, h: 155 },
  pikachu: { src: '/assets/pixel/pikachu.png', w: 200, h: 235 },
  planet: { src: '/assets/pixel/planet.png', w: 300, h: 186 },
  pot: { src: '/assets/pixel/pot.png', w: 280, h: 332 },
} as const satisfies Record<string, Asset>;
