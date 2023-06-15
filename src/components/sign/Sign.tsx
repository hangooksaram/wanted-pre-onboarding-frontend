import { ChangeEvent, useState } from "react";
import { SignData } from "../../api/api";
import Input from "../styles/Input";
import Button from "../styles/Button";

type SignProps = {
  type: "signup" | "signin";
  handleSubmit: ({ email, password }: SignData) => void;
};

interface SignFormData {
  email: {
    value: string;
    isValidate: boolean;
  };
  password: {
    value: string;
    isValidate: boolean;
  };
}
const initialSignFormData: SignFormData = {
  email: {
    value: "",
    isValidate: false,
  },
  password: {
    value: "",
    isValidate: false,
  },
};

const Sign = ({ type, handleSubmit }: SignProps) => {
  const [signForm, setSignForm] = useState<SignFormData>(initialSignFormData);
  const buttonTestId = type === "signup" ? "signup-button" : "signin-button";
  const emailRegx = new RegExp(/@/g);
  const handleChangeSignForm = (
    e: ChangeEvent<HTMLInputElement>,
    label: string
  ) => {
    const { value } = e.target!;
    if (
      (label === "email" && emailRegx.test(value)) ||
      (label === "password" && value.length >= 8)
    ) {
      setSignForm({
        ...signForm,
        [label]: { value: value, isValidate: true },
      });

      return;
    }

    setSignForm({
      ...signForm,
      [label]: { value: value, isValidate: false },
    });
  };

  return (
    // <form onSubmit={handleSubmit}>
    <div>
      <Input
        onChange={(e) => handleChangeSignForm(e, "email")}
        data-testid="email-input"
      />
      <Input
        onChange={(e) => handleChangeSignForm(e, "password")}
        data-testid="password-input"
      />
      <Button
        disabled={!(signForm.email.isValidate && signForm.password.isValidate)}
        onClick={() =>
          handleSubmit({
            email: signForm.email.value,
            password: signForm.password.value,
          })
        }
        // type="submit"
        data-testid={buttonTestId}
      >
        {type === "signup" ? "회원가입" : "로그인"}
      </Button>
    </div>
  );
};

export default Sign;
