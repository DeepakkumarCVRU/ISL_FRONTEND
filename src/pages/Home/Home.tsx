import MainNavbar from "../header/MainNavbar"
import UpperNavbar from "../header/upperNavbar"

const Home = () => {
  return (
    <div className="lg:mx-17 md:mx-10 bg-background">
        <UpperNavbar/>
        <MainNavbar/>
    </div>
  )
}

export default Home