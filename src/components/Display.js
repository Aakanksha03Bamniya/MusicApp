import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbm from './DisplayAlbm'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  // console.log(location);
  const isAlbum = location.pathname.includes('album')
  // console.log(isAlbum);
  const albumId= isAlbum ? location.pathname.slice(-1) : '';

  const bgColor= albumsData[Number(albumId)].bgColor // getting color from array to change the background according to album bg color
  useEffect(()=>{
    if(isAlbum){
      displayRef.current.style.background=`linear-gradient(${bgColor},#121212)`
    }
    else{
      displayRef.current.style.background=`linear-grediant(#121212)`
    }
  })
  return (
    <div  ref={displayRef}className='w-[150%] m-1 px-6 pt-4 rounded bg-black text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/album/:id' element={<DisplayAlbm/>}/>
        </Routes>
    </div>
  )
}

export default Display