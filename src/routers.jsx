import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Detail from "./Detail";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/detials/:id",
    element: <Detail/>,
  },
  
]);