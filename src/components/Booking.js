import React, { useState } from 'react'
import styles from "../module/booking.module.css"
import countryCodes from './PhoneCodes'
import { useItems } from './Context'
import packages from './Data'


function Booking() {
  const [input,setInput] = useState({
       name:"",
       email:"",
       phone:"",
       birthday:"",
       phoneCode:"",
       martialStatus:""
  })

  const{search,searchItems} = useItems()

  const [list,setList] = useState([])
  const [show,setShow] = useState(false)
  const [message,setMessage] = useState(false)
  console.log(message)
  console.log(message)

  const handleInputChange =(e)=>{
     const {name,value} =e.target
     setInput({...input,[name]:value})
  }

 


  const handleSubmit =(e)=>{
    e.preventDefault()
    if (input.name !== "" && input.email !== "" && input.phone !== "" && input.birthday !== ""){
      const obj={
        name:input.name,
        email:input.email,
        phone:`${input.phoneCode} ${input.phone}`,
        birthday:input.birthday,
        martialStatus:input.martialStatus
      }
      setList([...list,obj])
      setShow(true)
    
      setTimeout(()=>{
        setShow(false)
      },2000)
  
      setInput({
        name: "",
        email: "",
        phone: "",
        birthday: "",
         phoneCode:"",
         martialStatus:""
      });
    }else{
      setTimeout(()=>{
        setMessage(false)
      },2000)
      setMessage(true)
    }
  }

  const filteredPackages = search
  ? packages.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()))
  : packages;

  return (
    <div id='beach' className={styles.booking}>
    <div className={styles.left}>
        <h2 className={styles.headings}>Book Your Dream Vacation</h2>
         <div className={styles.details}>
            <form className={styles.form_details}>
                <label>Name</label>
                <input type='text' value={input.name} name='name' onChange={handleInputChange}/>
                <label>Email</label>
                <input type='email' value={input.email} name='email' onChange={handleInputChange}/>
                <label>Phone Number</label>
              <div className={styles.inp} >
              <select className={styles.select} name='phoneCode' value={input.phoneCode} onChange={handleInputChange}>
                {countryCodes.map((i,index)=>{
                    return(
                         <option  value={i.name}>{i.name}</option>
                    )
                })}
                </select>
                <input type='text' name='phone' value={input.phone} onChange={handleInputChange}/> 
               
              </div>
                <label>Birthdate</label>
                <input type='date' name='birthday' value={input.birthday} onChange={handleInputChange}/>
                
                <label>Martial Status</label>
                <select className={styles.select1} name='martialStatus'  value={input.martialStatus} onChange={handleInputChange}>
                     <option value="">Select Option</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                </select>
            </form>
            <div className={styles.submitBtn}>
            <button className={styles.btn} onClick={handleSubmit}>Submit</button>

            {show?<p className={styles.message}>Thanks for your interest.our tour experts will get back to you shortly</p>:''}
                {message ?<p style={{color:"red",fontSize:"1.3rem"}}>Please fill the form</p>:""}
            </div>
         </div>
     </div>

     <div className={styles.right}>
        <h2 className={styles.heading}>Explore Our Travel Packages</h2>
       <div className={styles.package_container}>

         {filteredPackages.length > 0 ? (
            filteredPackages.map((i, index) => (
              <div key={index} className={styles.photocards}>
                <div className={styles.photoDetails}>
                  <img src={i.photo} alt={i.name} />
                  <div className={styles.description}>
                    <p className={styles.head}>{i.name}</p>
                    <p>{i.description}</p>
                  </div>
                  <button>Book Now</button>
                </div>
              </div>
            ))
          ) : (
            <p style={{color:"red",fontSize:"2rem"}}>No matching results found.</p>
          )}
       </div>
    
      
     </div>
     
    </div>
  )
}

export default Booking
