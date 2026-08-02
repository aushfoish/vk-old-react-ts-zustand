import { useState } from 'react'
import './App.css'
import AppAside from './components/Navigation/AppAside'
import AppHeader from './components/AppHeader'
import UserPage from './components/UserPage'
import AudioPage from './components/AudioPage'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import { AudioMainpageVidget } from './components/Audioplayer/AudioMainpageVidget'



const MainLayout = () => {
  const [vidgetOpened, setVidgetOpened] = useState(false)
  // const [modalOpened, setModalOpened] = useState(false)


  
  
  return (
    <>
      <AppHeader 
        onClick={() => {vidgetOpened === false ? setVidgetOpened(true) : setVidgetOpened(false) }}
        onUnauthorize={() => {
          localStorage.removeItem('userdata')
          window.location.reload()
        }}/>
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
        element: <Navigate to="my-page" replace />
      },
      { path: 'my-page', element: <UserPage /> },
      { path: 'my-audio', element: <AudioPage /> },
    ]
  }
], {
  basename: '/vk-old-react-ts-zustand'
});


function App() {

  return <RouterProvider router={router} />;
    
  
}

export default App
