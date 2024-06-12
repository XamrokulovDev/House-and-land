import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import context 
import { UserContext } from "./context/Context";
// import pages and components
import Home from './pages/Home/Home';
import Routerlayout from './layout/Routerlayout';
import Myprofil from './components/MyProfil/Myprofil';
import MyWallet from './components/MyWallet/MyWallet';

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
      {
        path: "/MyWallet",
        element:<MyWallet />
      }
    ]
  }
]);

const App = () => {
  return (
    <UserContext.Provider value={{}}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
