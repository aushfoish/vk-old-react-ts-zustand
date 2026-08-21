import { AudioMainpageVidget } from "@/pages/music/ui/AudioMainpageVidget";
import { AppAside } from "@/widgets/app-aside";
import { AppHeader } from "@/widgets/app-header";
import { MainPageAuthorization } from "@/widgets/authorization-window";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  const [vidgetOpened, setVidgetOpened] = useState(false);
  
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
            <MainPageAuthorization />

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