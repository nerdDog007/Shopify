import React from 'react'
import discover1 from '../../assets/discover1.webp'
import discover2 from '../../assets/discover2.webp'
import discover3 from '../../assets/discover3.webp'
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import Button from '../../components/Button' 
import { useEffect } from 'react';

function Showcase() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex===2?0: (prevIndex + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

  return (
    <div className='max-w-screen h-fit  overflow-x-hidden '>
        <h1 className='text-2xl p-4 ]'>Discover Sandesh</h1>
        <div className='relative  '>
        <div className='w-screen flex '
        style={{transform: `translateX(-${currentIndex*100}%)`, transition: 'transform 0.5s ease-in-out'}}
        >
           <ShowcaseItem h1='Green Cedar' p1='A Velvety  Rich Wood' p2='KM 290' img={discover1}/>
           <ShowcaseItem h1='Yellow Cedar' p1='A Velvety  Rich Wood' p2='KM 290' img={discover2}/>
           <ShowcaseItem h1='Purpal Cedar' p1='A Velvety  Rich Wood' p2='KM 290' img={discover3}/>
        </div>
        <div className='flex'>
        <GrFormPrevious
            className='text-4xl absolute bottom-10 left-0 cursor-pointer'
            onClick={() => setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? 2 : prevIndex - 1)}/>
        <GrFormNext
             className='text-4xl absolute bottom-10 right-0 cursor-pointer'
            onClick={() => setCurrentIndex((prevIndex) =>
             prevIndex === 2 ? 0 : prevIndex + 1
  )}
/>
        </div>
        </div>
    </div>
  )
}
function ShowcaseItem({h1,p1,p2,img}:{h1?:string,p1?:string,p2?:string,img?:string}) {
    return(
        <div className='flex flex-col h-fit w-screen items-center text-center gap-4'>
        <img src={img} alt="Discover 1" className='h-[40%]'/>
        <div className='w-screen  border-t-2  border-black/40 p-4'>
            <h1>{h1}</h1>
            <p>{p1}</p>
            <p>{p2}</p>

        </div>
        <div>
            <Button btnName="Quick Add" className="w-[70vw]  items-center text-center mb-4 border-2 border-black/20 px-4 py-2"/>
        </div>
    </div>
    )
}



  export default Showcase