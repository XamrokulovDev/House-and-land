import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Routerlayout from './layout/Routerlayout';
import Myprofil from './components/MyProfil/Myprofil';
import { UserContext } from "./context/Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routerlayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/MyProfil",
        element: <Myprofil />
      },
    ]
  }
]);

const App = () => {
  return (
    <UserContext.Provider value={{ /* your context value here */ }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
