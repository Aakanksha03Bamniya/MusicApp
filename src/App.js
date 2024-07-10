import React, { useContext } from 'react'
import BarSide from './components/BarSide'
import Players from './components/Players'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'


const App = () => {

  const {audioRef , track} = useContext(PlayerContext)
  return (
  <div className= "h-screen bg-yellow-200">
    <div className='h-[90%] flex bg-purple-500 '>
      <BarSide/>
      <Display/>
    </div>
      <Players/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
  </div>
  )
}

export default App