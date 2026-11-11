import { players } from "../../assets/js_assets/player_data"
import Playervalue from "./playervalue";


const Player1 = () => {
    const player = players[0];
    return (
        <div >
            {/* main page */}
            <div className="grid grid-cols-4 mx-10 my-10">
                {/* divide into 3 part */}
                {/* PART 1 */}
                <div className="col-span-2 rounded-xl ">
                    <div className="flex ">
                        {/* PLAYER CARD IMAGE  */}
                        <div className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-green-500 transition-all duration-300">
                            <div className="flex items-center justify-center bg-linear-to from-gray-800 to-gray-950 p-4">
                                <hr className="text-red-900" />
                                <img
                                    src={player.image}
                                    className="w-full border rounded-2xl bg-red-400 border-white h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                    alt="player image"
                                />
                            </div>

                            <div className="p-3 text-center">
                                <h2 className="text-xl font-bold text-white">
                                    {player.name}
                                </h2>
                            </div>
                        </div>

                        {/* PLAYER PROFILE DATA LIKE DOB, NATIONALITY GOLS AND ASSIST */}
                        <div>
                            <div className="grid grid-cols-3 ">

                                <p className="player-data">
                                    <span>Date of Birth</span>
                                    {player.date_of_birth}
                                </p>

                                <p className="player-data">
                                    <span>Position</span>
                                    {player.position}
                                </p>

                                <p className="player-data">
                                    <span>Nationality</span>
                                    {player.nationality}
                                </p>

                                <p className="player-data">
                                    <span>Preferred Foot</span>
                                    {player.preferred_foot}
                                </p>

                                <p className="player-data">
                                    <span>Goals</span>
                                    {player.goals}
                                </p>

                                <p className="player-data">
                                    <span>Assists</span>
                                    {player.assists}
                                </p>
                                 <p className="player-data">
                                    <span>club</span>
                                    {player.club}
                                </p>
                                 <p className="player-data">
                                    <span>Height</span>
                                    {player.height}
                                </p>
                                 <p className="player-data">
                                    <span>jerseyNumber</span>
                                    {player.jerseyNumber}
                                </p>
                                
                            </div>

                            {/*    BUTTON FOR PLAYER LIEK BUY TSHIRT AND FOLLOW */}

                            <div className="grid grid-cols-2 mx-5 mt-3 player-buy-and-follow-btn">
                                <div>
                                    <button>Buy Player Tshirt</button>    
                                </div>    
                                <div>
                                    <button>Follow</button>    
                                </div>    
                            </div>
                        </div>


                    </div>
                </div>

                {/* PART 2 */}
                <div className="border-l rounded-md">
                    dkl
                </div>

                {/* PART 3 */}
                <div className="border rounded-md">
                    <Playervalue/>
                </div>
            </div>
        </div>
    )
}

export default Player1
