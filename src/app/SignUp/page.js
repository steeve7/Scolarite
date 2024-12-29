"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick"; // Import react-slick
import styles from "./SignUpPage.module.css";
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import "./config.css"
import { clickHidden, Flip } from "@/components/addons/addons";
export default function SignUpPage() {
    const [stage, setStage] = useState("signup"); // Stages: signup, verification, confirmed

    // Carousel images
    const carouselImages = [
        "/images/sign1.svg",
        "/images/sign2.svg",
        "/images/sign3.svg",
    ];

    // React Slick settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };


    //Handles page switch from sign up form
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        setStage("verification"); // Switch to email verification stage
    };

    const handleCodeSubmit = (e) => {
        e.preventDefault();
        setStage("confirmed"); // Switch to email confirmed stage
    }; 
    useEffect(() => {
    setInterval(()=>{
        clickHidden("FB-signup-FORWARD")
        console.log("CLICKED")
    },3000)
    },[])

    return (
        <div className={styles.container}>
            {/* Left Section */}
            <div className={styles.left}>
                <Flip  Name={"signup"} Type={"signupleftevent"} /* {...sliderSettings} */ className={styles.carousel}>
                    {carouselImages.map((src, index) => (
                        <div key={index} className={styles.slide}>
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className={styles.carouselImage}
                                width={500}
                                height={500}
                                priority
                            />
                        </div>
                    ))}
                </Flip>
                <div className={styles.quote}>
                    <h2>A WISE QUOTE</h2>
                    <div>
                        <h1>Get Everything You Want</h1>
                        <p>
                            You can get everything you want if you work hard, trust the process,
                            and stick to the plan.
                        </p>
                    </div>
                </div>
            </div>




            {/* Right Section */}
            <div className={styles.right}>
                <div className={styles.rightinner}>
                    <div className={styles.logoContainer}>
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            className={styles.logo}
                            width={45}
                            height={40}
                        />
                        <div className={styles.textContainer}>
                            <h2>SCOLARITÉ</h2>
                        </div>
                    </div>
                    {stage === "signup" && (



                        // Signup Form Section
                        <div className={styles.formContainer}>
                            <h1>Register individual account</h1>
                            <p>Enter your email and password to create your account</p>
                            <form onSubmit={handleSignUpSubmit}>
                                <label className={styles.label}>First name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    className={styles.input}
                                />
                                <label className={styles.label}>Last name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    className={styles.input}
                                />
                                <label className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={styles.input}
                                />
                                <label className={styles.label}>Phone No</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone no"
                                    className={styles.input}
                                />
                                <label className={styles.label}>Referral code</label>
                                <input
                                    type="text"
                                    placeholder="Enter referral code (if any)"
                                    className={styles.input}
                                />
                                <label className={styles.label}>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className={styles.input}
                                />
                                <div className={styles.checkbox}>
                                    <input type="checkbox" id="rememberMe" />
                                    <label htmlFor="rememberMe">Remember me</label>
                                </div>
                                <button type="submit" className={styles.button}>
                                    Sign Up
                                </button>
                            </form>
                            <button className={styles.googleButton}>
                                <Image
                                    src="/images/google-logo.png"
                                    alt="Google Icon"
                                    width={22}
                                    height={22}
                                />
                                Sign Up with Google
                            </button>
                            <p className={styles.signInLink}>
                                Do you have an account? <a href="/Login">Sign In</a>
                            </p>
                        </div>
                    )}
                    {stage === "verification" && (


                        // Email Verification Section
                        <div className={styles.verificationContainer}>
                            <h1>We've emailed you a code</h1>
                            <p>
                                To continue account setup, enter the code we've sent to:
                                <strong> student@gmail.com</strong>
                            </p>
                            <form onSubmit={handleCodeSubmit}>
                                <div className={styles.codeInputContainer}>
                                    {Array(6)
                                        .fill("")
                                        .map((_, i) => (
                                            <input
                                                key={i}
                                                type="text"
                                                maxLength="1"
                                                className={styles.codeInput}
                                            />
                                        ))}
                                </div>
                                <button type="submit" className={styles.button}>
                                    Submit
                                </button>
                            </form>
                            <p className={styles.resend}>
                                Resend: <span>60s</span>
                            </p>
                        </div>
                    )}
                    {stage === "confirmed" && (


                        // Password Updated Successfully View
                        <div className={styles.confirmedContainer}>
                            <h1>Congratulations on Taking the First Step!</h1>
                            <p>
                                Your journey to JAMB success starts now. Let’s dive into your
                                personalized learning experience.
                            </p>
                            <button
                                className={styles.button}
                                onClick={() => window.location.reload()} // Reload the page
                            >
                                Continue
                            </button>
                            <p>Redirecting in 5 seconds, or click the 'Continue' button to proceed now.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
