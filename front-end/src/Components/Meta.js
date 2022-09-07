import { Link } from "react-router-dom";

function Meta({ meta }) {
  return (
    <tr>
      <td>{meta.name}</td>
      <td>
        <Link to={`/meta/${meta.id}`}>
          {" "}
          <img src={meta.image} alt={meta} className="metaImage" />
        </Link>
      </td>
    </tr>
  );
}
export default Meta;
