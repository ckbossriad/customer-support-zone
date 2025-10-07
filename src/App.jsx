import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import { Suspense, useState } from 'react'
import Loader from './Components/Loader/Loader'
import { ToastContainer } from 'react-toastify';
import Tickets from './components/Tickets/Tickets'
import Footer from './components/Footer/Footer'


const fetchTickets = fetch("/Customer-support-tickets.json")
  .then(response => response.json())
function App() {

 const [inProgress, setInProgress] = useState(0)
  const [resolved, setResolved] = useState(0)
  return (
    <>
      
      <Navbar></Navbar>
      <Hero 
      inProgress={inProgress}
      resolved={resolved}></Hero>
      <p className='max-w-[95%] md:max-w-[1270px] mx-auto text-[18px] md:text-[24px] font-semibold mt-[40px] md:mt-[80px]'>Customer Tickets</p>
      <Suspense fallback={<Loader></Loader>}>
        <Tickets 
          fetchTickets={fetchTickets}
          setInProgress={setInProgress}
          inProgress={inProgress}
          setResolved={setResolved}
          resolved={resolved}></Tickets>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
