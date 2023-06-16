import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { css } from "@emotion/css";
import { createPortal } from "react-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };
  return createPortal(
    <div
      className={css`
        position: absolute;
        top: 20px;
        right: 100px;
      `}
    >
      <Button
        color="none"
        borderRadius="5px"
        width="90px"
        fontColor="black"
        onClick={handleLogout}
      >
        로그아웃
      </Button>
    </div>,
    document.getElementById("root")!
  );
};

export default LogoutButton;
