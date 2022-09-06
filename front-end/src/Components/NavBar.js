import { Link } from "react-router-dom";
import metaMma from "../Images/metaMma.gif";

export default function NavBar() {
  return (
    <nav>
      <h1 className="NavLogo">
        <div className="mmaMma" id="mmmMeta">
          <img
            className="Meta-logo"
            src={metaMma}
            width="200"
            height="200"
            alt="wait unitl the page loads"
          />
        </div>
      </h1>
      <Link to="/meta" className="newPound">
        Pound for Pound the best MMA fighters in the World
      </Link>
      <Link to="/" className="newHome">
        Home
      </Link>
      <Link to="/meta/new" className="newMma">
        New MMA Fighter
      </Link>
    </nav>
  );
}
