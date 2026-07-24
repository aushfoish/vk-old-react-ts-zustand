import { useState } from 'react'
import './App.css'
import AppAside from './components/Navigation/AppAside'
import AppHeader from './components/AppHeader'
import FeedPage from './components/FeedPage'
import UserPage from './components/UserPage'
import AudioPage from './components/AudioPage'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import { AudioMainpageVidget } from './components/Audioplayer/AudioMainpageVidget'
import { GraffityModal } from './components/GraffityPaint/GraffityModal'


const MainLayout = () => {
  const [vidgetOpened, setVidgetOpened] = useState(false)


  
  
  return (
    <>
      <AppHeader onClick={() => {vidgetOpened === false ? setVidgetOpened(true) : setVidgetOpened(false) }}/>
      {vidgetOpened === true && (<AudioMainpageVidget />)}

      <div className='main-section'>
        <AppAside />
        <main className="app-work-space">

          <Outlet />

        </main>
      </div>
      
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {index: true,
        element: <Navigate to="/my-page" replace />
      },
      { path: 'my-page', element: <UserPage /> },
      { path: 'my-feed', element: <FeedPage /> },
      { path: 'my-audio', element: <AudioPage /> },
      { path: 'canvas', element: <GraffityModal /> }
    ]
  }
], {
  basename: '/vk-old-react-ts-zustand'
});


function App() {

  return <RouterProvider router={router} />;
    
  
}

export default App
