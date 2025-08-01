import Info from '../../components/Info'
import Nav from '../../components/navBar'
import Hero from '../../components/Hero'
import Modal from '../../components/Modal'
import Showcase from './Showcase'
function Home() {
  return (
    <div className='relative w-screen h-screen overflow-x-hidden'>
      <Info />
      <Nav/>
      <Hero/>
      <Modal/>
      <Showcase/>
    </div>
  )
}

export default Home