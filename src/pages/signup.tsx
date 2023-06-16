import Sign from "../components/sign/Sign";
import { signUp } from "../api/sign";
import { SignData } from "../api/api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmitSignUp = async ({ email, password }: SignData) => {
    const res = await signUp({
      email,
      password,
    });
    if (res.status === 201) {
      navigate("/signin");
    } else {
      alert("중복된 이메일입니다! 확인해주세요.");
    }
  };

  return <Sign type={"signup"} handleSubmit={handleSubmitSignUp} />;
};

export default SignUp;
