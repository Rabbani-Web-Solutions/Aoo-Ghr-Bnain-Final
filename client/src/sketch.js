import './css/App.css';
import React, {useLayoutEffect,useEffect, useState} from 'react';
import rough from 'roughjs/bundled/rough.esm';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import TabPanel from "./sketchHelper/TabPanel";
import PropTypes from 'prop-types';
import {useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Avatar,  Input, InputAdornment, InputLabel, Menu, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import {ButtonGroup as MaterialButtonGroup}  from "@material-ui/core";

import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';
import BuildIcon from '@material-ui/icons/Build';
import LandscapeIcon from '@material-ui/icons/Landscape';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import useStyles from "./sketchHelper/useStyles"; 
import {handleMouseDown} from "./sketchHelper/handleMouseDown";
import {handleMouseUp} from "./sketchHelper/handleMouseUp";
import {handleMouseMove} from "./sketchHelper/handleMouseMove";
import {HandleSave} from "./sketchHelper/handleSave";
import {isWithinElement} from "./sketchHelper/isWithinElement";
import {toggleDrawer , toggleDrawer2} from "./sketchHelper/toggleDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {scrapMe} from './scrapMe'
import { toast } from "react-toastify";
import UserServices from "./services/UserServices";
import { Spin } from 'antd';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import surface from './img/surface.jpg'; 
import steel from './img/steel.jpg'; 
import brick from './img/brick.jpg'; 
import sand from './img/sand.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faVoteYea} from "@fortawesome/free-solid-svg-icons";
import {faIndustry} from "@fortawesome/free-solid-svg-icons";
import {faGripLinesVertical} from "@fortawesome/free-solid-svg-icons";
import {faSquare} from "@fortawesome/free-solid-svg-icons";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import {faEraser} from "@fortawesome/free-solid-svg-icons";
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";
import {faLayerGroup} from "@fortawesome/free-solid-svg-icons";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {faPalette} from  "@fortawesome/free-solid-svg-icons";
import {faGetPocket} from  "@fortawesome/free-brands-svg-icons";
import {faJoget} from  "@fortawesome/free-brands-svg-icons";


import ColorPicker from 'material-ui-color-picker'

import ButtonGroup from 'react-bootstrap/ButtonGroup'

import {sketchData} from './users/userDashboard'
import { custom } from 'joi';

        let heightt ;
        let widthh ;
        let item = 0;
        let canv = null;
        let canvWidth , setCanvWidth = null;
        let canvHeight , setCanvHeight = null;
        let ElementWidth , setElementWidth = null;
        let ElementLength , setElementLength = null;
        let ElementStrokeWidth , setElementStrokeWidth = null;
        let error , setError ;
        let canvas = null;
        let totalLayer = 0;
        let  tool , setTool ;
        let elements, setElements;
        let myElements, setMyElements;
        let myVar, setMyVar;
        let estimateArr, setEstimateArr;
        let selectedElement , setSelectedElement ;
        let action , setAction ;
        let state , setState;
        let state2 , setState2;
        let open , setOpen ;
        let myArr , setMyArr ;
        let price , setPrice ;
        let title , setTitle ;
        let image , setImage ;
        let price2 , setPrice2 ;
        let title2 , setTitle2 ;
        let image2 , setImage2 ;
        let price3 , setPrice3 ;
        let title3 , setTitle3 ;
        let image3 , setImage3 ;
        let steelPrice , setSteelPrice ;
        let steelTitle , setSteelTitle ;
        let steelImage , setSteelImage ;
        let steelPrice2 , setSteelPrice2 ;
        let steelTitle2 , setSteelTitle2 ;
        let steelImage2 , setSteelImage2 ;
        let steelPrice3 , setSteelPrice3 ;
        let steelTitle3 , setSteelTitle3 ;
        let steelImage3 , setSteelImage3 ;
        let loading , setLoading ;
        let value, setValue;
        let steelValue, setSteelValue;
        let bricksValue, setBricksValue;
        let sandValue, setSandValue;
        let heightValue, setHeightValue;
        let ccRatio, setCcRatio;
        let ssRatio, setSsRatio;
        let plasterValue, setPlasterValue;
        let marla = 0;
        let wall , setWall ;
        let bgColor , setBGColor ;
        let customCement , setCustomCement ;
        let customSteel , setCustomSteel ;
        let customBricks , setCustomBricks ;
        let customSand , setCustomSand ;
        let customHeight , setCustomHeight ;
        let customCRatio , setCustomCRatio ;
        let customSRatio , setCustomSRatio ;
        let customPlaster , setCustomPlaster ;
        let cArea , setCArea ;
        let c2Area , setC2Area ;

        export {totalLayer};
        export {widthh};
        export {heightt};
        export {marla};
        export {canvWidth , canvHeight};
        export {ElementWidth , ElementLength ,ElementStrokeWidth,
                setElementStrokeWidth, setElementLength  , setElementWidth};
        export {error , setError };
        export {canvas};
        export {tool , setTool};
        export {elements , setElements };
        export {selectedElement , setSelectedElement};
        export {action , setAction};
        export {state , setState};
        export {state2 , setState2};
        export {open , setOpen};        
        export {myArr , setMyArr};
        export {price , setPrice};
        export {title , setTitle};
        export {image , setImage};
        export {price2 , setPrice2};
        export {title2 , setTitle2};
        export {image2 , setImage2};
        export {price3 , setPrice3};
        export {title3 , setTitle3};
        export {image3 , setImage3};
        export {steelPrice , setSteelPrice};
        export {steelTitle , setSteelTitle};
        export {steelImage , setSteelImage};
        export {steelPrice2 , setSteelPrice2};
        export {steelTitle2 , setSteelTitle2};
        export {steelImage2 , setSteelImage2};
        export {steelPrice3 , setSteelPrice3};
        export {steelTitle3 , setSteelTitle3};
        export {steelImage3 , setSteelImage3};
        export {loading , setLoading};
        export {value, setValue}; 
        export {steelValue, setSteelValue};
        export {bricksValue, setBricksValue};
        export {sandValue, setSandValue};
        export {heightValue, setHeightValue};
        export {plasterValue, setPlasterValue};
        export {wall , setWall}
        export {bgColor , setBGColor}
        export {customCement , setCustomCement}
        export {customSteel , setCustomSteel };
        export {customBricks , setCustomBricks };
        export {customSand , setCustomSand };
        export {customHeight , setCustomHeight };
        export {customPlaster , setCustomPlaster };
        export {myVar, setMyVar};



        export let mouse = {x : 0, y : 0, events : "mousemove,mousedown,mouseup"};

        function myColorPicker(){
            return  <ColorPicker
            name="color"
            defaultValue="#000"
            // value={this.state.color} - for controlled component
            onChange={color => console.log(color)}
          />
        }
            
        export const list = (anchor) => (
        
            <div
                className={clsx(useStyles.list, {
                    [useStyles.fullList]: anchor === 'top' || anchor === 'bottom',
                })}
                role="presentation"
                // onClick={toggleDrawer(anchor, false)}
                // onKeyDown={toggleDrawer(anchor, false)}
            >

                {loading ? (
                               
                               <List
                               style={{display: 'flex' , flexDirection : 'row'}}
                   
                           >
                   
                               {[<Spin style={{width:'100%' , marginTop: '20%' , marginBottom:'20%'}} />
                                   ].map((text, index) => (
                                   <ListItem button key={text}>
                                       <ListItemIcon></ListItemIcon>
                                       <ListItemText primary={text} />
                                   </ListItem>
                               ))}
                           </List>
                    ) :  

                    <List 
                    style={{display: 'flex' , flexDirection : 'column'}}
        
                >
        
                    {[
                  

                        <FormControl component="fieldset">
                            <FormLabel component="legend">Cement</FormLabel>
                            <RadioGroup aria-label="cement" name="cement" value={value} 
                            onChange={(event) => setValue(event.target.value)}
                            >
                                <FormControlLabel value={price} control={<Radio />} label={title} /> <Typography
                                                                                                        style = {{color: 'black',
                                                                                                        marginLeft: '25%'}}>{price}</Typography>
                                <FormControlLabel value={price2} control={<Radio />} label={title2} />  <Typography
                                                                                                        style = {{color: 'black',
                                                                                                        marginLeft: '25%'}}>{price2}</Typography>
                                 <FormControlLabel value={price3} control={<Radio />} label={title3} /> <Typography
                                                                                                        style = {{color: 'black',
                                                                                                        marginLeft: '25%'}}>{price3}</Typography>
                                <FormControlLabel value={customCement} control={<Radio />} label="Your Desired Price per bag" /> <TextField
                                                                                                                            autoComplete="price"
                                                                                                                            name="Price"
                                                                                                                            variant="outlined"
                                                                                                                            required
                                                                                                                            fullWidth
                                                                                                                            id="priceCement"
                                                                                                                            label="Enter Price"
                                                                                                                            autoFocus
                                                                                                                            value={customCement}
                                                                                                                            onChange={(e) => {
                                                                                                                                setCustomCement(e.target.value);
                                                                                                                             }}
                                                                                                                            />
                            </RadioGroup>
                         
                        </FormControl>
                        ,
<FormControl component="fieldset">
                            <FormLabel component="legend">Steel</FormLabel>
                            <RadioGroup aria-label="steel" name="steel" value={steelValue} 
                            onChange={(event) => setSteelValue(event.target.value)}
                            >
                                <FormControlLabel value="136.9" control={<Radio />} label={steelTitle} /> <Typography
                                                                                                        style = {{color: 'black',
                                                                                                        marginLeft: '25%'}}>{steelPrice}</Typography>
                                <FormControlLabel value="137" control={<Radio />} label={steelTitle2} />  <Typography
                                                                                                        style = {{color: 'black',
                                                                                                        marginLeft: '25%'}}>{steelPrice2}</Typography>
                                 <FormControlLabel value="137.1" control={<Radio />} label={steelTitle3} /> <Typography
                                                                                                        style = {{color: 'black',
                                                                                                        marginLeft: '25%'}}>{steelPrice3}</Typography>
                                <FormControlLabel value={customSteel} control={<Radio />} label="Your Desired Price per Kg" /> <TextField
                                                                                                                            autoComplete="price"
                                                                                                                            name="Price"
                                                                                                                            variant="outlined"
                                                                                                                            required
                                                                                                                            fullWidth
                                                                                                                            id="priceSteel"
                                                                                                                            label="Enter Price"
                                                                                                                            autoFocus
                                                                                                                            value={customSteel}
                                                                                                                            onChange={(e) => {
                                                                                                                                setCustomSteel(e.target.value);
                                                                                                                             }}
                                                                                                                            />
                            </RadioGroup>
                         
                        </FormControl>
                        ,
                        <FormControl component="fieldset">
                                <FormLabel component="legend">Bricks</FormLabel>
                                    <RadioGroup aria-label="bricks" name="bricks" value={bricksValue} 
                                        onChange={(event) => setBricksValue(event.target.value)}
                                        >
                                        <FormControlLabel value="13.2" control={<Radio />} label="level 1 Bricks (Awwal A+)" /> <Typography
                                                                                                                                style = {{color: 'black',
                                                                                                                                marginLeft: '25%'}}>Per 1000 ... PKR 13,200</Typography>
                                            <FormControlLabel value="12.8" control={<Radio />} label="level 1- Bricks (Awwal A)" />  <Typography
                                                                                                                                style = {{color: 'black',
                                                                                                                                marginLeft: '25%'}}>Per 1000 ... PKR 12,800</Typography>
                                             <FormControlLabel value="9.2" control={<Radio />} label="level 2 Bricks (Doam)" /> <Typography
                                                                                                                                style = {{color: 'black',
                                                                                                                                marginLeft: '25%'}}>Per 1000 ... PKR 9,200</Typography>
                                             <FormControlLabel value="8.8" control={<Radio />} label="level 3 Bricks (Khangar)" /> <Typography
                                                                                                                                style = {{color: 'black',
                                                                                                                                marginLeft: '25%'}}>Per 1000 ... PKR 8,800</Typography>

                                            <FormControlLabel value={customBricks} control={<Radio />} label="Your Desired Price per 1 piece" /> <TextField
                                                                                                                            autoComplete="price"
                                                                                                                            name="Price"
                                                                                                                            variant="outlined"
                                                                                                                            required
                                                                                                                            fullWidth
                                                                                                                            id="priceBricks"
                                                                                                                            label="Enter Price"
                                                                                                                            autoFocus
                                                                                                                            value={customBricks}
                                                                                                                            onChange={(e) => {
                                                                                                                                setCustomBricks(e.target.value);
                                                                                                                             }}
                                                                                                                            />
                                                    
                                        </RadioGroup>
                                                 
                                     </FormControl>
                        ,
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Sand (Construction)</FormLabel>
                            <RadioGroup aria-label="gender" name="steel" value={sandValue} 
                            onChange={(event) => setSandValue(event.target.value)}
                            >
                                <FormControlLabel value="42.14" control={<Radio />} label="Chanab Sand A+" /> <Typography
                                                                                                        style = {{color: 'black',
                                                                                                        marginLeft: '25%'}}>Per Trolly 700 CFT ... PKR 29,500</Typography>
                                <FormControlLabel value="40" control={<Radio />} label="Chanab Sand B" />  <Typography
                                                                                                        style = {{color: 'black',
                                                                                                        marginLeft: '25%'}}>Per Trolly 700 CFT ... PKR 28,000</Typography>
                                 <FormControlLabel value="34.28" control={<Radio />} label="Chanab Sand C" /> <Typography
                                                                                                        style = {{color: 'black',
                                                                                                        marginLeft: '25%'}}>Per Trolly 700 CFT ... PKR 24,000</Typography>
                               <FormControlLabel value="17.14" control={<Radio />} label="Ravi Sand" /> <Typography
                                                                                                        style = {{color: 'black',
                                                                                                        marginLeft: '25%'}}>Per Trolly 700 CFT ... PKR 12,000</Typography>
                               <FormControlLabel value={customSand} control={<Radio />} label="Your Desired Price per Trolly 700 CFT" /> <TextField
                                                                                                                            autoComplete="price"
                                                                                                                            name="Price"
                                                                                                                            variant="outlined"
                                                                                                                            required
                                                                                                                            fullWidth
                                                                                                                            id="priceSand"
                                                                                                                            label="Enter Price"
                                                                                                                            autoFocus
                                                                                                                            value={customSand}
                                                                                                                            onChange={(e) => {
                                                                                                                                setCustomSand(e.target.value);
                                                                                                                             }}
                                                                                                                            />
                            </RadioGroup>
                         
                        </FormControl>
                        ,
                        <FormControl component="fieldset">
                        <FormLabel component="legend">Height of Building</FormLabel>
                        <RadioGroup aria-label="gender" name="heightValue" value={heightValue} 
                        onChange={(event) => setHeightValue(event.target.value)}
                        >
                            <FormControlLabel value="12" control={<Radio />} label="12 ft" /> 
                            <FormControlLabel value="11" control={<Radio />} label="11 ft" />  
                             <FormControlLabel value="10" control={<Radio />} label="10 ft" />
                           <FormControlLabel value={customHeight} control={<Radio />} label="Your Desired Height" /> <TextField
                                                                                                                        autoComplete="price"
                                                                                                                        name="Price"
                                                                                                                        variant="outlined"
                                                                                                                        required
                                                                                                                        fullWidth
                                                                                                                        id="priceSand"
                                                                                                                        label="Enter Price"
                                                                                                                        autoFocus
                                                                                                                        value={customHeight}
                                                                                                                        onChange={(e) => {
                                                                                                                            setCustomHeight(e.target.value);
                                                                                                                         }}
                                                                                                                        />
                        </RadioGroup>
                     
                    </FormControl>,
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Enter ratio of cement <span style={{color : "blue"}}>
                                                                                (If you want 1:4 select 1)</span></FormLabel>
                        <RadioGroup aria-label="gender" name="ccRatio" value={ccRatio} 
                        onChange={(event) => setCcRatio(event.target.value)}
                        >
                            <FormControlLabel value="1" control={<Radio />} label="1" /> 
                            
                           <FormControlLabel value={customCRatio} control={<Radio />} label="Your Desired cement ratio" /> <TextField
                                                                                                                        autoComplete="price"
                                                                                                                        name="Price"
                                                                                                                        variant="outlined"
                                                                                                                        required
                                                                                                                        fullWidth
                                                                                                                        id="cRatio"
                                                                                                                        label="Enter Cement Ratio"
                                                                                                                        autoFocus
                                                                                                                        value={customCRatio}
                                                                                                                        onChange={(e) => {
                                                                                                                            setCustomCRatio(e.target.value);
                                                                                                                         }}
                                                                                                                        />
                        </RadioGroup>
                     
                    </FormControl>,
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Enter ratio of sand <span style={{color : "blue"}}>
                                                                                (If you want 1:4 select 4)</span></FormLabel>
                        <RadioGroup aria-label="gender" name="ssRatio" value={ssRatio} 
                        onChange={(event) => setSsRatio(event.target.value)}
                        >
                            <FormControlLabel value="4" control={<Radio />} label="4" /> 
                            <FormControlLabel value="6" control={<Radio />} label="6" />
                           <FormControlLabel value={customSRatio} control={<Radio />} label="Your Desired sand ratio" /> <TextField
                                                                                                                        autoComplete="price"
                                                                                                                        name="Price"
                                                                                                                        variant="outlined"
                                                                                                                        required
                                                                                                                        fullWidth
                                                                                                                        id="cRatio"
                                                                                                                        label="Enter Sand Ratio"
                                                                                                                        autoFocus
                                                                                                                        value={customSRatio}
                                                                                                                        onChange={(e) => {
                                                                                                                            setCustomSRatio(e.target.value);
                                                                                                                         }}
                                                                                                                        />
                        </RadioGroup>
                     
                    </FormControl>,
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Plastering Depth in inches</FormLabel>
                        <RadioGroup aria-label="gender" name="plasterValue" value={plasterValue} 
                        onChange={(event) => setPlasterValue(event.target.value)}
                        >
                            <FormControlLabel value="0.5" control={<Radio />} label="0.5 inches" /> 
                            <FormControlLabel value="1" control={<Radio />} label="1 inches" />  
                            
                           <FormControlLabel value={customPlaster} control={<Radio />} label="Your Depth for Plastering" /> <TextField
                                                                                                                        autoComplete="price"
                                                                                                                        name="Depth of Plsater"
                                                                                                                        variant="outlined"
                                                                                                                        required
                                                                                                                        fullWidth
                                                                                                                        id="plaster"
                                                                                                                        label="Enter Depth of Plsater"
                                                                                                                        autoFocus
                                                                                                                        value={customPlaster}
                                                                                                                        onChange={(e) => {
                                                                                                                            setCustomPlaster(e.target.value);
                                                                                                                         }}
                                                                                                                        />
                        </RadioGroup>
                     
                    </FormControl>,
                        <Button onClick={()=>{
                            // setState("bottom" , false)

                            var price = value;
                            console.log(parseFloat(price.replace( /\D/g, "")));
                            
                            console.log(steelValue)
                            console.log(bricksValue)
                            console.log(sandValue)
                            console.log(heightValue)

                            let estimatess1 = 0;
                            let estimatess2 = 0;
                            let estimatess1total = 0;
                            let estimatess2total = 0;

                            let strokeWidth = 0;

                            for(var k = 0; k < myVar.length; k++) {

                                var Data = myVar[k];
    
                                for(var m = 0; m < Data.length; m++) {
    
                                    estimatess1total = estimatess1total + (Math.abs((Data[m].x2-Data[m].x1))  / 15.36);
                                    estimatess2total = estimatess2total + (Math.abs((Data[m].y2-Data[m].y1))  / 15.36);
    
                                }
    
                            }
                            

                        for(var i = 0; i < myArr.length ; i++)
                        {
                            // console.log( myArr[i].type);
                            // console.log( myArr[i].x1);
                            // console.log( myArr[i].x2);
                            // console.log( myArr[i].y2);
                            // console.log( myArr[i].y1);
                            // console.log( (myArr[i].x2-myArr[i].x1)  / 15.36);
                            // console.log( (myArr[i].y2-myArr[i].y1)  / 15.36);
     
                            estimatess1 = estimatess1 + (Math.abs(myArr[i].x2-myArr[i].x1)  / 15.36);
                            estimatess2 = estimatess2 + (Math.abs(myArr[i].y2-myArr[i].y1) / 15.36);
                            strokeWidth = myArr[i].roughElement.options.strokeWidth
                           
                        }   

                            var brickArea = Math.abs(heightValue) * Math.abs((estimatess1  + estimatess2) * 144 ) * strokeWidth

                            var nuOfBrick = brickArea / 166.25

                            var mortar = nuOfBrick * 0.10
                            
                            nuOfBrick = nuOfBrick - mortar
                            
                            var waste = nuOfBrick * 0.04

                            var getTotalBrick = nuOfBrick + waste;
                        
                            var totalBricks = Math.abs(heightValue) * Math.abs((((estimatess1 *2 ) + (estimatess2*2))*144)/32)
                            // var totalBricks = Math.abs((estimatess1 * 2 )+( estimatess2*2)) 
   

                            console.log("arr length   :   " + myArr.length)
                            console.log("Height  :   " + heightValue)
                            console.log("ElementStrokeWidth   :   " + strokeWidth)
                            console.log("estimate1   :    " + estimatess1 * 2 )
                            console.log("estimate2   :    " + estimatess2 * 2 )
                            console.log("Total Bricks  :  " + getTotalBrick )
                            console.log("mortar of Bricks  :    " + mortar * 0.0254 * 0.012 )

                            document.getElementById("bricksCount").value = getTotalBrick ;

                            var Hplaster = Math.abs(heightValue * 0.3048)

                            var Wplaster = Math.abs(estimatess1 * 0.3048 + estimatess2  * 0.3048)

                            var Dplaster = Math.abs(strokeWidth * 0.0254)

                            var currentPlasterValue = plasterValue * 0.0254

                            var plasterVolume =   Hplaster *  Wplaster * currentPlasterValue

                            var plasterDryVolume = plasterVolume * 1.35

                            var cRatio = Math.abs(ccRatio) 
                            var sRatio = Math.abs(ssRatio)
                            
                            
                            // var cRatio = Math.abs(1) 
                            // var sRatio = Math.abs(6)

                            var tRatio = Math.abs(cRatio + sRatio)

                            var cCum = ( cRatio / tRatio ) * plasterDryVolume

                            var cKg = cCum * 1440

                            var cBags = cKg / 50

                            var sCum = (sRatio / tRatio) * plasterDryVolume
                            
                            var sCFT = sCum * 35.31

                            console.log("H  :   " +  Hplaster)
                            console.log("W  :   " +  Wplaster)
                            console.log("D  :   " + currentPlasterValue)
                            
                            console.log("plasterVolume  :   " + plasterVolume )
                            console.log("plasterDryVolume  :   " + plasterDryVolume)
                            console.log("cRatio   :   " + cRatio)
                            console.log("sRatio   :    " + sRatio )
                            console.log("tRatio   :    " + tRatio )
                            console.log("cCum  :  " + cCum)
                            console.log("cKg  :   " + cKg )
                            console.log("cBags  :   " + cBags)
                            console.log("sCum   :   " + sCum)
                            console.log("sCFT   :    " + sCFT )
                            console.log("mortar of Plaster  :    " + (Hplaster * Wplaster * currentPlasterValue) )

                            document.getElementById("cementCount").value = cBags
                            document.getElementById("sandCount").value = sCFT
                            document.getElementById("cementKg").value = cKg

                            var brickAreaTotal = Math.abs(heightValue) * Math.abs((estimatess1total  + estimatess2total) * 144 ) * strokeWidth

                            var nuOfBrickTotal = brickAreaTotal / 166.25

                            var mortarTotal = nuOfBrickTotal * 0.10
                            
                            nuOfBrickTotal = nuOfBrickTotal - mortarTotal
                            
                            var wasteTotal = nuOfBrickTotal * 0.04

                            var getTotalBrickTotal = nuOfBrickTotal + wasteTotal;
                        
                            var totalBricksTotal = Math.abs(heightValue) * Math.abs((((estimatess1total *2 ) + (estimatess2total*2))*144)/32)
                            // var totalBricks = Math.abs((estimatess1 * 2 )+( estimatess2*2)) 
                            
                            console.log("arr length   :   " + myArr.length)
                            console.log("Height  :   " + heightValue)
                            console.log("ElementStrokeWidth   :   " + strokeWidth)
                            console.log("estimate1   :    " + estimatess1total * 2 )
                            console.log("estimate2   :    " + estimatess2total * 2 )
                            console.log("Total Bricks  :  " + getTotalBrick )
                            console.log("mortar of Bricks  :    " + mortar * 0.0254 * 0.012 )

                            document.getElementById("bricksCountTotal").value = getTotalBrickTotal ;

                            var HplasterTotal = Math.abs(heightValue * 0.3048)

                            var WplasterTotal = Math.abs(estimatess1total * 0.3048 + estimatess2total  * 0.3048)

                            var DplasterTotal = Math.abs(strokeWidth * 0.0254)

                            var totalPlasterValue = plasterValue * 0.0254

                            var plasterVolumeTotal =   HplasterTotal *  WplasterTotal * totalPlasterValue

                            var plasterDryVolumeTotal = plasterVolumeTotal * 1.35

                            var cRatioTotal = Math.abs(ccRatio) 
                            var sRatioTotal = Math.abs(ssRatio)

                            var tRatioTotal = Math.abs(cRatioTotal + sRatioTotal)

                            var cCumTotal = ( cRatioTotal / tRatioTotal ) * plasterDryVolumeTotal

                            var cKgTotal = cCumTotal * 1440

                            var cBagsTotal = cKgTotal / 50

                            var sCumTotal = (sRatioTotal / tRatioTotal) * plasterDryVolumeTotal
                            
                            var sCFTTotal = sCumTotal * 35.31

                            console.log("H  :   " +  Hplaster)
                            console.log("W  :   " +  Wplaster)
                            console.log("D  :   " + totalPlasterValue)
                            
                            console.log("plasterVolumeTotal  :   " + plasterVolumeTotal )
                            console.log("plasterDryVolumeTotal  :   " + plasterDryVolumeTotal)
                            console.log("cRatioTotal   :   " + cRatioTotal)
                            console.log("sRatioTotal   :    " + sRatioTotal )
                            console.log("tRatioTotal   :    " + tRatioTotal )
                            console.log("cCumTotal  :  " + cCumTotal)
                            console.log("cKgTotal  :   " + cKgTotal )
                            console.log("cBagsTotal  :   " + cBagsTotal)
                            console.log("sCumTotal   :   " + sCumTotal)
                            console.log("sCFTTotal   :    " + sCFTTotal )
                            console.log("mortar of Plaster Total :    " + (HplasterTotal * WplasterTotal * totalPlasterValue) )

                            document.getElementById("cementCountTotal").value = cBagsTotal
                            document.getElementById("sandCountTotal").value = sCFTTotal
                            document.getElementById("cementKgTotal").value = cKgTotal

                            var myArea = document.getElementById("cArea").value;
                            console.log("Area 1 : : : " + myArea)
                            console.log("Area 2 : : : " +c2Area)

                            var cBagCost =  (cBags * parseFloat(price.replace( /\D/g, "")))
                            var sCFTCost =  (sCFT * sandValue)
                            var brickCost = (getTotalBrick * bricksValue)

                            var cBagCostTotal = (cBagsTotal * parseFloat(price.replace( /\D/g, "")))
                            var sCFTCostTotal =  (sCFTTotal * sandValue)
                            var brickCostTotal = (getTotalBrickTotal * bricksValue)

                            console.log("cBagCostTotal  " +cBagCostTotal )
                            console.log("sCFTCostTotal  " +sCFTCostTotal )
                            console.log("brickCostTotal " +brickCostTotal )

                            document.getElementById("cAreaMat").value = (cArea * 150) + cBagCost + sCFTCost + brickCost
                            document.getElementById("c2AreaMat").value = (c2Area * 150) + cBagCostTotal + sCFTCostTotal + brickCostTotal

                        }}>Apply</Button>

                ].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index  === 0 ? <Avatar alt="Remy Sharp" variant="rounded" src={surface}/> :
                                            index === 1 ? <Avatar alt="Remy Sharp" variant="rounded" src={steel}/> :
                                            index === 2 ? <Avatar alt="Remy Sharp" variant="rounded" src={brick}/> :
                                            <Avatar alt="Remy Sharp" variant="rounded" src={sand}/>  }</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>



                            
                }
        
        
            </div>
        );

        export const list2 = (anchor) => (
            <div
              className={clsx(useStyles.list, {
                [useStyles.fullList]: anchor === 'top' || anchor === 'bottom',
              })}
              role="presentation"
              onClick={toggleDrawer2(anchor, false)}
              onKeyDown={toggleDrawer2(anchor, false)}
            >
              <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </div>
          );
        
        export const distance = (a,b) => Math.sqrt(Math.pow(a.x - b.x , 2) + Math.pow(a.y - b.y, 2));
        
        export const getElementAtPosition = (x,y, elements) => {
            return elements.find(element => isWithinElement(x,y,element));
        }


        function getWindowDimensions() {
            const width = window.innerWidth;
            return width
            
          }
        
        export const handleDrawerOpen = () => {
            setOpen(true);
        };
        
        export const handleDrawerClose = () => {
            setOpen(false);
        }; 
        
        export const handleError = () => {
            setError(false);
        }; 
        
        
            // const isWithinCanvas = (x,y, element) => {
            //     const {x1, y1, x2, y2} = element;
            //
            //         const minX = Math.min(x1, x2);
            //         const maxX = Math.max(x1, x2);
            //         const minY = Math.min(y1, y2);
            //         const maxy = Math.max(y1, y2);
            //         return x >= minX && x <= maxX && y <= maxy && y >= minY;
            //
            // }


            // export function putCanvs() {


            //     // for (let item = 0; item < 20; item++) {
            //     //     if (count !== 0 && count%5 === 0) {
            //     //         document.write(" ||| ");
            //     //     }


            //     // canv.setAttribute('width', window.innerWidth);
            //     if (widthh !== null) {

            //         item = item + 1;
            //         totalLayer = totalLayer + 1;


            //         const texta = document.createElement("input");

            //         texta.setAttribute('id', 'itemNo'
            //         + item
            //         );


            //         texta.textContent = '111';

            //         canv = document.createElement("canvas");

            //         canv.width = canvas.width;
            //         // canv.setAttribute('height', window.innerHeight * heightt/100);
            //         canv.height = canvas.height;
            //         canv.setAttribute('id', 'canv'
            //         + item
            //         );



            //         alert(totalLayer);
            //         canv.style.background = "#c0c6c5";

            //         canv.style.border = "5px solid darkslategrey";

            //         canv.style.margin = "14.4%";

            //         document.body.appendChild(canv);

            //         canv.addEventListener('mousedown' , handleMouseDown , true);
            //         canv.addEventListener('mouseup' , handleMouseUp , true);
            //         canv.addEventListener('mousemove' , handleMouseMove , true);

            //         canv.onmousedown = handleMouseDown;
            //         canv.onmouseup = handleMouseUp;
            //         canv.onmousemove = handleMouseMove;
            //         const C = document.getElementById(canv.getAttribute('id'));
            //         if (C.getContext) {
            //             if (C.getContext) {
            //                 makePlot(C);
            //             }
            //         }
            //     }
            //     else {
            //         alert("Please Enter Width and Length First");
            //         setOpen(true);
            //     }
            // }

            // function makePlot(elem) {

            //     const ctx = elem.getContext("2d");
            //     ctx.fillStyle   = '#00f';
            //     ctx.strokeStyle = 'black';
            //     ctx.lineWidth   = 5;
            //     ctx.borderBlock = 1;

            // }
            export function saveLayer(){
                

                console.log(elements)

                setMyElements(elements)

                // myVar[totalLayer] = elements

                myVar[item] = elements

                console.log(myElements)

            }

            function addLayer(){
                

                console.log(elements)

                setMyElements(elements)

                myVar[totalLayer] = elements

                console.log(myElements)

                setElements([])

                item = item + 1;
                totalLayer = totalLayer + 1;

                // alert("Your Current Layer: " + totalLayer);
                // alert("Your Current Element: " + item);

            }

            function App() 
            
            {

                [tool, setTool] = useState("selection");
                [elements, setElements] = useState([]);
                [action , setAction] = useState('none');
                [canvWidth, setCanvWidth] = useState(null);
                [canvHeight, setCanvHeight] = useState(null);
                [myArr , setMyArr] = useState([]);
                [ElementWidth , setElementWidth] = useState(null);
                [ElementLength , setElementLength] = useState(null);
                [ElementStrokeWidth , setElementStrokeWidth] = useState(null);
                [selectedElement , setSelectedElement] = useState(null);
                [error , setError] = useState(false);
                [price , setPrice] = useState(null);
                [title , setTitle] = useState(null);
                [image , setImage] = useState(null);
                [price2 , setPrice2] = useState(null);
                [title2 , setTitle2] = useState(null);
                [image2 , setImage2] = useState(null);
                [price3 , setPrice3] = useState(null);
                [title3 , setTitle3] = useState(null);
                [image3 , setImage3] = useState(null);
                [steelPrice , setSteelPrice] = useState(null);
                [steelTitle , setSteelTitle] = useState(null);
                [steelImage , setSteelImage] = useState(null);
                [steelPrice2 , setSteelPrice2] = useState(null);
                [steelTitle2 , setSteelTitle2] = useState(null);
                [steelImage2 , setSteelImage2] = useState(null);
                [steelPrice3 , setSteelPrice3] = useState(null);
                [steelTitle3 , setSteelTitle3] = useState(null);
                [steelImage3 , setSteelImage3] = useState(null);
                [loading , setLoading] = useState(false);
                [value, setValue] = React.useState(null);
                [steelValue, setSteelValue] = React.useState(null);
                [bricksValue, setBricksValue] = React.useState(null);
                [sandValue, setSandValue] = React.useState(null);
                [heightValue, setHeightValue] = React.useState(null);
                [ccRatio, setCcRatio] = React.useState(null);
                [ssRatio, setSsRatio] = React.useState(null);
                [plasterValue, setPlasterValue] = React.useState(null);
                [myElements , setMyElements] = useState([]);
                [myVar , setMyVar] = useState([]);
                [estimateArr , setEstimateArr] = React.useState([]);
                [wall , setWall] = React.useState(null);
                [bgColor , setBGColor] = React.useState(null);
                [customCement , setCustomCement] = React.useState(null);
                [customSteel , setCustomSteel ] = React.useState(null);
                [customBricks , setCustomBricks ] = React.useState(null);
                [customSand , setCustomSand ] = React.useState(null);
                [customHeight , setCustomHeight ] = React.useState(null);
                [customCRatio , setCustomCRatio ] = React.useState(null);
                [customSRatio , setCustomSRatio ] = React.useState(null);
                [customPlaster , setCustomPlaster ] = React.useState(null);

                let [name , setName] = useState(undefined);
                const [id, setId] = useState(null);
                [cArea , setCArea] = useState(null);
                [c2Area , setC2Area] = useState(null);

                const [devWidth, setDevWidth] = useState(null);
                const [devHeight, setDevHeight] = useState(null);

                const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
                const [isMobile, setMobile] = useState(0);

                const [overflow, setOverflow] = useState("hidden")

                // const [widthh , setWidthh] = useState(750);
                
                useEffect(() => {

                    setWindowDimensions(getWindowDimensions());

                    if(windowDimensions < 1440 && windowDimensions >= 1200 ){ 
                        setMobile(1);
                        console.log(isMobile)
                    }
                    else if(windowDimensions < 1200 && windowDimensions >= 700){ 
                        setMobile(2);
                        console.log(isMobile)
                        
                    }
                    else if(windowDimensions < 700){
                        setMobile(3);
                        console.log(isMobile)

                    }
                    
                    if(canvWidth > windowDimensions){
                            setOverflow("visible")
                    }
                
                })

                const getData = () => {
                    
                    if(sketchData)
                    {
                        setId( sketchData.id )
                        setName( sketchData.name )
                        alert(sketchData.width)
                        widthh = sketchData.width 
                        // setWidthh( sketchData.width ) 
                        heightt = sketchData.height
                        totalLayer = sketchData.layer
                        setMyVar( JSON.parse(sketchData.sketch))

                        canvas = document.getElementById("canvas");
                        setCanvWidth( 1536 * widthh/100 );
                        setCanvHeight(1536 * heightt/100);
                        canvas.width = canvWidth ;
                        canvas.height = canvHeight;

                        marla = (widthh * heightt)/270;

                        document.getElementById("marla").value = marla ;
                        document.getElementById("height").value = heightt;
                        document.getElementById("width").value = widthh;
    
                    }
    
                    else{

                        alert("No Data Found")
    
                    }
                  }

                


                // let canv = null;
    
                // }

                useLayoutEffect(() => {

                    if(widthh !== null)
                    {

                        canvas = document.getElementById('canvas');
                        const context = canvas.getContext('2d');
                        context.clearRect(0, 0, canvas.width, canvas.height);

                        const roughCanvas = rough.canvas(canvas);
                        elements.forEach(({roughElement}) => roughCanvas.draw(roughElement));


                        // const roughCanvas222 = rough.canvas(canvas2);
                        // elements.forEach(({roughElement}) => roughCanvas222.draw(roughElement));
                        //
                        //      canv = document.getElementById('canv' + 1);
                        //     const ctx = canv.getContext('2d');
                        //     ctx.clearRect(0,0,canvas.width, canvas.height);
                        //
                        //     const roughCanvas2 = rough.canvas(canv);
                        //     elements.forEach(({roughElement}) => roughCanvas2.draw(roughElement));


                        // for(let i = 1 ; i <= item ; i ++) {
                        //     const cnv = document.getElementById('canv' + item);
                        //     const ctx = cnv.getContext('2d');

                        //     ctx.clearRect(0,0,cnv.width, cnv.height);
                        //     const roughCanvas2 = rough.canvas(cnv);
                        //     // let element+item;
                        //     // let
                        //     elements.forEach(({roughElement}) => roughCanvas2.draw(roughElement));
                        // }

                    }
                            
                    else {
                        alert("Please Enter Width and Length First");
                        setOpen(true);
                    }
                }
                    // ,
                    // [
                    //     elements , canvas , item
                    // ]
    
                    );

                    function handleWrite(){

                        const context = canvas.getContext('2d');

                        const wrt = document.getElementById("write").value;
                        context.fillStyle = "white";
                        context.font = "bold 16px Arial";
                        context.fillText(wrt , (canvas.width / 2) - 17, (canvas.height / 2) + 8);

                    }

                    const classes = useStyles();
                    const theme = useTheme();
                    [open, setOpen] = React.useState(false);
                    
                    [state, setState] = React.useState({
                        bottom: false,
           
                    });

                    [state2, setState2] = React.useState({
                        // top: false,
                        left: false,
                        // bottom: false,
                        // right: false,
                      });

                    TabPanel.propTypes = {
                        children: PropTypes.node,
                        index: PropTypes.any.isRequired,
                        value: PropTypes.any.isRequired,
                    };

                    const handleSubmit = () => {
                        heightt = document.getElementById("height").value;
                        widthh = document.getElementById("width").value;
                        alert(" Length  " + heightt + "   width  " + widthh + "   was submitted");
                        canvas = document.getElementById("canvas");
                        setCanvWidth( 1536 * widthh/100 );
                        setCanvHeight(1536 * heightt/100);
                        canvas.width = canvWidth ;
                        canvas.height = canvHeight;

                        marla = (widthh * heightt)/270;

                        document.getElementById("marla").value = marla ;

                    }



                    const handleCalculate = () => {

                        const totalArea = widthh * heightt;
                        const enteredArea = document.getElementById("area").value ;
                        let myElement = 0;

                        
                        const totalCost = totalArea * 150;
                        const cost = enteredArea * 150;
                        let myJs = JSON.stringify(elements);
                        setMyArr(JSON.parse(myJs))
                        let estimatess1 = 0;
                        let estimatess2 = 0;



                        for(var i = 0; i < myArr.length ; i++)
                        {
                            // console.log( myArr[i].type);
                            // console.log( myArr[i].x1);
                            // console.log( myArr[i].x2);
                            // console.log( myArr[i].y2);
                            // console.log( myArr[i].y1);
                            // console.log( (myArr[i].x2-myArr[i].x1)  / 15.36);
                            // console.log( (myArr[i].y2-myArr[i].y1)  / 15.36);
                            
                            estimatess1 = estimatess1 + (Math.abs((myArr[i].x2-myArr[i].x1))  / 15.36);
                            estimatess2 = estimatess2 + (Math.abs((myArr[i].y2-myArr[i].y1))  / 15.36);
                           
                            // myElement ++ ;

                        }

                        if(marla < ((estimatess1*estimatess2) / 270))
                        {
                            console.log("Total Area Created Feet  " + (widthh*heightt));
                            console.log("Total Area Created Marla " + marla);
                        }
                        else{
                        console.log("Total Area Created Feet  " + (estimatess1*estimatess2));

                        
                        console.log("Total Area Created Marla " + ((estimatess1*estimatess2) / 270)); 
                        }
                        document.getElementById("myArea").value = totalCost ;
                        document.getElementById("eArea").value = cost ;

                        if(marla < ((estimatess1*estimatess2) / 270))
                        {
                            document.getElementById("cArea").value =  (widthh*heightt) * 150 ;
                            setCArea(widthh*heightt);
                        }
                        else{
                            document.getElementById("cArea").value =  (estimatess1*estimatess2) * 150 ;
                            setCArea(estimatess1*estimatess2)
                        }
                        

                        // console.log(value)

                        

                    }

                    const handleCalculate2 = () => {

                        alert("We are calculating labour cost at the price of 150 RS per feet")
                        
                        saveLayer()

                        const totalArea = widthh * heightt;
                        const enteredArea = document.getElementById("area").value ;
                        let myElement = 0;

                        
                        const totalCost = totalArea * 150;
                        const cost = enteredArea * 150;
                        let myJs = JSON.stringify(elements);
                        setMyArr(JSON.parse(myJs))
                        let estimatess1 = 0;
                        let estimatess2 = 0;

                        let estimatess1total = 0;
                        let estimatess2total = 0;

                        console.log(myVar.length)

                        for(var k = 0; k < myVar.length; k++) {

                            var Data = myVar[k];

                            console.log(Data);

                            for(var m = 0; m < Data.length; m++) {

                                // console.log( "Type : " + Data[m].type);
                                // console.log( "x1 : " + Data[m].x1);
                                // console.log( "x2 : " + Data[m].x2);
                                // console.log( "y2 : " + Data[m].y2);
                                // console.log( "y1 : " + Data[m].y1);
                                // console.log( (Data[m].x2-Data[m].x1)  / 15.36);
                                // console.log( (Data[m].y2-Data[m].y1)  / 15.36);

                                estimatess1total = estimatess1total + (Math.abs((Data[m].x2-Data[m].x1))  / 15.36);
                                estimatess2total = estimatess2total + (Math.abs((Data[m].y2-Data[m].y1))  / 15.36);

                            }

                        }




                        for(var i = 0; i < myArr.length ; i++)
                        {
                            // console.log( myArr[i].type);
                            // console.log( myArr[i].x1);
                            // console.log( myArr[i].x2);
                            // console.log( myArr[i].y2);
                            // console.log( myArr[i].y1);
                            // console.log( (myArr[i].x2-myArr[i].x1)  / 15.36);
                            // console.log( (myArr[i].y2-myArr[i].y1)  / 15.36);
                            
                            estimatess1 = estimatess1 + (Math.abs((myArr[i].x2-myArr[i].x1))  / 15.36);
                            estimatess2 = estimatess2 + (Math.abs((myArr[i].y2-myArr[i].y1))  / 15.36);
                           
                            // myElement ++ ;

                        }

                        if(marla < ((estimatess1*estimatess2) / 270))
                        {
                            console.log("Total Area Created Feet  " + (widthh*heightt));
                            console.log("Total Area Created Marla " + marla);
                        }
                        else{
                        console.log("Total Area Created Feet  " + (estimatess1*estimatess2));

                        
                        console.log("Total Area Created Marla " + ((estimatess1*estimatess2) / 270)); 
                        }
                        document.getElementById("myArea").value = totalCost ;
                        document.getElementById("eArea").value = cost ;

                        var totalEstCost = (estimatess1total*estimatess2total)

                        document.getElementById("c2Area").value =   totalEstCost * 150 ;
                        setC2Area(estimatess1total*estimatess2total)
                        
                        if(marla < ((estimatess1*estimatess2) / 270))
                        {
                            var EstCost =  (widthh*heightt) 
                            document.getElementById("cArea").value = EstCost * 150 ;
                            setCArea(widthh*heightt);
                        }
                        else{
                            var EstCost = (estimatess1*estimatess2)
                            document.getElementById("cArea").value =   EstCost * 150 ;
                            setCArea(estimatess1*estimatess2)
                        }
                        
                        

                        // console.log(value)

                        

                    }


                    const [anchorEl, setAnchorEl] = React.useState(null);
                    const handleClick = (event) => {

                        setAnchorEl(event.currentTarget);

                    };

                    const handleClose = () => {
                        setAnchorEl(null);
                    };
                    
                    const [view, setView] = React.useState('list');
                    const handleChange = (event, nextView) => {
                        setView(nextView);
                    };




                    let getJson = () => {
                        let myJs = JSON.stringify(elements);
                        setMyArr(JSON.parse(myJs))
                        console.log( myArr );
                    }
                    
                    let lessItem = () => {
                        if(myVar[totalLayer] === undefined)
                            {
                                saveLayer()
                            }
                        if(item > 0) {
                            item = item - 1;
                            setElements(myVar[item])
                            // myVar[item] = elements
                            // saveLayer(item)
                            
                        }
                        else {
                            toast.success("Already on First", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                    }}

                    let upItem = () => {
                        if(item < totalLayer){
                            item = item + 1;
                            setElements(myVar[item])
                            // myVar[item] = elements
                            // saveLayer(item)
                            
                        }
                        else {
                            toast.success("Already on Last", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }
                    }

                    // var canvas = document.getElementById("canvas"),
                    //     ctx = canvas.getContext("2d");
                    // var b = ball[i];
                    // b.draw(b.x, b.y, b.color ,b.radius);

                    
                    
                    
                    












                    return (
                        <div style={{overflow: overflow}}>

                            <Toolbar>
                                <Typography variant="h6" noWrap className={classes.title} style={{color : "#4E4141"}}>

                                    {['bottom'].map((anchor) => (
                                        <React.Fragment key={anchor}>
                                
                                            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                            <div className={classes.drawerHeader}>
                                                <IconButton onClick={()=>{setState("bottom",false)}}>
                                                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ExpandMore />}
                                            </IconButton>
                                            </div>

                                            <Divider />
                                                {list(anchor)}
                                            </Drawer>
                                        </React.Fragment>
                                    ))}
                                    {['right'].map((anchor) => (
                                        <React.Fragment key={anchor}>
                                
                                            <Drawer anchor={anchor} open={state2[anchor]} onClose={toggleDrawer2(anchor, false)}>
                                            <div className={classes.drawerHeader}>
                                                <IconButton onClick={()=>{setState2("right",false)}}>
                                                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ExpandMore />}
                                            </IconButton>
                                            </div>

                                            <Divider />
                                                {list2(anchor)}
                                            </Drawer>
                                        </React.Fragment>
                                    ))}

                                </Typography>
                    
                            </Toolbar>

                            <div>
      
    </div>

    {/* {['right'].map((anchor) => (
                                        <React.Fragment key={anchor}>
                                        <Button onClick={toggleDrawer2(anchor, true)}>{anchor}</Button>
                                        <Drawer anchor={anchor} open={state2[anchor]} onClose={toggleDrawer2(anchor, false)}>
                                            {list2(anchor)}
                                        </Drawer>
                                        </React.Fragment>
                                    ))} */}


            
                            <Drawer
                                className={classes.drawer}
                                variant="persistent"
                                anchor="right"
                                open={open}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                >
                                <div className={classes.drawerHeader}>
                                    <IconButton onClick={handleDrawerClose}>
                                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                    </IconButton>
                                </div>

                               <Divider />
                                <List>
                                    {[<div>
                                        <InputLabel htmlFor="input-with-icon-adornment">Enter Width (feet)</InputLabel>
                                            <Input
                                                id="width"
                                                type="number"
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <SwapHorizontalCircleIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                                
                                        <InputLabel htmlFor="input-with-icon-adornment">Enter Length (feet)</InputLabel>

                                            <Input
                                                id="height"
                                                type="number"
                                                startAdornment={
                                                <InputAdornment position="start">
                                                    <SwapVerticalCircleIcon />
                                                </InputAdornment>
                                                }
                                            />
                                            <Button value="Submit" onClick={handleSubmit}>
                                                Submit
                                            </Button>

                                    </div>, <div>

                                        <InputLabel htmlFor="input-with-icon-adornment">Your current Marla is : </InputLabel>
                                            <Input
                                                id="marla"
                                                type="number"
                                                step="any"
                                                readOnly
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                    </InputAdornment>
                                                }
                                            />

                                    </div>,

                                    <div>

                                        <InputLabel htmlFor="input-with-icon-adornment">Enter Text </InputLabel>
                                            <Input

                                                id="write"
                                                type="text"
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                    </InputAdornment>
                                                }
                                            />

                                            <Button onClick={handleWrite} >Write</Button>

                                    </div>, <div>

                                        <InputLabel htmlFor="input-with-icon-adornment">Enter Area (Sq. feet)</InputLabel>
                                            <Input
                                                id="area"
                                                type="number"
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <SwapHorizontalCircleIcon /> <h2>*</h2>
                                                        <SwapVerticalCircleIcon />
                                                    </InputAdornment>
                                                }
                                            />

                                        

                                    </div>,

                                    <Button value="calculate" onClick={scrapMe}>
                                            Select Material
                                        </Button>,

                                        

                                    <Button id = "est" 
                                        value="calculate" 
                                        onClick={handleCalculate2}>
                                        Estimate
                                    </Button>
,
<div>

<InputLabel htmlFor="input-with-icon-adornment">Total Bricks Count for Current Layer is : </InputLabel>
    <Input
        id="bricksCount"
        step="any"
        readOnly
        startAdornment={
            <InputAdornment position="start">
            </InputAdornment>
        }
    />

</div>,
<div>

<InputLabel htmlFor="input-with-icon-adornment">Total Bricks Count is : </InputLabel>
    <Input
        id="bricksCountTotal"
        step="any"
        readOnly
        startAdornment={
            <InputAdornment position="start">
            </InputAdornment>
        }
    />

</div>,

<div>

<InputLabel htmlFor="input-with-icon-adornment">Total Cement for this layer (Bags) Count is : </InputLabel>
    <Input
        id="cementCount"
        type="number"
        step="any"
        readOnly
        startAdornment={
            <InputAdornment position="start">
            </InputAdornment>
        }
    />

</div>,<div>

<InputLabel htmlFor="input-with-icon-adornment">Total Cement (Bags) Count is : </InputLabel>
    <Input
        id="cementCountTotal"
        type="number"
        step="any"
        readOnly
        startAdornment={
            <InputAdornment position="start">
            </InputAdornment>
        }
    />

</div>,

<div>

<InputLabel htmlFor="input-with-icon-adornment">Total Sand Count for this Layer (cubic ft) is : </InputLabel>
    <Input
        id="sandCount"
        type="number"
        step="any"
        readOnly
        startAdornment={
            <InputAdornment position="start">
            </InputAdornment>
        }
    />

</div>,
<div>

<InputLabel htmlFor="input-with-icon-adornment">Total Sand Count (cubic ft) is : </InputLabel>
    <Input
        id="sandCountTotal"
        type="number"
        step="any"
        readOnly
        startAdornment={
            <InputAdornment position="start">
            </InputAdornment>
        }
    />

</div>,
<div>

<InputLabel htmlFor="input-with-icon-adornment">Total Cement Count for this Layer ( Kg ) is : </InputLabel>
    <Input
        id="cementKg"
        type="number"
        step="any"
        readOnly
        startAdornment={
            <InputAdornment position="start">
            </InputAdornment>
        }
    />

</div>,<div>

<InputLabel htmlFor="input-with-icon-adornment">Total Cement Count ( Kg ) is : </InputLabel>
    <Input
        id="cementKgTotal"
        type="number"
        step="any"
        readOnly
        startAdornment={
            <InputAdornment position="start">
            </InputAdornment>
        }
    />

</div>,
                                        

                                    ].map((text, index) => (
                                        <ListItem button key={text}>
                                            <ListItemIcon>{index % 2 === 0 ? < BuildIcon /> : <LandscapeIcon />}</ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    ))}

                                </List>

                                <List>

                                    {[<div>

                                        <InputLabel htmlFor="input-with-icon-adornment">Total Labour Cost of one floor area </InputLabel>

                                            <Input
                                                id="myArea"
                                                type="number"
                                                step="any"
                                                readOnly
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                    </InputAdornment>
                                                }
                        
                                            />
                                    </div>, <div>

                                        <InputLabel htmlFor="input-with-icon-adornment">Total Cost of Entered Area </InputLabel>

                                            <Input
                                                id="eArea"
                                                type="number"
                                                step="any"
                                                readOnly
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                    </InputAdornment>
                                                }
                                            />
                                     </div>, 
                                    <div>
                                        <InputLabel 
                                        hidden
                                        htmlFor="input-with-icon-adornment">Total Labour Cost of Current Layer With Furnishing </InputLabel>
                                            <Input
                                                hidden
                                                id="cArea"
                                                // value = {cArea}
                                                step="any"
                                                readOnly
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                    </InputAdornment>
                                                }
                                            />

                                    </div>,
                                    <div>
                                    <InputLabel htmlFor="input-with-icon-adornment">Total Labour Cost </InputLabel>
                                        <Input
                                            id="c2Area"
                                            // value = {cArea}
                                            step="any"
                                            readOnly
                                            startAdornment={
                                                <InputAdornment position="start">
                                                </InputAdornment>
                                            }
                                        />

                                </div>,
                                    <div>
                                    <InputLabel htmlFor="input-with-icon-adornment"> Total Material Cost (Without Steel)  </InputLabel>
                                        <Input
                                            id="cAreaMat"
                                            // value = {cArea}
                                            step="any"
                                            readOnly
                                            startAdornment={
                                                <InputAdornment position="start">
                                                </InputAdornment>
                                            }
                                        />

                                </div>,
                                    <div>
                                    <InputLabel htmlFor="input-with-icon-adornment">Total Cost (Without Steel)</InputLabel>
                                        <Input
                                            id="c2AreaMat"
                                            // value = {cArea}
                                            step="any"
                                            readOnly
                                            startAdornment={
                                                <InputAdornment position="start">
                                                </InputAdornment>
                                            }
                                        />

                                </div>].map((text, index) => (

                                        <ListItem button key={text}>
                                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Drawer>


{isMobile === 1 ? (<div className = "row">
                                    <div className = "col-xs-12">

                                    
                                
                                    <div className={classes.root}>
                                        <ButtonGroup
                                        
                                            orientation="vertical"
                                            value={view}
                                            exclusive
                                            onChange={handleChange}
                                            className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                            >

                                            <IconButton
                                                color="#ffffff"
                                                aria-label="open drawer"
                                                edge="end"
                                                onClick={handleDrawerOpen}
                                                className={clsx(open && classes.hide)}
                                                className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                            size = "sm"
                                                >
                                            
                                               <MenuIcon />
                                            </IconButton>

                                            <input type="color" id="c" onChange={(e) => {
                                                                         setBGColor(e.target.value);
                                                                        }} 
                                                    style = {{
                                                    position: "absolute",
                                                    left: "-10000px",
                                                    top: " auto",
                                                    width: "1px",
                                                    height: "1px",
                                                    overflow: "hidden"
                                                  
                                            }}/>
                                           

                                            <Button
                                            size = "sm"
                                            id = "colors"
                                            className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                            onClick={ ()=> { 

                                                document.getElementById("c").focus();
                                                
                                                document.getElementById("c").click();
                                                
                                            }}
                                            title = "Set Background Color">

                                                    <FontAwesomeIcon icon={faPalette} />
                                                   
                                                
                                                
                                            </Button>

                                            {UserServices.isLoggedin ?

                                                (<>

                                            <Button 
                                            size = "sm"
                                            className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                            onClick={getData} title = "Get Data">

                                                    <FontAwesomeIcon icon={faGetPocket} />
                                                   
                                                
                                                
                                            </Button>

                                                <Button
                                                size = "sm" title="save sketch on server"  onClick={(e) => {

                                                    saveLayer();

                                                     name = prompt("Please Enter name of your Sketch")
                                                    if(name){
                                                    UserServices.save(name , myVar ,widthh , heightt, totalLayer , UserServices.getLoggedinfo().id)
                                                    .then((data) => {
                                                        console.log(data);
                                                        toast.success(data, {
                                                            position: "bottom-right",
                                                            autoClose: 5000,
                                                            hideProgressBar: false,
                                                            closeOnClick: true,
                                                            pauseOnHover: true,
                                                            draggable: true,
                                                            progress: undefined,
                                                        });
                                                    })
                                                    .catch((err) => {
                                                        toast.error(err.response.data, {
                                                            position: "bottom-right",
                                                            autoClose: 5000,
                                                            hideProgressBar: false,
                                                            closeOnClick: true,
                                                            pauseOnHover: true,
                                                            draggable: true,
                                                            progress: undefined,
                                                        });
                                                    });
                                                }}} className = "btn"  
                                                style={{backgroundColor:"none"}} >
                                                
                                                <FontAwesomeIcon icon={faSave} />
                                                
                                                </Button>
                                                <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
            onClick={HandleSave} title= "Download File">
            

            <FontAwesomeIcon icon={faFileDownload} />


            </Button>
                                                </>) : 
                                                (<>
                                                    <Button 
                                                        size = "sm"
                                                        className = "btn"  
                                                        style={{backgroundColor:"none"}} 
                                                        onClick={()=> {
                                                            toast.error("We are sorry... This service is available for only Subscribed Users!", {
                                                                position: "bottom-right",
                                                                autoClose: 5000,
                                                                hideProgressBar: false,
                                                                closeOnClick: true,
                                                                pauseOnHover: true,
                                                                draggable: true,
                                                                progress: undefined,
                                                                    });
                                                        }} title = "Get Data">
                                
                                                        <FontAwesomeIcon icon={faGetPocket} />
                                                   
                                                    </Button>
                                
                                                    <Button
                                                        size = "sm" title="save sketch on server"  onClick={()=> {
                                                            toast.error("We are sorry... This service is available for only Subscribed Users!", {
                                                                position: "bottom-right",
                                                                autoClose: 5000,
                                                                hideProgressBar: false,
                                                                closeOnClick: true,
                                                                pauseOnHover: true,
                                                                draggable: true,
                                                                progress: undefined,
                                                                    });
                                                        }} className = "btn"  
                                                            style={{backgroundColor:"none"}} >
                                                
                                                                <FontAwesomeIcon icon={faSave} />
                                                
                                                        </Button>
                                                        <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
            onClick={()=> {
                toast.error("We are sorry... This service is available for only Subscribed Users!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                        });
            }} title= "Download File">
            

            <FontAwesomeIcon icon={faFileDownload} />


            </Button>
                                                        </>)
                                            }  


                                            

                                            <Button
                                            size = "sm" className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                onClick={addLayer} title = "Add Layer">


                                                <FontAwesomeIcon icon={faPlus} />

                                            </Button>
                                            <Button
                                            size = "sm" className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "selection" 
                                                onClick={() => setTool("selection")}   
                                                aria-label="left aligned"
                                                title = "Selection">
                                                

                                                <FontAwesomeIcon icon={faVoteYea} />

                                            </Button>
    
                                            <Button
                                            size = "sm" className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "selection" 
                                                onClick={() => setTool("sizes")}   
                                                aria-label="left aligned"
                                                title = "Get Size">
                                            

                                                <FontAwesomeIcon icon={faJoget} />
                                                
                                            </Button>
                                            
                                            <Button
                                            size = "sm" className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "resize" 
                                                onClick={() => setTool("resize")}
                                                title = "Re - Factor">

                                                <FontAwesomeIcon icon={faIndustry} />

                                            </Button>
                                            <Button
                                            size = "sm" className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "line" 
                                                onClick={() => {
                                                    var myWall = prompt("Please Enter Width of Wall")
                                                    setWall(myWall)
                                                    
                                                    setTool("line")}}
                                                title = "Wall">
                                                
                                                <FontAwesomeIcon icon={faGripLinesVertical} />


                                            </Button>
                                            <Button
                                            size = "sm" className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "rectangle" 
                                                onClick={() => {setTool("rectangle")
                                                                var myWall = prompt("Please Enter Width of Wall")
                                                                setWall(myWall)
                                                                }}
                                                title = "Room ">
                                               

                                                <FontAwesomeIcon icon={faSquare} />


                                            </Button>
                                            <Button
                                            size = "sm" className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "ellipse" 
                                                onClick={() => {
                                                setTool("ellipse")
                                                var myWall = prompt("Please Enter Width of Wall")
                                                setWall(myWall)}}
                                                title = "Ellipse Shape Room">
                                                

                                                <FontAwesomeIcon icon={faCircleNotch} />

                                            </Button>
                                    

                                            <Button
                                            size = "sm" className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                aria-controls="simple-menu" 
                                                aria-haspopup="true" 
                                                onClick={handleClick}
                                                title = "Door">
                                                

                                                <FontAwesomeIcon icon={faDoorOpen} />

                                            </Button>
 
                                                <Menu
                                                    id="simple-menu"
                                                    anchorEl={anchorEl}
                                                    keepMounted
                                                    open={Boolean(anchorEl)}
                                                    onClose={handleClose}
                                                    >
             
                                                    <MenuItem 
                                                        id = "arcL" 
                                                        onClick={() => {setTool("arcL")
                                                                        setAnchorEl(null);}  }>
                                                        Door Left
                                                    </MenuItem>
                                                    <MenuItem 
                                                        id = "arcR" 
                                                        onClick={() => {setTool("arcR") 
                                                                        setAnchorEl(null);} }>
                                                        Door Right
                                                    </MenuItem>
                                                    <MenuItem 
                                                        id = "arcR" 
                                                        onClick={() => {setTool("arcLB") 
                                                                        setAnchorEl(null);} }>
                                                        Door Left Bottom
                                                    </MenuItem>
                                                    <MenuItem 
                                                        id = "arcR" 
                                                        onClick={() => {setTool("arcRB") 
                                                                        setAnchorEl(null);} }>
                                                        Door Right Bottom
                                                    </MenuItem>

                                                </Menu>


                                            <Button
                                            size = "sm" className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "circle" 
                                                onClick={() => {setTool("circle")
                                                var myWall = prompt("Please Enter Width of Wall")
                                                setWall(myWall)}}
                                                title = "Circular Room">
                                              
                                                <FontAwesomeIcon icon={faCircle} />
                                            </Button>
                                            <Button
                                            size = "sm" className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "eraser" 
                                                onClick={() => setTool("eraser")}
                                                title = "Eraser">
                                    

                                                <FontAwesomeIcon icon={faEraser} />


                                            </Button>
                                            <Button
                                            size = "sm"  className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                onClick={lessItem} 
                                                title = "Go lower Floor">
                                                <ExpandLessIcon/> 
                                            </Button>

                                            <Typography style={{color: "black"}}>{item} / {totalLayer}</Typography>

                                            <Button
                                            size = "sm" className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                onClick={upItem} 
                                                title = "Go Upper Floor">
                                                <ExpandMoreIcon/>
                                            </Button>
                                            <Button 
                                                onClick={saveLayer} 
                                                className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                title = "Save Layer">
                                                
                                                <FontAwesomeIcon icon={faLayerGroup} />
                                            </Button>
                                            {/* <Button
                                            size = "sm" className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                            onClick={HandleSave} title= "Download File">
                                            

                                            <FontAwesomeIcon icon={faFileDownload} />


                                            </Button> */}
                                           
                    
                                            <Button
                                            size = "sm" className = "btn"  
                                            style={{backgroundColor:"none"}}  onClick={()=>{
                                                if(widthh === null)
                                                {
                                                    alert("Please Enter Width and Length First")
                                                }
                                                else{
                                                const canv = document.getElementById("canvas");
                                                const ctx = canv.getContext('2d')
                                                ctx.clearRect(0, 0, canvas.width, canvas.height);
                                                setElements([]);
                                                setMyVar([]);
                                                item = 0;
                                                totalLayer = 0;
                                                }}} 
                                                title = "Clear All">
                                                
                                                <FontAwesomeIcon icon={faTrashAlt}/>
                                            </Button>
                    
                                            
                                        </ButtonGroup>

                                    </div>
                                    </div>
                                    </div>):
                                    
    isMobile === 2 ? ( 
        <div className="container" ><center>
            <div className = "row">
            <div className = "col-xs-12">

    

                <div className={classes.root}>
                    <ButtonGroup
        
                            orientation="vertical"
                            value={view}
                            exclusive
                            onChange={handleChange}
                            className = "btn"  
                        >

                    <IconButton
                        color="#ffffff"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                        className = "btn"  
                        style={{backgroundColor:"none"}} 
                        size = "sm"
                        >
            
                                <MenuIcon />
                    </IconButton>

                    <input type="color" id="c" onChange={(e) => {
                                                                setBGColor(e.target.value);
                                                                    }} 
                            style = {{
                                position: "absolute",
                                left: "-10000px",
                                top: " auto",
                                width: "1px",
                                height: "1px",
                                overflow: "hidden"
                  
                            }}/>
           

                    <Button
                        size = "sm"
                        id = "colors"
                        className = "btn"  
                        style={{backgroundColor:"none"}} 
                            onClick={ ()=> { 

                                document.getElementById("c").focus();
                
                                document.getElementById("c").click();
                
                            }}
                        title = "Set Background Color">

                        <FontAwesomeIcon icon={faPalette} />
                   
                </Button>

                {UserServices.isLoggedin ?

                    (<>

                    <Button 
                        size = "sm"
                        className = "btn"  
                        style={{backgroundColor:"none"}} 
                        onClick={getData} title = "Get Data">

                        <FontAwesomeIcon icon={faGetPocket} />
                   
                    </Button>

                    <Button
                        size = "sm" title="save sketch on server"  onClick={(e) => {
                        name = prompt("Please Enter name of your Sketch")
                            if(name){
                                UserServices.save(name , myVar ,widthh , heightt, totalLayer , UserServices.getLoggedinfo().id)
                                .then((data) => {
                                console.log(data);
                                toast.success(data, {
                                position: "bottom-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                    });
                                })
                                .catch((err) => {
                                    toast.error(err.response.data, {
                                    position: "bottom-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    });
                                });
                            }}} className = "btn"  
                            style={{backgroundColor:"none"}} >
                
                                <FontAwesomeIcon icon={faSave} />
                
                        </Button>
                        <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
            onClick={HandleSave} title= "Download File">
            

            <FontAwesomeIcon icon={faFileDownload} />


            </Button>
                    </>) : 
                        (<>
                            <Button 
                                size = "sm"
                                className = "btn"  
                                style={{backgroundColor:"none"}} 
                                onClick={()=> {
                                    toast.error("We are sorry... This service is available for only Subscribed Users!", {
                                        position: "bottom-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                            });
                                }} title = "Get Data">
        
                                <FontAwesomeIcon icon={faGetPocket} />
                           
                            </Button>
        
                            <Button
                                size = "sm" title="save sketch on server"  onClick={()=> {
                                    toast.error("We are sorry... This service is available for only Subscribed Users!", {
                                        position: "bottom-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                            });
                                }} className = "btn"  
                                    style={{backgroundColor:"none"}} >
                        
                                        <FontAwesomeIcon icon={faSave} />
                        
                                </Button>
                                <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
            onClick={()=> {
                toast.error("We are sorry... This service is available for only Subscribed Users!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                        });
            }} title= "Download File">
            

            <FontAwesomeIcon icon={faFileDownload} />


            </Button>
                                </>
                                )
                    }  

            

            

            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                onClick={addLayer} title = "Add Layer">


                <FontAwesomeIcon icon={faPlus} />

            </Button>
            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "selection" 
                onClick={() => setTool("selection")}   
                aria-label="left aligned"
                title = "Selection">
                

                <FontAwesomeIcon icon={faVoteYea} />

            </Button>

            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "selection" 
                onClick={() => setTool("sizes")}   
                aria-label="left aligned"
                title = "Get Size">
            

                <FontAwesomeIcon icon={faJoget} />
                
            </Button>
            
            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "resize" 
                onClick={() => setTool("resize")}
                title = "Re - Factor">

                <FontAwesomeIcon icon={faIndustry} />

            </Button>
            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "line" 
                onClick={() => {
                    var myWall = prompt("Please Enter Width of Wall")
                    setWall(myWall)
                    
                    setTool("line")}}
                title = "Wall">
                
                <FontAwesomeIcon icon={faGripLinesVertical} />


            </Button>
            </ButtonGroup>
            </div></div>                <div className={classes.root}>

            <div className = "row">
            <div className = "col-xs-12">
                
            <ButtonGroup
            
            orientation="vertical"
            value={view}
            exclusive
            onChange={handleChange}
            className = "btn"  
            style={{paddingRight : "0.99em"}} >
            
            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "rectangle" 
                onClick={() => {setTool("rectangle")
                                var myWall = prompt("Please Enter Width of Wall")
                                setWall(myWall)
                                }}
                title = "Room ">
               

                <FontAwesomeIcon icon={faSquare} />


            </Button>
            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "ellipse" 
                onClick={() => {
                setTool("ellipse")
                var myWall = prompt("Please Enter Width of Wall")
                setWall(myWall)}}
                title = "Ellipse Shape Room">
                

                <FontAwesomeIcon icon={faCircleNotch} />

            </Button>
    

            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                aria-controls="simple-menu" 
                aria-haspopup="true" 
                onClick={handleClick}
                title = "Door">
                

                <FontAwesomeIcon icon={faDoorOpen} />

            </Button>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >

                    <MenuItem 
                        id = "arcL" 
                        onClick={() => {setTool("arcL")
                                        setAnchorEl(null);}  }>
                        Door Left
                    </MenuItem>
                    <MenuItem 
                        id = "arcR" 
                        onClick={() => {setTool("arcR") 
                                        setAnchorEl(null);} }>
                        Door Right
                    </MenuItem>
                    <MenuItem 
                        id = "arcR" 
                        onClick={() => {setTool("arcLB") 
                                        setAnchorEl(null);} }>
                        Door Left Bottom
                    </MenuItem>
                    <MenuItem 
                        id = "arcR" 
                        onClick={() => {setTool("arcRB") 
                                        setAnchorEl(null);} }>
                        Door Right Bottom
                    </MenuItem>

                </Menu>


            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "circle" 
                onClick={() => {setTool("circle")
                var myWall = prompt("Please Enter Width of Wall")
                setWall(myWall)}}
                title = "Circular Room">
              
                <FontAwesomeIcon icon={faCircle} />
            </Button>
            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "eraser" 
                onClick={() => setTool("eraser")}
                title = "Eraser">
    

                <FontAwesomeIcon icon={faEraser} />


            </Button>
            <Button
            size = "sm"  className = "btn"  
            style={{backgroundColor:"none"}} 
                onClick={lessItem} 
                title = "Go lower Floor">
                <ExpandLessIcon/> 
            </Button>

            <Typography style={{color: "black"}}>{item} / {totalLayer}</Typography>

            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                onClick={upItem} 
                title = "Go Upper Floor">
                <ExpandMoreIcon/>
            </Button>
            <Button 
                                                onClick={saveLayer} 
                                                className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                title = "Save Layer">
                                                
                                                <FontAwesomeIcon icon={faLayerGroup} />
                                            </Button>
            {/* <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
            onClick={HandleSave} title= "Download File">
            

            <FontAwesomeIcon icon={faFileDownload} />


            </Button> */}
           

            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}}  onClick={()=>{
                if(widthh === null)
                {
                    alert("Please Enter Width and Length First")
                }
                else{
                const canv = document.getElementById("canvas");
                const ctx = canv.getContext('2d')
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                setElements([]);
                setMyVar([]);
                item = 0;
                totalLayer = 0;
                }}} 
                title = "Clear All">
                
                <FontAwesomeIcon icon={faTrashAlt}/>
            </Button>

            
        </ButtonGroup>
</div>
    </div></div>
    </div></center>
    </div> ):
    
    
    isMobile === 3 ? ( 
     
        <div className="container" ><center>
            <div className = "row">
            <div className = "col-xs-12">

    

                <div className={classes.root}>
                    <ButtonGroup
        
                            orientation="vertical"
                            value={view}
                            exclusive
                            onChange={handleChange}
                            className = "btn"  
                            style={{paddingRight : "2.5em"}} 
                        >

                    <IconButton
                        color="#ffffff"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                        className = "btn"  
                        style={{backgroundColor:"none"}} 
                        size = "sm"
                        >
            
                                <MenuIcon />
                    </IconButton>

                    <input type="color" id="c" onChange={(e) => {
                                                                setBGColor(e.target.value);
                                                                    }} 
                            style = {{
                                position: "absolute",
                                left: "-10000px",
                                top: " auto",
                                width: "1px",
                                height: "1px",
                                overflow: "hidden"
                  
                            }}/>
           

                    <Button
                        size = "sm"
                        id = "colors"
                        className = "btn"  
                        style={{backgroundColor:"none"}} 
                            onClick={ ()=> { 

                                document.getElementById("c").focus();
                
                                document.getElementById("c").click();
                
                            }}
                        title = "Set Background Color">

                        <FontAwesomeIcon icon={faPalette} />
                   
                </Button>

                {UserServices.isLoggedin ?

                    (<>

                    <Button 
                        size = "sm"
                        className = "btn"  
                        style={{backgroundColor:"none"}} 
                        onClick={getData} title = "Get Data">

                        <FontAwesomeIcon icon={faGetPocket} />
                   
                    </Button>

                    <Button
                        size = "sm" title="save sketch on server"  onClick={(e) => {
                        name = prompt("Please Enter name of your Sketch")
                            if(name){
                                UserServices.save(name , myVar ,widthh , heightt, totalLayer , UserServices.getLoggedinfo().id)
                                .then((data) => {
                                console.log(data);
                                toast.success(data, {
                                position: "bottom-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                    });
                                })
                                .catch((err) => {
                                    toast.error(err.response.data, {
                                    position: "bottom-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    });
                                });
                            }}} className = "btn"  
                            style={{backgroundColor:"none"}} >
                
                                <FontAwesomeIcon icon={faSave} />
                
                        </Button>
                        <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
            onClick={HandleSave} title= "Download File">
            

            <FontAwesomeIcon icon={faFileDownload} />


            </Button>
                    </>) : 
                        ( <>
                        <Button 
                            size = "sm"
                            className = "btn"  
                            style={{backgroundColor:"none"}} 
                            onClick={()=> {
                                toast.error("We are sorry... This service is available for only Subscribed Users!", {
                                    position: "bottom-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                        });
                            }} title = "Get Data">
    
                            <FontAwesomeIcon icon={faGetPocket} />
                       
                        </Button>
    
                        <Button
                            size = "sm" title="save sketch on server"  onClick={()=> {
                                toast.error("We are sorry... This service is available for only Subscribed Users!", {
                                    position: "bottom-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                        });
                            }} className = "btn"  
                                style={{backgroundColor:"none"}} >
                    
                                    <FontAwesomeIcon icon={faSave} />
                    
                            </Button>
                            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
            onClick={()=> {
                toast.error("We are sorry... This service is available for only Subscribed Users!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                        });
            }} className = "btn"  
                style={{backgroundColor:"none"}} title= "Download File">
            

            <FontAwesomeIcon icon={faFileDownload} />


            </Button>
                            </>)
                    }  

</ButtonGroup>
            </div></div></div>
            <div className = "row">
            <div className = "col-xs-12">

    

                <div className={classes.root}>
                    <ButtonGroup
        
                            orientation="vertical"
                            value={view}
                            exclusive
                            onChange={handleChange}
                            className = "btn"  
                            style={{backgroundColor:"none"}} 
                        >
            

            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                onClick={addLayer} title = "Add Layer">


                <FontAwesomeIcon icon={faPlus} />

            </Button>
            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "selection" 
                onClick={() => setTool("selection")}   
                aria-label="left aligned"
                title = "Selection">
                

                <FontAwesomeIcon icon={faVoteYea} />

            </Button>

            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "selection" 
                onClick={() => setTool("sizes")}   
                aria-label="left aligned"
                title = "Get Size">
            

                <FontAwesomeIcon icon={faJoget} />
                
            </Button>
            
            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "resize" 
                onClick={() => setTool("resize")}
                title = "Re - Factor">

                <FontAwesomeIcon icon={faIndustry} />

            </Button>
            
            
            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "line" 
                onClick={() => {
                    var myWall = prompt("Please Enter Width of Wall")
                    setWall(myWall)
                    
                    setTool("line")}}
                title = "Wall">
                
                <FontAwesomeIcon icon={faGripLinesVertical} />


            </Button>
</ButtonGroup>
</div></div></div>
            <div className = "row">
            <div className = "col-xs-12">

    

                <div className={classes.root}>
                    <ButtonGroup
        
                            orientation="vertical"
                            value={view}
                            exclusive
                            onChange={handleChange}
                            className = "btn"  
                            style={{backgroundColor:"none"}} 
                        >
            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "rectangle" 
                onClick={() => {setTool("rectangle")
                                var myWall = prompt("Please Enter Width of Wall")
                                setWall(myWall)
                                }}
                title = "Room ">
               

                <FontAwesomeIcon icon={faSquare} />


            </Button>
            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "ellipse" 
                onClick={() => {
                setTool("ellipse")
                var myWall = prompt("Please Enter Width of Wall")
                setWall(myWall)}}
                title = "Ellipse Shape Room">
                

                <FontAwesomeIcon icon={faCircleNotch} />

            </Button>
    

            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                aria-controls="simple-menu" 
                aria-haspopup="true" 
                onClick={handleClick}
                title = "Door">
                

                <FontAwesomeIcon icon={faDoorOpen} />

            </Button>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >

                    <MenuItem 
                        id = "arcL" 
                        onClick={() => {setTool("arcL")
                                        setAnchorEl(null);}  }>
                        Door Left
                    </MenuItem>
                    <MenuItem 
                        id = "arcR" 
                        onClick={() => {setTool("arcR") 
                                        setAnchorEl(null);} }>
                        Door Right
                    </MenuItem>
                    <MenuItem 
                        id = "arcR" 
                        onClick={() => {setTool("arcLB") 
                                        setAnchorEl(null);} }>
                        Door Left Bottom
                    </MenuItem>
                    <MenuItem 
                        id = "arcR" 
                        onClick={() => {setTool("arcRB") 
                                        setAnchorEl(null);} }>
                        Door Right Bottom
                    </MenuItem>

                </Menu>


            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "circle" 
                onClick={() => {setTool("circle")
                var myWall = prompt("Please Enter Width of Wall")
                setWall(myWall)}}
                title = "Circular Room">
              
                <FontAwesomeIcon icon={faCircle} />
            </Button>
            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                id = "eraser" 
                onClick={() => setTool("eraser")}
                title = "Eraser">
    

                <FontAwesomeIcon icon={faEraser} />


            </Button>
            </ButtonGroup>
            </div></div></div>

            <div className = "row">
            <div className = "col-xs-12">

    

                <div className={classes.root}>
                    <ButtonGroup
        
                            orientation="vertical"
                            value={view}
                            exclusive
                            onChange={handleChange}
                            className = "btn"  
                            style={{paddingRight : "2.7em"}} 
                        >
            <Button
            size = "sm"  className = "btn"  
            style={{backgroundColor:"none"}} 
                onClick={lessItem} 
                title = "Go lower Floor">
                <ExpandLessIcon/> 
            </Button>

            <Typography style={{color: "black"}}>{item} / {totalLayer}</Typography>

            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
                onClick={upItem} 
                title = "Go Upper Floor">
                <ExpandMoreIcon/>
            </Button>
            <Button 
                                                onClick={saveLayer} 
                                                className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                title = "Save Layer">
                                                
                                                <FontAwesomeIcon icon={faLayerGroup} />
                                            </Button>
            {/* <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
            onClick={HandleSave} title= "Download File">
            

            <FontAwesomeIcon icon={faFileDownload} />


            </Button> */}
           

            <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}}  onClick={()=>{
                if(widthh === null)
                {
                    alert("Please Enter Width and Length First")
                }
                else{
                const canv = document.getElementById("canvas");
                const ctx = canv.getContext('2d')
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                setElements([]);
                setMyVar([]);
                item = 0;
                totalLayer = 0;
                }}} 
                title = "Clear All">
                
                <FontAwesomeIcon icon={faTrashAlt}/>
            </Button>

            
        </ButtonGroup>
</div>
    </div>
    </div></center>
    </div>):(

                            
                                <div className = "row" style={{paddingLeft : '5em'}}>
                                    <div className = "col-xs-12" >

                                    
                                
                                    <div className={classes.root} >
                                        <ButtonGroup
                                            orientation="vertical"
                                            value={view}
                                            exclusive
                                            onChange={handleChange}
                                            className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                            >

                                            <IconButton
                                                color="#ffffff"
                                                aria-label="open drawer"
                                                edge="end"
                                                onClick={handleDrawerOpen}
                                                className={clsx(open && classes.hide)}
                                                className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                >
                                            
                                               <MenuIcon />
                                            </IconButton>

                                            <input type="color" id="c" onChange={(e) => {
                                                                         setBGColor(e.target.value);
                                                                        }} 
                                                    style = {{
                                                    position: "absolute",
                                                    left: "-10000px",
                                                    top: " auto",
                                                    width: "1px",
                                                    height: "1px",
                                                    overflow: "hidden"
                                                  
                                            }}/>
                                           

                                            <Button
                                            
                                            id = "colors"
                                            className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                            onClick={ ()=> { 

                                                document.getElementById("c").focus();
                                                
                                                document.getElementById("c").click();
                                                
                                            }}
                                            title = "Set Background Color">

                                                    <FontAwesomeIcon icon={faPalette} />
                                                   
                                                
                                                
                                            </Button>

                                            {UserServices.isLoggedin ?

                                                (<>

                                            <Button 
                                            
                                            className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                            onClick={getData} title = "Get Data">

                                                    <FontAwesomeIcon icon={faGetPocket} />
                                                   
                                                
                                                
                                            </Button>

                                                <Button title="save sketch on server"  onClick={(e) => {
                                                     name = prompt("Please Enter name of your Sketch")
                                                    if(name){
                                                    UserServices.save(name , myVar ,widthh , heightt, totalLayer , UserServices.getLoggedinfo().id)
                                                    .then((data) => {
                                                        console.log(data);
                                                        toast.success(data, {
                                                            position: "bottom-right",
                                                            autoClose: 5000,
                                                            hideProgressBar: false,
                                                            closeOnClick: true,
                                                            pauseOnHover: true,
                                                            draggable: true,
                                                            progress: undefined,
                                                        });
                                                    })
                                                    .catch((err) => {
                                                        toast.error(err.response.data, {
                                                            position: "bottom-right",
                                                            autoClose: 5000,
                                                            hideProgressBar: false,
                                                            closeOnClick: true,
                                                            pauseOnHover: true,
                                                            draggable: true,
                                                            progress: undefined,
                                                        });
                                                    });
                                                }}} className = "btn"  
                                                style={{backgroundColor:"none"}} >
                                                
                                                <FontAwesomeIcon icon={faSave} />
                                                
                                                </Button>
                                                <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
            onClick={HandleSave} title= "Download File">
            

            <FontAwesomeIcon icon={faFileDownload} />


            </Button>
                                                </>) : 
                                                (<>
                                                    <Button 
                                                        size = "sm"
                                                        className = "btn"  
                                                        style={{backgroundColor:"none"}} 
                                                        onClick={()=> {
                                                            toast.error("We are sorry... This service is available for only Subscribed Users!", {
                                                                position: "bottom-right",
                                                                autoClose: 5000,
                                                                hideProgressBar: false,
                                                                closeOnClick: true,
                                                                pauseOnHover: true,
                                                                draggable: true,
                                                                progress: undefined,
                                                                    });
                                                        }} title = "Get Data">
                                
                                                        <FontAwesomeIcon icon={faGetPocket} />
                                                   
                                                    </Button>
                                
                                                    <Button
                                                        size = "sm" title="save sketch on server"  onClick={()=> {
                                                            toast.error("We are sorry... This service is available for only Subscribed Users!", {
                                                                position: "bottom-right",
                                                                autoClose: 5000,
                                                                hideProgressBar: false,
                                                                closeOnClick: true,
                                                                pauseOnHover: true,
                                                                draggable: true,
                                                                progress: undefined,
                                                                    });
                                                        }} className = "btn"  
                                                            style={{backgroundColor:"none"}} >
                                                
                                                                <FontAwesomeIcon icon={faSave} />
                                                
                                                        </Button>
                                                        
                                                        <Button
            size = "sm" className = "btn"  
            style={{backgroundColor:"none"}} 
            onClick={()=> {
                toast.error("We are sorry... This service is available for only Subscribed Users!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                        });
            }} title= "Download File">
            

            <FontAwesomeIcon icon={faFileDownload} />


            </Button>
                                                        </>
                                                        
                                                        )
                                            }  

                                            

                                            

                                            <Button className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                onClick={addLayer} title = "Add Layer">


                                                <FontAwesomeIcon icon={faPlus} />

                                            </Button>
                                            <Button className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "selection" 
                                                onClick={() => setTool("selection")}   
                                                aria-label="left aligned"
                                                title = "Selection">
                                                

                                                <FontAwesomeIcon icon={faVoteYea} />

                                            </Button>
    
                                            <Button className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "selection" 
                                                onClick={() => setTool("sizes")}   
                                                aria-label="left aligned"
                                                title = "Get Size">
                                            

                                                <FontAwesomeIcon icon={faJoget} />
                                                
                                            </Button>
                                            
                                            <Button className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "resize" 
                                                onClick={() => setTool("resize")}
                                                title = "Re - Factor">

                                                <FontAwesomeIcon icon={faIndustry} />

                                            </Button>
                                            <Button className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "line" 
                                                onClick={() => {
                                                    var myWall = prompt("Please Enter Width of Wall")
                                                    setWall(myWall)
                                                    
                                                    setTool("line")}}
                                                title = "Wall">
                                                
                                                <FontAwesomeIcon icon={faGripLinesVertical} />


                                            </Button>
                                            <Button className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "rectangle" 
                                                onClick={() => {setTool("rectangle")
                                                                var myWall = prompt("Please Enter Width of Wall")
                                                                setWall(myWall)
                                                                }}
                                                title = "Room ">
                                               

                                                <FontAwesomeIcon icon={faSquare} />


                                            </Button>
                                            <Button className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "ellipse" 
                                                onClick={() => {
                                                setTool("ellipse")
                                                var myWall = prompt("Please Enter Width of Wall")
                                                setWall(myWall)}}
                                                title = "Ellipse Shape Room">
                                                

                                                <FontAwesomeIcon icon={faCircleNotch} />

                                            </Button>
                                    

                                            <Button className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                aria-controls="simple-menu" 
                                                aria-haspopup="true" 
                                                onClick={handleClick}
                                                title = "Door">
                                                

                                                <FontAwesomeIcon icon={faDoorOpen} />

                                            </Button>
 
                                                <Menu
                                                    id="simple-menu"
                                                    anchorEl={anchorEl}
                                                    keepMounted
                                                    open={Boolean(anchorEl)}
                                                    onClose={handleClose}
                                                    >
             
                                                    <MenuItem 
                                                        id = "arcL" 
                                                        onClick={() => {setTool("arcL")
                                                                        setAnchorEl(null);}  }>
                                                        Door Left
                                                    </MenuItem>
                                                    <MenuItem 
                                                        id = "arcR" 
                                                        onClick={() => {setTool("arcR") 
                                                                        setAnchorEl(null);} }>
                                                        Door Right
                                                    </MenuItem>
                                                    <MenuItem 
                                                        id = "arcR" 
                                                        onClick={() => {setTool("arcLB") 
                                                                        setAnchorEl(null);} }>
                                                        Door Left Bottom
                                                    </MenuItem>
                                                    <MenuItem 
                                                        id = "arcR" 
                                                        onClick={() => {setTool("arcRB") 
                                                                        setAnchorEl(null);} }>
                                                        Door Right Bottom
                                                    </MenuItem>

                                                </Menu>


                                            <Button className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "circle" 
                                                onClick={() => {setTool("circle")
                                                var myWall = prompt("Please Enter Width of Wall")
                                                setWall(myWall)}}
                                                title = "Circular Room">
                                              
                                                <FontAwesomeIcon icon={faCircle} />
                                            </Button>
                                            <Button className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                id = "eraser" 
                                                onClick={() => setTool("eraser")}
                                                title = "Eraser">
                                    

                                                <FontAwesomeIcon icon={faEraser} />


                                            </Button>
                                            <Button  className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                onClick={lessItem} 
                                                title = "Go lower Floor">
                                                <ExpandLessIcon/> 
                                            </Button>

                                            <Typography style={{color: "black"}}>{item} / {totalLayer}</Typography>

                                            <Button className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                onClick={upItem} 
                                                title = "Go Upper Floor">
                                                <ExpandMoreIcon/>
                                            </Button>
                                            <Button 
                                                onClick={saveLayer} 
                                                className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                                title = "Save Layer">
                                                
                                                <FontAwesomeIcon icon={faLayerGroup} />
                                            </Button>
                                            {/* <Button className = "btn"  
                                            style={{backgroundColor:"none"}} 
                                            onClick={HandleSave} title= "Download File">
                                            

                                            <FontAwesomeIcon icon={faFileDownload} />


                                            </Button> */}
                                           
                    
                                            <Button className = "btn"  
                                            style={{backgroundColor:"none"}}  onClick={()=>{
                                                if(widthh === null)
                                                {
                                                    alert("Please Enter Width and Length First")
                                                }
                                                else{
                                                const canv = document.getElementById("canvas");
                                                const ctx = canv.getContext('2d')
                                                ctx.clearRect(0, 0, canvas.width, canvas.height);
                                                setElements([]);
                                                setMyVar([]);
                                                item = 0;
                                                totalLayer = 0;
                                                }}} 
                                                title = "Clear All">
                                                
                                                <FontAwesomeIcon icon={faTrashAlt}/>
                                            </Button>
                    
                                            
                                        </ButtonGroup>

                                    </div>
                                    </div>
                                    </div>
)}


    <div className="row">

    <div class="col-md-4" style ={{padding:"2em"}}>
    

        {selectedElement === null ? (

            <div>
                <InputLabel htmlFor="input-with-icon-adornment">Current selected element is : </InputLabel>
                    <Input
                        value  = "No element is selected"
                        readOnly
                        startAdornment={
                        <InputAdornment position="start">
                        </InputAdornment>
                        }
                        />
            </div>
    ) : 

    <div>
        <InputLabel htmlFor="input-with-icon-adornment">Current selected element is : </InputLabel>

        <Input

            value  =  {selectedElement.type === "rectangle" ? (
                "Room"            
                ) : 
            selectedElement.type === "line" ? (
                "Wall"
                ) : 
            selectedElement.type === "ellipse" ? (
                "Ellipse Shape Room"
                ) :
            selectedElement.type === "arcL" ? (
                "Door Left"
                ) : 
            selectedElement.type === "arcR" ? (
                "Door Right"
                ) : 
            selectedElement.type === "circle" ? (
                "Circular Room"
                ) : ("")

            }  
            
            readOnly
            startAdornment={
                <InputAdornment position="start">

                </InputAdornment>
                }
        />
    </div>

}

<InputLabel htmlFor="input-with-icon-adornment">Your current Width is : </InputLabel>
    <Input
        value  = {canvWidth / 15.36 } 
        type="number"
        step=".01"
        readOnly
        startAdornment={
            <InputAdornment position="start">

            </InputAdornment>
        }
    />


<InputLabel htmlFor="input-with-icon-adornment">Your current Length is : </InputLabel>
    <Input
        value  = {canvHeight / 15.36 } 
        type="number"
        step=".01"
        readOnly
        startAdornment={
            <InputAdornment position="start">

            </InputAdornment>
        }
    />


<div>
    <InputLabel htmlFor="input-with-icon-adornment">Element current Width is : </InputLabel>
        <Input
            value  = {  Math.abs(ElementWidth)   / 15.36 } 
            type="number"
            step=".01"
            readOnly
            startAdornment={
            <InputAdornment position="start">

            </InputAdornment>
            }
        />
</div>



<div>
    <InputLabel htmlFor="input-with-icon-adornment">Element current Length is : </InputLabel>
        <Input
            value  = {
                (   Math.abs(ElementLength)   )   /   15.36 }
                type="number"
                step=".01"
                readOnly
                startAdornment={
                <InputAdornment position="start">

                </InputAdornment>
                }
        />
</div>

<div>
    <InputLabel htmlFor="input-with-icon-adornment">Element's Wall current width is : </InputLabel>
        <Input
            value  = {
                (   Math.abs(ElementStrokeWidth)   )   }
                type="number"
                step=".01"
                readOnly
                startAdornment={
                <InputAdornment position="start">

                </InputAdornment>
                }
        />
</div>



{error ? (

<div>
   <h3>Values must be valid</h3>

</div>
) :  

("")

}

{/* <Button onClick={()=>setState2({ ...state2, ["right"]: true })}>Open</Button> */}


{loading ? (

<div className="container">
  
   <Spin style={{width:'100%' , marginTop: '20%' , marginBottom:'20%'}} />

</div>
) :  

("")

}        
</div>




                                
                            <div className = "col-md-8">

                                <div
                                    >
                                        
                                        <canvas
                                            style = {{
                                                background:bgColor , 
                                                border : "5px solid darkslategrey" , 
                                                marginTop : "3%" , marginBottom : "3%"}}
                    
                                            width = {canvWidth}
                                            height = {canvHeight}
                                            id = "canvas"
                                            onMouseDown={handleMouseDown}
                                            onMouseUp={handleMouseUp}
                                            onMouseMove={handleMouseMove}

                                            onTouchStart={handleMouseDown}
                                            onTouchEnd={handleMouseUp}
                                            onTouchMove={handleMouseMove}

                                            >
                                            Canvas
                                        </canvas>


                                        <canvas
                                        hidden
                                            style = {{
                                                background:bgColor , 
                                                border : "5px solid darkslategrey" , 
                                                marginTop : "3%" , marginBottom : "3%"}}
                    
                                            width = {canvWidth}
                                            height = {canvHeight}
                                            id = "canvas2"

                                            >
                                            Canvas
                                        </canvas>
                
                                </div>
                            </div>
                            </div>
                            </div>
                            
                    );
            }

export default App;