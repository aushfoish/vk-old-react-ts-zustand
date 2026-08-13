import { useState } from "react";
import "./App.css";
import {AppAside} from "./widgets/app-aside/ui/AppAside";
import {UserPage} from "./components/UserPage";
import {AudioPage} from "./components/AudioPage";
import {
  createHashRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { AudioMainpageVidget } from "./components/Audioplayer/AudioMainpageVidget";
import {AppHeader} from "./widgets/app-header/ui/AppHeader";

const MainLayout = () => {
  const [vidgetOpened, setVidgetOpened] = useState(false);
  // const [modalOpened, setModalOpened] = useState(false)
  
  return (
    <>
      <AppHeader
        onToggleMp3={() => {
          if (vidgetOpened === false) {
            setVidgetOpened(true)
          } else { 
            setVidgetOpened(false)
          }
        }}
        onUnauthorize={() => {
          localStorage.removeItem("userdata");
          window.location.reload();
        }}
      />
      {vidgetOpened === true && <AudioMainpageVidget />}

      <div className="main-section">
        <AppAside />
        <main className="app-work-space">
          <Outlet />
        </main>
      </div>
    </>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="my-page" replace /> },
      { path: "my-page", element: <UserPage /> },
      { path: "my-audio", element: <AudioPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
