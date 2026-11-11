import zazz_abbot from "../zazz_abbot.png";



export interface Player {
  id: number;
  name: string;
  image: string;
  nationality: string;
  countryCode: string;

  position:
    | "Goalkeeper"
    | "Defender"
    | "Midfielder"
    | "Forward";

  club: string;
  jerseyNumber: number;
  age: number;
  height: string;
  appearances: number;
  goals: number;
  assists: number;
  preferred_foot: "Right" | "Left";
  date_of_birth: string;
  appearances_with_country: number;

  twitter_link: string;
  instagram_link: string;
  facebook_link: string;

  market_value: {
    current: number;
    currency: "EUR";
    history: {
      year: number;
      value: number;
    }[];
  };

  statistics: {
    attack: {
      goals: number;
      xg: number;
      xa: number;
      shots_on_target_inside_box: number;
      touches_in_opposition_box: number;
    };

    possession: {
      passes: {
        total: number;
        completed_percentage: number;
      };
      long_passes: {
        total: number;
        completed_percentage: number;
      };
    };

    physical: {
      minutes_played: number;
      dribbles: {
        total: number;
        completed_percentage: number;
      };
      duels_won: number;
      aerial_duels_won: number;
    };

    defence: {
      total_tackles: number;
      interceptions: number;
      blocks: number;
    };

    discipline: {
      red_cards: number;
      yellow_cards: number;
      fouls: number;
      offsides: number;
    };
  };
}
export interface Player {
  id: number;
  name: string;
  image: string;
  nationality: string;
  countryCode: string;

  position:
    | "Goalkeeper"
    | "Defender"
    | "Midfielder"
    | "Forward";

  club: string;
  jerseyNumber: number;
  age: number;
  height: string;
  appearances: number;
  goals: number;
  assists: number;
  preferred_foot: "Right" | "Left";
  date_of_birth: string;
  appearances_with_country: number;

  twitter_link: string;
  instagram_link: string;
  facebook_link: string;

  market_value: {
    current: number;
    currency: "EUR";
    history: {
      year: number;
      value: number;
    }[];
  };

  statistics: {
    attack: {
      goals: number;
      xg: number;
      xa: number;
      shots_on_target_inside_box: number;
      touches_in_opposition_box: number;
    };

    possession: {
      passes: {
        total: number;
        completed_percentage: number;
      };
      long_passes: {
        total: number;
        completed_percentage: number;
      };
    };

    physical: {
      minutes_played: number;
      dribbles: {
        total: number;
        completed_percentage: number;
      };
      duels_won: number;
      aerial_duels_won: number;
    };

    defence: {
      total_tackles: number;
      interceptions: number;
      blocks: number;
    };

    discipline: {
      red_cards: number;
      yellow_cards: number;
      fouls: number;
      offsides: number;
    };
  };
}
export interface Player {
  id: number;
  name: string;
  image: string;
  nationality: string;
  countryCode: string;

  position:
    | "Goalkeeper"
    | "Defender"
    | "Midfielder"
    | "Forward";

  club: string;
  jerseyNumber: number;
  age: number;
  height: string;
  appearances: number;
  goals: number;
  assists: number;
  preferred_foot: "Right" | "Left";
  date_of_birth: string;
  appearances_with_country: number;

  twitter_link: string;
  instagram_link: string;
  facebook_link: string;

  market_value: {
    current: number;
    currency: "EUR";
    history: {
      year: number;
      value: number;
    }[];
  };

  statistics: {
    attack: {
      goals: number;
      xg: number;
      xa: number;
      shots_on_target_inside_box: number;
      touches_in_opposition_box: number;
    };

    possession: {
      passes: {
        total: number;
        completed_percentage: number;
      };
      long_passes: {
        total: number;
        completed_percentage: number;
      };
    };

    physical: {
      minutes_played: number;
      dribbles: {
        total: number;
        completed_percentage: number;
      };
      duels_won: number;
      aerial_duels_won: number;
    };

    defence: {
      total_tackles: number;
      interceptions: number;
      blocks: number;
    };

    discipline: {
      red_cards: number;
      yellow_cards: number;
      fouls: number;
      offsides: number;
    };
  };
}

export const players: Player[] = [
  {
    id: 1,
    name: "Erling Haaland",
    image: zazz_abbot,
    nationality: "Norway",
    countryCode: "NO",
    position: "Forward",
    club: "Man City",
    jerseyNumber: 9,
    age: 26,
    height: "1.95 m",
    appearances: 29,
    goals: 25,
    assists: 4,
    preferred_foot: "Left",
    date_of_birth: "2000-07-21",
    appearances_with_country: 48,
    twitter_link: "https://x.com/ErlingHaaland",
    instagram_link: "https://www.instagram.com/erling/",
    facebook_link: "",

    market_value: {
      current: 180,
      currency: "EUR",
      history: [
        { year: 2020, value: 45 },
        { year: 2021, value: 100 },
        { year: 2022, value: 150 },
        { year: 2023, value: 180 },
        { year: 2024, value: 200 },
        { year: 2025, value: 180 },
        { year: 2026, value: 180 },
        { year: 2027, value: 190 },
        { year: 2028, value: 500 },
      ],
    },


statistics: {
  attack: {
    goals: 9,
    xg: 7.05,
    xa: 0.86,
    shots_on_target_inside_box: 17,
    touches_in_opposition_box: 62,
  },

  possession: {
    passes: {
      total: 120,
      completed_percentage: 67,
    },
    long_passes: {
      total: 4,
      completed_percentage: 50,
    },
  },

  physical: {
    minutes_played: 890,
    dribbles: {
      total: 12,
      completed_percentage: 50,
    },
    duels_won: 33,
    aerial_duels_won: 19,
  },

  defence: {
    total_tackles: 1,
    interceptions: 1,
    blocks: 2,
  },

  discipline: {
    red_cards: 0,
    yellow_cards: 0,
    fouls: 6,
    offsides: 2,
  },
},
  },
];