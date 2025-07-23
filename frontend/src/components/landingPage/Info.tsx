import React, { useEffect } from 'react'

function Info() {
  const info =["100% NATURAL, NON-TOXIC FRAGRANCE ","Free shipping in The Netherlands for orders over €100"] 
  const [index, setIndex] = React.useState(1)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>index === info.length - 1 ? 0 : prevIndex + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [index])
  return (
    <div className=' w-screen h-[7vh]  bg-[#414042]'
    style={{transform: `translateY(${index * -100}%)`, transition: 'transform 0.5s ease-in-out'}}
    >        
    <p className='text-white text-center flex items-center justify-center h-full'>{info[index]}</p>
    </div>
  )
}

export default Info