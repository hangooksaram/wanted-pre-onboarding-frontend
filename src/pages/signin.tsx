import { signIn } from "../api/sign";
import Sign from "../components/sign/Sign";
import { SignData } from "../api/api";
import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../components/ui/Button";

const SignIn = () => {
  const navigate = useNavigate();
  const handleSubmitSignIn = async ({ email, password }: SignData) => {
    const { status, errorMessage, data } = await signIn({
      email,
      password,
    });
    if (status === 200) {
      localStorage.setItem("access_token", data!.access_token);
      navigate("/todo");
    } else {
      alert(`요청이 실패했습니다. ${errorMessage}`);
    }
  };
  return (
    <React.Fragment>
      <Sign type={"signin"} handleSubmit={handleSubmitSignIn} />
      <Button
        margin="8px 0px 0px 0px"
        color="white"
        fontColor="black"
        onClick={() => navigate("/signup")}
      >
        아직 회원이 아니신가요?
      </Button>
    </React.Fragment>
  );
};

export default SignIn;
