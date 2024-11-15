import React from 'react'
import './custom.css'
import Image from 'next/image'


export default function paymentPageforCustomPlan() {
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
                    <li className="credit-info"> Credit Card Information</li>

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
                       
                       <input type="email" id="fname" className="input" placeholder="example@gmail.com" required/>
    
                 </div>


                 
                   <div className="payment-method">
                         Payment Method(s)
                      <ul>
                          <li> <Image src="/Images/logo1.png"
                        alt="logo"
                        width={50}
                        height={10}
                        className="visa"

                        /> </li>
                           <li> <Image src="/Images/Logo2.png"
                        alt="logo"
                        width={50}
                        height={10}
                        className="visa"

                        /> </li>
                     </ul>
                </div>


                <div className="input-headings">
                    <ul>
                    <li className="text"> Cardholder's Name</li>
                        <li> <Image src="/Images/info.png"
                        alt="logo"
                        width={50}
                        height={10}
                        className="info"

                        /> </li>
                    </ul>
                       
                       <input type="text" id="holder'sname" className="input" placeholder="Enter name on Card"required/>
    
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
                       
                       <input type="num" id="cardnumber" className="input" max-length="12"   placeholder="    ----          ----             ----           ----" required/>
    
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
                       
                       <input type="num" id="cvv" className="input-cvv" max-length="12"   placeholder="----  ----  ----  ----" required/>
    
                 </div>


               </div>
              
               <input type="submit" id="Subscribe" className="subscribe"  name="Subscribe"/>
 
     



                




                </form>

            </div>


            <div className="Payment-summary">
            <Image src= "/Images/rectangle.png"
                alt ="image"
                width ={100} 
                height ={50}
                // sizes ="(max-width:1024px)600vw"
                className ="image" 
                priority
            />
            </div>







        </div>

      </div>
    </div>
  )
}