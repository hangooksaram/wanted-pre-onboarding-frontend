import Sign from "../components/Sign";
import { SignData, signIn } from "../api/api";
import useRedirect from "../hook/useRedirect";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  useRedirect();
  const navigate = useNavigate();
  const handleSubmitSignIn = async ({ email, password }: SignData) => {
    const res = await signIn({ email, password });
    if (res.status === 200) {
      const { access_token } = res.data;
      localStorage.setItem("access_token", access_token);
      navigate("/todo");
    }
  };
  return <Sign type={"signin"} handleSubmit={handleSubmitSignIn} />;
};

export default SignIn;
