import './App.css'

import { Routes, Route } from 'react-router-dom'


// Layout 
import Layout from "./components/Layout/Default.Layout"

//server
import "./Server"

//not found page
import NotFound from './components/NotFound/Not.Found';

//components
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Vans from './Pages/Vans/Vans'
import vanDetails from './Pages/Vans/vansDetails';
import Host from './Pages/Host/Host'
import Dashboard from './Pages/Host/Dashboard/Dashboard';
import Income from './Pages/Host/Income/Income';
import Reviews from './Pages/Host/Reviews/Reviews';
import HostVans from './Pages/Host/HostVans/HostVans';
import hostVansDetails from './Pages/Host/HostVans/HostVansDetails/HostVansDetails';
import Details from './Pages/Host/HostVans/HostVansDetails/Details';
import pricing from './Pages/Host/HostVans/HostVansDetails/Price';
import Photos from './Pages/Host/HostVans/HostVansDetails/Photos';



function App() {
 
  return (
    <Routes>
        <Route path='/' Component={Layout}>
          <Route index Component={Home} />
          <Route path='About' Component={About} />
          <Route path='vans' Component={Vans} />
          <Route path='vans/:id' Component={vanDetails} />
          <Route path='host' Component={Host}>
            <Route index Component={Dashboard}/>
            <Route path='income' Component={Income}/>
            <Route path='vans' Component={HostVans}/>

            <Route path='vans/:id' Component={hostVansDetails}>
              <Route index Component={Details} />
              <Route path='pricing' Component={pricing} />
              <Route path='photos' Component={Photos} />
            </Route>

            <Route path='reviews' Component={Reviews}/>
          </Route>
        </Route>
        <Route component={NotFound} />
    </Routes>
  )
}

export default App
