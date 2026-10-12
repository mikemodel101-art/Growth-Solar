// Centralised, hotlinkable stock imagery (Pexels CDN).
const img = (id: number, w = 900, h = 700) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMAGES = {
  hero: img(35105471, 1920, 1150),
  ctaAerial: img(35105458, 1920, 1000),
  aboutStats: img(35105460, 1000, 1100),
  aboutInset: img(4254164, 300, 300),

  turbines: img(10069484, 1600, 900),
  familyHouse: img(8841502, 900, 700),
  handsSoil: img(10914345, 300, 300),

  familyYard: img(4934783, 700, 1000),
  aerialSuburbs: img(29300161, 700, 1000),
  aerialFarm: img(9893727, 700, 1000),

  housePanels: img(12243093, 900, 700),
  housesRow: img(6233727, 900, 700),

  installers: img(4254164, 1000, 800),
  installers2: img(4254166, 1000, 800),
  technician: img(4254159, 900, 700),

  solutionHomes: img(6233727, 820, 620),
  solutionCommercial: img(13804966, 820, 620),
  solutionEv: img(35736774, 820, 620),

  teamwork: img(12903168, 1000, 760),
  rooftops: img(20782341, 1100, 760),

  avatars: {
    michael: img(33799456, 200, 200),
    sarah: img(7752788, 200, 200),
    david: img(6102841, 200, 200),
    emma: img(33680700, 200, 200),
    james: img(14950779, 200, 200),
    lisa: img(37272329, 200, 200),
    robert: img(35490803, 200, 200),
    amanda: img(34930167, 200, 200),
  },

  team: {
    priya: img(29811345, 640, 800),
    sarah: img(29852895, 640, 800),
    robert: img(37148308, 640, 800),
  },
} as const;
