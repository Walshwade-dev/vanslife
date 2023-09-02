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
import VanDetails from './Pages/Vans/vansDetails';
import Host from './Pages/Host/Host';
import Login  from './Pages/Login/login'

import Error from './components/Error'

//not found page
import NotFound from './Pages/NotFound/NotFound';

import Dashboard from './Pages/Host/Dashboard/Dashboard';
import Income from './Pages/Host/Income/Income';
import Reviews from './Pages/Host/Reviews/Reviews';
import HostVans from './Pages/Host/HostVans/HostVans';
import HostVansDetails from './Pages/Host/HostVans/HostVansDetails/HostVansDetails';
import Details from './Pages/Host/HostVans/HostVansDetails/Details';
import Pricing from './Pages/Host/HostVans/HostVansDetails/Price';
import Photos from './Pages/Host/HostVans/HostVansDetails/Photos';

const router = createBrowserRouter(createRoutesFromElements (
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='login' element={<Login />} />

      <Route path='vans' element={<Vans />} loader={vansLoader} errorElement={<Error />} />
      <Route path='vans/:id' element={<VanDetails />} />
      <Route path='host' element={<Host />}>
        <Route index element={<Dashboard />}/>
        <Route path='income' element={<Income />}/>
        <Route path='vans' element={<HostVans />} />

        <Route path='vans/:id' element={<HostVansDetails/>}>
          <Route index element={<Details />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='photos' element={<Photos />} />
        </Route>

        <Route path='reviews' element={<Reviews />}/>
      </Route>
      <Route path='*' element={<NotFound />} />
  </Route>
))

function App() {
 
  return (
    <RouterProvider router={router} />
  )
}

export default App
