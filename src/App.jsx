// import BrowserRouter and RouterProvider 
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home page 
import Home from './pages/Home/Home'
// import Routerlayout Page
import Routerlayout from './layout/Routerlayout'
// import Context 
import { UserContext } from "./context/Context"

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Routerlayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        }
      ]
    }
  ])
  return (
    <UserContext.Provider>
      <RouterProvider router={router}/>
    </UserContext.Provider>
  )
}

export default App