import React, { useEffect } from 'react'

function Info() {
  const info =["100% NATURAL, NON-TOXIC FRAGRANCE ","Free shipping in The Nepal for orders over Rs2000"] 
  const [index, setIndex] = React.useState(1)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>index === info.length - 1 ? 0 : prevIndex + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [index])
  return (
    <div className=' w-screen h-[7vh]  bg-[#414042]'    >        
    <p className='text-white text-center text-[.7rem] flex items-center justify-center h-full'>{info[index]}</p>
    </div>
  )
}

export default Info