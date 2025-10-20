import "./styles.css";

function Input({ name, type = text, placeholder, label }) {
  return (
    <label className="label">
      {label}
      <input name={name} type={type} placeholder={placeholder}></input>
    </label>
  );
}

export default Input;
