import { Outlet } from "react-router-dom"
import Player1 from "./player1.js"

const Player = () => {
  return (
    <div>
      <div>
        <Player1/>
        <hr className="mx-10"/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Player
