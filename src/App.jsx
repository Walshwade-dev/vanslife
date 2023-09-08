import './App.css'

import { RouterProvider, createBrowserRouter, createRoutesFromElements,  Route } from 'react-router-dom'


// Layout 
import Layout from "./components/Layout/Default.Layout"

//server
import "./Server"




//components
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Vans, {loader as vansLoader} from './Pages/Vans/Vans'
import VanDetail, {loader as vanDetailsLoader} from './Pages/Vans/vansDetails';
import HostLayout from './Pages/Host/Host';
import Login  from './Pages/Login/login'

import Error from './components/Error'

//not found page
import NotFound from './Pages/NotFound/NotFound';

import Dashboard from './Pages/Host/Dashboard/Dashboard';
import Income from './Pages/Host/Income/Income';
import Reviews from './Pages/Host/Reviews/Reviews';
import HostVans, {loader as hostVansLoader} from './Pages/Host/HostVans/HostVans';
import HostVansDetails, {loader as hostVansDetailsLoader} from './Pages/Host/HostVans/HostVansDetails/HostVansDetails';
import Details from './Pages/Host/HostVans/HostVansDetails/Details';
import Pricing from './Pages/Host/HostVans/HostVansDetails/Price';
import Photos from './Pages/Host/HostVans/HostVansDetails/Photos';

// authentication Util
//import requireAuth  from './utils'


const router = createBrowserRouter(createRoutesFromElements (
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
    />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route 
      path="vans/:id" 
      element={<VanDetail />} 
      loader={vanDetailsLoader}
    />

    <Route path="host" element={<HostLayout />}>
      <Route
        index
        element={<Dashboard />}
      />
      <Route
        path="income"
        element={<Income />}
        loader={async () => {return null}}
      />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async () => {return null}}
      />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route
        path="vans/:id"
        element={<HostVansDetails />}
        loader={hostVansDetailsLoader}
      >
        <Route
          index
          element={<Details />}
          loader={async () => {return null}}
        />
        <Route
          path="pricing"
          element={<Pricing />}
          loader={async () => {return null}}
        />
        <Route
          path="photos"
          element={<Photos />}
          loader={async () => {return null}}
        />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
 
  return (
    <RouterProvider router={router} />
  )
}

export default App
