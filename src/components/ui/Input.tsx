import styled from "@emotion/styled";

interface InputProps {
  margin?: string;
  border?: string;
  underline?: boolean;
  color?: string;
}

const Input = styled.input(
  ({ margin, border, color, underline }: InputProps) => ({
    margin: margin ?? "0px 0px 12px 0px",
    border: underline ? "none" : "1px solid #e1e2e3",
    borderBottom: "1px solid #e1e2e3",
    backgroundColor: color ?? "white",
    width: "100%",
    height: "50px",
    fontSize: "16px",
    textDecoration: "`none",
    borderRadius: "5px",

    paddingLeft: "16px",
    boxSizing: "border-box",

    ":focus": {
      border: "1px solid var(--primary-color)",
      outline: "none",
    },
  })
);

export default Input;
