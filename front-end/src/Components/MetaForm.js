import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function MetaForm() {
  const navigate = useNavigate();
  const [meta, setMeta] = useState({
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
    setMeta({ ...meta, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMeta(meta);
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
          value={meta.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="wins">WINS:</label>
        <input
          id="wins"
          type="text"
          value={meta.wins}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="loss">LOSS:</label>
        <input
          id="loss"
          type="text"
          value={meta.loss}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="age">AGE:</label>
        <input
          id="age"
          type="text"
          value={meta.age}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="height">HEIGHT:</label>
        <input
          id="height"
          type="text"
          value={meta.height}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="weight">WEIGHT:</label>
        <input
          id="weight"
          type="text"
          value={meta.weight}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="reach">REACH:</label>
        <input
          id="reach"
          type="text"
          value={meta.reach}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="born">BORN:</label>
        <input
          id="born"
          type="text"
          value={meta.born}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="image">IMAGE:</label>
        <input
          id="image"
          type="text"
          value={meta.image}
          onChange={handleTextChange}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default MetaForm;
