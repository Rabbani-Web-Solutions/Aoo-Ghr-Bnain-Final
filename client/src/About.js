import { Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import about from './img/about.jpg'
import {makeStyles} from "@material-ui/core/styles";
import home1 from './img/home1.png'
import about111 from './img/about111.jpeg'
import about222 from './img/about222.jpg'
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const useStyles = makeStyles((theme) => ({
 
    h:{
        marginTop : '20%',
        color: "green"
    },

    text : {
           fontSize : '15px',
           overflow: "visible",
           fontWeight: 800,
           fontStyle: "italic",
           fontFamily: `"Inter-ExtraBoldItalic", "Inter", sans-serif`,
           color: "#433E69",
           letterSpacing: 1,
           lineHeight: 1.5,
    },

    frame : {
        height: "auto",
        overflow: "visible",
        display: 'block',
        marginTop : '10%',
        marginBottom: '10%',
      },

      frame2 : {
        width: "85%",
        height: 'auto',
        background: "radial-gradient(100% 50% at 0% 46.6%, #33aaff 0%, hsl(0, 0%, 66%) 100%)",
        overflow: "visible",
      }

}));

function getWindowDimensions() {
    const width = window.innerWidth;
    return width
    
  }

export default function About() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [fontSize, setFontSize] = useState(25);
    const [widthh , setWidthh] = useState(750);
useEffect(() => {

    setWindowDimensions(getWindowDimensions());

    if(windowDimensions < 1024){ 
        setFontSize(12);
        setWidthh(280);
    }
})
    
    const myClass = useStyles();

    return(

        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <img src={about} width = '100%' height = 'auto' style = {{marginTop: '10%'}}/>
                </div>
            </div>
            <div className="row">
            <div className="col-xs-12" style = {{padding : 15}}>
                    <h4 className={myClass.h}>Who We Are</h4>
                    <Typography className={myClass.text}>We are Students in UOL. We have made this project as FYP</Typography>
                </div>
            </div>

            <div className="row">
            <div className="col-xs-12">
                    <div className={myClass.frame}>
                        <div style = {{marginLeft:'10%'}}>    
                        <img src={about111} width="35%" height = "auto"/>
                        <img src={about222} width = "50%" height = "auto"/>

                            <div className = {myClass.frame2}>
            <Typography className = {myClass.text} style = {{fontSize : fontSize , marginLeft : '12%'}}>
            Designed By: UOL Students <br/>
            Supervisor: Sir Hassan Bajwa <br/>
            Ehtisham ur Rehman (70069403@student.uol.edu.pk) <br/>
            Saad Qadeer (70069780@student.uol.edu.pk) <br/> </Typography>

                            </div>
                            

                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
            <div className="col-xs-12" style = {{padding : 15}}>
                    <h4 className={myClass.h}>Where to Find us</h4>
                    <Typography className={myClass.text}>The University of Lahore, Defence Road Campus</Typography>
                </div>
            </div>
            <br/>
            <div className="row">
            <div className="col-xs-12" style = {{marginLeft:'10%'  }} >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.82331630059!2d74.23897181549792!3d31.39143496063751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919018a8ea548c1%3A0x4a52db69c2c814f!2sThe%20University%20of%20Lahore!5e0!3m2!1sen!2s!4v1615126762811!5m2!1sen!2s" 
            width={widthh} height="auto" style={{border:1}} allowfullscreen="yes" loading="eager"></iframe>
                </div>
            </div>
            


        </div>
    )
}