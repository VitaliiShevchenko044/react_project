import "./styles.css";
import { user } from "./data.js";

function Card() {

  return (
    <div className="user_card">
      <div className="avatar_container">
      <img
        src={user.avatarURL}
        alt="user photo"
        className="avatar"
      />
      </div>
      <h2 className="user_name">Name: {user.firstName} {user.surname}</h2>
      <p className="user_description">Job: {user.job}</p>
      <p className="user_description">Hobbies: {user.hobbies.join(", ")}</p> 
    </div>
  );
}

export default Card;
