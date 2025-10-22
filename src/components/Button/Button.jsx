import "./styles.css";

function Button({ name = "Send", onClick, children, type = "button" }) {
  return (
    <button className="button_component" type={type} onClick={onClick}>
      {/* {children ? "" : name}  */}
      {!children && name}
      {children}
    </button>
  );
}

export default Button;
