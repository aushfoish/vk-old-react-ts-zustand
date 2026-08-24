import "./App.css";
import {
  createHashRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";


import { UserPage } from "@/pages/profile";
import { AudioPage } from "@/pages/music";
import { MainLayout } from "@/widgets/layouts";
import { SkeletonMainPage } from "@/shared/ui";



const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="my-page" replace /> },
      { path: "my-page", element: <UserPage /> },
      { path: "my-audio", element: <AudioPage /> },
      { path: "test", element: <SkeletonMainPage /> },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
}

