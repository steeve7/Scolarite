"use client"
import React, { useEffect } from 'react'
import './custom.css'
import Image from 'next/image'
import { color } from 'framer-motion'
import { useState } from 'react'




export default function paymentPageforCustomPlan() {

   // const dateInputRef = useRef(null)
   const [cardNmuber,setCardNumber] = useState("")
   const [cvv,setCvv] = useState("")



   // useEffect(()=>{
   //         if(cardNmuber.length > 16) return
   // },[])

   useEffect(()=>{
       let emailEl = document.getElementById("email")
       emailEl.addEventListener(EventName,()=>{
           if ((String(emailEl.value).toLowerCase().includes("@") && String(emailEl.value).toLowerCase().includes(".com"))== false){
               console.log("success ")
           }else{
               console.log("<error effects here>")
           }
       })
       
   },[])
   
   // function for the Sub Button
   
   function subscribe(){
       document.querySelectorAll("input").forEach(el=>el.dispatchEvent(Event))
       document.querySelectorAll("info").forEach(el=>{
           el.style.animationName = inform
           el.style.animationName = inform
            
   })
   }

   //  function subscribe(){
   //     document.querySelectorAll("input").forEach(el=>el.dispatchEvent(Event))
   //     document.querySelectorAll("info").forEach(el=>{
   //         el.style.animationName = "info"
   //         el.style.animationName =" inform" 
   //     })
   //  }

    const EventName ="SUBSCRIBE"
    const Event = new
    CustomEvent(EventName,{detail:{event:EventName}})




    
    let count = 30

    function add1() {
       const resultElement = document.getElementById('timer');
       if (resultElement) {
           count = count + 1
           resultElement.innerText = count;
       } else {
           console.error('Element with ID "result" not found.');
       }
    }
    
    function add2() {
       const resultElement = document.getElementById('timer');
       if (resultElement) {
           count = count - 1
           resultElement.innerText = count;
       } else {
           console.error('Element with ID "result" not found.');
       }
    }


 return (
   <div className="body">
     <div className="background">
         <div className="inner-body">
           <div className="Card-payment-info">
               <ul className="nav">
                   <li>
                       <Image src="/Images/productlogo.png"
                       alt="logo"
                       width={50}
                       height={10}
                       className="logo"

                       />
                   </li>
                   <li className="scolar">Scolarité</li>
               </ul>

               <ul className="card">
                   <li>
                   <Image src="/Images/creditcard.png"
                       alt="logo"
                       width={50}
                       height={10}
                       className="credit-cd"

                       />
                   </li>
                   <li className="credit-info"> Credit Payment Information</li>

               </ul>


              {/* FORMM */}
               <form method="post">

               <div className="input-headings">
                   <ul>
                   <li className="text"> Email</li>
                       <li> <Image src="/Images/info.png"
                       alt="logo"
                       width={50}
                       height={10}
                       className="info"

                       /> </li>
                   </ul>
                      
                      <input type="email" id="email" className="input" placeholder="example@gmail.com" required/>
   
                </div>


                
                  <div className="payment-method">
                        Payment Method(s)
                     <ul>
                         <li> <Image src="/Images/visa.png"
                       alt="logo"
                       width={50}
                       height={10}
                       className="visa"

                       /> </li>
                          <li> <Image src="/Images/mastercard.png"
                       alt="logo"
                       width={50}
                       height={10}
                       className="visa-2"

                       /> </li>
                    </ul>
               </div>


               <div className="input-headings">
                   <ul>
                   <li className="text" > Cardholder's Name</li>
                       <li> <Image src="/Images/info.png"
                       alt="logo"
                       width={50}
                       height={10}
                       className="info"

                       /> </li>
                   </ul>
                      
                      <input type="text" id="holdersname" className="input" placeholder="Enter name on Card"required/>
   
                </div>



                <div className="input-headings">
                   <ul>
                   <li className="text"> Card Number</li>
                       <li> <Image src="/Images/info.png"
                       alt="logo"
                       width={50}
                       height={10}
                       className="info"

                       /> </li>
                   </ul>
                      
                      <input  id="cardnumber" value={cardNmuber} onChange={(e)=>{

                          if(e.target.value.length <= 16){
                           setCardNumber(e.target.value)
                       }
                       }
                       } 
                       className="input" type="number"   placeholder="               -  -  -  -          -  -  -  -             -  -  -  -           -  -  -  -" required/>
   
                </div>


                <div className="date-cvv" >
                <div className="input-headings">
                   <ul>
                   <li className="text"> Card Expiry Date</li>
                       <li> <Image src="/Images/info.png"
                       alt="logo"
                       width={50}
                       height={10}
                       className="info"

                       /> </li>
                   </ul>
                      {/* <div  
                      onClick={()=>{
                       console.log("clicked")
                       dateInputRef.current.showPicker()}}
                       style={{
                           display:"flex",
                           alignItems:"center",
                           justifyContent:"center",
                           width:"100%",
                       }}
                       
                       className="input-expiry"

                       >
                           MM/YY
                       <input type="date" style={{
                           visibility:"hidden"
                           background:"#F8F9FB"


                       }} ref={dateInputRef}
                       placeholder="MM/YY"
                       />
                      </div> */}
                      <input type="date" id="cardexpiry" className="input-expiry"   placeholder="" required/>
   
                </div>

                <div className="input-headings">
                   <ul>
                   <li className="text"> CVV</li>
                       <li> <Image src="/Images/info.png"
                       alt="logo"
                       width={50}
                       height={10}
                       className="info"

                       /> </li>
                   </ul>
                      
                      <input type="number" id="cvv" className="input-cvv" value={cvv} onChange={(e)=>{
                       if(e.target.value.length <=3){
                           setCvv(e.target.value)
                       }
                      }}    placeholder="       ----      ----     ----  " required/>
   
                </div>


              </div>
             
              <button type="submit" id="Subscribe" className="subscribe"  name="Subscribe" onClick={() =>subscribe()}>Subscribe</button>

    

               </form>

           </div>






            



 {/* SECOND HALF */}
            <div className="Payment-summary">
                
            <div className='nav-link'>
            <ul className="nav">
                    <li>
                        <Image src="/Images/productlogo.png"
                        alt="logo"
                        width={50}
                        height={10}
                        className="logo"

                        />
                    </li>
                    <li className="scolar">Scolarité</li>
                </ul>

                <ul className="card">
                    <li>
                    <Image src="/Images/creditcard.png"
                        alt="logo"
                        width={50}
                        height={10}
                        className="credit-cd"

                        />
                    </li>
                    <li className="credit-info"> Credit Payment Information</li>

                </ul>
                </div>
            <li className='black-line'></li>
                <div className="payment-inner">
                    <div className='p'>
                        <span className='p-summary'>Payment Summary</span>
                        <br/>
                        <div className='p-text'>Unlock the power of education with our flexible custom plan,designed                            specifically for schools.This plan requires a minimum of 30 students and offers
                            the flexibility to increase the number of students as needed.
                        </div>
                        </div>
                    <div className='elements'>
                        <ul className='list'>
                            <li>Subscription plan</li>
                            <li className='list-1'>Monthly/Basic Plan</li>
                        </ul>
                        <ul className='list'>
                            <li >Access Period</li>
                            <li className='list-1'>1 Month</li>
                        </ul>
                        <ul className='list'>
                            <li>Number of User(s)</li>
                            <li className='list-1'>
                               <div className='number-increment'>
                                <div className='box' id='timer' >30</div>
                                <div className='button'>
                                <button id="Add1" onClick={() =>add1()} >
                                <Image src="/Images/arrowup.png"
                                      alt="logo"
                                      width={50}
                                      height={5}
                                      className="arrow-1"
                                      />
                                </button>
                                {/* <br/> */}

                                <button id="Add2" onClick={() =>add2()} >
                                <Image src="/Images/arrowup.png"
                                      alt="logo"
                                      width={50}
                                      height={5}
                                      className="arrow-2"
                                      />
                                </button>
                
                                    
                                </div>
                               </div>
                            </li>
                        </ul>
                        <ul className='list'>
                            <li>Discount code</li>
                            <li className='list-1'>---------</li>
                        </ul>
                        <ul className='list'>
                            <li>Discount Amount</li>
                            <li className='list-1'>₦0.00</li>
                        </ul>
                        <ul className='list'>
                            <li>Transaction fee</li>
                            <li className='list-1'>100</li>
                        </ul>
                    </div>
                </div>
          
                       <div className='Amount-check'>
                        {/* <div></div> */}
                              <div className='inner-amount'>
                                <span className='tt-amnt'>Total Amount</span>
                                <br/>
                                {/* <br/> */}
                                <span className='naira'>₦ 10,100</span>
                                </div>   
                              <div>
                              <Image src="/Images/vector.png"
                                      alt="logo"
                                      width={50}
                                      height={5}
                                      className="message"
                                      />
                                </div>   
                                
                           </div>
                           <div className='circle'>
                           <div className='circle-1'></div> 
                           <div className='circle-2'></div> 
                             </div>
                   
            </div>






        </div>

      </div>
    </div>
  )
}