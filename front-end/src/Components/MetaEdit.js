import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function MetaEdit() {
  const { id } = useParams();
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
    updateMeta(meta);
  };

  const updateMeta = (meta) => {
    axios
      .put(`${API}/meta/${id}`, meta)
      .then(() => {
        navigate(`/meta`);
      })
      .catch((error) => {
        console.warn("error");
      });
  };

  useEffect(() => {
    axios
      .get(`${API}/meta/${id}`)
      .then((response) => {
        setMeta(response.data.payload);
      })
      .catch((error) => {
        console.warn("error");
      });
  }, [id]);

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
        <label htmlFor="wins">Wins:</label>
        <input
          id="wins"
          type="number"
          value={meta.wins}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="loss">Loss:</label>
        <input
          id="loss"
          type="number"
          value={meta.loss}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          value={meta.age}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          value={meta.height}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          type="number"
          value={meta.weight}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="reach">Reach:</label>
        <input
          id="reach"
          type="number"
          value={meta.reach}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="born">Born:</label>
        <input
          id="born"
          type="number"
          value={meta.born}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="image">Image</label>
        <input
          id="image"
          value={meta.image}
          type="text"
          onChange={handleTextChange}
          required
        />
        <br />

        <button type="submit">Submit</button>
      </form>
      <Link to={`/metas/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default MetaEdit;
