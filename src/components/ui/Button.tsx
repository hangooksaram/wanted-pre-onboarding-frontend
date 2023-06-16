import styled from "@emotion/styled";

interface ButtonProps {
  width?: string;
  height?: string;
  color?: string;
  margin?: string;
  fontSize?: string;
  fontColor?: string;
  borderRadius?: string;
  border?: string;
}

const Button = styled.button(
  ({
    width,
    height,
    color,
    margin,
    fontSize,
    fontColor,
    border,
    borderRadius,
  }: ButtonProps) => ({
    width: width ?? "100%",
    height: height ?? "50px",
    fontSize: fontSize ?? "16px",
    color: fontColor ?? "white",
    backgroundColor: color ?? "var(--primary-color)",
    margin: margin ?? "0px 0px 0px 0px",
    border: border ?? "none",
    borderRadius: borderRadius ?? "25px",
    fontWeight: "bold",
    ":disabled": {
      backgroundColor: "rgb(204,204,204)",
      color: "rgb(100,100,100)",
      cursor: "default",
    },
    cursor: "pointer",

    transition: "all .3s",
  })
);

export default Button;
