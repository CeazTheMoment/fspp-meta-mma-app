import axios from "axios";
import { useState, useEffect } from "react";
import Meta from "./Meta";
const API = process.env.REACT_APP_API_URL;

function Metas() {
  const [metas, setMetas] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/meta`)
      .then((response) => {
        setMetas(response.data.payload);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Metas">
      <section>
        <table>
          <thead>
            <tr>
              <th>Top 15 Pound For Pound Best In The World</th>
            </tr>
          </thead>
          <tbody>
            {metas.map((meta, index) => {
              return <Meta key={meta.id} meta={meta} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Metas;
