import LoginComponent from "../../components/Login/Login";
import { Helmet } from "react-helmet-async";

function Login() {
  return (
    <>
      <Helmet>
        <title>Dr Abdelsattar Nasr - Login</title>
      </Helmet>
      <LoginComponent />
    </>
  );
}

export default Login;
