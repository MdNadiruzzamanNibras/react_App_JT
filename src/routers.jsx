import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SingleShow from "./SingleShow";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/single",
    element: <SingleShow/>,
  },
]);