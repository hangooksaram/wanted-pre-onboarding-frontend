import React, { ChangeEvent, useState } from "react";
import { SignData } from "../../api/api";
import Button from "../ui/Button";
import LabeledInput from "../ui/LabeledInput";
import useRedirect from "../../hook/useRedirect";

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
  useRedirect();
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

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit({
        email: signForm.email.value,
        password: signForm.password.value,
      });
    }
  };

  return (
    <React.Fragment>
      <header>
        <h1>
          {type === "signin" ? "안녕하세요, 만나서 반갑습니다." : "환영합니다."}
        </h1>
      </header>
      <LabeledInput
        label="이메일"
        placeholder={"@ 를 포함한 올바른 이메일을 입력해주세요."}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChangeSignForm(e, "email")
        }
        data-testid="email-input"
      />
      <LabeledInput
        label="비밀번호"
        type="password"
        placeholder="8 자리 이상의 비밀번호를 입력해주세요."
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChangeSignForm(e, "password")
        }
        onKeyDown={handleKeyDown}
        data-testid="password-input"
      />
      <Button
        id="signin-submit-button"
        disabled={!(signForm.email.isValidate && signForm.password.isValidate)}
        onClick={() =>
          handleSubmit({
            email: signForm.email.value,
            password: signForm.password.value,
          })
        }
        type="submit"
        data-testid={buttonTestId}
        color="var(--primary-color)"
        margin="16px 0px 0px 0px"
      >
        {type === "signup" ? "회원가입" : "로그인"}
      </Button>
    </React.Fragment>
  );
};

export default Sign;
