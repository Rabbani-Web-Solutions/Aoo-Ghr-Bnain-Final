import {makeStyles} from "@material-ui/core/styles";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AnimatedButton from '@bit/tabinda.react-button-animation.animated.button';
import '../css/footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook } from "@fortawesome/free-brands-svg-icons";
import {faTwitter } from "@fortawesome/free-brands-svg-icons";
import {faInstagram } from "@fortawesome/free-brands-svg-icons";
import {faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {faMap } from "@fortawesome/free-solid-svg-icons";
import Typography from "@material-ui/core/Typography";
import ScrollToTop from "react-scroll-up"

function Copyright() {
    return (
      <Typography variant="body2" color="inherit" align="center">
        {"Copyright © "}
        <Link color="inherit" to="https://uol.edu.pk/">
        Aoo Ghr Bnain (Built by Students of UOL)
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

function Footer (){


    return(


<footer id="dk-footer" class="dk-footer">

{/* <script crossorigin src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}

        <div class="container">
            <div class="row">

                <div class="col-md-12 col-lg-4" style={{marginTop : "15%"}}>
                    <div class="dk-footer-box-info">
                    <Link to="/" style={{textDecoration: 'none' }} >
                            <img src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_960_720.png" alt="footer_logo" class="img-fluid"/>
                        </Link>
                        <p class="footer-info-text">
                        We are here for you 24/7 , 24 hours and 7 days a week.
                        We will be glad to know from you about our product.
                        Simply give us your feed back. 
                        </p>
                        <div class="footer-social-link">
                            <h3 style={{textDecoration : 'underline'}}>Connect</h3>
                            <ul>
                                <li>
                                    <a>
                                        <FontAwesomeIcon icon={faFacebook} style={{fontSize:24 , margin : 10 , color: '#3B5998'}}
                                        onClick={() =>    window.location.href = 'https://www.facebook.com/University.Lahore/'
                                    }/>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                    <FontAwesomeIcon icon={faTwitter} style={{fontSize:24, margin : 10 , color: '#55ACEE'}}
                                    onClick={() =>    window.location.href = 'https://twitter.com/ULahore?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
                                }/>
                                    </a>
                                </li>
                                
                                <li>
                                    <a>
                                    <FontAwesomeIcon icon={faInstagram} style={{fontSize:24, margin : 10 , color: '#B7242A' }}
                                    onClick={() =>    window.location.href = 'https://www.instagram.com/ulahore/?hl=en'
                                      }/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                
                    <div class="footer-awarad">
                        
                        <p>The University of Lahore</p>
                </div>
                </div>
                
                <div class="col-md-12 col-lg-8" style={{marginTop: '10%' }}>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="contact-us">
                                <div class="contact-icon">
                                    <FontAwesomeIcon icon={faMap} />
                                </div>
                            
                                <div class="contact-info">
                                    <h3>The University of Lahore (Students)</h3>
                                    <p>Defence Road Campus</p>
                                </div>
                                
                            </div>
                        
                        </div>
                        
                        {/* <div class="col-md-6">
                            <div class="contact-us contact-us-last">
                                <div class="contact-icon">                                   
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                            
                                <div class="contact-info">
                                    <h3>95 711 9 5353</h3>
                                    <p>Give us a call</p>
                                </div>
                                
                            </div>
                        
                        </div> */}
                        
                    </div>
                    
                    <div class="row">
                        <div class="col-md-12 col-lg-6">
                            <div class="footer-widget footer-left-widget">
                                <div class="section-heading">
                                    <h3>Useful Links</h3>
                                    <span class="animate-border border-black"></span>
                                </div>
                                <ul>
                                    <li>
                                    <Link to="/about" style={{textDecoration: 'none' }} >About us</Link>
                                    </li>
                                    <li>
                                    <Link to="/sketch" style={{textDecoration: 'none' }} >Services</Link>
                                    </li>
                                   
                                </ul>
                                <ul>
                                <li>
                                    <Link to="/contact-us" style={{textDecoration: 'none' }} >Contact Us</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                            
                        </div>
                        
                        <div class="col-md-12 col-lg-6">
                            <div class="footer-widget">
                                <div class="section-heading">
                                    <h3>Subscribe</h3>
                                    <span class="animate-border border-black"></span>
                                </div>
                                <p>
                                We are offering features which will be valuable to you. Please subscribe to enjoy them.</p>
                                
                                    <div class="form-row">
                                        <div class="col dk-footer-form">
                                            <Link to="/signup" style={{textDecoration: 'none' }} >
                                                <AnimatedButton style={{ marginTop: '20%' , align : 'center' }} label =    "Subscribe"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        


        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <span><Copyright /></span>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="copyright-menu">
                            <ul>
                                <li>
                                <Link to="/" style={{textDecoration: 'none' }} >Home</Link>
                                </li>          
                                <li>
                                <Link to="/contact-us" style={{textDecoration: 'none' }} >Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        
        </div>

        <ScrollToTop showUnder={200}>
                
        <div id="back-to-top" class="back-to-top">
            <button class="btn btn-dark" title="Back to Top" style={{display: 'block'}}
                  onClick={() =>    window.scroll({
                    top: 0, 
                    left: 0, 
                    behavior: 'smooth'
                  })
                  }>
                <FontAwesomeIcon icon={faAngleUp} />
            </button>
        </div>

        </ScrollToTop>
        
</footer>



)
}

export default Footer;