import "./styles.css";
import { user } from "./data.js";

//props - це об'єкт за зопомогою якого ми передаємо дані від батьківського компонента в дочірній
function Card({ avatarURL = "", firstName = "-", lastName, job = "-", hobbies = "-"}) {
  return (
    <div className="user_card">
      <img src={avatarURL} alt="user photo" className="avatar" />
      <h2 className="user_name">Fullname: {`${firstName} ${lastName}`}</h2>
      <p className="user_description">Job: {job}</p>
      <p className="user_description">Hobbies: {hobbies?.length ? hobbies.join(", ") : "no hobbies"}</p>
    </div>
  );
}

export default Card;
