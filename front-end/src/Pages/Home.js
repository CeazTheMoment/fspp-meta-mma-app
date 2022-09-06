// import "./App.css";
import mmaBelt from "../Images/mmaBelt.gif";

function Home() {
  return (
    <header className="homePage">
      <div className="mmaBelt" id="belt">
        <img
          className="Belt-logo"
          src={mmaBelt}
          width="400"
          height="300"
          alt="wait unitl the page loads"
        />

        <h2 className="helloMessage">Welcome to Meta MMA</h2>
        <h3 className="helloMessage">Created by Cesar Ortiz </h3>
      </div>
    </header>
  );
}

export default Home;
