import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useRedirect = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isUser = localStorage.getItem("access_token");

  useEffect(() => {
    if (
      (pathname === "/" || pathname === "/signin" || pathname === "/signup") &&
      isUser
    ) {
      navigate("/todo");
    } else if (pathname === "/todo" && !isUser) {
      navigate("/signin");
    }
  });
};

export default useRedirect;
