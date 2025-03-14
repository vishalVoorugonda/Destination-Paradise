import React, { useEffect, useState } from "react";
import styles from "../module/imagescroll.module.css";
import packages from "./Data";
function ImageScroll() {
    const [currentIndex,setCurrentIndex] = useState(0)
    const [autoPlay,setAutoPlay] = useState(true)
     let timer = null
    useEffect(()=>{
       timer = autoPlay && setTimeout(()=>{
            slideRight()
        },2500)
    })

    const slideLeft =()=>{
         if(currentIndex>0){
            setCurrentIndex((prev)=>prev-1)
         }else{
            setCurrentIndex(2)
         }
    }

    const slideRight =()=>{
        if(currentIndex<2){
            setCurrentIndex((prev)=>prev+1)
        }else{
            setCurrentIndex(0)
        }
        
    }
  return (
    <div id ='imageScroll' className={styles.imageContainer} onMouseEnter={()=>{setAutoPlay(false); clearTimeout(timer)}} onMouseLeave={()=>setAutoPlay(true)}>
      <div className={styles.imagewrapper}>
        {packages.map((i,index) => {
          return (
            <div key={index} className={`${styles.image_card} ${index === currentIndex ? styles.image_card_active : ''}`}>
              <img className={styles.image} src={i.photo} alt={i.name}/>
              <div className={styles.image_title}>
                <h1 className={styles.imageName}>{i.name}</h1>
                </div>
            </div>
          );
        })}
        <div className={styles.arrow_left} onClick={slideLeft}>&lsaquo;</div>
        <div className={styles.arrow_right} onClick={slideRight}>&rsaquo;</div>
        <div className={styles.pagination}>
            {packages.map((_,index)=>{
                return(
                    <div key={index} 
                    onClick={()=>setCurrentIndex(index)}
                    className={`${styles.pagination_dot} ${index === currentIndex ? styles.pagination_dot_active : ''}`}
                     ></div>
                )
            })}
        </div>
      </div>
    </div>
  );
}

export default ImageScroll;
