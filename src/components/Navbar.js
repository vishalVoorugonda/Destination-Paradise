import React, { useState } from 'react'
import styles from '../module/navbar.module.css'
import packages from './Data'
import { useItems } from './Context'
import Anchor from 'react-anchor-link-smooth-scroll'

function Navbar() {
  const {search,handleInput} = useItems()
  const [menu,setMenu]=useState("imageScroll")

  return (
    <div className={styles.navbar}>
        <div className={styles.navItems}>
            <h1 className={styles.heading}>Destination Paradise</h1>
             <div className={styles.list}>
              
             <Anchor href="#imageScroll" onClick={() => setMenu("imageScroll")}>Home</Anchor>

             <select>
                <option value="">Destinations</option>
               {packages.map((i,index)=>{
                 return(
                    <>
                     <option value={i.name}>{i.name}</option>
                     </>
                 )
               })}
               </select>
      
               <Anchor href="#about" onClick={() => setMenu("about")}>About</Anchor> 
          
             </div>
            <input className={styles.search} value={search} onChange={handleInput} type='text' placeholder='Search...'/>
        </div>
      
    </div>
  )
}

export default Navbar
