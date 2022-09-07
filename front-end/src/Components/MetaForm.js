import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function MetaForm() {
  const navigate = useNavigate();
  const [newMeta, setMeta] = useState({
    name: "",
    wins: "",
    loss: "",
    age: "",
    height: "",
    weight: "",
    reach: "",
    born: "",
    image: "",
  });

  const handleTextChange = (event) => {
    setMeta({ ...newMeta, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMeta(newMeta);
  };

  const addMeta = (newMeta) => {
    axios
      .post(`${API}/meta`, newMeta)
      .then(() => {
        navigate(`/meta`);
      })
      .catch((error) => {
        console.warn("error");
      });
  };

  return (
    <div className="Newform">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={newMeta.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="wins">WINS:</label>
        <input
          id="wins"
          type="number"
          value={newMeta.wins}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="loss">LOSS:</label>
        <input
          id="loss"
          type="number"
          value={newMeta.loss}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="age">AGE:</label>
        <input
          id="age"
          type="number"
          value={newMeta.age}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="height">HEIGHT:</label>
        <input
          id="height"
          type="number"
          value={newMeta.height}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="weight">WEIGHT:</label>
        <input
          id="weight"
          type="number"
          value={newMeta.weight}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="reach">REACH:</label>
        <input
          id="reach"
          type="number"
          value={newMeta.reach}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="born">BORN:</label>
        <input
          id="born"
          type="text"
          value={newMeta.born}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="image">IMAGE:</label>
        <input
          id="image"
          type="text"
          value={newMeta.image}
          onChange={handleTextChange}
          required
        />
        {/* <input type="submit" /> */}
        {/* <button type="submit">Submit</button>
        <Link to={`/meta`}>
          <button>Back</button>
        </Link> */}

        <button type="submit">Submit</button>
        <Link to={`/meta`}>
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
}

export default MetaForm;
