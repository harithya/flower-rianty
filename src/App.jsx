import { useState } from "react"
import Lottie from "lottie-react";
import gift from './assets/gift.json'
import flowerGift from './assets/flower.json'
import flower2 from './assets/flower2.json'

const App = () => {
  const [position, setPosition] = useState({ y: 0, x: 0 })
  const [flower, setFlower] = useState(false)


  const handleChangePosition = () => {
    setPosition({
      y: Math.floor(Math.random() * 200),
      x: Math.floor(Math.random() * 100),
    })
  }

  return (
    <div className="min-h-screen flex justify-center items-center flex-col ">
      <h4 className="text-3xl">Do you want a flower ?</h4>
      {flower ?
        <Lottie animationData={flowerGift} style={{
          height: 200,
          width: 200,
        }} /> :
        <Lottie animationData={gift} style={{
          height: 200,
          width: 200,
        }} />}
      <div className="space-x-5 relative mt-5">
        <button onClick={() => setFlower(true)} className="py-2 px-8 text-white rounded-lg shadow-lg bg-blue-500">Yes</button>
        <button
          onMouseEnter={handleChangePosition}
          key={position.y + position.x}
          className={`py-2 px-8 text-white rounded-lg shadow-lg transition-all bg-red-500`} style={{
            position: position.y === 0 ? 'relative' : 'absolute',
            top: position.y,
            left: position.x,
          }}>No</button>
      </div>
      {flower && <div className="fixed bottom-0 right-0 left-0 flex justify-center ">
        <Lottie animationData={flower2} style={{
          height: 200,
          width: 200,
        }} />
      </div>}
    </div>
  )
}

export default App