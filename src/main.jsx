import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Store from './Utils/Store.js'
import { Provider } from 'react-redux'
import { lazy, Suspense } from 'react'

const About=lazy(()=> import("./Components/About.jsx"))
const ProductInfo=lazy(()=> import("./Components/ProductInfo.jsx"))
const Cart=lazy(()=> import("./Components/Cart.jsx"))
const Checkout=lazy(()=> import("./Components/Checkout.jsx"))
const OrderDelivery=lazy(()=> import("./Components/OrderDelivery.jsx"))
const Error=lazy(()=> import("./Components/Error.jsx"))
const Login=lazy(()=> import("./Components/Login.jsx"))


// Define routes for different pages
const router=createBrowserRouter([
  {
   path:"/",
   element:<App/>,
   children:[
    {
      path:"",
      element:<Home/>
    },

    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"*",
      element:<Error/>
    },

    {
      path:"/checkout",
      element:<Checkout/>
    },

    {
      path:"/login",
      element:<Login/>
    },

    {
      path:"/orderdelivery",
      element:<OrderDelivery/>
    },

    {
      path:"/products/:id",
      element:<ProductInfo/>
    }
   ]
}])

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<h1 className='text-center mt-10'>
    Loading...
  </h1>}>
  <Provider store={Store}>
  <RouterProvider router={router}></RouterProvider>
  </Provider>
  </Suspense>
)
