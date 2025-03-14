import React from 'react'
import styles from "../module/about.module.css"

function About() {
  return (
    <div id='about'> 
    <h1 className={styles.about}>About Us</h1>
    <div className={styles.about_container}>
        <div className={styles.about_img}>
            <img src='https://media.istockphoto.com/id/538883154/photo/golden-sunrise-at-wastwater-lake-with-rocks-and-mountains.jpg?s=612x612&w=0&k=20&c=HqwtIffM-F5HN3Ou9BUjo3NpaeE2eCBItOIWqMRnZbQ=' alt='image'/>
        </div>
        <div className={styles.about_content}>
           <h2>Welcome to Destination Paradise</h2>
           <p>Your ultimate guide to unwinding in the most beautiful destinations arround the world.From secluded beaches to bustling cities.we curate the best travel experiences tailored just for you</p>
           <button>Learn More</button>
        </div>
    </div>
    <div className={styles.footer}>
            <div className={styles.socialicon}>
              <a href='https://www.facebook.com/'> <img src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png'/></a>
              <a href='https://x.com/'>  <img src='https://cdn-icons-png.flaticon.com/128/5969/5969020.png'/></a>
              <a href='https://www.instagram.com/'> <img src='https://cdn-icons-png.flaticon.com/128/3955/3955024.png'/></a>
              <a href='https://www.messenger.com/'>  <img src='https://cdn-icons-png.flaticon.com/128/3670/3670312.png'/></a>
              <div>
               <p className={styles.footerpara}> copyright @ 2025-All Rights Reserved.</p>
             </div>
            </div>
    </div>
    </div>
  )
}

export default About
