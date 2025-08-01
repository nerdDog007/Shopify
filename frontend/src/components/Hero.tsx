import hero from '../assets/hero.jpeg'
import Button from './Button'
import {motion } from 'framer-motion'

function Hero() {
  return (
    <motion.section
    initial={{ scale: 0 }} 
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 300 }}
    className='w-screen h-screen object-cover   z-1 relative flex flex-col text-white items-center justify-center'
   
    // transition={{ type: "spring", stiffness: 300 }}
  
    >
      <motion.img 
 
      src={hero} alt="" className='overflow-hidden w-screen z-[-10] h-screen object-cover absolute '/>
      <div className='flex flex-col gap-4 w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] z-10'>
      <h1 className='text-4xl uppercase border-b-2 border-white'>RADICAL FRAGRANCE</h1>
      <p>Leading a shift in fragrance through biotechnology, master perfumery and 100% natural ingredients. </p>
      <Button btnName="Discover our fragrance" className="btn-bg p-4 bg-white text-black w-fit"/>
      </div>
    </motion.section>
  )
}

export default Hero