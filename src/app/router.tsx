import { createBrowserRouter } from "react-router-dom"

import RootLayout from "./layouts/root-layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <div>home</div>,
      },
    ],
  },
])
