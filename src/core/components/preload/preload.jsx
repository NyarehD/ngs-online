import React from 'react'
import preloadImg from '../../../assets/preload/preloader.gif'
import preloadStyle from "./preload.module.sass"

function Preload() {
  return (
    <div className={preloadStyle.imgBox}>
        <img className={preloadStyle.img} src={preloadImg} alt="" />
    </div>
  )
}

export default Preload