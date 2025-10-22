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
      /> 
      <Input
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Password:"
      />
      <Button name="login" type="submit" />
    </form>
  );
}

export default LoginForm;
