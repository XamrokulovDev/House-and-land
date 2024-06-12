import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import context 
import { UserContext } from "./context/Context";
// import pages and components
import Home from './pages/Home/Home';
import Routerlayout from './layout/Routerlayout';
import Myprofil from './components/MyProfil/Myprofil';
import MyWallet from './components/MyWallet/MyWallet';
import Sms from './components/Sms/Sms';

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
      },
      {
        path:"/Elon",
        element:<Elon/>
      },
      {
        path:"/Xizmatlar",
        element:<Xizmatlar/>
      },
      {
        path:"/Sms",
        element:<Sms/>
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
