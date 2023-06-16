import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Todo from "./pages/todo";
import AppContainer from "./components/ui/AppContainer";

const routerConfig = [
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "todo",
    element: <Todo />,
  },
];

const router = createBrowserRouter(routerConfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppContainer>
    <RouterProvider router={router} />
  </AppContainer>
);
