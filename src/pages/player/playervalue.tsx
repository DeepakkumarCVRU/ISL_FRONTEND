import MarketValueChart from "./MarketValueChart";

// const player = {
//   market_value: {
//     current: 180,
//     currency: "EUR",
//     history: [
//       { year: 2020, value: 45 },
//       { year: 2021, value: 100 },
//       { year: 2022, value: 150 },
//       { year: 2023, value: 180 },
//       { year: 2024, value: 200 },
//       { year: 2025, value: 180 },
//       { year: 2026, value: 180 },
//     ],
//   },
// };

import { players } from "../../assets/js_assets/player_data";
const player = players[0].market_value;
function PlayerProfile() {
  return (
    <div className="max-w-3xl">
      <MarketValueChart
        marketValue={player}
      />
    </div>
  );
}

export default PlayerProfile;