import './css/App.css';
import {makeStyles} from "@material-ui/core/styles";
import front from './img/front.jpg';
// import home1 from "./img/home1.png";
import home1 from "./img/home1-removebg-preview (2).png";
// import home2 from "./img/home2.png";
import home2 from "./img/home2-removebg-preview (2).png";
// import home3 from "./img/home3.png";
import home3 from "./img/home3-removebg.png";
// import home4 from "./img/home4.jpg";
// import home4 from "./img/home4-removebg.png";
// import home4 from "./img/home4-removebg-preview.png";

import home4 from "./img/home44.png";

import home5 from "./img/home5.png";
import coffee from "./img/coffee.jpg"
import lightening from "./img/lightening.png";

import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { check } from 'antd';
import 'antd/dist/antd.css';
import {Button, IconButton} from "@material-ui/core";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import MyEstimates from "./sketch";
import logo from "./img/logoA.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from "@material-ui/core/Typography";
import { FaBeer } from 'react-icons/fa';
import { LogoNodejs } from 'react-ionicons'
import { Heart } from 'react-ionicons'  
import { Close } from 'react-ionicons'  

import { toast } from "react-toastify";

import AnimatedButton from '@bit/tabinda.react-button-animation.animated.button';


const useStyles = makeStyles((theme) => ({
    p: {
            overflow: "visible",
            letterSpacing: 0.5,
            color: "#433E69",
            fontSize: '20px',
            fontWeight: 700,
            fontStyle: "italic",
            fontFamily: `"Inter-ExtraBoldItalic", "Inter", sans-serif`,
            lineHeight: 2,
            textAlign: "center",
            top: '20%' ,
            height: 'auto',
            width : '100%'
            
        },
    frame : {
        width: '100%',
        height: 'auto',
    },

    textframe:{
    width: '100%',
  height: 'auto',
  overflow: "hidden",
//   transform: "translate('-50%' , -'50%' )" ,
  background: "radial-gradient(92.10000000000001% 50% at 5.2% 52.7%, #2266ff 0%, hsl(222, 57%, 77%) 100%)",
borderRadius: "5%",   

},

frame1 : {

    width: '100%',
    height: 'auto',
    overflow: 'visible',
    background: "radial-gradient(100% 50% at 0% 50%, #593b3b 0%, hsla(0, 71%, 76%, 0.66) 100%)",

},

liText : {

    width: '100%',
    height: 'auto',
    overflow: 'visible',
    color: 'white',
    textAlign: 'left',
    lineHeight: '2.3',
    fontWeight: '700',
    fontStyle: 'italic',
    fontFamily: "Inter-Bold" || "Inter" || "sans-serif",
    fontSize: '14.3px',
    letterSpacing: '0px',
},

    myStyle : {
        position: 'absolute',
        top: '20%' ,
        left: '35%' ,
        transform: "translate('-50%' , -'50%' )" ,
        width: '30%',
        height: 'auto',
    }



}));

const Sketch = () => <div> <MyEstimates/>     </div>;

function Home() {

    const width = '100%';
    const height = 'auto';

    const myClass = useStyles();

    return (
<div style={{overflow : 'hidden'}}>
<img width = {width} height = {height}
                     src = {front}
                     alt="image" 
                     style = {{  opacity:0.8 , borderBottomRightRadius : '20%' }}
                     
                     />
                     

                     <img src = {logo} className={myClass.myStyle}/>

<div style={{paddingLeft : "10px" , paddingRight : "10px" }}>
<div className="container">
<div className="row" style={{marginTop:80}}>
  <div className="col-md-3"style={{marginTop:70}}>
      <div className={myClass.textframe}>
    <p  className={myClass.p} >
     Here you can build your buildings ( architectural  designs layout)
    and estimate  the results. You can also see the
     trending materials in market and see their prices.</p>
                </div>
    </div>

   

<div className="col-md-4">

<p className={myClass.p} style ={{textAlign: "left" , marginTop: '20%' , fontSize : '15.5px'}}>
                     Sketch with app estimate with </p>
                     <div style={{marginTop: '10%'}}></div>
                         <Link to="/sketch" style={{textDecoration: 'none' }} >
                             
                             <AnimatedButton style={{ marginTop: '20%' , align : 'center' }} label =    "Sketch App Estimate"/>
                         
                         </Link>
<div style={{marginTop: '10%'}}></div>
                         </div>
<div className="col-md-4">
    <img className={myClass.frame}
                     width={"35%"}
                     src = {home2}
                     alt="image" />
                     {/* </div>
                     <div className="col-md-3" style = {{marignTop : '5%'}}> */}
                    <img className={myClass.frame}
                     src = {home1}
                     alt="image" />
    </div>

</div>

<div className="row" style={{marginTop: '3%'}}>
    <div className="col-md-12">

    <p className={myClass.p} >
    Just two Steps For your results</p>

    </div>


</div>

<div className="row" style={{marginTop : '3%'}}>
    <div className="col-md-5">

    <p className={myClass.p} >
                    Layout Design </p>
                    <img style={{width:'50%' , height:'auto' ,  marginLeft: '25%' 
  , marginTop : '3%'}}
                 src = {home4}
                 alt="image" />


    </div>

    <div className="col-md-2">
        
        {/* <Spin style={{width:'100%' , marginTop: '20%' , marginBottom:'20%'}} /> */}

        <img style={{width:'150%' , height:'auto' ,  marginLeft: '-25%' 
  , marginTop : '5%'}}
                 src = {lightening}
                 alt="image" />
    </div>

    <div className="col-md-5">

    <p className={myClass.p} style={{marginTop:'3%'}}>
    Estimate Design </p>

    <img style={{width:'60%' , height:'auto' , marginLeft: '25%' }}
                 src = {home3}
                 alt="image" />

    </div>


</div>

<div className="row">
<img style={{width:'60%' , height:'auto' , marginLeft: '20%' }}
                 src = {home5}
                 alt="image" />

</div>
<div className="row">
<p className={myClass.p} 
style={{
    marginTop:'3%' , 
    fontStyle : 'normal' , 
    fontSize : '20px' ,
    }}>
Buy us a cup of Coffee and get

your Subscription today </p>

</div>


<div className="row" style={{marginTop : '3%'}}>
<div className="col-md-4">



<img style={{width:'80%' , height:'auto' , borderRadius : '10%' }}
                 src = {coffee}
                 alt="image" />


</div>


<div className="col-md-4">
    <div className={myClass.frame1}>
{/* <div style={{marginTop:"12%"}}></div> */}
<Typography className={myClass.p} style = {{paddingTop : '20px' , fontSize : '20px'}}>Features</Typography>

<ol className={myClass.liText}>
<li>Build</li>
<li>Estimate</li>
<li>See Material From Other Sources</li>
<li>Save Locally</li>
<li>Save On Web App</li>
<li>Save As pdf For Verification (NOC and print on A3)</li> 
<li>View From DB</li>
</ol>
<Link to="/signup" style={{textDecoration: 'none' }} >
                             
                             <AnimatedButton style={{ marginTop: '20%' , align : 'center' }} 
                             label =    "We will be glad to see you "/>
                         
                         </Link>
    </div>
    </div>



<div className="col-md-2"><div className={myClass.frame1}

style = {{background: "radial-gradient(100% 50% at 0% 50%, #593b3b 0%, hsla(0, 71%, 76%, 0.66) 100%)" }}>

{/* <div style={{marginTop:"25%"}}></div> */}

<Typography className={myClass.p} style = {{paddingTop : '20px', fontSize : '20px' }}>UnSubscribed</Typography>

<ol className={myClass.liText} style = {{textAlign : 'center'}} >
<li>  <Heart
  color={'#8B0000'}
  beat
  height="auto"
  width="18%"
  onClick={() => toast.success('Service Available', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
/>  </li>
<li><Heart
  color={'#8B0000'}
  beat
  height="auto"
  width="18%"
  onClick={() => toast.success('Service Available', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
/></li>
<li><Heart
  color={'#8B0000'}
  beat
  height="auto"
  width="18%"
  onClick={() => toast.success('Service Available', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
/></li>
<li><Heart
  color={'#8B0000'}
  beat
  height="auto"
  width="18%"
  onClick={() => toast.success('Service Available', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
/></li>
<li><Close
  color={'#8B0000'}
  beat
  height="auto"
  width="18%"
  onClick={() => toast.error('Service Not Available', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
/></li>
<li><Close
  color={'#8B0000'}
  beat
  height="auto"
  width="18%"
  onClick={() => toast.error('Service Not Available', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
/></li> 
<li><Close
  color={'#8B0000'}
  beat
  height="auto"
  width="18%"
  onClick={() => toast.error('Service Not Available', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
/></li>
</ol>
<Link to="/sketch" style={{textDecoration: 'none' }} >
                             
                             <AnimatedButton style={{ marginTop: '20%' , align : 'center' }} label =    "Sketch App"/>
                         
                         </Link>

    </div></div>


<div className="col-md-2"><div className={myClass.frame1} 

style = {{background: "radial-gradient(100% 50% at 0% 50%, #593b3b 0%, hsla(0, 71%, 76%, 0.66) 100%)" }}>

{/* <div style={{marginTop:"25%"}}></div> */}


<Typography className={myClass.p} style = {{paddingTop : '20px' , fontSize : '20px'}}>Subscribed</Typography>

<ol className={myClass.liText} style = {{textAlign : 'center'}}>
<li><Heart
  color={'#8B0000'}
  beat
  height="auto"
  width="18%"
  onClick={() => toast.success('Service Available', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
/></li>
<li><Heart
  color={'#8B0000'}
  beat
  height="auto"
  width="18%"
  onClick={() => toast.success('Service Available', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
/></li>
<li><Heart
  color={'#8B0000'}
  beat
  height="auto"
  width="18%"
  onClick={() => toast.success('Service Available', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
/></li>
<li><Heart
  color={'#8B0000'}
  beat
  height="auto"
  width="18%"
  onClick={() => toast.success('Service Available', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
/></li>
<li><Heart
  color={'#8B0000'}
  beat
  height="auto"
  width="18%"
  onClick={() => toast.success('Service Available', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
/></li>
<li><Heart
  color={'#8B0000'}
  beat
  height="auto"
  width="18%"
  onClick={() => toast.success('Service Available', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
/></li> 
<li><Heart
  color={'#8B0000'}
  beat
  height="auto"
  width="18%"
  onClick={() => toast.success('Service Available', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
/></li>
</ol>
<Link to="/signup" style={{textDecoration: 'none' }} >
                             
                             <AnimatedButton style={{ marginTop: '20%' , align : 'center' }} label =    "Subscribe"/>
                         
                         </Link>
    </div></div>
    </div>
</div>

</div>
</div>


//             <Router>

//                 <Switch>
//                     <Route path="/sketch" component={Sketch} />
//                 </Switch>
//             </Router>

    )
}
export default Home;
