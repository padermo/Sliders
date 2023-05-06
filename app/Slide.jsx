'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'
import image6 from './assets/image6.jpg'
import { motion } from 'framer-motion'

function Slide() {
  const [currentButton, setCurrentButton] = useState()

  const selectCurrentButton = (currentIndex) => {
    setCurrentButton(currentIndex)
  }

  const Buttons = () => {
    let arrayButtons = []
    for(let i=1; i<=6; i++){
      arrayButtons.push(<input key={i} type='button' position={i} className={`${i !== currentButton ? "navinput" : "activeButton"}`} onClick={function onClick(){return selectCurrentButton(i)}} />)
    }
    return arrayButtons
  }

  return (
    <>
      <div className="main-section">
        <div className="carousel__content">
          <div className="cards__content">
            <div className="carousel">
              <div className={"item pos" + currentButton + ""}>
                <Image src={image1} alt='' className='image' />
              </div>
              <div className={"item pos" + currentButton + ""}>
                <Image src={image2} alt='' className='image' />
              </div>
              <div className={"item pos" + currentButton + ""}>
                <Image src={image3} alt='' className='image' />
              </div>
              <div className={"item pos" + currentButton + ""}>
                <Image src={image4} alt='' className='image' />
              </div>
              <div className={"item pos" + currentButton + ""}>
                <Image src={image5} alt='' className='image' />
              </div>
              <div className={"item pos" + currentButton + ""}>
                <Image src={image6} alt='' className='image' />
              </div>
            </div>
            <div className="buttons__groups">
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slide