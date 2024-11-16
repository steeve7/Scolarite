// import Logo from '@/components/Logo';
// import './LoginPage.module.css'; // Import CSS module if using modular CSS

// export default function LoginPage() {
//   return (
//     <div className="login-page">
//       {/* Video Background */}
//       <video autoPlay loop muted className="background-video">
//         <source src="/path-to-your-video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark Overlay */}
//       <div className="overlay"></div>

//       {/* Login Card */}
//       <div className="login-card">
//         <Logo className="logo" /> {/* Placeholder for your logo */}

//         <h2>Welcome Back</h2>
//         <p className="subtitle">Enter your email and password to access your account</p>

//         <form>
//           <div className="input-group">
//             <label>Email</label>
//             <input type="email" placeholder="Enter your email" />
//           </div>

//           <div className="input-group">
//             <label>Password</label>
//             <input type="password" placeholder="Enter your password" />
//           </div>

//           <div className="options">
//             <label>
//               <input type="checkbox" /> Remember me
//             </label>
//             <a href="#">Forgot Password?</a>
//           </div>

//           <button type="submit" className="signin-btn">Sign In</button>

//           <button type="button" className="google-btn">
//             <img src="/google-logo.png" alt="Google logo" /> Sign in with Google
//           </button>

//           <p className="signup-text">
//             Don’t have an account? <a href="#">Sign Up</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

























// import Image from 'next/image';
// import './LoginPage.module.css'; // Import CSS module if using modular CSS

// export default function LoginPage() {
//   return (
//     <div className="login-page">
//       {/* Video Background */}
//       <video autoPlay loop muted className="background-video">
//         <source src="/images/backvid.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark Overlay */}
//       <div className="overlay"></div>

//       {/* Login Card */}
//       <div className="login-card">
//         {/* Logo - loaded from public/images folder */}
//         <Image src="/images/logo.png" alt="Scolarité logo" width={100} height={50} className="logo" />

//         <h2>Welcome Back</h2>
//         <p className="subtitle">Enter your email and password to access your account</p>

//         <form>
//           <div className="input-group">
//             <label>Email</label>
//             <input type="email" placeholder="Enter your email" />
//           </div>

//           <div className="input-group">
//             <label>Password</label>
//             <input type="password" placeholder="Enter your password" />
//           </div>

//           <div className="options">
//             <label>
//               <input type="checkbox" /> Remember me
//             </label>
//             <a href="#">Forgot Password?</a>
//           </div>

//           <button type="submit" className="signin-btn">Sign In</button>

//           <button type="button" className="google-btn">
//             <Image src="/google-logo.png" alt="Google logo" width={20} height={20} /> Sign in with Google
//           </button>

//           <p className="signup-text">
//             Don’t have an account? <a href="#">Sign Up</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }





import Image from 'next/image';
import styles from './LoginPage.module.css'; // CSS module for styling

export default function LoginPage() {
    return (
        <div className={styles.loginPage}>
            {/* Video Background */}
            <video autoPlay loop muted className={styles.backgroundVideo}>
                <source src="/images/backvid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className={styles.overlay}></div>

            {/* Login Card */}
            <div className={styles.loginCard}>
               {/* Logo with Text */}
                {/* <Image
                    src="/images/logo.png"
                    alt="Scolarité logo"
                    width={80}
                    height={40}
                    className={styles.logo}
                />

                <span className={styles.logoText}>SCOLARITÉ</span> */}

                <div className={styles.logoContainer}>
                    <Image
                        src="/images/logo.png"
                        alt="Scolarité logo"
                        width={80}
                        height={40}
                        className={styles.logo}
                    />
                    <span className={styles.logoText}>SCOLARITÉ</span>
                </div>




                <h2 className={styles.welcomeText}>Welcome Back</h2>
                <p className={styles.subtitle}>
                    Enter your email and password to access your account
                </p>

                <form>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="Enter your email" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="Enter your password" />
                    </div>

                    <div className={styles.options}>
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#" className={styles.forgotPassword}>
                            Forgot Password?
                        </a>
                    </div>

                    <button type="submit" className={styles.signinBtn}>
                        Sign In
                    </button>

                    <button type="button" className={styles.googleBtn}>
                        <Image
                            src="/images/google-logo.png"
                            alt="Google logo"
                            width={20}
                            height={20}
                            className={styles.googleLogo}
                        />
                        Sign in with Google
                    </button>

                    <p className={styles.signupText}>
                        Don’t have an account? <a href="#">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
