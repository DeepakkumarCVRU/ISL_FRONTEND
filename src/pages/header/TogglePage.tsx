import { Link } from "react-router-dom";


type MenuProps = {
  toggle: boolean;
};


const TogglePage = ({ toggle }: MenuProps) => {
  return (
    <div className={`w-full bg-gray-700 absolute left-0 right-0 transition-all duration-500 ease-in-out ${toggle? "translate-y-0 opacity-100" :  "-translate-y-full opacity-0 pointer-events-none"}`}>
        <div >
            <div>
                {/* Galleries section */}
                <div>
                    <h1>Galleries</h1>
                    <Link to="/#" >Video</Link>
                    <Link to="/#" >Photo</Link>
                </div>

                {/* Latest Update, Matches and Standing */}
                <div>
                    <div>LATEST UPDATE</div>
                    <div>
                        <Link to ="/#">News</Link>
                        <Link to ="/#">Features</Link>
                        <Link to ="/#">Interview</Link>
                        <Link to ="/#">Press Release</Link>
                        <Link to ="/#">AIFF Decision Page</Link>
                    </div>
                        <Link to ="/#">Matches</Link>
                        <Link to ="/#">Standing</Link>                    
                </div>
            </div>

            {/* Clubs and their profile link */}
            <div>
                
            </div>
        </div>


    </div>
  )
}

export default TogglePage