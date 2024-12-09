import React from "react";
import './becomeAfliate.css'
import Image from "next/image";

export default function becomeAfliate (){
    return(
     <div>
        {/* THE DIV WITH THE BACKGROUND IMAGE AND TEXT */}
        <div className="background-text">
            <p className="text"> <span> PARTNER WITH SCOLARITÉ AND PROFIT FROM 
                EMPOWERING EDUCATION</span>
                <br/>
                <button>GET STARTED</button>
           
            </p> 
            
            <Image src= "/Images/image.png"
                alt ="backround-image"
                width ={1000} 
                height ={50}
                // sizes ="(max-width:1024px)600vw"
                className ="image" 
                priority
            />
        </div>

        {/* THE SECTION HOLDING THE INNER CONTENT AFTER THE BACKGROUND IMAGE */}

        <div className="Firstbody-div">
              <p className="become"> <span className="dash">—— </span> BECOME A SCOLARITÉ AFFILIATE PARTNER</p>  
              <p className="Earn-money" >Earn Money While Helping Students Succeed Academically</p>
              <li className="first-text"> Join the scolarité Affiliate program today. As an affiliate,
                 you'll have the opportunity to earn commissions
                by promoting our comprehensive exam preperation resources.
              </li>

            <br/>
            {/* THE BENEFITS OF JOINING THE AFFILIATE */}
               <li className="benefits">What are the benefits of joining the affiliate program?</li>
            
              <div className="list-elements">
                  <li>Earn 20% of one off plan price (1 month, 1 quater or 1 year) for every client you bring.</li>
                  <li>No qualifications needed.</li>
                  <li>Earn extra cash at your convenience.</li>
                  <li>Secondary school teachers are highly advantaged.</li>
              </div>
              {/* BENEFITS ENDS HERE */}
            <br/>

            {/* HOW CAN I JOIN SCHOLARITÉ THE signUp,AccessResources. and the Promote and earn STARTING */}


            <li className="can-join">How can I join Scolarité Affiliate Program</li>

            <div className="parent-div">
                {/* signUpstarts Here */}
                <div className="child-div">
                    <li> 
                        <Image src="/Images/signup 2.png"
                            width={100}
                            height ={300}
                            alt="Sign Up"
                            className="directional-images" />
                    </li>
                    
                    <li className="header">Sign Up</li>

                    <br/>

                    <ul className="inner-text">
                    <li>Register for the Scolarité Affiliate Program 
                        through our simple online application.
                    </li>
                    <li>Once approved,you'll receive access to your
                        personal affiliate dashboard.
                    </li>
                        
                    </ul>

                </div>
                {/* signUp Stops Here */}

                {/* DIRECTION IMAGE */}
                <li>
                <Image src="/Images/image 10.png"
                            width={100}
                            height ={300}
                            alt="Sign Up"
                            className ="sep-image" />
                </li>
                 {/* DIRECTION IMAGE STOPS HERE */}

                 
                {/* AccessResources Starts Here */}
                <div className="child-div access">
                   <li>
                     <Image src="/Images/monitor 1.png"
                            width={100}
                            height ={300}
                            alt="Sign Up"
                            className ="directional-images"
                             />
                    </li>
                  <li className="header">Access Resources</li>
                    <br/>

                    <ul className="inner-text access-text">
                       <li>Undergo training on how the affiliate program works.
                       </li>
                       <li>These resources are designed to help you promote Scolarité
                        effectively to your audience.
                       </li>
                        
                    </ul>

                </div> 
                {/* AccessResources STOPS here */}
                  

                  {/* DIRECTION  IMAGE 2 TAKE NOTE */}
                <li>
                <Image src="/Images/image 10.png"
                            width={100}
                            height ={300}
                            alt="Sign Up"
                            className ="sep-image" />
                </li>
                   {/* STOPS HERE */}


                  {/* THE PROMOTE AND EARN  */}
                <div className="child-div promote">
                    <li>
                      <Image src="/Images/promotion 1.png"
                            width={100}
                            height ={300}
                            alt="Sign Up"
                            className ="directional-images"
                             />
                    </li>
                  <li className="header">Promote and Earn</li>
                    <br/>

                    <ul className="inner-text access-text">
                        <li>Use referral details to invite potential customers.
                        </li>
                        <li>Get paid by month end based on number of referrals achieved.
                        </li>
                        
                    </ul>

                </div>
                {/* PROMOTE AND EARN STOPS */}

            </div>
             {/* HOW CAN I JOIN SCHOLARITÉ STOPS HERE */}

            
        </div>       

        {/* FIRST BODY DIV STOPS HERE */}
         
     </div>
    
    );
}

