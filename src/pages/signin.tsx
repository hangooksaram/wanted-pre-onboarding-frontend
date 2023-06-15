import { signIn } from "../api/sign";
import Sign from "../components/Sign";
import { SignData } from "../api/api";
import useRedirect from "../hook/useRedirect";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  useRedirect();
  const navigate = useNavigate();
  const handleSubmitSignIn = async ({ email, password }: SignData) => {
    const { status, data } = await signIn({ email, password });
    if (status === 200) {
      const { access_token } = data!;
      localStorage.setItem("access_token", access_token);
      navigate("/todo");
    }
  };
  return <Sign type={"signin"} handleSubmit={handleSubmitSignIn} />;
};

export default SignIn;
