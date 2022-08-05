import avatar from "../images/image-jeremy.png"
import { NavLink } from "react-router-dom";
export default function Report() {
  return (
    <div className="report">
      <div className="profile">
        <img src={avatar} alt="profile avatar" className="avatar" />
        <h1>
          Report for <span className="name">Jeremy Robson</span>
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/daily">Daily</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/weekly">Weekly</NavLink>
          </li>
          <li>
            <NavLink to="/monthly">Monthly</NavLink>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}
