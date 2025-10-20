import "./styles.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  return (
    <form className="login_form">
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email:"
      ></Input>
      <Input
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Password:"
      ></Input>
      <Button name="login" type="submit"></Button>
    </form>
  );
}

export default LoginForm;
