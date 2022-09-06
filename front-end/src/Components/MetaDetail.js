import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function MetaDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [meta, setMeta] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/meta/${id}`)
      .then((response) => {
        setMeta(response.data.payload);
      })
      .catch((error) => console.warn(error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/meta/${id}`)
      .then(() => {
        navigate(`/meta`);
      })
      .catch((error) => {
        console.warn("error");
      });
  };

  return (
    <article>
      <div>
        <h5>{meta.name}</h5>

        <img src={meta.image} alt={meta.name} />

        <h6>Wins:{meta.wins}</h6>

        <h6>Loss:{meta.loss}</h6>

        <h6>Age:{meta.age}</h6>

        <h6>Height:{meta.height}</h6>

        <h6>Weight:{meta.weight}</h6>

        <h6>Reach:{meta.reach}</h6>

        <h6>Born:{meta.born}</h6>

        <div className="metaDetails">
          <div>
            <Link to="/meta">
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/meta/${meta.id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default MetaDetail;
